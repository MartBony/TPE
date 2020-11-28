import { scrolltotop } from "./scroll.js";

class Animations{
	static launch(){
		$('.accueil').css({'opacity':'0', 'transform':'scale(1)', 'background-position':'0% -100px'});
		setTimeout(function(){$('.accueil').css({'display':'none'});}, 400);
		$('.corp').css({'display':'block'});
		$('header').css({'display':'flex'});
		$('.corp, header').css({'opacity':'1'});

		Array.from(document.getElementsByClassName('diapocontain')).forEach((el, iter) => {
			setTimeout(function(){
				el.classList.remove('hidden');
			}, 500+iter*50);
		});

		setTimeout(() => {
			document.getElementById('planDiapo').style.transition = 'all 400ms cubic-bezier(0.1 , 0.9 , 0.2 , 1)';
			document.getElementById('planDiapo').style.opacity = '1';
			document.getElementById('planDiapo').style.transform = 'translateX(0px)';
		}, 1000);
	}
	static openDiapo(rank){
		let event = new Event('openContent'),
			pageElement = Array.from(document.getElementsByClassName("page")).filter(page => page.getAttribute("page") == rank)[0],
			diapoElement = Array.from(document.getElementsByClassName("diapocontain")).filter(diapo => diapo.getAttribute("page") == rank)[0];

		pageElement.dispatchEvent(event);
		setTimeout(() => {
			document.querySelector("#ascontent").classList.add("opened", "p"+ rank);
		}, 550);


		diapoElement.style.zIndex = 2;

		if (window.innerWidth > 800) { // Computers
			let diapoRect = diapoElement.getBoundingClientRect();
			
			pageElement.style.display = "block";
			diapoElement.style.transition = 'all 0s linear';


			setTimeout(function (){
				diapoElement.style.width = diapoRect.width +'px';
				diapoElement.style.position = "fixed";
				diapoElement.style.left = diapoRect.left +'px';
				diapoElement.style.top = diapoRect.top +'px';

				diapoElement.insertAdjacentHTML('afterend','<div class="diapocontain default dc0" style="background: var(--color-bg); box-shadow: none;"></div>'); //Diapo noire pour conserver la grille
				pageElement = Array.from(document.getElementsByClassName("page")).filter(page => page.getAttribute("page") == rank)[0];;

				setTimeout(() => {
					// $('html, body').animate({scrollTop: 0}, 300);
					scrolltotop();

					document.querySelector('.retour').style.display = 'block';
					document.querySelector('.retour').classList.add('opened');

					pageElement.classList.add('opened');

					diapoElement.classList.remove('default');
					diapoElement.style.transition = "";
					diapoElement.classList.add('opened');
					diapoElement.style.width = "";
					diapoElement.style.left = "";
					diapoElement.style.top = "";

					let content = Array.from(pageElement.children).filter(child => child.classList.contains("content"))[0];
					content.classList.add('opened');
					Array.from(content.children).filter(child => child.tagName == "ARTICLE").forEach((article, iter) => {
						setTimeout(() => {
							article.classList.add('opened');
						}, 400+iter*100);
					});

					setTimeout(function(){
						document.querySelector('.gridcontainer').style.transition = "";
						document.querySelector('.gridcontainer').style.transform = "";
						document.querySelector('.gridcontainer').style.height = "0";

						document.querySelector('.reduire').style.display = "block";
						document.querySelector('.reduire').style.opacity = "1";
					},600);
				}, 20);
			}, 10);
		} else {
			diapoElement.style.transform = "scale(0)";
			diapoElement.style.transition = "all 200ms cubic-bezier(0.7, 0, 1, 0)";
			pageElement.style.display = "block";

			setTimeout(() => {
				pageElement.classList.add('opened');
				setTimeout(() => {
					document.querySelector('.gridcontainer').style.height = "0";
					// $('html, body').animate({scrollTop: 0}, 300);
					scrolltotop();
					
					
					diapoElement.style.transform = "";
					diapoElement.style.transition = "none";
					diapoElement.style.width = "";
					diapoElement.style.left = "";
					diapoElement.style.top = "";
					diapoElement.classList.add('opened');

					document.querySelector('.retour').style.display = 'block';
					setTimeout(function (){
						diapoElement.style.transition = "all 200ms cubic-bezier(0.1, 1, 0, 1)";
						diapoElement.style.transform = "scale(1)";

						document.querySelector('.retour').classList.add('opened');

						let content = Array.from(pageElement.children).filter(child => child.classList.contains("content"))[0];
						content.classList.add('opened');
						Array.from(content.children).filter(child => child.tagName == "ARTICLE").forEach((article, iter) => {
							setTimeout(() => {
								article.classList.add('opened');
							}, 400+iter*100);
						});

						setTimeout(function(){
							document.querySelector('.gridcontainer').style.transition = "";
							document.querySelector('.gridcontainer').style.transform = "";
							document.querySelector('.gridcontainer').style.height = "0";
							document.querySelector('.diapocontain').classList.remove('default');
						},600);
					}, 10);
				}, 200);
			}, 10);
		}
	}
	static retour(){

		//$('html, body').animate({scrollTop: 0}, 300);
		scrolltotop();

		let event = new Event('closeContent');
		Array.from(document.getElementsByClassName("page")).forEach(el => el.dispatchEvent(event));

		document.querySelector("#ascontent").className = "";

		document.querySelector('.gridcontainer').style.display = "grid";
		document.querySelector('.gridcontainer').style.height = "";

		Array.from(document.getElementsByClassName('diapocontain')).forEach(diapo => {
			diapo.style.zIndex = "";
			diapo.style.position = "";
			diapo.classList.add("default");
			diapo.classList.remove("opened", "full");
		});
		if(document.querySelector('.dc0')) document.querySelector('.dc0').remove();


		document.querySelector('.retour').classList.remove("opened");

		Array.from(document.querySelectorAll('.content, article, .page, .rightbar')).forEach(el => {
			el.classList.remove("opened", "full");
		});

		setTimeout(() => {
			Array.from(document.querySelectorAll('.reduire, .ouvrir, .page')).forEach(el => {
				el.style.display = "none";
			});
		}, 300);

	}
	static move(destination){
		scrolltotop();
		let pageElements = Array.from(document.getElementsByClassName("page")),
			openPageEl = pageElements.filter(page => page.classList.contains("opened"))[0],
			destinationPageElement = pageElements.filter(page => page.getAttribute("page") == destination)[0],
			diapoListElements = Array.from(document.getElementsByClassName("diapocontain")),
			diapoElement = diapoListElements.filter(diapo => diapo.getAttribute("page") == destination)[0];


		openPageEl.dispatchEvent(new Event('closeContent'));
		destinationPageElement.dispatchEvent(new Event('openContent'));

		Array.from(document.querySelectorAll('article.opened')).forEach(article => {
			article.classList.remove("opened");
		});
		document.getElementById("ascontent").className = "opened p"+ destination;
		if(document.querySelector('.dc0')) document.querySelector('.dc0').remove();


		Array.from(destinationPageElement.children).filter(child => child.classList.contains("content"))[0].classList.add('opened');
		setTimeout(() => {openPageEl.style.display = 'none'},100);

		diapoListElements.forEach(diapo => {
			diapo.classList.remove("opened");
			diapo.classList.add("default");
			diapo.style.zIndex = "";
			diapo.style.position = "";
		});

		setTimeout(function (){
			Array.from(document.querySelectorAll('.page')).forEach(page => {
				page.classList.remove("opened");
			});
			diapoElement.classList.remove('default');
			setTimeout(() => {
				diapoElement.classList.add('opened');
				diapoElement.style.zIndex = "2";
				diapoElement.style.transform = "";
				if(window.innerWidth > 800) diapoElement.style.position = "fixed"
			}, 100);


			destinationPageElement.style.display = "block";
			destinationPageElement.classList.add('opened');
			let content = Array.from(destinationPageElement.children).filter(child => child.classList.contains("content"))[0];
			content.classList.add('opened');
			Array.from(content.children).filter(child => child.tagName == "ARTICLE").forEach((article, iter) => {
				setTimeout(() => {
					article.classList.add('opened');
				}, 400+iter*100);
			});
		}, 20);

	}
	static toggleExpand(state){
		if (state == "reduire") {
			$('body').css({'overflow-x':'hidden'});
			$('.rightbar, .diapocontain, #ascontent, .content').addClass('full');
			$('.reduire').css({'display':'none'});
			setTimeout(function(){
				$('.ouvrir').css({'display':'block'});
			}, 500);
			$('#caneuler').css({'transform':'scale(1.4)'});
			$('.eulercont').css({'margin':'50px'});
		}
		else if(state == "ouvrir"){
			$('body').css({'overflow-x':'hidden'});
			$('.rightbar, .diapocontain, #ascontent, .content').removeClass('full');
			setTimeout(function(){
				$('.reduire').css({'display':'block'});
			}, 300);
			$('.ouvrir').css({'display':'none'});
			$('#caneuler').css({'transform':'scale(1)'});
			$('.eulercont').css({'margin':'0px'});
		}
	}
	static openplan(){
		let planElement = Array.from(document.getElementsByClassName('page')).filter(el => el.getAttribute("page") == "0")[0];
		$('body').css({'overflow-x':'hidden'});
	
		$('.gridcontainer').addClass('hidden');
	
		setTimeout(() => {
			$('.gridcontainer').css({'display':'none'});
	
			planElement.style.display = "block";
			planElement.classList.add("opened");
	
	
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
}

export default Animations;