<!DOCTYPE html>
<html>
<head>
	<title>Son et Compression - TPE</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="stylesheet" media="screen and (max-width: 800px)" type="text/css" href="styles/phone.css">
	<script type="text/javascript" src="../jquery-3.5.0.min.js"></script>
	<?php require("icon/iconsLinks.html") ?>
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
		<?php include('icon/logo.svg'); ?>
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
			<article class="content full" id="plan"><?php require("staticFiles/plan.html") ?></article>
		</div>
		<div class="page"  page="1"></div>
		<div class="page"  page="2"></div>
		<div class="page"  page="3"></div>
		<div class="page"  page="4"></div>
		<div class="page"  page="5"></div>
		<div class="page"  page="6"></div>
		<div class="page"  page="7"></div>
		<div class="page"  page="8"></div>
		<div class="page"  page="9"></div>
		<div class="page"  page="10"></div>
		<div class="gridcontainer">
			<div class="diapocontain hidden default" page="1">
				<img src="images/diapo/intro.jpg" id="d1" class="diapo" draggable="false">
				<h3>Introduction</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="2">
				<img src="images/diapo/son.png" id="d2"  class="diapo" draggable="false">
				<h3>Physique du son</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="3">
				<img src="images/diapo/micro.png" id="d3" class="diapo" draggable="false">
				<h3>Fonctionnement d'un microphone</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="4">
				<img src="images/diapo/dft.jpg" id="d4" class="diapo" draggable="false">
				<h3>Introduction à la Transformation de Fourier (DFT)</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="5">
				<img src="images/diapo/maths.png" id="d5" class="diapo" draggable="false">
				<h3>Transformation de Fourier, l'équation mathématique</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="6">
				<img src="images/diapo/fft.jpg" id="d6" class="diapo" draggable="false">
				<h3>Accélération de la Transformation de Fourier</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="7">
				<img src="images/diapo/compression.jpg" id="d7" class="diapo" draggable="false">
				<h3>Compression sans perte de données</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="8">
				<img src="images/diapo/resultats.jpg" id="d8" class="diapo" draggable="false">
				<h3>Résultats des compressions sans perte</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="9">
				<img src="images/diapo/conclusion.jpg" id="d9" class="diapo" draggable="false">
				<h3>Conclusion</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div class="diapocontain hidden default" page="10">
				<img src="images/diapo/biblio.png" id="d10" class="diapo" draggable="false">
				<h3>Bibliographie</h3>
				<div class="loaderDiapo"></div>
			</div>
			<div id="planDiapo">
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