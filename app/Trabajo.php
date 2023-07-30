<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trabajo extends Model
{
    protected $table = 'trabajo';
    protected $primaryKey = 'idTrabajo';
    protected $fillable = ["Falla_idFalla","Ordent_idOrdent","fechaTra","estadoTra","Persona_idPersona","actividadTra"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}