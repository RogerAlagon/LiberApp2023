<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Abastecimientod extends Model 
{
    protected $table = 'abastecimientod'; 
    protected $primaryKey = 'idAbastecimientod';
    protected $fillable = ["Vehiculo_idVehiculo","Persona_idPersona","Reten_idPersona","galonesAba","tablaAba","rutaAba","observacionAba","rendimientoAba",
                           "diferenciakmAba","Abastecimientoc_idAbastecimiento","Kilometraje_idKilometraje","Vale_idImagen","Surtidor_idImagen","Kil_idImagen", 
                           "Tanquei_idImagen","Tanqued_idImagen","Acople_idVehiculo","cargadoAba","carretaAba","carretaopAba","Ruta_idDato","motivoAba","tipoAba",
                           "estadodAba","enlaceAba","facturaAba","Comprobante_idComprobante","cerradoAba","precioAba","calculadoAba","descontadoAba","excesoAba","saldoAba","margenAba","descuentoAba"];
    public $timestamps = false;
}
