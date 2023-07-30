<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plantilla;
use App\Implemento;
use App\Homologacion;
use App\Grupo;
use App\Distribucion;
use App\Dato;
use App\Entidad;
use App\Http\Controllers\Controller;

class PlantillaController extends Controller 
{
    public function Listar( $prm_entidad, $prm_area )
    {
        $arr_plantilla = Plantilla::select('idPlantilla','Area_idArea','nombrePla','Cuenta_idDato','Entidad_idDato')
            ->where('Entidad_idDato', $prm_entidad)
            ->where('Area_idArea', $prm_area)
            ->get();
        
        return $arr_plantilla;
    }

    public function ListarSelect( $prm_entidad, $prm_area )
    {
        $arr_plantilla = Plantilla::select('idPlantilla','nombrePla')
            ->where('Entidad_idDato', $prm_entidad)
            ->where('Area_idArea', $prm_area)
            ->get();
        
        return $arr_plantilla;
    }


    public function ListarImplementos( $prm_entidad, $prm_area, $prm_plantilla )
    {
            $grupos = [];
            $implementos = [];
            $ids = [];


            $obj_plantilla = Plantilla::select('idPlantilla','Area_idArea','nombrePla','Cuenta_idDato','Entidad_idDato')
                ->where('idPlantilla', $prm_plantilla)
                ->first(); 

            $arr_grupos = Grupo::select('grupo.*')
                ->where('Entidad_idDato', $prm_entidad)
                ->where('Area_idArea', $prm_area)
                ->get();

            foreach($arr_grupos as $ugrupo)
            {
                $grupo = [];
                $grupo["nombreGru"] = $ugrupo->nombreGru;
                $grupo["idgrupo"] = $ugrupo->idGrupo;
                $ugrupo["implementos"] = [];
                
                $grupos["g".$ugrupo->idGrupo] = $ugrupo;
                $ids[] = $ugrupo->idGrupo;
            }

            $arr_implementos = Implemento::select('implemento.*')
                ->whereIn('Grupo_idGrupo', $ids)
                ->get();
            
            foreach($arr_implementos as $uimplemento)
            {
                $uimplemento["sel"] = false;
                $uimplemento["validacionDis"] = $uimplemento->validacionImp;
                $uimplemento["alertaDis"] = $uimplemento->alertaImp;
                $uimplemento["renovacionDis"] = $uimplemento->renovacionImp;
                $implementos["i".$uimplemento->idImplemento] = $uimplemento;
            }

            $arr_distribuciones = Distribucion::select('distribucion.*','nombreImp')
                ->join('implemento','idImplemento','=','distribucion.Implemento_idImplemento')
                ->where('Plantilla_idPlantilla', $prm_plantilla)
                ->where('estadoDis','=',1)
                //->where('invalidoDis','=',NULL)
                ->get();

            foreach($arr_distribuciones as $udistribucion)
            {
                $udistribucion["sel"] = true;
                $implementos["i".$udistribucion->Implemento_idImplemento] = $udistribucion;
            }

            $arr_temporal = [];
            foreach($arr_implementos as $uimplemento)
            {
                $arr_temporal["g".$uimplemento->Grupo_idGrupo][] = $implementos["i".$uimplemento->idImplemento];
                $grupos["g".$uimplemento->Grupo_idGrupo]["implementos"] = $arr_temporal["g".$uimplemento->Grupo_idGrupo];
            }

        return $grupos;
    }

    public function GuardarPlantilla( Request $request ) 
    {
        $plantilla = json_decode( $request->plantilla );

        $obj_plantilla = new Plantilla();
        $obj_plantilla->nombrePla = $plantilla->nombrePla; 
        $obj_plantilla->Area_idArea = $plantilla->Area_idArea; 
        $obj_plantilla->Cuenta_idDato = $plantilla->Cuenta_idDato; 
        $obj_plantilla->Entidad_idDato = $plantilla->Entidad_idDato; 
        $obj_plantilla->save(); 
    }

}
