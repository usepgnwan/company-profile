<?php 

namespace App\Http\Controllers\Api;
 
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
class ApiUserLogin extends Controller
{
    protected $user;
    public function __construct(User $user){
        $this->user = $user;
    }

    public function login(Request $request)
    {
      $req = $request->input();
      $validator = Validator::make($req, [
          'email'     => 'required|exists:users,email',
          'password'  => 'required',
      ]);
  
    if ($validator->fails()) {
        $error = $validator->messages()->first();
        $response['status'] = false;
        $response['message'] = $validator->errors();
        return response()->json($response, Response::HTTP_OK);
    }
  
    $data = [
        'email'     => $req['email'],
        'password'  => $req['password']
    ];

    if (auth()->attempt($data)) {
        $user       = Auth::user();
        $objToken   = auth()->user()->createToken('SpaceDigitalAuthApp');
        $strToken   = $objToken->accessToken;
        $expiration = $objToken->token->expires_at->diffInSeconds(Carbon::now());

        return response()->json([
          'status'      =>true,
          'token'       => $strToken,
          'expires_in'  => $expiration,
          'data'        => $user
        ], 200);
  
    } else {
      $response['status'] = false;
      $response['message'] = $validator->errors();
        return response()->json([
          'status' => false,
          'message' => ["email"=>["Email or Password not wrong"]]
        ], Response::HTTP_OK); 
      }
    }
    public function logout (Request $request)
    {
        // $token = $request->user()->token();
        // $token->revoke();
        if (auth()->check()) {
            auth()->user()->token()->revoke();
        }
        $response = ['status'=>true,'message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
}
?>