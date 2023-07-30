<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">ACTA DE ENTREGA</th>
			<th class="codificacion">
				Código:  TL-SSOMA-F-006<br>
				Versión: 001<br>
				Fecha:   19/03/2019<br>
				Página:  1 de 1<br>
			</th>
		</tr>
	</thead>
</table>
@foreach ($entidades as $nro => $uentidad)
	<table id="trabajo" class="trabajo">
		<thead>
			<tr>
				<th class="titulo" colspan="12">DATOS PRINCIPALES</th>
			</tr>
		</thead>
		<tbody>
	        <tr>
				<td class="subtitulo">APELLIDOS Y NOMBRES</td>
				<td class="cdetalle" colspan="11">{{ $uentidad["nom"] }}</td>
			</tr>
			<tr>
				<td class="subtitulo" colspan="2">CARGO</td>
				<td class="cdetalle" colspan="2">{{ $uentidad["car"] }}</td>
				<td class="subtitulo" colspan="2">DNI</td>
				<td class="cdetalle" colspan="2">{{ $uentidad["dni"] }}</td>
				<td class="subtitulo" colspan="2">FECHA ENTREGA</td>
				<td class="cdetalle" colspan="2">{{ $uentidad["fec"] }}</td>
			</tr>
			
		</tbody> 
	</table>

	<table class="contenedor" id="fallas" width="100%">
		<tr class="ddtitulo">
			<th>ITEM</th>
			<th>GRUPO</th>
			<th>IMPLEMENTO</th>
			<th>FECHA CAMBIO</th>
			<th>MOTIVO</th>
			<th>FIRMA</th>
			<th>OBSERVACIONES</th>
		</tr>
		@foreach ($uentidad["asi"] as $nro2 => $uasignacion)
			<tr class="ddetalle">
		    	<td class="idetalle">{{ $nro2+1 }}</td>
		    	<td class="nodetalle">{{ $uasignacion["gru"] }}</td>
		    	<td class="nidetalle">{{ $uasignacion["imp"] }}</td>
				<td class="fedetalle">{{ $uasignacion["ven"] }}</td>
				<td class="modetalle"></td>
				<td class="modetalle"></td>
				<td class="obdetalle"></td>
		    </tr>
		@endforeach
		<tr class="ddetalle">
			<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
		</tr>
		<tr class="ddetalle">
			<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
		</tr>
		<tr class="ddetalle">
			<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
		</tr>
	</table>
@endforeach

<table class="contenedor" width="100%">
	<tr>
		<th class="ltitulo">LEYENDA:</th>
		<th class="ptitulo">P: Primera vez</th>
		<th class="dtitulo">D: Deterioro</th>
		<th class="etitulo">E: Extravio</th>
		<th class="rtitulo">R: Renovacion</th>
		<th class="ttitulo">T: Tiempo de vida</th>
	</tr>
</table>
<table class="firma">
	<tr>
		<th>AUTORIZA</th>
	</tr>
	<tr>
		<td class="fespacio"></td>
		<!--<td class="farea"></td>-->
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
		/* Grupo */
		.contenedor .nodetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Implemento */
		.contenedor .nidetalle
		{
			height: 0.1cm !important;
			width: 5.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Fecha*/
		.contenedor .fedetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Motivo*/
		.contenedor .modetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Leyenda */
		.contenedor .ltitulo
		{
			height: 0.1cm !important;
			width: 3.06cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .ptitulo 
		{
			height: 0.1cm !important;
			width: 2.72cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .dtitulo 
		{
			height: 0.1cm !important;
			width: 2.72cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .etitulo 
		{
			height: 0.1cm !important;
			width: 2.50cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .rtitulo 
		{
			height: 0.1cm !important;
			width: 2.50cm !important;
			font-size: 0.20cm !important;
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
			/*width: 9.7cm;*/
			width: 19.5cm;
			height: 1.5cm !important;
			text-align: center;
			font-size: 0.25cm !important
		}
		.farea
		{
			width: 9.5cm;
			height: 1.5cm !important;
			text-align: center;
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
