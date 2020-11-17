<!DOCTYPE html>
<html>
<head>
	<title>Son et Compression - TPE</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
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
</head>
<body>
	<header>
		<img src="images/logon.jpg" class="logon logo">
		<!-- <img src="images/logob.jpg" class="logob logo"> Pur l'animation que g abandonné-->
		<h1>Son et compression des données</h1>
	</header>
	<section class="contgenl">
		<div class="generalloader"></div>
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
		<div class="page p0">
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
		<div class="page p1"></div>
		<div class="page p2"></div>
		<div class="page p3"></div>
		<div class="page p4"></div>
		<div class="page p5"></div>
		<div class="page p6"></div>
		<div class="page p7"></div>
		<div class="page p8"></div>
		<div class="page p9"></div>
		<div class="page p10"></div>
		<div class="gridcontainer">
			<div class="diapocontain default dc1">
				<img src="images/a row2.jpg" id="d1" class="diapo" draggable="false">
				<h3>Introduction</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc2">
				<img src="images/img2.png" id="d2"  class="diapo" draggable="false">
				<h3>Physique du son</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc3">
				<img src="images/colors2.png" id="d3" class="diapo" draggable="false">
				<h3>Fonctionnement d'un microphone</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc4">
				<img src="images/extend2.jpg" id="d4" class="diapo" draggable="false">
				<h3>Introduction à la Transformation de Fourier (DFT)</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc5">
				<img src="images/line2.jpg" id="d5" class="diapo" draggable="false">
				<h3>Transformation de Fourier, l'équation mathématique</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc6">
				<img src="images/modern3.jpg" id="d6" class="diapo" draggable="false">
				<h3>Accélération de la Transformation de Fourier</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc7">
				<img src="images/shadow2.jpg" id="d7" class="diapo" draggable="false">
				<h3>Compression sans perte de données</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc8">
				<img src="images/ext2.jpg" id="d8" class="diapo" draggable="false">
				<h3>Résultats des compressions sans perte</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc9">
				<img src="images/cloud.jpg" id="d9" class="diapo" draggable="false">
				<h3>Conclusion</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain default dc10">
				<img src="images/cube2.jpg" id="d10" class="diapo" draggable="false">
				<h3>Bibliographie</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="plan" onclick="openplan();">
				<h3>Plan du TPE</h3>
				<div class="arrow">
					<div class="contarrow">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<footer></footer>
	<script type="text/javascript" src="js/canvasjs/canvasjs.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript">
		var page = {
			position: 0,
			nombreDiapo: 10,
			visitHistory: new Array(),
			animate: {
				openPage: function(rank){
					var i = rank-1;

					if (page.visitHistory[i] == true){
						if (rank == 5) {
							animatecaninv();
							animatecanfreq();
							
							animatecantime();
						}
						else if(rank == 4){
							animatecantren();
							animatecanond();
						}
									
						$('.p'+ rank +'').css({'display':'block'});

						$('.diapocontain').eq(i).css({'z-index':'2'});
						$('.diapocontain').eq(i).css({'transition':'all 0s linear'});
						setPosition($('.diapocontain').eq(i), getPosition($('.diapocontain').eq(i)).left, getPosition($('.diapocontain').eq(i)).top, 'fixed');
						setwidth($('.diapocontain').eq(i), getwidth($('.diapocontain').eq(i)), 'px');// Mettre la diapo à sa position absolue et taille

						$('.diapocontain').eq(i).removeClass('default');
						$('.diapocontain').eq(i).css({'transition':''});
						$('.diapocontain').eq(i).after('<div class="diapocontain default dc0"></div>'); //Diapo noire pour conserver la grille

						$('.retour').css({'display':'block'});


						setTimeout(function (){
							$('.p'+ rank).addClass('opened');

							$('.diapocontain').eq(i).addClass('opened');
							$('.diapocontain').eq(i).css({'top':'', 'left':'', 'width':''});
							$('.retour').addClass('opened');

							$('.p'+ rank +' .content').addClass('opened');
							$('.p'+ rank +' article').each(function(i){
								setTimeout(function(){
									$('.p'+ rank +' article').eq(i).addClass('opened');
								}, 350+i*100);
							});

							setTimeout(function(){
								$('.diapocontain').removeClass('default');
								$('.reduire').css({'display':'block'});
								$('.reduire').css({'opacity':'1'});
							},600);
						}, 20);
						
					}
					else{

						$('.loaderacc').eq(i).css({'display':'block'});

						$( ".p"+ rank ).load("d"+ rank +"content.html",function() {

							$('.loaderacc').css({'display':'none'});

							setTimeout(function (){
									
									$('.p'+ rank +'').css({'display':'block'});

									$('.diapocontain').eq(i).css({'z-index':'2'});
									$('.diapocontain').eq(i).css({'transition':'all 0s linear'});
									setPosition($('.diapocontain').eq(i), getPosition($('.diapocontain').eq(i)).left, getPosition($('.diapocontain').eq(i)).top, 'fixed');
									setwidth($('.diapocontain').eq(i), getwidth($('.diapocontain').eq(i)), 'px');// Mettre la diapo à sa position absolue et taille

									$('.diapocontain').eq(i).removeClass('default');
									$('.diapocontain').eq(i).css({'transition':''});
									$('.diapocontain').eq(i).after('<div class="diapocontain default dc0"></div>'); //Diapo noire pour conserver la grille

									$('.retour').css({'display':'block'});


									setTimeout(function (){
										$('.p'+ rank).addClass('opened');

										$('.diapocontain').eq(i).addClass('opened');
										$('.diapocontain').eq(i).css({'top':'', 'left':'', 'width':''});
										$('.retour').addClass('opened');

										$('.p'+ rank +' .content').addClass('opened');
										$('.p'+ rank +' article').each(function(i){
											setTimeout(function(){
												$('.p'+ rank +' article').eq(i).addClass('opened');
											}, 350+i*100);
										});

										setTimeout(function(){
											$('.diapocontain').removeClass('default');
											$('.reduire').css({'display':'block'});
											$('.reduire').css({'opacity':'1'});
										},600);
									}, 20);
							}, 1);
						});

						page.visitHistory[i] = true;

						
					}

					history.pushState({key : ''+ rank}, 'titre', 'd'+ rank +'.php');
					page.position = rank;
				},
				retour: function(){


					$('.gridcontainer').removeClass('hidden');
					$('.gridcontainer').css({'display':'grid'});

					$('.reduire').css({'opacity':'0'});
					$('.diapocontain').css({'z-index':''});

					$('.diapocontain').addClass('default').removeClass('opened full');
					$('.diapocontain').css({'position':''});
					$('.dc0').remove();

					$('.retour').css({'display':'block'});


					$('.page').removeClass('opened');

					$('.retour').removeClass('opened');

					$('.content').removeClass('opened');
					$('article').removeClass('opened');


					setTimeout(function (){
						
						$('.reduire').css({'display':'none'});
						$('.page').css({'display':'none'});

					}, 500);


					page.position = 0;
				},
				move: function(pos, dir){
					scrolltotop();

					$('article').removeClass('opened');
					if (dir == 'suiv') {
						var to = pos+1 ;
						/* $('.p'+ pos +'').css({'transform':'translateX(-200px)'}); Crée des problèmes avec .blur*/
					}
					else if(dir == 'prec') {
						var to = pos-1;
						/*$('.p'+ pos +'').css({'transform':'translateX(100%)'});*/
					}

					var i = to-1;
					$('.dc0').remove();


					if (page.visitHistory[i] == true){
						$('.content').addClass('opened');
						setTimeout(function(){
							$('.p'+ pos).css({'display':'none'});
						},100);



						$('.diapocontain').removeClass('opened');
						$('.diapocontain').css({'z-index':'', 'position':''});

						setTimeout(function (){
							$('.page').removeClass('opened');
							$('.p'+ to).addClass('opened');

							$('.p'+ to +'').css({'display':'block'});
							$('.diapocontain').eq(i).addClass('opened').removeClass('default');
							$('.diapocontain').eq(i).css({'z-index':'2', 'position':'fixed'});

							$('.p'+ to).css({'display':'block'});

							$('.p'+ to +' .content').addClass('opened');
							$('.p'+ to +' article').each(function(i){
								setTimeout(function(){
									$('.p'+ to +' article').eq(i).addClass('opened');
								}, 350+i*100);
							});
						}, 20);


						if (to == 5) {// Canvald5
							animatecaninv();
							animatecanfreq();
							
							animatecantime();
						}
						else if(to == 4){// Canvasd4
							animatecantren();
							animatecanond();
						}

					}
					else{

						$('.contgenl').addClass('opened');
						$('.contgenl').css({'display':'block'});


						$( ".p"+ to ).load("d"+ to +"content.html", function() {


							$('.content').addClass('opened');


							$('.diapocontain').removeClass('opened');
							$('.diapocontain').css({'z-index':'', 'position':''});

							setTimeout(function (){
								$('.page').removeClass('opened');
								$('.p'+ to).addClass('opened');

								$('.p'+ to +'').css({'display':'block'});
								$('.diapocontain').eq(i).addClass('opened').removeClass('default');
								$('.diapocontain').eq(i).css({'z-index':'2', 'position':'fixed'});


								$('.p'+ to).css({'display':'block'});

								$('.p'+ to +' .content').addClass('opened');
								$('.p'+ to +' article').each(function(i){
									setTimeout(function(){
										$('.p'+ to +' article').eq(i).addClass('opened');
									}, 350+i*100);
								});
							}, 20);


							$('.contgenl').removeClass('opened');
							setTimeout(function(){
								$('.contgenl').css({'display':'none'});
								$('.p'+ pos +'').css({'display':'none'});
							},200);

							$('.content article').each(function(i){
								setTimeout(function(){
									$('.content article').eq(i).addClass('opened');
								}, i*100);
							});
							if (to == 5) {// Canvald5
								animatecaninv();
								animatecanfreq();
								
								animatecantime();
							}
							else if(to == 4){// Canvasd4
								animatecantren();
								animatecanond();
							}
						});	

						page.visitHistory[to-1] = true;
						
					}

					

					$('.content').addClass('opened');

					history.pushState({key : 'move', pos : ''+ pos}, 'titre', '../TPE/d'+ to +'.php');
					
					page.position = to;
				},
				toggleExpand: function(state){
					if (state == "reduire") {
						$('body').css({'overflow-x':'hidden'});
						$('.rightbar, .diapocontain, .ascontent, .content').addClass('full');
						$('.reduire').css({'display':'none'});
						setTimeout(function(){
							$('.ouvrir').css({'display':'block'});
						}, 500);
						$('#caneuler').css({'transform':'scale(1.4)'});
						$('.eulercont').css({'margin':'50px'});
					}
					else if(state == "ouvrir"){
						$('body').css({'overflow-x':'hidden'});
						$('.rightbar, .diapocontain, .ascontent, .content').removeClass('full');
						setTimeout(function(){
							$('.reduire').css({'display':'block'});
						}, 300);
						$('.ouvrir').css({'display':'none'});
						$('#caneuler').css({'transform':'scale(1)'});
						$('.eulercont').css({'margin':'0px'});
					}
				}
			}
		}
		for (var i = 0; i < page.nombreDiapo; i++) {
			page.visitHistory[i] = false;
		}

		$(document).ready(function (){
			
			window.onpopstate = function(event){ // https://youtu.be/L4QlCWUBdRg
				page.animate.retour();
			}


			$('.accueil button').click(function(){
				$('.accueil').css({'opacity':'0'});
				$('.accueil').css({'transform':'scale(1)'});
				setTimeout(function(){$('.accueil').css({'display':'none'});}, 400);
				$('.corp').css({'display':'block'});
				$('header').css({'display':'flex'});
				$('.corp, header').css({'opacity':'1'});
				openanimdiapo();
				$('.accueil').css({'background-position':'0% -100px'});
			});

			$('.diapocontain').each(function(e){
				if ($(this).hasClass('default')) {
					$(this).on('click', function(){
						page.animate.openPage(e+1);
					});
				}
			});

			$('.retour').click(function(){
				window.history.back();
			});

			$('.reduire').click(function() {
				page.animate.toggleExpand("reduire");
			});

			$('.ouvrir').click(function() {
				page.animate.toggleExpand("ouvrir");
			});


		});

		function openplan(){

			history.pushState({key : 'plan'}, 'titre', 'plan.php'); // https://youtu.be/L4QlCWUBdRg
			var num = 0;
			$('body').css({'overflow-x':'hidden'});

			$('.gridcontainer').addClass('hidden');

			setTimeout(function (){
				$('.gridcontainer').css({'display':'none'});

				$('.p0').css({'display':'block'});
				$('.p0').addClass('opened');


				setTimeout(function (){
					$('.retour').css({'display':'block'});
					$('.retour').addClass('opened');

					$('.content').addClass('opened');
					$('.content article').each(function(i){
						setTimeout(function(){
							$('.content article').eq(i).addClass('opened');
						}, 400+i*100);
					});
					$('.content').addClass('full');
				}, 100);
			}, 300);
		}

		function openanimdiapo(){
			$('.diapocontain').addClass('hidden');
			$('.diapocontain').each(function(i){
				setTimeout(function(){
					$('.diapocontain').eq(i).removeClass('hidden');
				}, 500+i*50);
			});
			setTimeout(function(){
				$('.plan').css({'transition':'all 400ms cubic-bezier(0.1 , 0.9 , 0.2 , 1)'});
				$('.plan').css({'opacity':'1'});
				$('.plan').css({'transform':'translateX(0px)'});
			}, 1000);
			var posd1 = getPosition($('.dc1'));
			var h1 = getwidth($('.dc1'));
			var w1 = getheight($('.dc1'));

			$('.guide').css({'background-position': posd1.left +'px,'+ posd1.top +'px'});
		}

		function getPosition (element){
			var position = { left : Math.floor(element.offset().left), top : Math.floor(element.offset().top) };
	  		return( position );
		}

		function getwidth (element){
			var width = element.width();
	  		return( width );
		}

		function getheight (element){
			var height = element.height();
	  		return( height );
		}

		function setwidth (element, width, unit) {
			element.css({'width':''+ width +''+ unit});
		}

		function setPosition (element, left, top, position) {
			element.css({'position':position,'left':''+ left +'px', 'top':''+ top +'px'});
		}
	</script>
	<noscript>Votre navigateur ne supporte pas javascript, mettez-le impérativement à jour ou utiliser-en un autre plus récent</noscript>
</body>
</html>