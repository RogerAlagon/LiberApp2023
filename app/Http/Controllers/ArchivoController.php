<?php

namespace App\Http\Controllers; 
use Illuminate\Http\Request;
use App\Distribucion; 
use App\Asignacion;
use App\Vehiculo;
use App\Entidad;
use PDFMerger;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use File;
use Response;

//use iio\libmergepdf\Merger;

class ArchivoController extends Controller 
{ 
    public function FichaTecnica( $entidad, $asignacion, $implementos ) 
    {
        $obj_Implementos = json_decode( $implementos );
        //return $implementos;
        //$detalle_decode = json_decode( $detalle );
        //$detalle_cuerpo = [];
        
        /*foreach ( $detalle_decode as $udetalle ) 
        {
            if ( $udetalle->Entidad_idEntidad == $idVehiculo ) 
            {
                $detalle_cuerpo[] = $udetalle;
            }
        }*/

        $detalle_cuerpo = Asignacion::select('fvencimientoAsi','nombreImp', 'nombreGru')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->where('Entidad_idEntidad', $entidad)
            ->whereIn('Implemento_idImplemento', $obj_Implementos)
            //->where('idAsignacion',$asignacion )
            ->get();

        $Vehiculo = Entidad::select('Entidad_idExterno')
            ->where('idEntidad', $entidad )
            ->first(); 


        //Generar ficha tecnica por Vehiculo 
        $obj_cabecera = Vehiculo::select('placaVeh','ejeVeh','pbrutoVeh','pnetoVeh','cutilVeh','largoVeh','anchoVeh','colorVeh',
                'altoVeh','chasisVeh','marca.valorDat as marca','modelo.valorDat as modelo',
                'tipo.valorDat as tipo','grupoVeh')
            ->leftJoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftJoin('dato as modelo','modelo.idDato','=','vehiculo.Modelo_idDato')
            ->leftJoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            ->where('idVehiculo', '=', $Vehiculo)
            ->first(); 
        
        $data = []; 
        
        $data["cabecera"] = $obj_cabecera;
        //$data["cuerpo"] = $detalle_decode;
        $data["cuerpo"] = $detalle_cuerpo;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Operaciones.FichaVehiculo', $data); 
        $pdf->setPaper('A4', 'portrait');
        $rutaPDF = public_path('archivos/operaciones/')."v".$entidad.".pdf";
        $pdf->save($rutaPDF);
        return $pdf->stream();
    }
    public function Guardar( Request $request )
    { 
        $obj_asignacion = []; 
        $extension = $request->file('pdf')->getClientOriginalExtension();
        if ( $extension == "pdf") 
        {
            //$nombre = store("/pdf".$request->pdf);
            //$nombre = "pdf_".time().$request->pdf; 
            $nombre = $request->file('pdf')->getClientOriginalName();
            $nombre_ = str_replace( ".pdf","",$nombre);
            $rename = $request->id;
            $obj_asignacion["idAsignacion"] = $rename;
            //$extension = $request->file('pdf')->guessExtension();
            //$renombrado = "ejemplo".'.'.$extension;
            //$renombrado = $nombre_.'.'.$extension;
            $renombrado = $rename.'.'.$extension;
            //return $nombre."-".$extension;
            $url = $request->file('pdf')->storeAs('operaciones', $renombrado); 
            //$url = $request->pdf->store('operaciones/pdf'); 
            //$url = $request->pdf->store('operaciones/pdf'); 
            //Storage::put('operaciones/pdf', $request->pdf);
        }
        return $obj_asignacion;
        //return "No llego ningun Pdf";
    }
    public function FusionarPdf( Request $request )
    {
        //ini_set('memory_limit', '-1');

          //Generar ficha tecnica por Vehiculo 
          /*$obj_cabecera = Vehiculo::select('placaVeh','ejeVeh','pbrutoVeh','pnetoVeh','cutilVeh','largoVeh','anchoVeh','colorVeh',
          'altoVeh','chasisVeh','marca.valorDat as marca','modelo.valorDat as modelo',
          'tipo.valorDat as tipo','grupoVeh')
  ->leftJoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
  ->leftJoin('dato as modelo','modelo.idDato','=','vehiculo.Modelo_idDato')
  ->leftJoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
  ->where('idVehiculo', '=', "167")
  ->first(); 
  
  $data = []; 
  
  $data["cabecera"] = $obj_cabecera;*/

  //$dompdf = new Dompdf();

        /*$pdf=PDF::loadHtml(
        '<h1>Ficha Técnica Vehiculo '.$obj_cabecera->placaVeh.'</h1><br>
        <hr>
        <p> Marca: '.$obj_cabecera->marca.'</p>
        <p> Modelo: '.$obj_cabecera->modelo.'</p>
        <p> Color: '.$obj_cabecera->color.'</p>
        <p> Tipo: '.$obj_cabecera->tipo.'</p>
        <p> Grupo: '.$obj_cabecera->grupoVeh.'</p>
        <br><hr>');*/
        //$dompdf->render();
        /*$pdf=PDF::loadView('FichaTecnica'); 
        header("Content-type: application/pdf");*/
        /*$rutaPDF = public_path('archivos/operaciones/')."167".".pdf";
        $pdf->save($rutaPDF);*/
        //unlink($rutaPDF); //Eliminar Archivo
        //return $pdf->stream();


        /*$pdf=PDF::loadHtml(
            '<h1>Ficha Técnica Vehiculo '.$obj_cabecera->placaVeh.'</h1><br>
            <hr>
            <p> Marca: '.$obj_cabecera->marca.'</p>
            <p> Modelo: '.$obj_cabecera->modelo.'</p>
            <p> Color: '.$obj_cabecera->color.'</p>
            <p> Tipo: '.$obj_cabecera->tipo.'</p>
            <p> Grupo: '.$obj_cabecera->grupoVeh.'</p>
            <br><hr>');

            $rutaPDF = public_path('archivos/operaciones/')."167.pdf";
            $pdf->save($rutaPDF);

        return $pdf->output();*/

        /*$invoiceItems = [
            ['item' => 'Website Design', 'amount' => 50.50],
            ['item' => 'Hosting (3 months)', 'amount' => 80.50],
            ['item' => 'Domain (1 year)', 'amount' => 10.50]
        ];
        $invoiceData = [
            'invoice_id' => 123,
            'transaction_id' => 1234567,
            'payment_method' => 'Paypal',
            'creation_date' => date('M d, Y'),
            'total_amount' => 141.50
        ];
        $pdf = PDF::loadView('Pdfs.invoice', compact('invoiceItems', 'invoiceData'));
        //return $pdf;
        return $pdf->download('invoice.pdf');*/

        $asignacion = json_decode($request->asignacion); 

        $ids = []; // ids de Vehiculos 
        $ruta = [];
        $placas = [];
        $uplacas = [];
        $urls = [];
        $archivo = "";

        foreach ( $asignacion as $uasignacion )
        {
            $archivo = public_path('archivos/operaciones/').$uasignacion->Entidad_idEntidad.'.pdf';
            if ( file_exists( $archivo ))
            {
                $ruta["u".$uasignacion->Entidad_idEntidad] = public_path('archivos/operaciones/')."v".$uasignacion->Entidad_idEntidad.'.pdf';
                $ruta["u".$uasignacion->idAsignacion] = public_path('archivos/operaciones/').$uasignacion->idAsignacion.'.pdf';
                $ruta["p".$uasignacion->nombreEnt] = $uasignacion->nombreEnt;
                $ids["v".$uasignacion->Entidad_idEntidad] = $uasignacion->Entidad_idEntidad;
                $placas["u".$uasignacion->nombreEnt] = $uasignacion->nombreEnt; 
            }

            /*$obj_cabecera = Vehiculo::select('placaVeh','ejeVeh','pbrutoVeh','pnetoVeh','cutilVeh','largoVeh','anchoVeh','colorVeh',
                                             'altoVeh','chasisVeh','marca.valorDat as marca','modelo.valorDat as modelo',
                                             'tipo.valorDat as tipo','grupoVeh')
                ->leftJoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
                ->leftJoin('dato as modelo','modelo.idDato','=','vehiculo.Modelo_idDato')
                ->leftJoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
                ->where('idVehiculo', '=', $uasignacion->Entidad_idEntidad)
                ->first(); 

            $pdf=PDF::loadHtml(
                '<h1>Ficha Técnica Vehiculo '.$obj_cabecera->placaVeh.'</h1><br>
                <hr>
                <p> Marca: '.$obj_cabecera->marca.'</p>
                <p> Modelo: '.$obj_cabecera->modelo.'</p>
                <p> Color: '.$obj_cabecera->color.'</p>
                <p> Tipo: '.$obj_cabecera->tipo.'</p>
                <p> Grupo: '.$obj_cabecera->grupoVeh.'</p>
                <br><hr>');

                $rutaPDF = public_path('archivos/operaciones/').$uasignacion->Entidad_idEntidad.".pdf";
                $pdf->save($rutaPDF);*/
        }
        //return $archivo;
        //return $ruta;
        //return $placas;
        $pdf = new PDFMerger(); 
        foreach ( $ids as $uid ) 
        {
            $pdf->addPDF($ruta['u'.$uid], 'all');
            foreach( $asignacion as $uentidad )
            {
                if ( $uid == $uentidad->Entidad_idEntidad ) 
                {
                    
                    $pdf->addPDF($ruta['u'.$uentidad->idAsignacion], 'all');
                    //$pdf->addPDF($ruta['u'.$uentidad->Entidad_idEntidad], 'all');
                    //$pathForTheMergedPdf = public_path('archivos/operaciones')."/result.pdf";
                    $pathForTheMergedPdf = public_path('archivos/operaciones')."/".$ruta["p".$uentidad->nombreEnt].".pdf";
                    $pdf->merge('file', $pathForTheMergedPdf);
                }
            }
            $pdf = new PDFMerger(); 
        }

        foreach ( $placas as $upla ) 
        {
            //$uplacas[] = public_path('archivos/operaciones/').$upla.".pdf ";
            $uplacas[] = $upla;
            // "<script>window.open('".public_path('archivos/operaciones/').$upla.".pdf "."', '_blank')</script>";
            //echo "<script>window.open('".public_path('archivos/operaciones/').$upla."'.pdf"','_blank')</script>";
        }
        
        for ( $i = 0; $i < count($uplacas); $i++ ) 
        {
            //echo "<SCRIPT>window.open='".public_path('archivos/operaciones')."/".$uplacas[$i].".pdf"."'<SCRIPT>";
            $urls[] = public_path('archivos/operaciones')."/".$uplacas[$i].".pdf";
            /*echo '<script>
                    window.open("'.public_path('archivos/operaciones')."/".$uplacas[$i].'.pdf","_blank");
                </script>';*/
        }
        //return Response::make(file_get_contents($urls[0]), 200, [ 'content-type' =>'application/pdf']);
        //return $urls;
        return $uplacas;
        
        //return count($uplacas);

        /*$pdfFile1Path = public_path('archivos/operaciones').'/5890.pdf';
        $pdfFile2Path = public_path('archivos/operaciones').'/5907.pdf';
        $pdfFile3Path = public_path('archivos/operaciones').'/5908.pdf';
        $pdfFile4Path = public_path('archivos/operaciones').'/5909.pdf';
        $pdfFile5Path = public_path('archivos/operaciones').'/5910.pdf';
        $pdfFile6Path = public_path('archivos/operaciones').'/5911.pdf';
        //$pdfFile3Path = public_path('archivos').'/pdf3.pdf';

        $pdf = new PDFMerger(); 

        $pdf->addPDF($pdfFile1Path, 'all'); 
        $pdf->addPDF($pdfFile2Path, 'all');
        $pdf->addPDF($pdfFile3Path, 'all');
        $pdf->addPDF($pdfFile4Path, 'all');
        $pdf->addPDF($pdfFile5Path, 'all');
        $pdf->addPDF($pdfFile6Path, 'all');
        $pathForTheMergedPdf = public_path('archivos/operaciones')."/result.pdf";
        $pdf->merge('file', $pathForTheMergedPdf);*/

        //$binaryContent = $pdf->merge('download', "mergedpdf.pdf");

        //return $pdf->merge('download', 'fusion.pdf');
        //return $binaryContent;
        //return;

        
        //$pdf->merge('file', $pathForTheMergedPdf); 
        //$pdf->addPDF($pdfFile2Path,'1,2,3'); 

        //$pdf->merge('download','fusion.pdf');
    }
    public function VisualizarPdf( $nombre ) 
    {
        return Response::make(file_get_contents('archivos/operaciones/'.$nombre.'.pdf'), 200, [
            'content-type'=>'application/pdf',
        ]);
    }

}