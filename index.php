<?php 

$nbdiapo = 10;
	
?>
<!DOCTYPE html>
<html>
<head>
	<title>Son et Compression - TPE</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
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
			<p></p>
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
			<div class="diapocontain dc1">
				<img src="images/a row2.jpg" id="d1" class="diapo" draggable="false">
				<h3>Introduction</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc2">
				<img src="images/img2.png" id="d2"  class="diapo" draggable="false">
				<h3>Physique du son</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc3">
				<img src="images/colors2.png" id="d3" class="diapo" draggable="false">
				<h3>Fonctionnement d'un microphone</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc4">
				<img src="images/extend2.jpg" id="d4" class="diapo" draggable="false">
				<h3>Introduction à la Transformation de Fourier (DFT)</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc5">
				<img src="images/line2.jpg" id="d5" class="diapo" draggable="false">
				<h3>Transformation de Fourier, l'équation mathématique</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc6">
				<img src="images/modern3.jpg" id="d6" class="diapo" draggable="false">
				<h3>Accélération de la Transformation de Fourier</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc7">
				<img src="images/shadow2.jpg" id="d7" class="diapo" draggable="false">
				<h3>Compression sans perte de données</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc8">
				<img src="images/ext2.jpg" id="d8" class="diapo" draggable="false">
				<h3>Résultats des compressions sans perte</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc9">
				<img src="images/cloud.jpg" id="d9" class="diapo" draggable="false">
				<h3>Conclusion</h3>
				<div class="loaderacc"></div>
			</div>
			<div class="diapocontain dc10">
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
		var nbdiapo = <?php echo $nbdiapo; ?>; 
		var Visited = new Array(nbdiapo);
		$.each(Visited, function(i) { Visited[i] = false });

		$(document).ready(function (){
			
			var position = 0;

			window.onpopstate = function(event){ // https://youtu.be/L4QlCWUBdRg
				/*if (event.state == null) {*/
					retour();
					retour0();
				/*}*/
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

			<?php for ($index = 1; $index <= $nbdiapo ; $index++) { ?>
				$('.dc'+ <?php echo($index); ?> +'').click(function(){

					opendiapo(<?php echo($index); ?>);
					
				});
			<?php } ?>

			$('.retour').click(function(){
				retour();
			});

			$('.r0').click(function(){
				retour0();
			});

			$('.reduire').click(function() {
				redouvr("reduire");
			});

			$('.ouvrir').click(function() {
				redouvr("ouvrir");
			});


		});

		function openplan(){

			history.pushState({key : 'plan'}, 'titre', 'plan.php'); // https://youtu.be/L4QlCWUBdRg
			var num = 0;
			$('body').css({'overflow-x':'hidden'});

			$('.gridcontainer').css({'transform':'translateX(-300px)'});
			$('.gridcontainer').css({'opacity':'0'});

			setTimeout(function (){
				$('.gridcontainer').css({'display':'none'});

				$('.p'+ num +'').css({'display':'block'});
				$('.p'+ num +'').css({'transform':'translateX(0)'});
				$('.p'+ num +'').addClass('opened');


				setTimeout(function (){
					$('.r0').css({'display':'block'});
					$('.r0').css({'opacity':'1'});
					$('.r0').css({'left':'5px'});

					$('.content').addClass('opened');
					$('.content article').each(function(i){
						setTimeout(function(){
							$('.content article').eq(i).addClass('opened');
						}, 400+i*100);
					});
					$('.content').css({'padding':'50px 20px 0px 20px'});
				}, 100);
			}, 300);
		}

		function retour0() {			position = 0;
			var num = 0;
			$('body').css({'overflow-x':'hidden'});
			
			$('.gridcontainer').css({'display':'grid'});

			$('.p'+ num +'').css({'transform':'translateX(300px)'});
			$('.p'+ num +'').removeClass('opened');

			setTimeout(function (){

				$('.p'+ num +'').css({'display':'none'});

				$('.gridcontainer').css({'transform':'translateX(0px)'});
				$('.gridcontainer').css({'opacity':'1'});

				setTimeout(function (){
					$('.r0').css({'display':'none'});
					$('.r0').css({'opacity':'0'});
					$('.r0').css({'left':'-5px'});

					$('.content').removeClass('opened');
					$('.content article').each(function(i){
						setTimeout(function(){
							$('.content article').eq(i).removeClass('opened');
						}, 400+i*100);
					});
					
				}, 100);
			}, 300);
		}

		function opendiapo(num){

			position = num;

			if (Visited[num-1] == false){

				$('.loaderacc').eq(num-1).css({'display':'block'});
				$('.loaderacc').eq(num-1).css({'opacity':'1'});

				$( ".p"+ num ).load("d"+ num +"content.html", function() {

					$('.loaderacc').css({'opacity':'0'});

					history.pushState({key : ''+ num}, 'titre', 'd'+ num +'.php'); // https://youtu.be/L4QlCWUBdRg

					$('body').css({'overflow-x':'hidden'});

					setTimeout(function (){
							$('.p'+ num +'').css({'display':'block'});
							$('.p'+ num +'').addClass('opened');
							setpos('#a'+ num +'', getimgpos('#d'+ num +'').left, getimgpos('#d'+ num +'').top, true);
							setwidth('#a'+ num +'', getwidth('#d'+ num +''), 'px');
							setTimeout(function (){
								$('.retour').css({'display':'block'});
								$('.retour').css({'opacity':'1'});
								$('.retour').css({'left':'5px'});

								$('.content').addClass('opened');
								$('.content').css({'padding':'50px 420px 0px 0px'});
								$('.content article').each(function(i){
									setTimeout(function(){
										$('.content article').eq(i).addClass('opened');
									}, 400+i*100);
								});

								$('#a'+ num +'').css({'transition':'all 500ms cubic-bezier(0.8 , 0 , 0.2 , 1)'});
								$('#a'+ num +'').css({'left':'100%'});
								$('#a'+ num +'').css({'width':'400px'});
								$('#a'+ num +'').css({'margin-left':'-410px'});
								$('#a'+ num +'').css({'top':'10px'});
								$('.rightbar, .blur').css({'width':'420px'});
								$('.blur').css({'background':'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.7))'});
								setTimeout(function(){
									$('.reduire').css({'display':'block'});
									$('.reduire').css({'opacity':'1'});
								},300);
								$('.loaderacc').css({'display':'none'});
							}, 100);
					}, 1);
				});

				Visited[num-1] = true;
			}
			else{

				if (num == 5) {
					animatecaninv();
					animatecanfreq();
					
					animatecantime();
				}
				else if(num == 4){
					animatecantren();
					animatecanond();
				}

				history.pushState({key : ''+ num}, 'titre', 'd'+ num +'.php'); // https://youtu.be/L4QlCWUBdRg

					$('body').css({'overflow-x':'hidden'});

					setTimeout(function (){
							$('.p'+ num +'').css({'display':'block'});
							$('.p'+ num +'').addClass('opened');
							setpos('#a'+ num +'', getimgpos('#d'+ num +'').left, getimgpos('#d'+ num +'').top, true);
							setwidth('#a'+ num +'', getwidth('#d'+ num +''), 'px');
							setTimeout(function (){
								$('.retour').css({'display':'block'});
								$('.retour').css({'opacity':'1'});
								$('.retour').css({'left':'5px'});

								$('.content').addClass('opened');
								$('.content').css({'padding':'50px 420px 0px 0px'});
								$('.content article').each(function(i){
									setTimeout(function(){
										$('.content article').eq(i).addClass('opened');
									}, 400+i*100);
								});


								$('#a'+ num +'').css({'transition':'all 500ms cubic-bezier(0.8 , 0 , 0.2 , 1)'});
								$('#a'+ num +'').css({'left':'100%'});
								$('#a'+ num +'').css({'width':'400px'});
								$('#a'+ num +'').css({'margin-left':'-410px'});
								$('#a'+ num +'').css({'top':'10px'});
								$('.rightbar, .blur').css({'width':'420px'});
								$('.blur').css({'background':'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.7))'});
								setTimeout(function(){
									$('.reduire').css({'display':'block'});
									$('.reduire').css({'opacity':'1'});
								},300);
							}, 100);
					}, 1);
			}

		}

		function retour() {
			$('.content article').removeClass('opened');
			// Canvald5
			position = 0;


			history.pushState(null, 'titre', '/TPE/'); // https://youtu.be/L4QlCWUBdRg
			setTimeout(function(){
						
				$('.retour').css({'opacity':'0'});
				$('.retour').css({'left':'-20px'});
				$('.retour').css({'transition':'all 150ms cubic-bezier(0.7 , 0 , 1 , 0.5)'});
					
				$('.content').removeClass('opened');
				$('.ascontent').css({'margin-left':'0px'});
				$('.rightbar, .blur').css({'width':'0px'});
				$('.blur').css({'background':'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,1))'});
			}, 100);

			setTimeout(function(){
				$('.page').css({'opacity':'0'});

				$('.reduire').css({'display':'none'});
				$('.ouvrir').css({'display':'none'});
				$('.rightbar, .blur, .ascontent').css({'transform':'translateX(0px)'});
				$('.content').css({'padding-right':'420px'});
				
			}, 300);

			setTimeout(function(){
				$('.rightbar, .blur').css({'width':'100%'});
				$('.ascontent').css({'transition':'none'});
				$('.retour').css({'display':'none'});
				$('.retour').css({'transition':'500ms all 500ms cubic-bezier(0.1 , 0.9 , 0.2 , 1)'});
				$('.page').css({'display':'none'});
				$('body').css({'overflow':'auto'});

				$('.content').css({'padding':'50px 420px 0px 0px'});
				$('.rightbar, .blur, .ascontent').css({'display':'block'});
				$('.rightbar, .blur, .content').css({'transition-duration':'200ms'});
				$('.rightbar, .blur, .ascontent').css({'transform':'translateX(0px)'});
				setTimeout(function(){
					$('.rightbar, .blur').css({'transition-duration':'600ms'});
					$('.content').css({'transition-duration':'400ms'});
				}, 300);
				$('#caneuler').css({'transform':'scale(1)'});
				$('.eulercont').css({'margin':'0px'});
			}, 600);

			$('.bgparralax').css({'transform':'translateY(0px) scale(1.1)'});
		}

		function move(pos, dir){
			scrolltotop();

			$('.content article').removeClass('opened');
			if (dir == 'suiv') {
				var to = pos+1 ;
				/* $('.p'+ pos +'').css({'transform':'translateX(-200px)'}); Crée des problèmes avec .blur*/
			}
			else if(dir == 'prec') {
				var to = pos-1;
				/*$('.p'+ pos +'').css({'transform':'translateX(100%)'});*/
			}

			
			position = to;


			if (Visited[to-1] == false){

				$('.contgenl').addClass('opened');
				$('.contgenl').css({'display':'block'});
				

				$( ".p"+ to ).load("d"+ to +"content.html", function() {
					$('.p'+ to +'').css({'display':'block'});
					$('.p'+ to +'').css({'opacity':'1'});
					$('.p'+ pos +'').css({'opacity':'0'});
					$('.content').css({'transform':'translateX(0px)'});

					$('.content').addClass('opened');

					$('body').css({'overflow-x':'hidden'});
					$('#a'+ to +'').css({'transition-duration':'0ms'});
					$('#a'+ to +'').css({'left':'100%'});
					$('#a'+ to +'').css({'width':'400px'});
					$('#a'+ to +'').css({'margin-left':'-410px'});
					$('#a'+ to +'').css({'top':'10px'});
					$('.rightbar, .blur').css({'width':'420px'});
					$('.blur').css({'background':'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.7))'});
					setTimeout(function(){$('#a'+ to +'').css({'transition-duration':'300ms'});},100);
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

				Visited[to-1] = true;

			}
			else{


				$('.content').addClass('opened');
				setTimeout(function(){
					$('.p'+ pos +'').css({'display':'none'});
				},100);

				$('.p'+ to +'').css({'display':'block'});
				$('.p'+ to +'').css({'opacity':'1'});

				$('#a'+ to +'').css({'transition':'all 300ms cubic-bezier(0.8 , 0 , 0.2 , 1)'});
				$('#a'+ to +'').css({'left':'100%'});
				$('#a'+ to +'').css({'width':'400px'});
				$('#a'+ to +'').css({'margin-left':'-410px'});
				$('#a'+ to +'').css({'top':'10px'});
				$('.rightbar, .blur').css({'width':'420px'});
				$('.blur').css({'background':'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.7))'});
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
			}

			

			$('.content').addClass('opened');

			history.pushState({key : 'move', pos : ''+ pos}, 'titre', '../TPE/d'+ to +'.php'); // https://youtu.be/L4QlCWUBdRg
		};

		function redouvr(state){
			if (state == "reduire") {
				$('body').css({'overflow-x':'hidden'});
				$('.content').css({'padding':'50px 20px 0px 20px'});
				$('.rightbar, .blur, .ascontent').css({'transform':'translateX(420px)'});
				$('.reduire').css({'display':'none'});
				setTimeout(function(){
					$('.rightbar, .blur, .ascontent').css({'display':'none'});
					$('.ouvrir').css({'display':'block'});
				}, 500);
				$('#caneuler').css({'transform':'scale(1.4)'});
				$('.eulercont').css({'margin':'50px'});
			}
			else if(state == "ouvrir"){
				$('body').css({'overflow-x':'hidden'});
				$('.content').css({'padding':'50px 420px 0px 0px'});
				$('.rightbar, .blur, .ascontent').css({'display':'block'});
				$('.rightbar, .blur, .content').css({'transition-duration':'200ms'});
				$('.rightbar, .blur, .ascontent').css({'transform':'translateX(0px)'});
				setTimeout(function(){
					$('.rightbar, .blur').css({'transition-duration':'600ms'});
					$('.content').css({'transition-duration':'400ms'});
					$('.reduire').css({'display':'block'});
				}, 300);
				$('.ouvrir').css({'display':'none'});
				$('#caneuler').css({'transform':'scale(1)'});
				$('.eulercont').css({'margin':'0px'});
			}
		}

		function openanimdiapo(){
			$('.diapocontain').css({'transform':'translateY(50px)'});
			$('.diapocontain').each(function(i){
				setTimeout(function(){
					$('.diapocontain').eq(i).css({'transition':'all 300ms cubic-bezier(0.1 , 0.9 , 0.2 , 1)'});
					$('.diapocontain').eq(i).css({'opacity':'1'});
					$('.diapocontain').eq(i).css({'transform':'translateY(0px)'});
				}, 500+i*50);
			});
			setTimeout(function(){
				$('.plan').css({'transition':'all 400ms cubic-bezier(0.1 , 0.9 , 0.2 , 1)'});
				$('.plan').css({'opacity':'1'});
				$('.plan').css({'transform':'translateX(0px)'});
				
			}, 1000);
			var posd1 = getimgpos('.dc1');
			var h1 = getwidth('.dc1');
			var w1 = getheight('.dc1');

			$('.guide').css({'background-position': posd1.left +'px,'+ posd1.top +'px'});
		}

		function getimgpos (id){
			var position = { left : Math.floor($(id).offset().left), top : Math.floor($(id).offset().top) };
	  		return( position );
		}

		function getwidth (id){
			var width = $(id).width();
	  		return( width );
		}

		function getheight (id){
			var height = $(id).height();
	  		return( height );
		}

		function setwidth (id, width, unit) {
			var obj = $(id);
			obj.css({'width':''+ width +''+ unit});
		}

		function setpos (id, left, top, fixed) {
			var obj = $(id);
			if (fixed == true) {
				obj.css({'position':'fixed'});
			}
			else{
				obj.css({'position':'absolute'});
			}
			obj.css({'left':''+ left +'px'});
			obj.css({'top':''+ top +'px'});
		}
	</script>
	<noscript>Votre navigateur ne supporte pas javascript, mettez-le impérativement à jour ou utiliser-en un autre plus récent</noscript>
</body>
</html>