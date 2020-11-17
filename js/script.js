$(document).ready(function (){

	//setpos('#d2', getimgpos('#d1').left, getimgpos('#d1').top);
	
	
	
	// Fonctions

	function getimgpos (id){
		var position = { left : Math.floor($(id).offset().left), top : Math.floor($(id).offset().top) };
  		return( position );
	}

	function getwidth (id){
		var width = $(id).width();
  		return( width );
	}

	function setwidth (id, width) {
		var obj = $(id);
		obj.css({'width':''+ width +'px'});
	}

	function setpos (id, left, top) {
		var obj = $(id);
		obj.css({'position':'absolute'});
		obj.css({'left':''+ left +'px'});
		obj.css({'top':''+ top +'px'});
	}
});