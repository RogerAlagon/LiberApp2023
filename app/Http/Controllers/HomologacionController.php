<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homologacion; 
use App\Entidad;
use App\Http\Controllers\Controller;
use App\Dato; 

class HomologacionController extends Controller 
{
    public function Listar( $prm_entidad, $prm_area, $prm_plantilla )
    {

        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$prm_entidad)
            ->first();

        $arr_entidades = [];

        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$prm_entidad)
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$prm_entidad)
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
            $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                ->where('activoEnt',1)
                ->where('Entidad_idDato',$prm_entidad)
                ->orderBy('nombreEnt','asc')
                ->get();
            break;
        }

        $entidades = [];
        $eids = [];
        $grupos = [];

        foreach($arr_entidades as $uentidad)
        {
            if(!isset($grupos["g".$uentidad->igrupo]))//si no existe el grupo en el array se agrega
            {
                $grupo = [];
                $grupo["gru"] = $uentidad->grupo;
                $grupo["ent"] = [];
                $grupos["g".$uentidad->igrupo] = $grupo;
            }

            $eids[] = $uentidad->idEntidad;

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;

            $obj_homologacion = Homologacion::select('idHomologacion')
                ->where('Entidad_idEntidad', $uentidad->idEntidad)
                ->where('Plantilla_idPlantilla', $prm_plantilla)
                ->where('estadoHom',"ACTIVO")
                //->where('activoHom',NULL)
                ->first();

            if($obj_homologacion)
                $entidad["idHomologacion"] = $obj_homologacion->idHomologacion;
            else
                $entidad["idHomologacion"] = null;
            //$entidad["idHomologacion"] = $uentidad->idEntidad;
            //if ( $obj_homologacion["idHomologacion"] !== null ) 
            
            //if ( $obj_homologacion["idHomologacion"] !== null ) 
            if($obj_homologacion)
            {
                $entidad["sel"] = true; 
            } else { 
                $entidad["sel"] = false;
            }

            $entidades["e".$uentidad->idEntidad] = $entidad;
        }

        foreach($entidades as $uentidad)//ordenando las entidades en sus respectivos grupos
        {
            $id = $uentidad["gru"];
            $grupos["g".$id]["ent"][] = $uentidad;
        }

        $resultado["registros"] = $grupos;
        return $resultado;

    }

    public function Guardar( Request $request )
    {
        $homologacion = json_decode($request->homologacion);
        $obj_homologacion = new Homologacion(); 
        $obj_homologacion->Entidad_idEntidad = $homologacion->Entidad_idEntidad; 
        $obj_homologacion->Plantilla_idPlantilla = $homologacion->Plantilla_idPlantilla;
        $obj_homologacion->estadoHom = "ACTIVO";
        $obj_homologacion->save();
    }

    public function Desactivar( Request $request )
    {
        $homologacion = Homologacion::find($request->idHomologacion); 
        $homologacion->estadoHom = "ANULADO";
        $homologacion->save(); 
        return $homologacion->idHomologacion;
    }
}
