<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    protected $company;
    public function __construct(Company $company){
        $this->company= $company;
    }
    public function index(){
        $company = $this->company->where('id', '1')->first(); 
        return response()->json(['status' => 'success', 'data' => $company]);
    }
    public function update($id,Request $request){
        $check = $this->company->find('1');
        if ($check) { 
            $data = [
                $id => $request->text, 
            ];
            $check->fill($data)->save(); 
            
            return response()->json(['status' => true, 'msg' => 'Update Succes', 'data' =>  $check], Response::HTTP_OK); 
        }
    }

    public function edit(Request $request){
        $id =1;
        $check = $this->company->find($id);
        if ($check) {
            $field = $check[$request->targetid];
            if ($request->hasFile('file') && $check[$request->targetid] != '') {
                $path_old = public_path('uploads/image/') . $check->image;
                if (file_exists($path_old) && $check->image != null) {
                    unlink($path_old);
                }
                $image = $request->file('file');
                $imgName = $image->hashName();
                $image->move('uploads/image/', $imgName);
                $field =asset('uploads/image/'.$imgName); 
            }else{
                $field = $request->field;
            }

            $data = [
                $request->targetid => $field,
                 
            ];
            $check->fill($data)->save(); 
            return response()->json(['status' => true, 'msg' => 'succes change picture','data'=>$check]);
        }
    }
}
