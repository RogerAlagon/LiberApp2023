<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartado extends Model
{
    protected $table = 'apartado';
    protected $primaryKey = 'idApartado';
    protected $fillable = ["nombreApa","ordenApa","versionApa","Reporte_idReporte","habilitadoApa"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}