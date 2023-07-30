<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guia extends Model
{
    protected $table = 'guia';
    protected $primaryKey = 'idGuia';
    protected $fillable = ["tipoGui","serieGui","nroGui","femisionGui","ftrasladoGui","modalidadGui","Origen_idGuia","estadoGui","observacionGui","Servicio_idServicio"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}