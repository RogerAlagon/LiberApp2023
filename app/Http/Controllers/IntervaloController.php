<?php
namespace App\Http\Controllers; 

use DB; 
use App\Intervalo;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;


class IntervaloController extends Controller 
{
    public function ListarSelect()
    {
        $arr_intervalos = Intervalo::select('idIntervalo','nombreInt','Consumo_idConsumo')
            ->whereNull('estadoInt')
            ->orderBy('nombreInt','asc')
            ->get();

        return $arr_intervalos;
    }
}