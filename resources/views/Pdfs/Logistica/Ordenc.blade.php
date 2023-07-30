<div  id="marca-agua">
	<img src="{{URL::asset('/images/marca-agua.png')}}" height="100%" width="100%" />
</div>
<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">ORDEN DE {{ $cabecera["tipoOrd"] }} N° {{ $cabecera["idOrdenc"]}}</th>
			<th class="codificacion">
				Código:  TL-MU-F-001<br>
				Versión: 001<br>
				Fecha:   19/03/2019<br>
				Página:  1 de 1<br>
			</th>
		</tr>
	</thead>
</table>
<table id="trabajo" class="trabajo">
	<thead>
		<tr>
			<th class="titulo" colspan="12">DATOS PRINCIPALES</th>
		</tr>
	</thead>
	<tbody>
        <tr>
			<td class="subtitulo">SEÑORES</td>
			<td class="cdetalle" colspan="9">{{ $cabecera["nombreExt"] }}</td>
			<td class="subtitulo">RUC</td>
			<td class="cdetalle">{{ $cabecera["rucExt"]}}</td>
		</tr>
		<tr>
			<td class="subtitulo">DIRECCIÓN</td>
			<td class="cdetalle" colspan="11">{{ $cabecera["direccionExt"] }}</td>
			
		</tr>
		<tr>
			<td class="subtitulo">FECHA EMISION</td>
			<td class="cdetalle">{{ $cabecera["femisionOrd"] }}</td>
			<td class="subtitulo">FECHA CREACION</td>
			<td class="cdetalle" colspan="2">{{ $cabecera["fcreacionOrd"] }}</td>
			<td class="subtitulo" colspan="2">OBSERVACION</td>
			<td class="cdetalle" colspan="3">{{ $cabecera["observacionOrd"]}}</td>
			<td class="subtitulo">Area</td>
			<td class="cdetalle">{{ $cabecera["costo"]}}</td>

		</tr>
	</tbody> 
</table>
<table class="contenedor" id="fallas" width="100%">
	<tr class="ddtitulo">
		<th>ITEM</th>
		<th>CANTIDAD</th>
		<th>UND</th>
		<th>DESCRIPCION</th>
		<th>APLICADO A</th>
		<th>PRECIO UNIT.</th>
	</tr>
	@foreach ($cuerpo as $nro => $ucuerpo)
	<tr class="ddetalle">
    	<td class="idetalle">{{ $nro+1 }}</td>
    	<td class="cadetalle">{{ $ucuerpo["cantidadOrd"] }}</td>
    	<td class="cadetalle">{{ $ucuerpo["und"] }}</td>
		<td class="ndetalle">{{ $ucuerpo["nombreMat"] }}</td>
		<td class="ndetalle">{{ $ucuerpo["nombreEnt"] }}</td>
		@if ( $cabecera["tipoMoneda"] == 'SOLES')
			<td class="mdetalle">{{ "S/. ".number_format($ucuerpo["precioOrd"], 2, '.','') }}</td>
		@else 
			<td class="mdetalle">{{ "$ ".number_format($ucuerpo["precioOrd"], 2, '.','') }}</td>
		@endif
    </tr>
	@endforeach
</table>
<table class="contenedor" id="actividades" width="100%">
	<tr class="ddetalle">
		<td class="cbase" colspan="4">Base Imponible</td>
		@if ( $cabecera["tipoMoneda"] == 'SOLES' )
			<td><b>{{ "S/. ".number_format($cabecera["subtotalOrd"], 2, '.','') }}</b></td>
		@else 
			<td><b>{{ "$ ".number_format($cabecera["subtotalOrd"], 2, '.','') }}</b></td>
		@endif
	</tr>
	<tr class="ddetalle">
		<td class="cigv" colspan="4">IGV (%)</td>
		@if( $cabecera["tipoMoneda"] == 'SOLES' )
			<td><b>{{ "S/. ".number_format($cabecera["igvOrd"], 2, '.','') }}</b></td>
		@else
			<td><b>{{ "$ ".number_format($cabecera["igvOrd"], 2, '.','') }}</b></td>
		@endif
	</tr>
	<tr class="ddetalle">
		<td class="ctotal" colspan="4">Total</td>
		@if( $cabecera["tipoMoneda"] == 'SOLES' )
			<td><b>{{ "S/. ".number_format($cabecera["totalOrd"], 2,'.','') }}</b></td>
		@else
			<td><b>{{ "$ ".number_format($cabecera["totalOrd"], 2,'.','') }}</b></td>
		@endif
	</tr>
</table>
<table class="firma">
	<tr>
		<th>REALIZADO POR</th><th>APROBADO POR</th>
	</tr>
	<tr>
		<td class="fespacio">{{ $cabecera["nombreUsu"] }}</td>
		<td class="fespacio"></td>
	</tr>
	<tr>
		<td class="farea">{{ $cabecera["nombreAre"] }}</td>
		<td class="farea"></td>
	</tr>
	<tr>
		<td class="ffecha">Fecha: {{ $cabecera["fcreacionOrd"] }}</td>
		<td class="ffecha"></td>
	</tr>
</table>
<style>
		@page
		{
            margin: 0.6cm;
        }
        @font-face
        {
  			font-family: 'Helvetica';
  			/*font-style: normal;
  			font-weight: normal;
  			src: url(http://themes.googleusercontent.com/static/fonts/opensans/v8/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf) format('truetype');*/
		}
		body
		{
			font-family: 'Helvetica';
		}
        /*CABECERA*/
		#cabecera
		{
			width: 100%;
		}
		#cabecera, #cabecera tr, #cabecera th
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
		}
		#cabecera .logo
		{
			width: 4cm;
		}
		#cabecera .titulo
		{
			text-align: center;
		}
		#cabecera .codificacion
		{
			font-size: 0.2cm;
			width: 4cm;
		}
		/*CABECERA DEL REPORTE*/
		#trabajo
		{
			width: 100%;
		}
		#trabajo, #trabajo tr, #trabajo th, #trabajo td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			text-align: center;
		}
		#trabajo .titulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
			font-size: 0.3cm;
		}
		#trabajo .subtitulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
			width: 8% !important;
		}
		#trabajo .cdetalle
		{
			font-size: 0.25cm;
			font-weight: bold;
		}
		/*DETALLE DEL REPORTE*/
		.contenedor
		{
			width: 100%;
			margin: 0;
			padding: 0;
			font-size: 0.23cm !important;
			vertical-align: top;
		}

		.contenedor, .contenedor tr, .contenedor th, .contenedor td
		{
			border-collapse: collapse;
			border:  0.005cm solid black;
		}
		
		.contenedor .dtitulo th
		{
			font-size: 0.15cm !important;
			height: 0.35cm !important;
			margin: 0.0cm !important;
		}
		.contenedor .ddetalle td
		{
			height: 0.5cm !important;
			text-align: center;
		}

		.contenedor .ddtitulo th 
		{
			background-color: rgb(64,64,64);
			color: white;
			font-size: 0.20cm !important;
			text-align: center;
		}
		/* Item */
		.contenedor .idetalle
		{
			height: 0.1cm !important;
			width: 0.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Cantidad */
        .contenedor .cadetalle
		{
			height: 0.1cm !important;
			width: 1.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Nombre Implemento */
		.contenedor .ndetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Monto */
		.contenedor .mdetalle
		{
			height: 0.1cm !important;
			width: 1.5cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .cbase
		{
			height: 0.1cm !important;
			width: 5.5cm !important;
			font-size: 0.24cm !important;
			margin-left: 15.5cm !important;
			font-weight: bold !important;
		}
		.contenedor .cigv
		{
			height: 0.1cm !important;
			width: 5.5cm !important;
			font-size: 0.24cm !important;
			margin-left: 16.7cm !important;
			font-weight: bold !important;
		}
		.contenedor .ctotal
		{
			height: 0.1cm !important;
			width: 5.5cm !important;
			font-size: 0.24cm !important;
			margin-left: 16.5cm !important;
			font-weight: bold !important;
		}
		.contenedor .ddetalle2 td
		{
			height: 0.3cm !important;
			text-align: center;
		}

		#fallas tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#fallas tr th:nth-child(2)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(3)
		{
			width: 27% !important;
		}
		#fallas tr th:nth-child(4)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(5)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(6)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(7)
		{
			width: 10% !important;
		}
		#actividades tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#actividades tr th:nth-child(2)
		{
			width: 67% !important;
		}
		#actividades tr th:nth-child(3)
		{
			width: 8% !important;
		}
		#actividades tr th:nth-child(4)
		{
			width: 7% !important;
		}
		#actividades tr th:nth-child(5)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(6)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(7)
		{
			width: 5% !important;
		}

		.firma
		{
			width: 9.85cm;
			position: absolute;
			left: 0.05cm;
			top: 23.5cm;
		}
		.firma, .firma tr, .firma th, .firma td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			/*font-size: 0.45cm !important*/
		}
		.firma th
		{
			background-color: rgb(64,64,64);
			color: white;
			text-align: center;
			height: 0.4cm !important;
			font-size: 0.25cm !important
		}
		.fespacio
		{
			width: 9.7cm;
			height: 0.9cm;
			text-align: center;
			font-size: 0.25cm !important
		}
		.farea
		{
			width: 1.0cm;
			height: 0.5cm !important;
			text-align: center;
			font-size: 0.25cm !important
		}
		.ffecha
		{
			width: 1.0cm;
			height: 0.5cm !important;
			text-align: center;
			font-weight: bold;
			font-size: 0.25cm !important
		}

		#marca-agua 
		{
            position: fixed;
            /** 
                Establece una posición en la página para tu imagen
                Esto debería centrarlo verticalmente
            **/
            bottom:   10cm;
            left:     3.5cm;
            /** Cambiar las dimensiones de la imagen **/
            width:    13cm;
            height:   13cm;
            /** Tu marca de agua debe estar detrás de cada contenido **/
            z-index:  -1000;
        }
	</style>