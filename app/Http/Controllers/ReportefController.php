<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reportef;
use App\Falla;
use App\Componente;
use App\Reporte;
use App\Kilometraje;
use App\Backlog;
use DB;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Http\Controllers\Controller;
use App\Firma;
use App\Imagen;
use App\Traits\KilometrajeTrait;

class ReportefController extends Controller
{
    use KilometrajeTrait;
    public function Listar( $finicio, $ffin )
    {
        $arr_reportesf = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'nombreUsu')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->leftJoin('usuario','reportef.Usuario_idUsuario','usuario.idUsuario')
            ->whereDate('fechaRep','>=', $finicio) 
            ->whereDate('fechaRep', '<=', $ffin)
            //->whereIn('estadoCon', ['SOLICITADO','','ENTREGA','RETORNO','TERMINADO'])
            ->get();
        return $arr_reportesf;
    }

    public function Guardar(Request $request)
    {
        $jreportef = json_decode($request->reportef);

        $obj_kilometraje = new Kilometraje();
        $obj_kilometraje->kilometrajeKil = $jreportef->kilometrajeKil;
        $obj_kilometraje->fechaKil = $jreportef->fechaRep;
        $obj_kilometraje->Vehiculo_idVehiculo = $jreportef->vehiculo;
        $obj_kilometraje->tipoKil = "REPORTE";
        //$obj_kilometraje->Persona_idPersona = "";
        $obj_kilometraje->usuarioKil = $jreportef->usuario;
        $obj_kilometraje->save();
        $this->ValidarUltimoKm( $jreportef->vehiculo );

        $obj_reportef = new Reportef();
        $obj_reportef->Vehiculo_idVehiculo = $jreportef->vehiculo;
        //$obj_reportef->Acople_idVehiculo = 
        $obj_reportef->fechaRep = $jreportef->fechaRep;
        $obj_reportef->Kilometraje_idKilometraje = $obj_kilometraje->idKilometraje;
        $obj_reportef->Persona_idPersona = $jreportef->persona;
        $obj_reportef->versionRep = $jreportef->version;
        $obj_reportef->estadoRep = "SOLICITADO";
        $obj_reportef->tipoRep = "CORRECTIVO";
        $obj_reportef->Reporte_idReporte = $jreportef->reporte;
        $obj_reportef->Usuario_idUsuario = $jreportef->usuario;
        //$obj_reportef->Firma_idFirma = 
        //$obj_reportef->observacionRep = 
        //$obj_reportef->Cuenta_idCuenta = $jreportef->cuenta;
        $obj_reportef->Cuenta_idDato = $jreportef->cuenta;
        $obj_reportef->motivoRep = $jreportef->motivo;
        $obj_reportef->save();

        foreach($jreportef->fallas as $ufalla)
        {
            $obj_falla = new Falla();
            $obj_falla->Componente_idComponente = $ufalla->id;
            $obj_falla->detalleFal = $ufalla->falla;
            $obj_falla->Reporte_idReporte = $obj_reportef->idReportef;
            $obj_falla->tipoFal = "VEHICULO";
            //$obj_falla->levantadoFal = ;
            $obj_falla->estadoFal = "SOLICITADO";
            $obj_falla->save();

            $obj_backlog = new Backlog();
            $obj_backlog->tipoBac = "CORRECTIVO";
            $obj_backlog->fechaBac = $jreportef->fechaRep;
            $obj_backlog->estadoBac = "SOLICITADO";
            $obj_backlog->Origen_idOrigen = $obj_falla->idFalla;
            $obj_backlog->Vehiculo_idVehiculo = $obj_reportef->Vehiculo_idVehiculo;
            $obj_backlog->save();
        }

        return "";
    }

    public function Pdf($reporte)
    {
        $obj_reportef = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'kilometraje.kilometrajeKil')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->where('idReportef', $reporte)
            ->first();

        $arr_fallas = Falla::select('falla.*')
            ->where('Reporte_idReporte', $reporte)
            ->get();
            
        $arr_componentes = Componente::select('componente.*','apartado.nombreApa')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->orderBy('componente.ordenCom',"ASC")
            ->get();
        
        $obj_reporte = Reporte::select('reporte.*')
            ->where('idReporte', $obj_reportef->Reporte_idReporte)
            ->get();

        $obj_firma = Firma::select('*')
            ->where('idFirma', $obj_reportef->Firma_idFirma)
            ->first();

        $obj_imagenes = Imagen::select('*')
            ->whereIn('idImagen', [$obj_reportef->Imagen_idImagen1, $obj_reportef->Imagen_idImagen2, $obj_reportef->Imagen_idImagen3, $obj_reportef->Imagen_idImagen4])
            ->get();

        $cabecera = [];
        $cuerpo = [];

        $cabecera["ope"] = $obj_reportef->trabajadorPer;
        $cabecera["oper"] = $obj_reportef->operacionRep;
        $cabecera["lic"] = "";
        $cabecera["fec"] = $obj_reportef->fechaRep;
        $cabecera["veh"] = $obj_reportef->placaVeh;
        $cabecera["aco"] = $obj_reportef->acopleVeh;
        $cabecera["km"] = $obj_reportef->kilometrajeKil;
        $cabecera["obs"] = $obj_reportef->observacionRep;

        $cuerpo = [];
        $apa_actual = 0;
        foreach ($arr_componentes as $ucomponente)
        {
            if($apa_actual != $ucomponente->Apartado_idApartado)
            {
                $fila = [];
                $fila["tip"] = "a";
                $fila["det"] = $ucomponente->nombreApa;

                $cuerpo["a".$ucomponente->Apartado_idApartado] = $fila;

                $apa_actual = $ucomponente->Apartado_idApartado;
            }

            $fila = [];
            $fila["tip"] = "c";
            $fila["cod"] = $ucomponente->codigoCom;
            $fila["det"] = $ucomponente->nombreCom;
            $fila["val"] = "";
            $fila["tip"] = "";

            $cuerpo["c".$ucomponente->idComponente] = $fila;
        }
        
        foreach ($arr_fallas as $ufalla)
        {
            $cuerpo["c".$ufalla->Componente_idComponente]["val"] = $ufalla->detalleFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["tip"] = $ufalla->tipoFal;
        }

        //$filas = count($cuerpo);
        $division = 78;
        $contador = 0;
        $aindice = null;


        foreach($cuerpo as $indice => $ucuerpo)
        {
            if($ucuerpo["tip"] == "a")
            {
                $contador = $contador + 2;
                if($contador >= $division-1)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            else
            {
                $contador++;
                if($contador >= $division)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            $aindice = $indice;
        }

        $imagenes = [];
        foreach($obj_imagenes as $uimagen)
        {
            $imagenes[] = $uimagen->imagenIma;
        }
        
        $data["cabecera"] = $cabecera;
        $data["cuerpo"] = $cuerpo;
        $data["firma"] = isset($obj_firma->firmaFir) ? $obj_firma->firmaFir : null;
        $data["imagenes"] = $imagenes;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Mantenimiento.Reportef', $data);

        $pdf->setPaper('A4', 'portrait');


        /*$pdf->getDomPDF()->setHttpContext(
            stream_context_create([
                'ssl' => [
                    'allow_self_signed'=> TRUE,
                    'verify_peer' => FALSE,
                    'verify_peer_name' => FALSE,
                ]
            ])
        );*/
        //$pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
        //return $pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true])->stream();
        return $pdf->stream();

        /*$ids = [];
        $servicios = [];
        foreach ($arr_convoys as $uconvoy)
        {
            $ids[] = $uconvoy->idConvoy;
            $servicios["s".$uconvoy->idConvoy] = [];
        }*/

        /*****************************************************************************************************************/
        /*$arr_servicios = Servicio::select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'vehiculo.placaVeh','acople.placaVeh as acopleVeh','idServicio','Persona_idPersona','Vehiculo_idVehiculo','Acople_idVehiculo','Convoy_idConvoy','cargaSer')
            ->join('vehiculo','vehiculo.idVehiculo','=','servicio.Vehiculo_idVehiculo')
            ->join('vehiculo as acople','acople.idVehiculo','=','servicio.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','servicio.Persona_idPersona')
            ->whereIn('Convoy_idConvoy',$ids)
            ->where('estadoSer','<>','ANULADO')
            ->where('estadoSer','<>','FACTURADO')
            ->where('estadoSer','<>','PAGADO')
            ->get();

        foreach ($arr_servicios as $uservicio)
        {
            $servicios["s".$uservicio->Convoy_idConvoy][] = $uservicio;
        }

        foreach ($arr_convoys as $llave => $uconvoy)
        {
            $arr_convoys[$llave]["servicios"] = $servicios["s".$uconvoy->idConvoy];
        }*/

    }

    public function Verificar($reportef)
    {
        $obj_reportef = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'kilometraje.kilometrajeKil')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->where('idReportef', $reportef)
            ->first();

        $arr_fallas = Falla::select('falla.*')
            ->where('Reporte_idReporte', $reportef)
            ->get();

        /*$arr_apartados = Apartado::select('idApartado','apartado.nombreApa')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->get();*/

        $arr_componentes = Componente::select('componente.*','apartado.nombreApa')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->orderBy('componente.ordenCom',"ASC")
            ->get();

        $obj_reporte = Reporte::select('reporte.*')
            ->where('idReporte', $obj_reportef->Reporte_idReporte)
            ->get();

        $cabecera = [];
        $cuerpo = [];

        $cabecera["ope"] = $obj_reportef->trabajadorPer;
        $cabecera["oper"] = $obj_reportef->operacionRep;
        $cabecera["lic"] = "";
        $cabecera["fec"] = $obj_reportef->fechaRep;
        $cabecera["veh"] = $obj_reportef->placaVeh;
        $cabecera["aco"] = $obj_reportef->acopleVeh;
        $cabecera["km"] = $obj_reportef->kilometrajeKil;
        $cabecera["obs"] = $obj_reportef->observacionRep;
        $cabecera["id"] = $obj_reportef->idReportef;

        $cuerpo = [];
        $apa_actual = 0;
        $cuerpo = [];

        foreach ($arr_componentes as $ucomponente)
        {
            if($apa_actual != $ucomponente->Apartado_idApartado)
            {
                $fila = [];
                $fila["det"] = $ucomponente->nombreApa;
                $fila["com"] = [];
                $cuerpo2["a".$ucomponente->Apartado_idApartado] = $fila;

                $apa_actual = $ucomponente->Apartado_idApartado;
            }
            $fila = [];
            //$fila["tip"] = "c";
            $fila["cod"] = $ucomponente->codigoCom;
            $fila["det"] = $ucomponente->nombreCom;
            $fila["apa"] = $ucomponente->Apartado_idApartado;
            $fila["val"] = "";
            $fila["tip"] = "";
            $fila["lev"] = false;
            $fila["id"] = 0;

            $cuerpo["c".$ucomponente->idComponente] = $fila;
        }

        foreach ($arr_fallas as $ufalla)
        {
            $cuerpo["c".$ufalla->Componente_idComponente]["val"] = $ufalla->detalleFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["tip"] = $ufalla->tipoFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["lev"] = $ufalla->levantadoFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["id"] = $ufalla->idFalla;
        }

        foreach($cuerpo as $ucuerpo)
        {
            if($ucuerpo["val"] != "")
                $cuerpo2["a".$ucuerpo["apa"]]["com"][] = $ucuerpo;
        }

        //$filas = count($cuerpo);
        /*$division = 78;
        $contador = 0;
        $aindice = null;

        foreach($cuerpo as $indice => $ucuerpo)
        {
            if($ucuerpo["tip"] == "a")
            {
                $contador = $contador + 2;
                if($contador >= $division-1)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            else
            {
                $contador++;
                if($contador >= $division)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            $aindice = $indice;
        }*/


        $data["cabecera"] = $cabecera;
        $data["cuerpo"] = $cuerpo2;
       
        return $data;
    }


    public function Validar(Request $request)
    {
        $jreporte = json_decode($request->reportef);

        $obj_reportef = (object)[];
        $obj_reportef->estadoRep = "TERMINADO";
        
        Reportef::where('idReportef', $jreporte->cabecera->id)->update((array)$obj_reportef);


        foreach ($jreporte->cuerpo as $ucomponente)
        {
            foreach($ucomponente->com as $ufalla)
            {
                $obj_falla = (object)[];
                $obj_falla->levantadoFal = $ufalla->lev;
                
                Falla::where('idFalla', $ufalla->id)->update((array)$obj_falla);
            }
        }
        return "";
    }
}
