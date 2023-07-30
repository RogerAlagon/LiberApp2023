<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model;

class Kilometraje extends Model 
{
    protected $table = 'kilometraje'; 
    protected $primaryKey = 'idKilometraje';
    protected $fillable = ["kilometrajeKil","horometrajeKil","fechaKil","Vehiculo_idVehiculo","galonKil","Persona_idPersona","conceptoKil","tipoKil","activoKil","invalidoKil"]; 
    public $timestamps = false;
}