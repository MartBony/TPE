<!DOCTYPE html>
<html>
<head>
	<title>Son et Compression - TPE</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="stylesheet" media="screen and (max-width: 800px)" type="text/css" href="styles/phone.css">
	<script type="text/javascript" src="../jquery-3.5.0.min.js"></script>
  	<link rel="apple-touch-icon" sizes="57x57" href="icon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="icon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="icon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="icon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="icon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="icon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="icon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="icon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="icon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="icon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="icon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png">
	<link rel="manifest" href="icon/manifest.json">
	<link rel="manifest" href="../manifest.json"></link>
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="icon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css" />
	<meta name="viewport" content="width=device-width" />
</head>
<body>
	<header>
		<?php include('images/logo.svg'); ?>
		<h1>Son et compression des données</h1>
	</header>
	<section id="loaderHolder">
		<div></div>
	</section>
	<div class="retour">
		<div class="contret">
			<span></span>
		</div>
	</div>
	<div class="r0">
		<div class="contret">
			<span></span>
		</div>
	</div>
	<div class="reduire">
		<span></span>					
	</div>
	<div class="ouvrir">
		<span></span>					
	</div>
	<div class="accueil">
		<div class="accbg">
			
		</div>
		<article>
			<h1>T<span>PE</span></h1>
			<hr>
			<h2>Transports et Transferts - Enregistrement et compression d'un signal sonore pour sa transmission</h2>
			<h3><ul><li>BOYE Guillaume</li><li>GREGORIO Martin</li><li>LE DORTZ Mathis</li></ul></h3>
          <h2>Bienvenue</h2>
          	<h2><em class="bold">Disciplines</em> : Sciences-Physiques et Mathématiques</h2>
			<button>Démarrer</button>
		</article>
	</div>
	<section class="corp acc">
		<aside id="ascontent">
			<button>Précédent</button>
			<button>Suivant</button>
		</aside>
		<div class="page" page="0">
			<article class="content full" id="c0">
				<article class="p0head">
					<h2>Plan du TPE</h2>
					<div></div>
				</article>
				<article>
					<h4>Introduction</h4>
					<ul>
						<li><h5>La pollution du Web</h5></li>
						<li><h5>Notre TPE : Comment compresser les données pour limiter le coût énergétique du transport d'information</h5></li>
					</ul>
				</article>
				<article>E
					<h4>Physique du son</h4>
					<ul>
						<li><h5>Définition du son</h5></li>
						<li><h5>Propagation du son</h5></li>
						<li><h5>Caractéristiques du son</h5></li>
					</ul>
				</article>
				<article>
					<h4>Fonctionnement d'un microphone</h4>
				</article>
				<article>
					<h4>Introduction à la Transformation de Fourier (DFT)</h4>
					<ul>
						<li><h5>Spectre du son</h5></li>
						<li><h5>Construisons la Transformation</h5></li>
							<ul>
								<li><h6>Le principe d'enroulement</h6></li>
								<li><h6>La face cachée de l'enroulement</h6></li>
							</ul>
						<li><h5>Conclusion</h5></li>
					</ul>
				</article>
				<article>
					<h4>Transformation de Fourier, l'équation mathématique</h4>
					<ul>
						<li><h5>Prérequis</h5></li>
							<ul>
								<li><h6>Nombres complexes</h6></li>
								<li><h6>Formule d'Euler</h6></li>
							</ul>
						<li><h5>Enrouler la fonction sonore</h5></li>
						<li><h5>Test de la DFT</h5></li>
						<li><h5>Conclusion</h5></li>
					</ul>
				</article>
				<article>
					<h4>Accélération de la Transformation de Fourier</h4>
					<ul>
						<li><h5>Transformation de Fourier rapide (FFT)</h5></li>
						<li><h5>Application de la FFT</h5></li>
						<li><h5>Programmation de l'expérimentation</h5></li>
						<li><h5>Résultats de compression</h5></li>
						<li><h5>Expérimentations sonores</h5></li>
						<li><h5>Conclusion et limites</h5></li>
					</ul>
				</article>
				<article>
					<h4>Compression sans perte de données</h4>
					<ul>
						<li><h5>Introduction</h5></li>
						<li><h5>RLE</h5></li>
						<li><h5>Codage Huffman</h5></li>
						<li><h5>LZ77</h5></li>
					</ul>
				</article>
				<article>
					<h4>Résultats des compressions sans perte</h4>
					<ul>
						<li><h5>Nos attentes</h5></li>
						<li><h5>Résultat des expérimentations</h5></li>
					</ul>
				</article>
				<article>
					<h4>Conclusions</h4>
					<ul>
						<li><h5>La diversité des méthodes de compression d'un son</h5></li>
						<li><h5>La compression dans la technologie actuelle</h5></li>
					</ul>
				</article>
				<article>
					<h4>Bibliographie</h4>
					
				</article>

			</article>
		</div>
		<div class="page p1"  page="1"></div>
		<div class="page p2"  page="2"></div>
		<div class="page p3"  page="3"></div>
		<div class="page p4"  page="4"></div>
		<div class="page p5"  page="5"></div>
		<div class="page p6"  page="6"></div>
		<div class="page p7"  page="7"></div>
		<div class="page p8"  page="8"></div>
		<div class="page p9"  page="9"></div>
		<div class="page p10"  page="10"></div>
		<div class="gridcontainer">
			<div class="diapocontain hidden default dc1" page="1">
				<img src="images/min/intro.jpg" id="d1" class="diapo" draggable="false">
				<h3>Introduction</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc2" page="2">
				<img src="images/min/son.png" id="d2"  class="diapo" draggable="false">
				<h3>Physique du son</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc3" page="3">
				<img src="images/min/micro.png" id="d3" class="diapo" draggable="false">
				<h3>Fonctionnement d'un microphone</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc4" page="4">
				<img src="images/min/dft.jpg" id="d4" class="diapo" draggable="false">
				<h3>Introduction à la Transformation de Fourier (DFT)</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc5" page="5">
				<img src="images/min/maths.png" id="d5" class="diapo" draggable="false">
				<h3>Transformation de Fourier, l'équation mathématique</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc6" page="6">
				<img src="images/min/fft.jpg" id="d6" class="diapo" draggable="false">
				<h3>Accélération de la Transformation de Fourier</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc7" page="7">
				<img src="images/min/compression.jpg" id="d7" class="diapo" draggable="false">
				<h3>Compression sans perte de données</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc8" page="8">
				<img src="images/min/resultats.jpg" id="d8" class="diapo" draggable="false">
				<h3>Résultats des compressions sans perte</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc9" page="9">
				<img src="images/min/conclusion.jpg" id="d9" class="diapo" draggable="false">
				<h3>Conclusion</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default dc10" page="10">
				<img src="images/min/biblio.png" id="d10" class="diapo" draggable="false">
				<h3>Bibliographie</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div id="plan">
				<h3>Plan du TPE</h3>
				<div class="arrow">
					<div class="contarrow">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<script type="text/javascript" src="js/canvasjs/canvasjs.min.js"></script>
	<script type="module" src="js/script.js"></script>
	<noscript>Votre navigateur ne supporte pas javascript, mettez-le impérativement à jour ou utiliser-en un autre plus récent</noscript>
</body>
</html>