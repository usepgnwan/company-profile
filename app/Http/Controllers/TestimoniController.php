<?php

namespace App\Http\Controllers;

use App\Models\Testimoni;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class TestimoniController extends Controller
{
    protected $testimoni;
    public function __construct(Testimoni $testimoni){
        $this->testimoni= $testimoni;
    }
    public function index(Request $request){
        $testimoni = $this->testimoni->orderBy('pinned', 'desc')->orderBy($request->sortby, $request->sortbydesc) 
        ->when($request->q, function($testimoni) use ($request) { 
            $testimoni = $testimoni->where('title', 'LIKE', '%' . $request->q . '%')
                ->orWhere('body', 'LIKE', '%' . $request->q . '%');
        })
        ->paginate($request->per_page);
        return response()->json(['status' => 'success', 'data' => $testimoni]);
    }

    public function unset_pinned($id){
        $check = $this->testimoni->find($id);
        $data = [
            'pinned' => 0
        ];
        $check->fill($data)->save(); 
        return response()->json(['status' => true, 'msg' => 'Berhasil hapus pinned/highlight'], Response::HTTP_OK);
    }

    public function pinned($id,$type='pinned'){
        $check = $this->testimoni->find($id);
        $data = [];
        if($type == 'pinned'){ 
            $this->testimoni->where('pinned', '1')->update([
                'pinned' => '0',
            ]);
            $data = [
                'pinned' => 1,
            ];
            $check->fill($data)->save(); 
        }
        $check->fill($data)->save(); 
        return response()->json(['status' => true, 'msg' => 'Berhasil pinned/highlight'], Response::HTTP_OK);
    }

    public function show($id)
    {
        $check = $this->testimoni->where('id', '=', $id)->first();

        if ($check) {
            return response()->json(['status' => true, 'msg' => 'Data ditemukan', 'data' =>  $check], Response::HTTP_OK);
        }

        return response()->json(['status' => false, 'msg' => 'Data tidak ditemukan', 'data' => []], Response::HTTP_NOT_FOUND);
    }
    
    public function store(Request $request){
        // dd($request);
        $valid = Validator::make($request->all(), [
            'name' => 'required|max:225',
            'title' => 'required|max:225',
            'body' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }
        $imgName = null;

        $check = $this->testimoni->find($request->id_testimoni);
        if ($check) {
            $imgName = $check->image;
            if ($request->hasFile('image') && $request->image != '') {
                $path_old = public_path('uploads/image/') . $check->image;
                if (file_exists($path_old) && $check->image != null) {
                    unlink($path_old);
                }
                $image = $request->file('image');
                $imgName = $image->hashName();
                $image->move('uploads/image/', $imgName);
            }
        } else {
            if ($request->hasFile('image') && $request->image != '') {
                $image = $request->file('image');
                $allowedfileExtension = ['jpg', 'png', 'jpeg'];
                $extension = $image->getClientOriginalExtension();
                $check = in_array($extension, $allowedfileExtension);
                if ($check) {
                    $imgName = $image->hashName();
                    $image->move('uploads/image/', $imgName);
                    $imgName = asset('uploads/image/'.$imgName);
                }else{
                    return response()->json(['status' => false, 'msg' => ["image" => ["file not allowed."]]]);
                }
            }
        }
        // dump($imgName);
        // dump(auth()->user());
        $data = [
            'name' => $request->name,
            'title' => $request->title, 
            'body' => $request->body,
            'image' => $imgName,
            'pinned' =>0,
        ];
        // dump($data);
        $this->testimoni->create($data);
        return response()->json(['status' => true, 'msg' => 'berhasil tambah data']);
    }
    public function update(Request $request, $id){
        // dump($request);
        $valid = Validator::make($request->all(), [
            'name' => 'required|max:225',
            'title' => 'required|max:225',
            'body' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }

        $check = $this->testimoni->find($id); 
        $imgName = $check->image;
        if ($check) {
            if ($request->hasFile('image') && $request->image != '') {
                $image = $request->file('image');
                $allowedfileExtension = ['jpg', 'png', 'jpeg'];
                $extension = $image->getClientOriginalExtension();
                $checkEx = in_array($extension, $allowedfileExtension);
                if ($checkEx) {
                    $path_old = public_path('uploads/image/') . $check->image;
                    if (file_exists($path_old) && $check->image != null) {
                        unlink($path_old);
                    }
                    $imgName = $image->hashName();
                    $image->move('uploads/image/', $imgName); 
                    $imgName =asset('uploads/image/'.$imgName); 
                }else{
                    return response()->json(['status' => false, 'msg' => ["image" => ["file not allowed."]]]);
                }
            }
            
            $data = [
                'name' => $request->name,
                'title' => $request->title, 
                'body' => $request->body,
                'image' => $imgName
            ];
            $check->fill($data)->save(); 
            
            return response()->json(['status' => true, 'msg' => 'Update sukses ', 'data' =>  $check], Response::HTTP_OK); 
        }
    }

    public function destroy($id)
    {
        $check = $this->testimoni->find($id);

        if ($check) {
            $path_old = public_path('uploads/image/') . basename($check->image);
            if (file_exists($path_old) && !is_null($check->image)) {
                unlink($path_old);
            }
            $check->delete();
            return response()->json(['status' => true, 'msg' => 'Berhasil Hapus Data'], Response::HTTP_OK);
        }
        return response()->json(['status' => false, 'msg' => 'Gagal Hapus Data'], Response::HTTP_BAD_REQUEST);
    }
    public function all(){
        $data = $this->testimoni->all(); 
        return response()->json(['status' => true, 'msg' => 'all data', 'data' =>  $data], Response::HTTP_OK);
    }
}
