<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Falla extends Model
{
    protected $table = 'falla';
    protected $primaryKey = 'idFalla';
    protected $fillable = ["Componente_idComponente","detalleFal","Reporte_idReporte","tipoFal","levantadoFal","estadoFal","Vehiculo_idVehiculo","Ordent_idOrdent","vestadoFal","aestadoFal","activoFal"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}