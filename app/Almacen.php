<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Almacen extends Model 
{
    protected $table = 'almacen'; 
    protected $primaryKey = 'idAlmacen'; 
    protected $fillable = ["nombreAlm","ubicacionAlm","tipoMat"]; 
    public $timestamps = false;
}