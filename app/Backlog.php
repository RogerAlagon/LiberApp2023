<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class backlog extends Model
{
    protected $table = 'backlog';
    protected $primaryKey = 'idBacklog';
    protected $fillable = ["estadoBac","Trabajo_idTrabajo","tipoBac","Origen_idOrigen","fechaBac"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}