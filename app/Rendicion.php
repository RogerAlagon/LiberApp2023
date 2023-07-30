<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Rendicion extends Model 
{
    protected $table = 'rendicion'; 
    protected $primaryKey = 'idRendicion';
    protected $fillable = ["fechaRen","totalRen","rendidoRen","saldoRen","devueltoRen","descuentoRen","disposicionRen","observacionRen","Encargado_idUsuario"];
    public $timestamps = false;
}