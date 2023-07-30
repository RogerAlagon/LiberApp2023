<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\General;
use App\Dato;
use App\Entidad;
use App\Http\Controllers\Controller;

class GeneralController extends Controller
{
    public function Listar()
    {
        $arr_datos = Dato::select('Dato.*')
       
          /*  ->join('vmarca','vmarca.idMarca','=','vehiculo.Marca_idMarca')
            ->join('vmodelo','vmodelo.idModelo','=','vehiculo.Modelo_idModelo')
            ->join('vtipo','vtipo.idTipo','=','vehiculo.Tipo_idTipo')*/
            ->get();
        return $arr_datos;
    }

    /*public function Select($tipo,$grupo)
    {
        $arr_datos = Dato::select('idDato','valorDat')
            ->where('tipoDat','=',$tipo)
            ->where('grupoDat','=',$grupo)
            ->orderBy('valorDat','asc')
            ->get();
        return $arr_datos;
    }

    public function SelectTipo()
    {
        $arr_datos = Dato::select('tipoDat')
            ->distinct()
            ->get();
        return $arr_datos;
    }*/

    public function SelectGrupo()
    {
        $arr_datos = Dato::select('grupoDat')
            ->distinct()
            ->get();
        return $arr_datos;
    }

    public function Guardar(Request $request)
    {
        $ugeneral = json_decode($request->general);

        unset($ugeneral->idDato);

        //$obj_general = new General((array) $ugeneral);
        $obj_general = new Dato((array) $ugeneral);

        $obj_general->save();
    }

    public function Actualizar(Request $request)
    {
        $ugeneral = json_decode($request->general);
               var_dump($ugeneral);
        unset($ugeneral->acciones);
        Dato::where('idDato', $ugeneral->idDato)->update((array)$ugeneral);
    }

    
}