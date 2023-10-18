<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\returnValueMap;

class PostController extends Controller
{
    protected $post;
    public function __construct(Post $post){
        $this->post = $post;
    }

    public function index(Request $request){
        $sortby = isset($request->sortby) ? $request->sortby : 'id';
        $sortbydesc = isset($request->sortby) ? $request->sortbydesc : 'asc';
        $posts = $this->post->orderBy('pinned', 'desc')->orderBy('highlight', 'desc')->orderBy($sortby, $sortbydesc) 
        ->when($request->q, function($posts) use ($request) { 
            $posts = $posts->where('title', 'LIKE', '%' . $request->q . '%')
                ->orWhere('body', 'LIKE', '%' . $request->q . '%');
        })
        ->paginate($request->per_page);
        return response()->json(['status' => 'success', 'data' => $posts]);
    }


    public function upload_tinymce(Request $request){
        // dd($request->file('file'));
        if ($request->hasFile('file')) {
            $allowedfileExtension = ['jpg', 'png', 'jpeg'];
            $files = $request->file('file'); 
            $filename = $files->getClientOriginalName();
            $extension = $files->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);
            // dd($check);
            if ($check) {
                $filename = $files->store('tinymce', ['disk' => 'public_uploads']);
                return response()->json(['location' => asset('uploads/'.$filename)], Response::HTTP_OK);
            }else{
                return response()->json(['location' => asset('uploads/'.$filename)], Response::HTTP_BAD_REQUEST);
            }
        }
    }
    public function unset_upload(Request $request){ 
            $files = $request->nameFile;
            $files = json_decode($files); 
            foreach( $files as $v){ 
                // dd($v);
                $path_old = public_path('uploads/tinymce/') . basename($v);
                if (file_exists($path_old)) {
                    unlink($path_old);
                    return response()->json(['success' => true], Response::HTTP_OK);
                }
            }
    }
    public function show($id)
    {
        $check = $this->post->where('slug', '=', $id)->first();

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
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }
        $imgName = null;

        $check = $this->post->find($request->id_post);
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
            'title' => $request->title,
            // 'slug' => \Str::slug($request->title),
            'body' => $request->body,
            // 'user_id' => auth()->user()->id,
            'publish' => false,
            'published_at' => now(),
            'user_id' => 1,
            'image' => $imgName,
            'pinned' =>0,
            'highlight' => 0
        ];
        // dump($data);
        $this->post->create($data);
        return response()->json(['status' => true, 'msg' => 'berhasil tambah data']);
    }
    public function update(Request $request, $id){
        // dump($request);
        $valid = Validator::make($request->all(), [
            'title' => 'required|max:225',
            'body' => 'required',
        ]);
        if ($valid->fails()) {
            // return response()->json(['status' => false, 'msg' => $valid->getMessageBag()->toArray()]);
            return response()->json(['status' => false, 'msg' => $valid->errors()]);
        }

        $check = $this->post->find($id); 
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
                'title' => $request->title,
                'body' => $request->body,
                'published_at' => now(),
                'image' => $imgName,
            ];
            $check->fill($data)->save(); 
            
            return response()->json(['status' => true, 'msg' => 'Update sukses ', 'data' =>  $check], Response::HTTP_OK); 
        }
    }

    public function destroy($id)
    {
        $check = $this->post->find($id);

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

    public function unset_pinned($id){
        $check = $this->post->find($id);
        $data = [
            'pinned' => 0,
            'highlight' => 0
        ];
        $check->fill($data)->save(); 
        return response()->json(['status' => true, 'msg' => 'Berhasil hapus pinned/highlight'], Response::HTTP_OK);
    }

    public function pinned($id,$type='pinned'){
        $check = $this->post->find($id);
        $data = [];
        if($type == 'pinned'){ 
            $this->post->where('pinned', '1')->update([
                'pinned' => '0',
            ]);
            $data = [
                'pinned' => 1,
            ];
            $check->fill($data)->save(); 
        }else{
            $this->post->where('highlight', '1')->update([
                'highlight' => '0',
            ]);
            $data = [
                'highlight' => 1,
            ];
        }  
        $check->fill($data)->save(); 
        return response()->json(['status' => true, 'msg' => 'Berhasil pinned/highlight'], Response::HTTP_OK);
    }
    public function all(){
        $all =  $data = $this->post->skip(0)->take(4)->orderby('pinned','desc')->orderby('highlight','desc')->get();
        $collect = array_map( function($v){ 
             $v['body'] = substr(strip_tags($v['body']),0,150) . (strlen(strip_tags($v['body'])) >= 150 ? '...':'');
             return $v;
        }, $all->toArray()); 
 
        $collect = collect($collect);
        return response()->json(['status' => true, 'msg' => 'all data', 'data' =>  $collect->skip(0)->take(3), 'count'=>$collect->count()], Response::HTTP_OK);
    }
}