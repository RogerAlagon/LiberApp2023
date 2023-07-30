<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Descuento extends Model 
{
    protected $table = 'descuento'; 
    protected $primaryKey = 'idDescuento';
    protected $fillable = ["Persona_idPersona", "Externo_idExterno", "tipoDes", "totalDes", "detalleDes", "estadoDes", "periodoDes","observacionDes"];
    public $timestamps = false;
}
