let wScroll = 0;
let scrollHandler = () => {
	let position = 0,
		activated = [false,false,false,false, false];

	$(window).scroll(function(){
		wScroll = $(this).scrollTop();
		if (position == 1){
			if (document.getElementById('c1')){
  
				$('#c1 .bgparralax').css({'transform':'translateY('+ wScroll/4 +'px) scale(1.1)'});

			}
			if (document.getElementById('chartContainer')){
  
				if (wScroll > $('#chartContainer').offset().top - ($(window).height() / 1.4)  && activated[0] == false) {
					InitCanvasJS1();
					$('#chartContainer').css({'transform':'scale(1)'});
					$('#chartContainer').css({'opacity':'1'});
					activated[0] = true;
				}

			}
		}
		else if (position == 5) {
			if (document.getElementById('caneuler')){
  
				if (wScroll > $('#caneuler').offset().top - ($(window).height() / 1.6) && activated[1] == false) {
					animatecaneuler();
					activated[1] = true;
				}

			}
		}
		else if (position == 6) {
			if (document.getElementById('chartContainerResultLOSS')){
				if (wScroll > $('#chartContainerResultLOSS').offset().top - ($(window).height() / 1.4)  && activated[2] == false) {
					InitCanvasJS6result();
					$('#chartContainerResultLOSS').css({'transform':'scale(1)'});
					$('#chartContainerResultLOSS').css({'opacity':'1'});
					activated[2] = true;
				}

			}
		}
		else if(position == 8) {
			if (document.getElementById('chartContainerResultWLOSS')){
  
				if (wScroll > $('#chartContainerResultWLOSS').offset().top - ($(window).height() / 1.4)  && activated[3] == false) {
					InitCanvasJS8();
					$('#chartContainerResultWLOSS').css({'transform':'scale(1)'});
					$('#chartContainerResultWLOSS').css({'opacity':'1'});
					activated[3] = true;
				}

			}
		}
		else if(position == 9){
			if (document.getElementById('Graphfinal')){
				if (wScroll > $('#Graphfinal').offset().top - ($(window).height() / 1.8)  && activated[4] == false) {
					InitCanvasJS9();
					$('#Graphfinal').css({'transform':'scale(1)'});
					$('#Graphfinal').css({'opacity':'1'});
					activated[4] = true;
				}
			}
		}
		else if(position == 10){
			if (document.getElementById('c10')){
  
				$('#c10 .bgparralax').css({'transform':'translateY('+ wScroll/4 +'px) scale(1.1)'});

			}
		}
	});
},
scrolltotop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'  // 👈 
	});
}

export {scrolltotop, scrollHandler};