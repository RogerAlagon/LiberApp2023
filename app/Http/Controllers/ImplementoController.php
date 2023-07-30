<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Implemento;
use App\Grupo;
use App\Http\Controllers\Controller;

class ImplementoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    public function Listar($prm_entidad, $prm_area)
    {
        if ( $prm_entidad !== 'plantilla' && $prm_area !== 'plantilla') 
        {

            $arr_grupos = Grupo::select('grupo.*')
                ->where('Entidad_idDato', $prm_entidad)
                ->where('Area_idArea', $prm_area)
                ->get();
            
            $grupos = [];
            $ids = [];
            
            foreach($arr_grupos as $ugrupo)
            {
                $grupo = [];
                //$grupo = array_merge($grupo, (array)$ugrupo);
                $grupo["nombreGru"] = $ugrupo->nombreGru;
                $grupo["idgrupo"] = $ugrupo->idGrupo;
                $grupo["implementos"] = [];

                $grupos["g".$ugrupo->idGrupo] = $grupo;
                $ids[] = $ugrupo->idGrupo;
            }

            $arr_implementos = Implemento::select('implemento.*')
                ->whereIn('Grupo_idGrupo', $ids)
                ->get();

            foreach($arr_implementos as $uimplemento)
            {
                $grupos["g".$uimplemento->Grupo_idGrupo]["implementos"][] = $uimplemento;
            }

            return $grupos;
        } else if( $prm_entidad == 'plantilla' && $prm_area == 'plantilla' ) {
            $arr_grupos = Grupo::select('grupo.*')
            ->get();

            $grupos = []; 
            $ids = []; 

            foreach($arr_grupos as $ugrupo)
            {
                $grupo = [];
                $grupo["nombreGru"] = $ugrupo->nombreGru;
                $grupo["idgrupo"] = $ugrupo->idGrupo;
                $grupo["implementos"] = [];

                $grupos["g".$ugrupo->idGrupo] = $grupo;
                $ids[] = $ugrupo->idGrupo;
            }
            
            $arr_implementos = Implemento::select('implemento.*')
                ->whereIn('Grupo_idGrupo', $ids)
                ->get();

            foreach($arr_implementos as $uimplemento)
            {
                $grupos["g".$uimplemento->Grupo_idGrupo]["implementos"][] = $uimplemento;
            }

            return $grupos;
        }
    }


    public function ListarSelect()
    {
        $arr_rutas = Ruta::select('ruta.*','nombreExt')
            ->join('externo','externo.idExterno','ruta.Externo_idExterno')
            ->orderBy('nombreRut','asc')
            ->get();
        return $arr_rutas;
    }
    public function ListarRecorrido()
    {
        $arr_rutas = Ruta::select('idRuta','nombreRut','Externo_idExterno','nombreExt','vehiculoRut','cargaRut','roundtripRut','origenRut','pasoRut','destinoRut')
            ->join('externo','externo.idExterno','ruta.Externo_idExterno')
            ->orderBy('nombreRut','asc')
            ->get();
        return $arr_rutas;
    }

    public function Guardar(Request $request)
    {
        $implemento = json_decode($request->implemento);
        
        $obj_implemento = new Implemento(); 
        $obj_implemento->nombreImp = $implemento->nombreImp; 
        $obj_implemento->vigenciaImp = $implemento->vigenciaImp; 
        $obj_implemento->renovableImp = $implemento->renovableImp;
        $obj_implemento->graveImp = $implemento->graveImp;
        $obj_implemento->medioImp = $implemento->medioImp;
        $obj_implemento->leveImp = $implemento->leveImp;
        $obj_implemento->Entidad_idDato = $implemento->Entidad_idDato;
        $obj_implemento->costoImp = $implemento->costoImp;
        $obj_implemento->cantidadImp = $implemento->cantidadImp;
        $obj_implemento->Grupo_idGrupo = $implemento->Grupo_idGrupo;
        $obj_implemento->tipoImp = $implemento->tipoImp;
        $obj_implemento->propiedadImp = $implemento->propiedadImp;
        $obj_implemento->Proveedor_idExterno = $implemento->Proveedor_idExterno;
        $obj_implemento->validacionImp = $implemento->validacionImp;
        $obj_implemento->Material_idMaterial = $implemento->Material_idMaterial;
        $obj_implemento->activoImp = 1;
        //$obj_implemento->Medida_idDato = $implemento->Medida_idDato;
        $obj_implemento->alertaImp = $implemento->alertaImp;
        $obj_implemento->renovacionImp = $implemento->renovacionImp;
        $obj_implemento->save();

    }

    public function Actualizar( Request $request)
    {
        $implemento = json_decode( $request->implemento); 
        $obj_implemento = (object)[]; 
        $obj_implemento->vigenciaImp = $implemento->vigenciaImp; 
        $obj_implemento->renovableImp = $implemento->renovableImp; 
        $obj_implemento->Entidad_idDato = $implemento->Entidad_idDato; 
        $obj_implemento->cantidadImp = $implemento->cantidadImp; 
        $obj_implemento->Grupo_idGrupo = $implemento->Grupo_idGrupo;
        $obj_implemento->tipoImp = $implemento->tipoImp;
        $obj_implemento->propiedadImp = $implemento->propiedadImp;
        $obj_implemento->Proveedor_idExterno = $implemento->Proveedor_idExterno;
        $obj_implemento->validacionImp = $implemento->validacionImp;
        $obj_implemento->alertaImp = $implemento->alertaImp;
        $obj_implemento->Material_idMaterial = $implemento->Material_idMaterial;
        $obj_implemento->renovacionImp = $implemento->renovacionImp;
        Implemento::where('idImplemento', $implemento->idImplemento)->update((array)$obj_implemento);
    }
    /*public function Guardar(Request $request)
    {
        $hospedajes = [];
        $cocheras = [];
        $ecocheras = [];
        $viaticos = [];
        $dviaticos = [];
        $tramos = [];
        $asignaciones = [];
        $recorridos = [];
        $roundtrips = [];
        $jrecorridos = json_decode($request->recorrido);

        foreach($jrecorridos as $urecorrido)
        {
            $roundtrips[] = $urecorrido->roundtripRec;
            $asignaciones[] = count($urecorrido->tramos);
            //$recorridos[] = $urecorrido->idRecorrido;
            foreach($urecorrido->tramos as $utramo)
            {
                if(trim($utramo->hospedaje) == "" && !is_numeric($utramo->hospedaje))
                    $hospedajes[] = 0;
                else
                    $hospedajes[] = $utramo->hospedaje;

                if(trim($utramo->cochera) == "" && !is_numeric($utramo->cochera))
                    $cocheras[] = 0;
                else
                    $cocheras[] = $utramo->cochera;

                if(trim($utramo->ecochera) == "" && !is_numeric($utramo->ecochera))
                    $ecocheras[] = 0;
                else
                    $ecocheras[] = $utramo->ecochera;

                if(trim($utramo->viatico) == "" && !is_numeric($utramo->viatico))
                    $viaticos[] = 0;
                else
                    $viaticos[] = $utramo->viatico;

                if(trim($utramo->dviatico) == "" && $utramo->dviatico == null)
                    $dviaticos[] = "";
                else
                    $dviaticos[] = str_replace("-", " ", $utramo->dviatico);

                if(trim($utramo->id) == "" && !is_numeric($utramo->id))
                    $tramos[] = 0;
                else
                    $tramos[] = $utramo->id;

                $recorridos[] = $urecorrido->idRecorrido;
                //$asignaciones[] = $urecorrido->idRecorrido;
            }
        }

        $uruta = json_decode($request->ruta);
        $uruta->hospedajesRut = implode("-",$hospedajes);
        $uruta->cocherasRut = implode("-",$cocheras);
        $uruta->ecocherasRut = implode("-",$ecocheras);
        $uruta->viaticosRut = implode("-",$viaticos);
        $uruta->dviaticosRut = implode("-",$dviaticos);
        $uruta->tramosRut = implode("-",$tramos);
        $uruta->recorridosRut = implode("-",$recorridos);
        $uruta->diasRut = implode("-",$roundtrips);
        $uruta->asignacionesRut = implode("-",$asignaciones);

        //Generando el nombre de la Ruta
        $uruta->nombreRut = "RUTA ".$uruta->nombreExt." | ".$uruta->cargaRut."-".$uruta->vehiculoRut." | ".$uruta->origenRut."-".$uruta->pasoRut."-".$uruta->destinoRut;

        unset($uruta->nombreExt);
        unset($uruta->idRuta);

        $obj_ruta = new Ruta((array) $uruta);
        $obj_ruta->save();
        return;
    }*/

    /*public function Actualizar(Request $request)
    {
        $hospedajes = [];
        $cocheras = [];
        $ecocheras = [];
        $viaticos = [];
        $dviaticos = [];
        $tramos = [];
        $asignaciones = [];
        $recorridos = [];
        $roundtrips = [];
        $jrecorridos = json_decode($request->recorrido);

        foreach($jrecorridos as $urecorrido)
        {
            $roundtrips[] = $urecorrido->roundtripRec;
            $asignaciones[] = sizeof($urecorrido->tramos);
            //$recorridos[] = $urecorrido->idRecorrido;
            foreach($urecorrido->tramos as $utramo)
            {
                if(trim($utramo->hospedaje) == "" && !is_numeric($utramo->hospedaje))
                    $hospedajes[] = 0;
                else
                    $hospedajes[] = $utramo->hospedaje;

                if(trim($utramo->cochera) == "" && !is_numeric($utramo->cochera))
                    $cocheras[] = 0;
                else
                    $cocheras[] = $utramo->cochera;

                if(trim($utramo->ecochera) == "" && !is_numeric($utramo->ecochera))
                    $ecocheras[] = 0;
                else
                    $ecocheras[] = $utramo->ecochera;

                if(trim($utramo->viatico) == "" && !is_numeric($utramo->viatico))
                    $viaticos[] = 0;
                else
                    $viaticos[] = $utramo->viatico;

                if(trim($utramo->dviatico) == "" && $utramo->dviatico == null)
                    $dviaticos[] = "";
                else
                    $dviaticos[] = str_replace("-", " ", $utramo->dviatico);

                if(trim($utramo->id) == "" && !is_numeric($utramo->id))
                    $tramos[] = 0;
                else
                    $tramos[] = $utramo->id;

                $recorridos[] = $urecorrido->idRecorrido;
                //$asignaciones[] = $urecorrido->idRecorrido;
            }
        }

        $uruta = json_decode($request->ruta);
        $uruta->hospedajesRut = implode("-",$hospedajes);
        $uruta->cocherasRut = implode("-",$cocheras);
        $uruta->ecocherasRut = implode("-",$ecocheras);
        $uruta->viaticosRut = implode("-",$viaticos);
        $uruta->dviaticosRut = implode("-",$dviaticos);
        $uruta->tramosRut = implode("-",$tramos);
        $uruta->recorridosRut = implode("-",$recorridos);
        $uruta->diasRut = implode("-",$roundtrips);
        $uruta->asignacionesRut = implode("-",$asignaciones);

        //Generando el nombre de la Ruta
        $uruta->nombreRut = "RUTA ".$uruta->nombreExt." | ".$uruta->cargaRut."-".$uruta->vehiculoRut." | ".$uruta->origenRut."-".$uruta->pasoRut."-".$uruta->destinoRut;
        unset($uruta->nombreExt);

        Ruta::where('idRuta', $uruta->idRuta)->update((array)$uruta);
    }*/
}