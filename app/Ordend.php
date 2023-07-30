<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Ordend extends Model
{
    protected $table = 'ordend'; 
    protected $primaryKey = 'idOrdend';
    protected $fillable = ["Ordenc_idOrdenc","Material_idMaterial","cantidadOrd","precioOrd","observacionOrd","Entidad_idEntidad"]; 
    public $timestamps = false;
}