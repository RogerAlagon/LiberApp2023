<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ordent extends Model
{
    protected $table = 'ordent';
    protected $primaryKey = 'idOrdent';
    protected $fillable = ["fechaOrd","Cuenta_idDato","Taller_idDato","mantenimientoOrd","Vehiculo_idVehiculo","finicioOrd","ffinOrd","Kilometraje_idKilometraje","estadoOrd","Usuario_idUsuario","Terminado_idUsuario"];

    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
