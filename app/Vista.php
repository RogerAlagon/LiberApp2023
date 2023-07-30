<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vista extends Model
{
    protected $table = 'vista';
    protected $primaryKey = 'idVista';
    protected $fillable = ["nombreVis","codigoVis","grupoVis","tipoVis"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}