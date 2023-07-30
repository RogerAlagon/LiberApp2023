<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th width="1.7cm"></th>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="50">
			</th>
			<th class="titulo"><h2>TRANSPORTES LIBERTAD</h2></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td width="1.2cm"></td>
			<td colspan="2" class="titulo2">Logistica y Transporte en Materiales Peligrosos e Insumos Quimicos y Bienes Fiscalizados</td>
		</tr>
	</tbody>
</table>
<div id="cuerpo" class="cuerpo">
	<h3 class="titulo">DOCUMENTO DE AUTORIZACION DE DESCUENTO<h3>
	<p>Yo, <u><b>{{ $cabecera["personal"] }}</b></u>, identificado con DNI N° <u><b>{{ $cabecera["dni"] }}</b></u> quien ocupó el cargo de <u><b>{{ $cabecera["cargo"] }}</b></u> en, la 
	empresa Transportes Libertad SAC. Autorizo realizarme el descuento correspondiente a Viatico Rendido: 
	@foreach ($cuerpo as $fil)
		<u><b>{{ $fil["tip"] }}</b></u>
	@endforeach
	por la cantidad de <u><b>{{ $cabecera["descuento"] }}</b></u> en la planilla
	correspondiente al mes de <u><b>{{ $cabecera["month"] }}</b></u> año <u><b>{{ $cabecera["year"] }}</b></u> y en caso de terminar mi vínculo laboral con la empresa, me comprometo en hacer la devolución
	de los fondos adeudados, para lo cual solicito se me pueda hacer el pago de los Beneficios Laborales en efectivo.</p>

	<p>Asimismo declaro que la celabración del presente documento no ha mediado dolo, violencia ni medio de intimidación alguna y declaro ser mi libre
		voluntad, por lo que procede a firmar e imprimir mi huella digital.
	</p>
</div>
<table id="reportef" class="reportef">
	<tbody class="contenido">
	<tr>
			<td width="1.7cm">&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td id="mostrarb" rowspan="4">&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
		</tr>
		<tr>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td width="6.9cm" rowspan="2"><p class="linea-firma">DNI.:</p></td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
		</tr>
		<tr>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
			<td >&nbsp;</td>
		</tr>
	</tbody>
</table>
	<style>
		@page
		{
            margin: 0.6cm;
        }
        @font-face
        {
  			font-family: Arial;
  			/*font-style: normal;
  			font-weight: normal;
  			src: url(http://themes.googleusercontent.com/static/fonts/opensans/v8/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf) format('truetype');*/
		}
        /*CABECERA*/
		#cuerpo .titulo
		{
			text-align: center;
			text-decoration: underline;
		}

		#cuerpo
		{
			margin-left: 1.8cm;
			margin-right: 1.8cm;
		}
		#cuerpo p 
		{
			word-spacing: 0.3cm;
			text-align: justify;
			line-height: 0.7cm;
		}
		#firma
		{
			margin-top: 10.5cm;
			margin-left: 1.8cm;
			margin-right: 11.0cm;
		}
		table, td, th, tr, thead 
		{
			border: none;
			text-align: justify;
			/*width: 30px;
			white-space: nowrap;*/
		}
		.linea 
		{
  			border-top: 1px solid black;
  			height: 2px;
  			max-width: 800px;
  			padding: 0;
  			/*margin: 50px auto 0 auto;*/
		}
		.linea-firma 
		{
  			border-top: 1px dashed black;
  			height: 2px;
  			max-width: 800px;
  			padding: 0;
  			/*margin: 50px auto 0 auto;*/
		}
		#mostrarb
		{
			border: 0.002cm solid black;
		}

		#rectangulo { 
    		border: solid 1px #000; 
		}

		#reportef tr, #reportef td
		{
			text-align: justify;
			text-indent: 1em;
		}

		#cabecera
		{
			width: 100%;
		}
		#cabecera, #cabecera tr, #cabecera th
		{
			/*border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;*/
		}
		#cabecera .logo
		{
			width: 4cm;
		}
		#cabecera .titulo
		{
			/*text-align: center;*/
		}
		#cabecera .codificacion
		{
			font-size: 0.2cm;
			width: 4cm;
		}
		/*CABECERA DEL REPORTE*/
		#reportef
		{
			width: 100%;
			margin-top: 7.5cm;
		}
		#reportef, #reportef tr, #reportef th, #reportef td
		{
			/*border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			text-align: center;*/
		}
		#reportef .titulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		.titulo2 
		{
			//font-size: 0.4cm;
		}
		#reportef .subtitulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
		}
		#reportef .cdetalle
		{
			font-size: 0.3cm;
			font-weight: bold;
		}
		/*DETALLE DEL REPORTE*/
		#contenedor
		{
			width: 100%;
			margin: 0;
			padding: 0;
		}
		#contenedor tr td
		{
			width: 50%;
			margin: 0;
			padding: 0;
			vertical-align: top;

		}
		.reported
		{
			/*width: 100%;*/
			font-size: 0.25cm !important;
		}
		
		.reported, .reported tr, .reported th, .reported td
		{
			border-collapse: collapse;
			border:  0.005cm solid black;
		}
		
		.reported .dtitulo th
		{
			background-color: rgb(64,64,64);
			color: white;
			/*font-weight: bold;*/
			/*font-size: 0.25cm;*/
			text-align: center;
			height: 0.55cm !important;
		}
		.reported .ddetalle td
		{
			height: 0.275cm !important;
		}

		.reported tr td:nth-child(1)
		{
			width: 10% !important;
			text-align: center;
		}
		.reported tr td:nth-child(3), .reported tr td:nth-child(4)
		{
			width: 5% !important;
			text-align: center;
		}
		.reported tr td:nth-child(2)
		{
			width: 40% !important;
		}
		.reported tr td:nth-child(5)
		{
			width: 40% !important;
			font-size: 0.2cm !important;
		}

		/*.firma
		{
			width: 9.85cm;
			position: absolute;
			left: 0.05cm;
			top: 26.5cm;
		}
		.firma, .firma tr, .firma th, .firma td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			font-size: 0.25cm !important
		}
		.firma th
		{
			background-color: rgb(64,64,64);
			color: white;
			text-align: center;
			height: 0.4cm !important;
		}*/
		.fespacio
		{
			width: 4.8625cm;
			height: 1.5cm;
		}

		/*ESTILOS GENERALES*/
		/*td
		{
			margin-top: 0.05cm !important;
			margin-bottom: 0.05cm !important;
		}
		#Contenedor
		{
			width: 100%;
			font-family: sans-serif;
		}
		#Espacio
		{
			width: 0.4cm;
			color: rgba(255,255,255,0);
		}
		#Contenedor2
		{
			border: 0.03cm solid black;
			width: 100%;
			border-collapse:  collapse;
		}*/
		





		/*#t1
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.5cm;
		}
		#t2
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		#t3
		{
			text-align: center;
			font-size: 0.3cm;
		}
		#t4
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.5cm;
			margin-bottom: 0.5cm !important;
		}
		#t5
		{
			border: 0.03cm solid black;
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		#t6
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.3cm;
			margin-top: 0.2cm !important;
			margin-bottom: 0.2cm !important;
		}
		.Datos td
		{
			font-size: 0.2cm;
			border: 0.03cm solid black;
			border-collapse:  collapse;
			margin-left: 0.05cm !important;
		}
		.Datos td:nth-child(1), .Datos td:nth-child(3)
		{
			width: 12%;
		}
		.Datos td:nth-child(2), .Datos td:nth-child(4)
		{
			width: 38%;
		}
		.Datos2 td
		{
			font-size: 0.3cm;
		}
		.Neto td
		{
			font-weight:  bold;
		}
		.Neto td:first-child
		{
			text-align:  right;
			font-size: 0.25cm;
		}
		.Fecha td
		{
			text-align: center;
		}
		.Firma td
		{
			margin-top:  1.5cm !important;
			text-align: center;
			font-weight: bold;
		}*/
		/*ESTILOS TABLA INGRESOS Y EGRESOS*/
		/*#Montos
		{
			width:  100%;
			border: 0.03cm solid black;
			border-collapse: collapse;
			margin-top:  0 !important;
			font-size: 0.25cm;
		}
		.Subtitulo
		{
			text-align:  center;
			font-weight:  bold;
			border: 0.03cm solid black;
			height: 0.33cm !important;
		}
		#Montos td
		{
			border: 0.03cm solid black;
			margin-left: 0.05cm !important;
			height: 0.33cm !important;
		}
		#Montos tr td:first-child
		{
			width: 60%;
		}
		#Montos tr td:nth-child(2)
		{
			text-align: center;
		}*/

	</style>