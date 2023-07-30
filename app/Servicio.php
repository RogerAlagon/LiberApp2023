<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    protected $table = 'servicio';
    protected $primaryKey = 'idServicio';
    protected $fillable = ["escoltaSer","Vehiculo_idVehiculo","Acople_idVehiculo","Persona_idPersona","Convoy_idConvoy","estadoSer","serieSer","ordenSer","guiaSer","cargaSer","Factura_idFactura","montoSer","monedaSer","nroSer","fcambioSer","Reemplazo_idServicio","Cambio_idRecorrido","cambioSer","Guia_idGuia","Reten_idPersona"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
