<?php

namespace App\Http\Controllers;

use App\Models\SocialMedia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class SocialMediaController extends Controller
{
    protected $social_media;
    public function __construct(SocialMedia $social_media){
        $this->social_media= $social_media;
    }
    public function index(){
        $social_media = $this->social_media->where('id', '1')->first();

        return response()->json(['status' => 'success', 'data' => $social_media]);
    }
public function store(Request $request){
        // dd($request);
        $valid = Validator::make($request->all(), [
            'name' => 'required|max:225',
            'description' => 'required',
            'address' => 'required',
            'email' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }
        $imgName = null;

        $check = $this->social_media->find(1);
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
                'description' => $request->description, 
                'alamat' => $request->address,
                'wa' => $request->wa,
                'email' => $request->email,
                'fb' => $request->fb,
                'ig' => $request->ig,
                'linkedin' => $request->linkedin,
                'image' => $imgName, 
            ];
            $check->fill($data)->save(); 
            
            return response()->json(['status' => true, 'msg' => 'Update sukses ', 'data' =>  $check], Response::HTTP_OK); 
        }  
    }
}
