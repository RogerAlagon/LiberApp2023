<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    protected $table = 'vehiculo';
    protected $primaryKey = 'idVehiculo';
    protected $fillable = ["idVehiculo","placaVeh","codigoVeh","fabricacionVeh","colorVeh","ejeVeh","pbrutoVeh","pnetoVeh","cutilVeh","largoVeh","anchoVeh","altoVeh","chasisVeh","motorVeh","activoVeh","tpciudadVeh","leasingVeh","Marca_idDato","Modelo_idDato","Tipo_idDato","Cuenta_idDato","propioVeh","grupoVeh","KmValido_idKilometraje","chvVeh"];

    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/

}
