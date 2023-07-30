<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grifo extends Model
{
    protected $table = 'grifo';
    protected $primaryKey = 'idGrifo';
    protected $fillable = ["nombreGri","ciudadGri","empresaGri","Ciudad_idDato"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
