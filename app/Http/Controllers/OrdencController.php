<?php 

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Asignacion;
use App\Ordenc; 
use App\Ordend;
use App\Http\Controllers\Controller;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;



class OrdencController extends Controller 
{
    //Guardar Ordenes de Servcio y de Compra
    public function GuardarOrden( Request $request )
    {
        $ordenc = json_decode( $request->ordenc );
        $ordend = json_decode( $request->ordend );

        $obj_ordenc = new Ordenc(); 
        $obj_ordenc->femisionOrd = $ordenc->femisionOrd; 
        $obj_ordenc->fcreacionOrd = now(); 
        $obj_ordenc->estadoOrd = 'SOLICITADO'; 
        $obj_ordenc->Externo_idExterno = $ordenc->Externo_idExterno; 
        $obj_ordenc->totalOrd = $ordenc->totalOrd; 
        $obj_ordenc->Usuario_idUsuario = $ordenc->Usuario_idUsuario; 
        $obj_ordenc->tipoOrd = $ordenc->tipoOrd; 
        $obj_ordenc->observacionOrd = $ordenc->observacionOrd;
        $obj_ordenc->subtotalOrd = $ordenc->subtotalOrd;
        $obj_ordenc->igvOrd = $ordenc->igvOrd; 
        $obj_ordenc->detraccionOrd = $ordenc->detraccionOrd;
        if ( $ordenc->fpagoOrd !== "" ) { $obj_ordenc->fpagoOrd = $ordenc->fpagoOrd; } 
        $obj_ordenc->adelantoOrd = $ordenc->adelantoOrd;
        $obj_ordenc->pagoOrd = $ordenc->pagoOrd;
        if ( $ordenc->Moneda_idDato !== "" ) { $obj_ordenc->Moneda_idDato = $ordenc->Moneda_idDato; }
        $obj_ordenc->Inversion_idDato = $ordenc->Inversion_idDato; 
        $obj_ordenc->Area_idArea = $ordenc->Area_idArea;
        $obj_ordenc->save();

        foreach ( $ordend as $uordend)
        {
            $obj_ordend = new Ordend(); 
            $obj_ordend->Ordenc_idOrdenc = $obj_ordenc->idOrdenc; 
            $obj_ordend->Material_idMaterial = $uordend->Material_idMaterial; 
            $obj_ordend->cantidadOrd = $uordend->cantidadOrd; 
            $obj_ordend->precioOrd = $uordend->precioOrd; 
            $obj_ordend->observacionOrd = $uordend->observacionOrd; 
            $obj_ordend->Entidad_idEntidad = $uordend->Entidad_idEntidad;
            $obj_ordend->save();
        }
        return $obj_ordenc->idOrdenc;
    }

    public function Listar($proveedor, $finicio, $ffin, $estado, $tipo)
    {
        $proveedor_ = "="; 
        if ($proveedor == '0') { $proveedor_ = "<>"; }

        $arr_orden = Ordenc::select('idOrdenc','femisionOrd','estadoOrd','nombreExt','tipoOrd','totalOrd','nombreUsu')
            ->join('externo','externo.idExterno','=','ordenc.Externo_idExterno')
            ->join('usuario','usuario.idUsuario','=','ordenc.Usuario_idUsuario')
            ->where('Externo_idExterno', $proveedor_ , $proveedor)
            ->whereDate('femisionOrd','>=', $finicio)
            ->whereDate('femisionOrd','<=', $ffin)
            ->where('estadoOrd', $estado)
            ->where('tipoOrd', $tipo)
            ->get(); 
        return $arr_orden;
    }

    public function Guardar( Request $request)
    {
        $asignacion = json_decode($request->seleccionados);
        $ordenc = json_decode($request->ordenc); 
        $ordend = json_decode($request->ordend);
        
        $obj_ordenc = new Ordenc();
        $obj_ordenc->femisionOrd = $ordenc->femisionOrd;
        $obj_ordenc->fcreacionOrd = now();
        $obj_ordenc->estadoOrd = 'SOLICITADO';
        $obj_ordenc->Externo_idExterno = $ordenc->Externo_idExterno; 
        $obj_ordenc->totalOrd = $ordenc->totalOrd;
        $obj_ordenc->Usuario_idUsuario = $ordenc->Usuario_idUsuario;
        $obj_ordenc->tipoOrd = $ordenc->tipoOrd;
        $obj_ordenc->save();
        
        foreach ( $asignacion as $uasignacion ) 
        {
            $obj_asignacion = (object)[];
            //$obj_asignacion->Ordenc_idOrdenc = $asignacion->Ordenc_idOrdenc;
            $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
            Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
        }

        $obj_ordend = new Ordend();
        $obj_ordend->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
        $obj_ordend->Material_idMaterial = $ordend->Material_idMaterial;
        $obj_ordend->cantidadOrd = $ordend->cantidadOrd;
        $obj_ordend->precioOrd = $ordend->precioOrd;
        $obj_ordend->observacionOrd = $ordend->observacionOrd;
        $obj_ordend->save();
    }
    
    public function PdfOrdenc($id)
    {
        $obj_cabecera = Ordenc::select('idOrdenc','femisionOrd','fcreacionOrd','estadoOrd','totalOrd','tipoOrd','nombreExt',
                                       'subtotalOrd','igvOrd','ordenc.observacionOrd','pagoOrd','ordenc.observacionOrd',
                                       'direccionExt','rucExt','valorDat as tipoMoneda','nombreUsu','area.nombreAre',
                                       'costo.nombreAre as costo')
        ->join('externo','externo.idExterno','=','ordenc.Externo_idExterno')
       // ->join('ordend','ordend.Ordenc_idOrdenc','=','ordenc.idOrdenc')
        //->join('material','material.idMaterial','=','ordend.Material_idMaterial')
        ->join('dato','dato.idDato','=','ordenc.Moneda_idDato') 
        ->join('usuario','usuario.idUsuario','=','ordenc.Usuario_idUsuario')
        ->join('persona','persona.idPersona','=','usuario.Persona_idPersona')
        ->join('area','area.idArea','=','persona.Area_idArea')
        ->join('area as costo','costo.idArea','=','ordenc.Area_idArea')
        ->where('idOrdenc', $id)
        ->first(); 

        $cabecera = []; 
        $cuerpo = []; 
        $data = [];
        
        /*$obj_cuerpo = Asignacion::select('idAsignacion','femisionAsi','fvencimientoAsi','tipoAsi','montoAsi','situacionAsi',
                                          'estadoAsi','nombreEnt','nombreImp')
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            ->join('implemento','idImplemento','=','asignacion.Implemento_idImplemento')
            ->where('Ordenc_idOrdenc', $id)
            ->get();*/

        $obj_cuerpo = Ordend::select('nombreMat','cantidadOrd','precioOrd','nombreEnt','valorDat as und')
            ->leftJoin('entidad','entidad.idEntidad','=','ordend.Entidad_idEntidad')
            ->join('material','material.idMaterial','=','ordend.Material_idMaterial')
            ->join('dato','dato.idDato','=','material.Unidad_idDato')
            ->where('Ordenc_idOrdenc', $id)
            ->get();
        
        $data["cabecera"] = $obj_cabecera; 
        $data["cuerpo"] = $obj_cuerpo;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Logistica.Ordenc', $data); 
        $pdf->setPaper('A4', 'portrait');
        return $pdf->stream();
        //return $data;
    }
}
