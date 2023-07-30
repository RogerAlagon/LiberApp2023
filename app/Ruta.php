<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ruta extends Model
{
    protected $table = 'ruta';
    protected $primaryKey = 'idRuta';
    protected $fillable = ["origenRut","destinoRut","nombreRut","roundtripRut","vehiculoRut","cargaRut","alimentacionRut","hospedajesRut","cocherasRut","tramosRut","viaticosRut","Externo_idExterno","pasoRut","recorridosRut","diasRut","asignacionesRut","ecocherasRut","dviaticosRut","precorridosRut","vrecorridosRut","peajesRut","detallesRut","totalesRut","aplicablesRut","Cuenta_idDato","Grupo_idDato","unidadSunatRut","serieRut","Remitente_idExterno","Destinatario_idExterno","Partida_idDato","Llegada_idDato","ubigeopSunatRut","ubigeolSunatRut"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}

