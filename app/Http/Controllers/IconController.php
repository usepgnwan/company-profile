<?php

namespace App\Http\Controllers;

use App\Models\icon;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class IconController extends Controller
{
    protected $icon;
    public function __construct(icon $icon){
        $this->icon = $icon;
    }

    public function store(Request $request){
         $json_array = $request->all();
        //  $json_array=array_map(function ($a) { 
        //     return array_merge($a,['created_at'=> 
        //                         Carbon::now(),'updated_at'=> Carbon::now()]
        //                        ); 
        //                  }, $json_array); 
                        //  dd($json_array);
                        foreach($json_array as $v){

                            $this->icon->insert($v);
                        }
    }
}
