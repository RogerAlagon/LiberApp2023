<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reportef extends Model
{
    protected $table = 'reportef';
    protected $primaryKey = 'idReportef';
    protected $fillable = ["Vehiculo_idVehiculo","Acople_idVehiculo","fechaRep","Kilometraje_idKilometraje","Persona_idPersona","versionRep","Cuenta_idDato","estadoRep","tipoRep","Reporte_idReporte","observacionRep","Cuenta_idDato","Usuario_idUsuario","motivoRep"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}

/*acople_Reg
vehiculo_Reg*/