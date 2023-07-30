<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehiculo;
use App\Entidad;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;

class VehiculoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        $arr_vehiculos = Vehiculo::select('vehiculo.*','vmarca.nombreMar','vmodelo.nombreMod','vtipo.nombreTip')
            ->where('activoVeh', 1)
            ->join('vmarca','vmarca.idMarca','=','vehiculo.Marca_idMarca')
            ->join('vmodelo','vmodelo.idModelo','=','vehiculo.Modelo_idModelo')
            ->join('vtipo','vtipo.idTipo','=','vehiculo.Tipo_idTipo')
            ->get();
        return $arr_vehiculos;
    }

    public function ListarSelect()
    {
        //$arr_vehiculos = Vehiculo::where('activoVeh','=','1')
        //$arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh','modeloVeh','valorDat')
        $arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh','valorDat as modeloVeh','grupoVeh')
            ->where('vehiculo.activoVeh','=','1')
            ->LeftJoin('dato','dato.idDato','=','vehiculo.Modelo_idDato')
            ->orderBy('placaVeh','asc')
            ->get();
        return $arr_vehiculos;
    }

    public function ListarVehiculo()
    {
        $arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh','dato.valorDat','tmodelo.valorDat as modeloVeh')
            ->LeftJoin('dato','dato.idDato','=','vehiculo.Tipo_idDato')
            ->LeftJoin('dato as tmodelo','tmodelo.idDato','=','vehiculo.Modelo_idDato')
            ->where('dato.grupoDat','=','VEHICULO')
            ->where('dato.tipoDat','=','TIPO')
            ->where('vehiculo.activoVeh','=','1')
            ->whereIn('grupoVeh',["LIVIANA","PESADA"])
            ->orderBy('placaVeh')
            ->get();
        return $arr_vehiculos;
    }

    public function Guardar(Request $request)
    {
        $obj_vehiculo = new Vehiculo();
        $obj_vehiculo->placaVeh = $request->placa;
        $obj_vehiculo->fabricacionVeh = $request->fabricacion;
        $obj_vehiculo->colorVeh = $request->color;
        $obj_vehiculo->Tipo_idTipo = $request->tipo;
        $obj_vehiculo->Marca_idMarca = $request->marca;
        $obj_vehiculo->Modelo_idModelo = $request->modelo;
        $obj_vehiculo->pbrutoVeh = $request->pbruto;
        $obj_vehiculo->pnetoVeh = $request->pneto;
        $obj_vehiculo->cutilVeh = $request->cutil;
        $obj_vehiculo->largoVeh = $request->largo;
        $obj_vehiculo->anchoVeh = $request->ancho;
        $obj_vehiculo->altoVeh = $request->alto;
        $obj_vehiculo->ejeVeh = $request->eje;
        $obj_vehiculo->chasisVeh = $request->chasis;
        $obj_vehiculo->motorVeh = $request->motor;
        $obj_vehiculo->activoVeh = $request->activo;

        $obj_vehiculo->save();

        $obj_entidad = new Entidad();
        $obj_entidad->nombreEnt = $request->placa;
        $obj_entidad->tipoEnt = 2;
        $obj_entidad->activoEnt = $request->activo;
        $obj_entidad->Entidad_idExterno = $obj_vehiculo->idVehiculo;

        $obj_entidad->save();
    }

    public function GurdarPromedioKm( Request $request )
    {
        $arr_promedios = json_decode( $request->promedios); 
        
        foreach ( $arr_promedios as $upromedio ) 
        {
            $up_vehiculo = Vehiculo::select('idVehiculo.*')
                ->where('idVehiculo', $upromedio->idVehiculo)
                ->update(['kmpromedioVeh' => $upromedio->promedio]);   
        }
    }

    public function Desactivar( Request $request )
    {
        $vehiculo = Vehiculo::find($request->idVehiculo);
        $vehiculo->activoVeh = 0; 
        $vehiculo->save();
        return $request->idVehiculo;
    }

    public function PdfFichaTecnica( $idVehiculo )
    {
        $obj_cabecera = Vehiculo::select('placaVeh','ejeVeh','pbrutoVeh','pnetoVeh','cutilVeh','largoVeh','anchoVeh','colorVeh',
                                         'altoVeh','chasisVeh','marca.valorDat as marca','modelo.valorDat as modelo',
                                         'tipo.valorDat as tipo','grupoVeh')
            ->leftJoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftJoin('dato as modelo','modelo.idDato','=','vehiculo.Modelo_idDato')
            ->leftJoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            //->where('activoVeh',1)
            ->where('idVehiculo', '=', $idVehiculo)
            ->first(); 

        $data = []; 

        $data["cabecera"] = $obj_cabecera;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Operaciones.FichaVehiculo', $data); 
        $pdf->setPaper('A4', 'portrait');
        $rutaPDF = public_path('archivos/operaciones/').$idVehiculo.".pdf";
        $pdf->save($rutaPDF);
        //unlink($rutaPDF); //Eliminar Archivo
        return $pdf->stream();

    }

    public function Actualizar(Request $request)
    {
        $obj_vehiculo = (object)[];

        $obj_vehiculo->placaVeh = $request->placa;
        $obj_vehiculo->fabricacionVeh = $request->fabricacion;
        $obj_vehiculo->colorVeh = $request->color;
        $obj_vehiculo->Tipo_idTipo = $request->tipo;
        $obj_vehiculo->Marca_idMarca = $request->marca;
        $obj_vehiculo->Modelo_idModelo = $request->modelo;
        $obj_vehiculo->pbrutoVeh = $request->pbruto;
        $obj_vehiculo->pnetoVeh = $request->pneto;
        $obj_vehiculo->cutilVeh = $request->cutil;
        $obj_vehiculo->largoVeh = $request->largo;
        $obj_vehiculo->anchoVeh = $request->ancho;
        $obj_vehiculo->altoVeh = $request->alto;
        $obj_vehiculo->ejeVeh = $request->eje;
        $obj_vehiculo->chasisVeh = $request->chasis;
        $obj_vehiculo->motorVeh = $request->motor;
        $obj_vehiculo->activoVeh = $request->activo;

        Vehiculo::where('idVehiculo', $request->id)->update((array)$obj_vehiculo);

        $obj_entidad = (object)[];

        $obj_entidad->activoEnt = $request->activo;

        Entidad::where('tipoEnt', 2)->where('Entidad_idExterno', $request->id)->update((array)$obj_entidad);
    }
}