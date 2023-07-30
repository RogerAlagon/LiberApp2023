<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seguimiento extends Model
{
    protected $table = 'seguimiento';
    protected $primaryKey = 'idSeguimiento';
    protected $fillable = ["Vehiculo_idVehiculo","estadoSeg","fechaSeg","comentarioSeg","Servicio_idServicio","cgalonajeSeg","cprecioSeg","Grifo_idGrifo","kilometrajeSeg","ureaSeg","Detalle_idDetalle","precioSeg"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
