<?php

namespace App\Exports;

use App\User;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DepositoExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    protected $fecha;
    protected $banco;
    protected $tipo;
    protected $grupos;

    function __construct($prm_banco,$prm_tipo,$prm_grupos)
    {
        $this->banco = $prm_banco;
        $this->tipo = $prm_tipo;
        $this->grupos = $prm_grupos;
    }
    public function headings(): array
    {
        return [
            'VIÁTICO',
            'DESCRIPCIÓN',
            'MONTO',
            'TRABAJADOR',
            'DNI',
            'SOLICITA',
            'BANCO',
            'NRO CUENTA',
        ];
    }
    public function collection()
    {
        $filas = [];

        /*$cabecera = [];
        $cabecera[] = "VIÁTICO";
        $cabecera[] = "FECHA";
        $cabecera[] = "DESCRIPCIÓN";
        $cabecera[] = "MONTO";
        $cabecera[] = "TRABAJADOR";
        $cabecera[] = "DNI";
        $cabecera[] = "SOLICITA";

        $filas[] = $cabecera;*/
        $fecha = date("Y-m-d");
        $grupos = json_decode($this->grupos);
        foreach($grupos as $pos => $ugrupo)
        {
            $grupos[$pos] = $fecha." ".$ugrupo;
        }

        $arr_montos = DB::table('monto')
                        ->select('monto.*','paternoPer', 'maternoPer','nombrePer','dniPer','nombreUsu','valorDat as concepto')
                        ->join('persona','monto.Persona_idPersona','=','persona.idPersona')
                        ->join('dato','dato.idDato','monto.Dato_idDato')
                        ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                        ->whereIn('faplicacionMon',$grupos)
                        ->orderBy('Persona_idPersona')
                        ->get();
                        

        /*$datos = DB::table('dato')
                        ->select('*')
                        ->where('tipoDat','VIATICO')
                        ->where('grupoDat','PERSONAL')
                        ->whereIn('valorDat',['ALIMENTACION','ALIMENTACION ADICIONAL'])
                        ->get();

        $excluyentes = [];
        foreach ($datos as $udato)
        {
           $excluyentes[] = $udato->idDato;
        }*/

        $alimentaciones = [];
        $otros = [];

        foreach ($arr_montos as $umonto)
        {
            if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
            {
                if(!isset($alimentaciones["p".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "ALIMENTACION";
                    $fila["det"] = $umonto->detalleMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ban"] = "fff";
                    $fila["nro"] = "fff";

                    $alimentaciones["p".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $alimentaciones["p".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon;
                    $alimentaciones["p".$umonto->Persona_idPersona]["tot"] += $umonto->totalMon;
                    //$alimentaciones["p".$monto->Persona_idPersona][6] += $umonto->nombreUsu;

                    /*$fila = [];
                    $fila[] = "ALIMENTACION";
                    $fila[] = $umonto->detalleMon;
                    $fila[] = $umonto->totalMon;
                    $fila[] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila[] = $umonto->dniPer;
                    $fila[] = $umonto->nombreUsu;

                    $alimentaciones["p".$monto->Persona_idPersona][];*/
                }
            }
            else
            {
                if(!isset($otros["p".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "OTROS GASTOS";
                    $fila["det"] = $umonto->detalleMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ban"] = "fff";
                    $fila["nro"] = "fff";

                    $otros["p".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $otros["p".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon;
                    $otros["p".$umonto->Persona_idPersona]["apr"] += $umonto->totalMon;
                    //$alimentaciones["p".$monto->Persona_idPersona][6] += $umonto->nombreUsu;

                    /*$fila = [];
                    $fila[] = "ALIMENTACION";
                    $fila[] = $umonto->detalleMon;
                    $fila[] = $umonto->totalMon;
                    $fila[] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila[] = $umonto->dniPer;
                    $fila[] = $umonto->nombreUsu;

                    $alimentaciones["p".$monto->Persona_idPersona][];*/
                }
            }
            
        }

        /*foreach ($montos as $umonto)
        {
            $fila = [];
            $fila[] = $umonto->concepto;
            $fila[] = $umonto->fechaMon;
            $fila[] = $umonto->detalleMon;
            $fila[] = $umonto->totalMon;
            $fila[] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
            $fila[] = $umonto->dniPer;
            $fila[] = $umonto->nombreUsu;

            $filas[] = $fila;
        }*/

        foreach($alimentaciones as $ualimentacion)
        {
            $fila = [];
            $fila[] = $ualimentacion["tip"];
            //$fila[] = $ualimentacion->fechaMon;
            $fila[] = $ualimentacion["det"];
            $fila[] = $ualimentacion["tot"];
            $fila[] = $ualimentacion["per"];
            $fila[] = $ualimentacion["dni"];
            $fila[] = $ualimentacion["apr"];
            $fila[] = $ualimentacion["ban"];
            $fila[] = $ualimentacion["nro"];

            $filas[] = $fila;
        }
        foreach($otros as $uotro)
        {
            $fila = [];
            $fila[] = $uotro["tip"];
            //$fila[] = $uotro->fechaMon;
            $fila[] = $uotro["det"];
            $fila[] = $uotro["tot"];
            $fila[] = $uotro["per"];
            $fila[] = $uotro["dni"];
            $fila[] = $uotro["apr"];
            $fila[] = $uotro["ban"];
            $fila[] = $uotro["nro"];

            $filas[] = $fila;
        }

        
        return collect($filas);
    }
}
