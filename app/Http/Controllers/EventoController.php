<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Evento;
use DB;
use App\Http\Controllers\Controller;

class EventoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        /*$arr_convoys = Convoy::select('convoy.*','origenRut','destinoRut','cliente.nombreExt as clienteExt','remitente.nombreExt as remitenteExt','destinatario.nombreExt as destinatarioExt','partida.valorDat as partidaCon','llegada.valorDat as llegadaCon','ruta.Grupo_idDato','alimentacionRut')
            ->join('ruta','ruta.idRuta','=','convoy.Ruta_idRuta')
            ->join('externo as cliente','cliente.idExterno','=','convoy.Cliente_idExterno')
            ->join('externo as remitente','remitente.idExterno','=','convoy.Remitente_idExterno')
            ->join('externo as destinatario','destinatario.idExterno','=','convoy.Destinatario_idExterno')
            ->join('dato as partida','partida.idDato','=','convoy.Partida_idDato')
            ->join('dato as llegada','llegada.idDato','=','convoy.Llegada_idDato')
            ->whereIn('estadoCon', ['PROGRAMADO','RUTA'])
            ->get();*/
    }

    public function ListarSelect()
    {
        $arr_eventos = Evento::select('idEvento','nombreEve')
            ->orderBy('nombreEve','asc')
            ->get();
        return $arr_eventos;
    }
}
