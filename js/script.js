import Animations from "./modules/animations.js";

let application;

class App{
	constructor(){

		this.jsLinks = [
			["./modules/page1.js"],
			["./canvas/canvasd2.js"],
			["./canvas/canvasd3.js"],
			["./canvas/canvasd4.js"],
			["./canvas/canvasd5.js"],
			["./modules/page6.js"],
			["./modules/page7.js"],
			["./modules/page8.js"],
			["./modules/page9.js"],
			[]
		];
		this.viewPosition = 0;
		this.nombreDiapo = 10;
		this.visitHistory = new Array(this.nombreDiapo).fill(false);

		if (window.innerWidth < 800) Animations.launch();
	}
	get position(){ return this.viewPosition }
	set position(newPosition) {
		newPosition = parseInt(newPosition);
		if(this.viewPosition != newPosition){
			if(newPosition){
				if(!this.viewPosition){ // On the panel grid view
					if(newPosition > 0){
						this.loadPage(newPosition).then(() => {
							Animations.openDiapo(newPosition);
							this.viewPosition = newPosition;
						});
					} else {
						this.viewPosition = -1;
						Animations.openplan();
					}
				} else {
					this.loadPage(newPosition, true).then(() => {
						Animations.move(newPosition);
						this.viewPosition = newPosition;
					});
				}
			} else {
				this.viewPosition = 0;
				Animations.retour();
			}
		}
	}
	loadPage(rank, loader = false){
		return new Promise((resolve, reject) => {

			if (!application.visitHistory[rank-1]){

				let diapo = Array.from(document.getElementsByClassName("diapocontain")).filter(diapo => diapo.getAttribute("page") == rank)[0];
				if(loader) document.getElementById('loaderHolder').classList.add("opened")
				else diapo.classList.add("loading");

				let fd = new FormData();
				fd.append("page", rank)
				fetch("staticServer.php", {
					method: "POST",
					body: fd,
					mode:"cors"
				})
				.then(response =>response.text())
				.then(data => {
					Array.from(document.getElementsByClassName("page")).filter(page => page.getAttribute("page") == rank)[0].innerHTML = data;
					return this.jsLinks[rank-1].map(src => import(src));
				})
				.then(() => {
					if(loader) document.getElementById('loaderHolder').classList.remove("opened");
					else diapo.classList.remove("loading");
					application.visitHistory[rank-1] = true;
					resolve();
				}).catch(err => {
					console.error(err);
					reject();
				});

			} else resolve();
		});
	}
}

application = new App();



$(document).ready(function (){
	
	window.onpopstate = function(event){
		application.position = 0;
	}

	document.getElementById("plan").addEventListener("click", () => {
		history.pushState({key : 'plan'}, 'titre', '');
		application.position = -1;
	});

	document.getElementById("ascontent").addEventListener("click", e => {
		if(e.target.tagName == "BUTTON"){
			const index = Array.from(document.getElementById("ascontent").children).indexOf(e.target);
			application.position += parseInt(2*index-1);
		}
	});

	document.querySelector('.accueil button').addEventListener("click", Animations.launch);

	if (window.innerHeight < 800) $('.accueil button').click();
	
	Array.from(document.getElementsByClassName('diapocontain')).forEach(diapo => {
		diapo.addEventListener("click", e => {
			if (diapo.classList.contains("default")) {
				const rank = parseInt(diapo.getAttribute("page"));
				history.pushState({key : ''+ rank}, 'titre', '');
				application.position = rank;
			}
		});
	});

	$('.retour').click(function(){
		window.history.back();
	});

	$('.reduire').click(function() {
		Animations.toggleExpand("reduire");
	});

	$('.ouvrir').click(function() {
		Animations.toggleExpand("ouvrir");
	});


});