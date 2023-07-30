<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use App\Grupo; 
use App\Http\Controllers\Controller;

class GrupoController extends Controller 
{
    public function Listar()
    {
        $arr_grupo = Grupo::select('idGrupo','nombreGru')
            ->get(); 
        return $arr_grupo;    
    }

    public function Guardar(Request $request)
    {
        $grupo = json_decode($request->grupo); 
        $obj_grupo = new Grupo(); 
        $obj_grupo->nombreGru = $grupo->nombreGru; 
        $obj_grupo->Entidad_idDato = $grupo->Entidad_idDato; 
        $obj_grupo->Area_idArea = $grupo->Area_idArea;
        $obj_grupo->save(); 
    }
}