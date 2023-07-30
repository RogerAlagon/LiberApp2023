<?php
namespace App\Http\Controllers;

use DB;
use App\Grifo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GrifoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        /*$arr_vehiculos = Vehiculo::select('vehiculo.*','vmarca.nombreMar','vmodelo.nombreMod','vtipo.nombreTip')
            ->where('activoVeh', 1)
            ->join('vmarca','vmarca.idMarca','=','vehiculo.Marca_idMarca')
            ->join('vmodelo','vmodelo.idModelo','=','vehiculo.Modelo_idModelo')
            ->join('vtipo','vtipo.idTipo','=','vehiculo.Tipo_idTipo')
            ->get();
        return $arr_vehiculos;*/
        $arr_grifos = Grifo::select('idGrifo','nombreGri','ciudadGri','empresaGri','ciudadGri as detalleCiudad')
            ->orderBy('nombreGri','asc')
            ->get();
        return $arr_grifos;
    }

    public function ListarSelect()
    {
        $arr_grifos = Grifo::select(DB::raw('CONCAT(nombreGri, " - ", empresaGri, " - ", ifnull(valorDat, 0)) As nombreGri, idGrifo'))
            ->leftjoin('dato','dato.idDato','=','grifo.Ciudad_idDato')
            ->orderBy('nombreGri','asc')
            ->get();
        return $arr_grifos;
    }

    public function GrifoSelect()
    {
        $arr_grifos = Grifo::select(DB::raw('CONCAT(nombreGri, " (",ciudadGri, ") - ", empresaGri) AS nombreGri'),'idGrifo')
            ->orderBy('nombreGri','asc')
            ->get();

        return $arr_grifos;
    }

    public function ListarEmpresa()
    {
        $arr_empresa = Grifo::select('empresaGri')
            ->orderBy('empresaGri','asc')
            ->groupBy('empresaGri')
            ->get();
        return $arr_empresa;
    }
    public function Guardar(Request $request)
    {
        $jgrifo = json_decode($request->grifo);
        unset($jgrifo->acciones);
        unset($jgrifo->detalleCiudad);

        $obj_grifo = new Grifo((array) $jgrifo);
        //$obj_convoy->codigoCon = "";
        $obj_grifo->save();

        return;
    }

    public function Actualizar(Request $request)
    {
        /*$jgrifo = json_decode($request->grifo);
        unset($jgrifo->acciones);

        $obj_grifo = (object)$jgrifo;
        Grifo::where('idGrifo', $jgrifo->idGrifo)->update((array)$obj_grifo);
        return;*/


        $jgrifo = json_decode($request->grifo);
        //unset($jgrifo->acciones);
        //return $jgrifo->detalleCiudad->idDato;

        //$obj_grifo = (object)$jgrifo;
        //$obj_servicio->estadoSer = "INICIADO";
        //$obj_servicio->montoSer = $request->monto;
        
        $obj_grifo = (object)[]; 
        $obj_grifo->nombreGri = $jgrifo->nombreGri; 
        $obj_grifo->ciudadGri = $jgrifo->ciudadGri;
        $obj_grifo->empresaGri = $jgrifo->empresaGri;
        $obj_grifo->Ciudad_idDato = $jgrifo->Ciudad_idDato;
        Grifo::where('idGrifo', $jgrifo->idGrifo)->update((array)$obj_grifo);
        return;
    }
}