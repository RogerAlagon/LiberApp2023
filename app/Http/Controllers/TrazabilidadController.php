<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use App\Eventualidad;
use App\Servicio;
use DB; 

use App\Http\Controllers\Controller;

class TrazabilidadController extends Controller 
{
    public function Guardar( Request $request )
    {
        $jeventualidad = json_decode( $request->eventualidad );

        $obj_eventualidad = new Eventualidad(); 
        $obj_eventualidad->Evento_idEvento = $jeventualidad->Evento_idEvento;
        $obj_eventualidad->Ciudad_idDato = $jeventualidad->Ciudad_idDato; 
        $obj_eventualidad->finicioEvt = $jeventualidad->finicioEvt; 
        $obj_eventualidad->hinicioEvt = $jeventualidad->hinicioEvt; 
        $obj_eventualidad->ffinEvt = $jeventualidad->ffinEvt; 
        $obj_eventualidad->hfinEvt = $jeventualidad->hfinEvt;
        $obj_eventualidad->activoEvt = 1; 
        $obj_eventualidad->tipoEvt = $jeventualidad->tipoEvt;
        $obj_eventualidad->Servicio_idServicio = $jeventualidad->Servicio_idServicio;
        $obj_eventualidad->save();
        
        $obj_eventualidad->ciudad = $jeventualidad->ciudad;
        $obj_eventualidad->evento = $jeventualidad->evento;
        $obj_eventualidad->trabajadorPer = $jeventualidad->trabajadorPer; 
        $obj_eventualidad->placaVeh = $jeventualidad->placaVeh;
        $obj_eventualidad->acopleVeh = $jeventualidad->acopleVeh;

        return $obj_eventualidad;
    }
}