<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
    protected $table = 'asistencia';
    protected $primaryKey = 'idAsistencia';
    protected $fillable = ["Persona_idPersona","fechaAsi","tareoAsi","hextraAsi","hpermisoAsi","tardanzaAsi","entradaAsi","salidaAsi","erefrigerioAsi","srefrigerioAsi","intermedioAsi","intermedio2Asi","comentarioAsi","proyectadoAsi","valimentacionAsi","vhospedajeAsi","vpasajeAsi","vcocheraAsi","vpeajeAsi","vreembolsoAsi","vcombustibleAsi","votroAsi","htardanzaAsi","temperaturaAsi","Servicio_idServicio"];

    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
