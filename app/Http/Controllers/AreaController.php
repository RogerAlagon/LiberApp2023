<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Area;

class AreaController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        $arr_areas = Area::select('*')
            //->where('activoVeh', 1)
            ->get();

        return $arr_areas;
    }

    public function ListarSelect()
    {
        $arr_areas = Area::select('idArea','nombreAre')
            ->orderBy('nombreAre','ASC')
            ->get();
        return $arr_areas;
    }
}