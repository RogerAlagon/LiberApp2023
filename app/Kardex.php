<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Kardex extends Model 
{
    protected $table = 'kardex'; 
    protected $primaryKey = 'idKardex'; 
    protected $fillable = ["stockKar","Almacen_idAlmacen","Material_idMaterial","tipoKar","conceptoKar","fechaKar"]; 
    public $timestamps = false;
}