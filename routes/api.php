<?php

use App\Http\Controllers\BenefitController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\IconController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TestimoniController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('post', PostController::class);
Route::post('icon/post', [IconController::class, "store"]);
Route::post('post/upload/image', [PostController::class, "upload_tinymce"]);
Route::post('post/delete/image', [PostController::class, "unset_upload"]);
Route::put('post/unset/{id}', [PostController::class, "unset_pinned"]);
Route::put('post/pinned/{id}/{type}', [PostController::class, "pinned"]);

Route::resource('services', ServiceController::class);  
Route::get('services/all/data', [ServiceController::class, "all"]);
Route::put('services/unset/{id}', [ServiceController::class, "unset_pinned"]);
Route::put('services/pinned/{id}/{type}', [ServiceController::class, "pinned"]);

Route::resource('benefits', BenefitController::class);  
Route::put('benefits/unset/{id}', [BenefitController::class, "unset_pinned"]);
Route::put('benefits/pinned/{id}/{type}', [BenefitController::class, "pinned"]);

Route::resource('testimoni', TestimoniController::class);  
Route::get('testimoni/all/data', [TestimoniController::class, "all"]);
Route::put('testimoni/unset/{id}', [TestimoniController::class, "unset_pinned"]);
Route::put('testimoni/pinned/{id}/{type}', [TestimoniController::class, "pinned"]);

Route::resource('faq', FaqController::class);  
Route::get('faq/all/data', [FaqController::class, "all"]);
Route::put('faq/unset/{id}', [FaqController::class, "unset_pinned"]);
Route::put('faq/pinned/{id}/{type}', [FaqController::class, "pinned"]);
Route::resource('client', ClientController::class);  
Route::get('client/all/data', [ClientController::class, "all"]);
Route::put('client/unset/{id}', [ClientController::class, "unset_pinned"]);
Route::put('client/pinned/{id}/{type}', [ClientController::class, "pinned"]);
Route::resource('team', TeamController::class);  
Route::put('team/unset/{id}', [TeamController::class, "unset_pinned"]);
Route::put('team/pinned/{id}/{type}', [TeamController::class, "pinned"]);

Route::resource('social_media', SocialMediaController::class);  