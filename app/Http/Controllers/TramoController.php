<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tramo;
use DB;
use App\Http\Controllers\Controller;

class TramoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    public function Listar()
    {
        $arr_tramos = Tramo::all();
        return $arr_tramos;
    }

    public function ListarSelect()
    {
        $arr_tramos = Tramo::select('idTramo','inicioTra','terminoTra', DB::raw("CONCAT(inicioTra,'-',terminoTra) AS tramoTra"))
            ->orderBy('inicioTra','asc')
            ->orderBy('terminoTra','asc')
            ->get();
        return $arr_tramos;
    }

    public function ListarSelectViatico()
    {
        $arr_tramos = Tramo::select('idTramo','puntoTra','peajeTra','camionetaTra')
            ->orderBy('puntoTra','asc')
            //->orderBy('inicioTra','asc')
            //->orderBy('terminoTra','asc')
            ->get();
        return $arr_tramos;
    }

    public function Guardar(Request $request)
    {
        $utramo = json_decode($request->tramo);
        unset($utramo->idTramo);
        unset($utramo->vgtSelected);

        $obj_tramo = new Tramo((array) $utramo);

        $obj_tramo->save();
    }

    public function Mostrar($id)
    {
        //
    }

    public function Actualizar(Request $request)
    {
        $utramo = json_decode($request->tramo);
        unset($utramo->acciones);
        unset($utramo->vgtSelected);
        //$obj_tramo = (object)[];
        //$obj_tramo = (object)$utramo;

        Tramo::where('idTramo', $utramo->idTramo)->update((array)$utramo);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
