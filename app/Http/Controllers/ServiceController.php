<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    protected $service;
    public function __construct(Service $service){
        $this->service= $service;
    }

    public function index(Request $request){
        $service = $this->service->orderBy('pinned', 'desc')->orderBy($request->sortby, $request->sortbydesc) 
        ->when($request->q, function($service) use ($request) { 
            $service = $service->where('title', 'LIKE', '%' . $request->q . '%')
                ->orWhere('body', 'LIKE', '%' . $request->q . '%');
        })
        ->paginate($request->per_page);
        return response()->json(['status' => 'success', 'data' => $service]);
    }

    public function unset_pinned($id){
        $check = $this->service->find($id);
        $data = [
            'pinned' => 0
        ];
        $check->fill($data)->save(); 
        return response()->json(['status' => true, 'msg' => 'Berhasil hapus pinned/highlight'], Response::HTTP_OK);
    }

    public function pinned($id,$type='pinned'){
        $check = $this->service->find($id);
        $data = [];
        if($type == 'pinned'){ 
            $this->service->where('pinned', '1')->update([
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
        $check = $this->service->where('slug', '=', $id)->first();

        if ($check) {
            return response()->json(['status' => true, 'msg' => 'Data ditemukan', 'data' =>  $check], Response::HTTP_OK);
        }

        return response()->json(['status' => false, 'msg' => 'Data tidak ditemukan', 'data' => []], Response::HTTP_NOT_FOUND);
    }
    public function store(Request $request){
        // dd($request);
        $valid = Validator::make($request->all(), [
            'title' => 'required|max:225',
            'body' => 'required',
            'image' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }
         
        $data = [
            'title' => $request->title,
            'body' => $request->body, 
            'published_at' => now(), 
            'image' => $request->image,
            'pinned' =>0, 
        ];
        // dump($data);
        $this->service->create($data);
        return response()->json(['status' => true, 'msg' => 'berhasil tambah data']);
    }
    public function destroy($id)
    {
        $check = $this->service->find($id);

        if ($check) {
           
            $check->delete();
            return response()->json(['status' => true, 'msg' => 'Berhasil Hapus Data'], Response::HTTP_OK);
        }
        return response()->json(['status' => false, 'msg' => 'Gagal Hapus Data'], Response::HTTP_BAD_REQUEST);
    }
    public function update(Request $request, $id){
        // dump($request);
        $valid = Validator::make($request->all(), [
            'title' => 'required|max:225',
            'body' => 'required',
            'image' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }

        $check = $this->service->find($id);  
        if ($check) { 
            $data = [
                'title' => $request->title,
                'body' => $request->body, 
                'image' => $request->image,
            ];
            $check->fill($data)->save(); 
            
            return response()->json(['status' => true, 'msg' => 'Update sukses ', 'data' =>  $check], Response::HTTP_OK); 
        }
    }
    public function all(){
        $data = $this->service->all(); 
        return response()->json(['status' => true, 'msg' => 'all data', 'data' =>  $data], Response::HTTP_OK);
    }

}
