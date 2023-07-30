<?php 
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithMapping;

use PhpOffice\PhpSpreadsheet\Cell\Cell;
use Maatwebsite\Excel\Concerns\ToModel;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use Maatwebsite\Excel\Concerns\WithCustomValueBinder;
use PhpOffice\PhpSpreadsheet\Cell\DefaultValueBinder;

use Maatwebsite\Excel\Concerns\WithStrictNullComparison;

class HistorialFallaExport extends DefaultValueBinder implements FromArray, WithMultipleSheets, WithHeadings, WithColumnFormatting,WithCustomValueBinder
{
    protected $todos;
    protected static $textColumns = ['P'];
    protected static $textColumns_ = ['Q'];
    protected static $first = true;
    protected static $first_ = true;

    public function __construct( array $todos)
    {
        $this->todos = $todos;
    }

    public function headings(): array
    {
        return [ 
            'CUENTA',
            'PLACA',
            'MARCA',
            'AÑO',
            'TIPO UNIDAD',
            'KM',
            'NRO. R.F.', 
            'NRO. O.T.',
            'TIPO REPORTE',
            'MANTENIMIENTO',
            'TIPO MANTENIMIENTO',
            'FRECUENCIA',
            'SISTEMA',
            'COMPONENTE',
            'DETALLE DE FALLA',
            'FECHA R.F.',
            'FECHA O.T.',
            'ESTADO', 
            'DIAS DE RETRASO',
            /*'CREADO POR', 
            'REPORTADO POR'*/
        ];
    }

    public function columnFormats(): array
    {
        return [
            /*'B' => '#,##0',
            'C' => '#,##0',*/
            //'D' => '@',
            'P' => NumberFormat::FORMAT_DATE_YYYYMMDD2,
            'Q' => NumberFormat::FORMAT_DATE_YYYYMMDD2,
            //'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }
    
    public function array(): array
    {
        return $this->todos;
    }

    public function sheets(): array 
    {
        $todos = [ new HistorialFallaExport($this->todos['cuerpo'])];
        return $todos;
    }
    
    public function bindValue(Cell $cell, $value)
    {
        if(in_array($cell->getColumn(), self::$textColumns))
        {
            if(self::$first)
                self::$first = false;
            else
            {
                $cell->setValueExplicit($value, DataType::TYPE_ISO_DATE);
                return true;    
            }
            
        }  

        if(in_array($cell->getColumn(), self::$textColumns_))
        {
            if(self::$first_)
                self::$first_ = false;
            else
            {
                $cell->setValueExplicit($value, DataType::TYPE_ISO_DATE);
                return true;    
            }
            
        }  
        return parent::bindValue($cell, $value);
    }
}

/*namespace App\Exports; 

use App\Falla;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection; 
use Maatwebsite\Excel\Concerns\WithHeadings;

class HistorialFallaExport implements FromCollection,WithHeadings
{


    protected $vehiculo; 
    protected $estado;
    protected $finicio; 
    protected $ffin;
    
    function __construct($prm_vehiculo, $prm_estado, $prm_finicio, $prm_ffin)
    {
        $this->vehiculo = $prm_vehiculo;
        $this->estado = $prm_estado;
        $this->finicio = $prm_finicio; 
        $this->ffin = $prm_ffin;
    }

    public function headings(): array
    {
        $indices = []; 

        return [
            'CUENTA',
            'PLACA',
            'MARCA',
            'AÑO',
            'TIPO UNIDAD',
            'KM',
            'NRO. R.F.', 
            'NRO. O.T.',
            'TIPO REPORTE',
            'SISTEMA',
            'COMPONENTE',
            'DETALLE DE FALLA',
            'FECHA R.F.',
            'RETRASO',
            'FECHA O.T.',
            'ESTADO', 
            'CREADO POR', 
            'REPORTADO POR'
        ];
    }

    public function collection()
    {
        $filas = [];
        $estados = []; 
        $estados[] = $this->estado;
        $vehiculo_ = "=";
        if( $this->vehiculo == "0") 
        {
            $vehiculo_ = "<>";
        }
        if ($this->estado == "SOLICITADO")
        {
            $estados[] = "REPROGRAMADO";
            $estados[] = "PENDIENTE";
        } else if ( $this->estado == "TODOS") { 
            $estados[] = "SOLICITADO"; 
            $estados[] = "INICIADO";
            $estados[] = "REVISADO";
            $estados[] = "TERMINADO";
            $estados[] = "REPROGRAMADO";
            $estados[] = "PENDIENTE";
            $estados[] = "TRABAJO REALIZADO";
        }

        $hoy = date("Y-m-d");
        $tiempo = strtotime($hoy);

        $arr_fallas = Falla::select( DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer,
                                    falla.*,nombreCom,nombreApa,reportef.Vehiculo_idVehiculo,Acople_idVehiculo,Ordent_idOrdent,fechaRep, 
                                    placaVeh,marca.valorDat as marca,fabricacionVeh,tipo.valorDat as tipoVeh,kilometrajeKil as kilometraje,motivoRep, usuario.nombreUsu as usuario, cuenta.valorDat as cuenta'))
            
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('trabajo', 'trabajo.Falla_idFalla','=','falla.idFalla')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftjoin('persona','persona.idPersona','=','reportef.Persona_idPersona')                        
            ->leftJoin('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftjoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            ->leftJoin('dato as cuenta','cuenta.idDato','=','reportef.Cuenta_idDato')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->leftjoin('usuario','usuario.idUsuario','=','reportef.Usuario_idUsuario')
            ->whereIn('estadoFal', $estados)
            //->where('estadoFal', '<>', NULL)
            ->whereRaw('(reportef.Vehiculo_idVehiculo '.$vehiculo_." ".$this->vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo '.$vehiculo_." ".$this->vehiculo.' AND tipoFal != "VEHICULO")')
            ->whereDate('fechaRep','>=', $this->finicio)
            ->whereDate('fechaRep','<=', $this->ffin)
            //->whereRaw('(reportef.Vehiculo_idVehiculo = '.$this->vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo = '.$this->vehiculo.' AND tipoFal != "VEHICULO")')
            ->get();
        
        foreach($arr_fallas as $llave => $ufalla)
        {
            $ffecha = strtotime($ufalla->fechaRep);
            $retraso = $tiempo - $ffecha;
            $retraso = $retraso/86400;
            $arr_fallas[$llave]["retraso"] = $retraso;
        }

        foreach ( $arr_fallas as $fallas )
        {
            $fila = [];
            $fila[] = $fallas->cuenta;
            $fila[] = $fallas->placaVeh; 
            $fila[] = $fallas->marca; 
            $fila[] = $fallas->fabricacionVeh; 
            $fila[] = $fallas->tipoVeh; 
            $fila[] = $fallas->kilometraje; 
            $fila[] = $fallas->Reporte_idReporte;
            $fila[] = $fallas->Ordent_idOrdent;
            $fila[] = $fallas->motivoRep;
            $fila[] = $fallas->nombreApa;
            $fila[] = $fallas->nombreCom;
            $fila[] = $fallas->detalleFal;
            $fila[] = $fallas->fechaRep;
            $fila[] = $fallas->retraso;
            $fila[] = $fallas->fechaRep;
            $fila[] = $fallas->estadoFal;
            $fila[] = $fallas->usuario;
            $fila[] = $fallas->trabajadorPer;

            $filas[] = $fila;
        }
        return collect($filas);
    }
}*/