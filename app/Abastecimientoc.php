<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Abastecimientoc extends Model 
{
    protected $table = 'abastecimientoc'; 
    protected $primaryKey = 'idAbastecimiento';
    protected $fillable = ["fechaAba","fecharegAba","Grifo_idGrifo","estadoAba","Realizado_idUsuario","Cuenta_idCuenta","Externo_idExterno","Consumo_idConsumo","Intervalo_idIntervalo","Cuenta_idDato","Facturado_idUsuario"];
    public $timestamps = false;
}
