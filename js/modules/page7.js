// Code original de la page 7 copié dans un module

// Script 1 - Milieu de page
function inputRLEtoggleClass(obj) {
	if($(obj).val() && $(obj).val() != '') {
		$(obj).addClass('input-test-placeholder');
	} else {
		$(obj).removeClass('input-test-placeholder');
	}
}

function functionCallbackCompressionRLE() {
	let input = $('#RLE-input').val();
	let OutString = '';
	let nbOccurence = 1;

	for(var i = 0; i < input.length; i++) {

		let IsNextCharSame = false;

		// Looking next char...
		if(i < input.length - 1) {// If next char
			if(input.charAt(i+1) == input.charAt(i)) {
				nbOccurence += 1;
				IsNextCharSame = true;
			}
		}

		if(!(IsNextCharSame)) {
			OutString += nbOccurence.toString(10) + '{"'+ input.charAt(i) +'"} - ';
			nbOccurence = 1;
		}
	}

	$('#RLE-output').html(OutString.slice(0, -3));
}

// Script 3

function ligne(x1, y1, x2, y2, color, id) {
	id.strokeStyle = color;
	id.beginPath();
	id.moveTo(x1, y1);
	id.lineTo(x2, y2);
	id.stroke();
}

function rond(x, y, rayon, s_angle, f_angle, sens_cont, color, pleind, id) {
	id.strokeStyle = color;
	id.fillStyle = color;
	id.beginPath();
	id.arc(x, y, rayon, s_angle, f_angle, sens_cont);
	id.stroke()
	if (pleind == true) {
		id.fill();
	}
}

function texte(x,y,pxsize,content, color, id){
	id.fillStyle = color;
	id.font = pxsize +" Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif";
	id.fillText(content, x, y); 
}

function opencode(id) {
	if ($('.code.c'+ id).hasClass('opened')) {
		setTimeout(function(){$('.code.c'+ id).css({'display':'none'})},300);
		$('.code.c'+ id).removeClass('opened');
		$('.codebutton p').eq(id).text("Cliquer pour voir le code");
	}
	else{
		$('.code.c'+ id).css({'display':'block'});
		$('.code.c'+ id).addClass('opened');
		$('.codebutton p').eq(id).text("Fermer le code");
	}
}

$('.code').each(function( id ) {
	let htmlString = $(this).html();

	let KeyWord = ['VARIABLE', 'EST_DU_TYPE', 'POUR', 'FIN_BOUCLE', 'TANT_QUE', 'ALLANT_DE', 'À', 'TAILLE', 'SAISIR', 'SI', 'SINON', 'FIN_CONDITION', 'AFFICHER', 'AJOUTER_A'];
	let KeyType = ['ChaineDeCaractère', 'Nombre', 'Entier', 'VraiFaux', 'Liste', 'Caractère'];
	let KeyOperator = ["True", "False", " + ", " - ", " = ", " == "];


	for(let i=0; i < KeyWord.length; i++) {
		htmlString = htmlString.replace(new RegExp(KeyWord[i], 'g'), '<span class="code-keywords">'+KeyWord[i]+'</span>');
	}

	for(let i=0; i < KeyType.length; i++) {
		htmlString = htmlString.replace(new RegExp(KeyType[i], 'g'), '<span class="code-keytypes">'+KeyType[i]+'</span>');
	}

	for(let i=0; i < KeyOperator.length; i++) {
		htmlString = htmlString.replace(new RegExp(KeyOperator[i], 'g'), '<span class="code-keyoperator">'+KeyOperator[i]+'</span>');
	}



	$(this).html(htmlString);
});

// Script 2 - Milieu de page
function inputLZ77ToggleClass(obj) {
	if($(obj).val() && $(obj).val() != '') {
		$(obj).addClass('input-test-placeholder');
	} else {
		$(obj).removeClass('input-test-placeholder');
	}
}

function functionCallbackCompressionLZ77() {
	let inputString = $('#LZ77-input').val();
	let outputString = "";

	// Perform the LZ77
	// Config
	let WindowsSize = 20;
	let CorrelationSize = 15;


	let i = 0;
	while(i<inputString.length) {
		let AllOccurence = [];
		let idOccurence = [];

		for(let x=1; x < WindowsSize; x++) {

			if(i-x >= 0) {
				if(inputString.charAt(i) == inputString.charAt(i-x)) {
					let numberOccurence = 1;
					let id = x;

					for(let y=1; y<CorrelationSize; y++) {
						// i - x + y  >> (i-x)+y >> y>x
						if(i+y < inputString.length && y < x) {
							// Test Same Caractere
							if(inputString.charAt(i+y) == inputString.charAt(i-x+y))
								numberOccurence++;
						}
					}

					AllOccurence.push(numberOccurence);
					idOccurence.push(id);

				}
			}

		}


		let bestID = -1;
		let BestNumber = -1;
		for(let x=0; x<idOccurence.length; x++) {
			if(BestNumber < AllOccurence[x]) {
				BestNumber = AllOccurence[x];
				bestID = idOccurence[x];
			}
		}

		if(bestID == -1) {
			outputString += inputString.charAt(i);
		} else {
			if(outputString.charAt(outputString.length - 1) == '+')
				outputString = outputString.slice(0, -1);

			outputString += '+ {' + bestID + ', ' + BestNumber + '} +';
		}

		i += ((BestNumber == -1) ? 1 : BestNumber);
	}

	$('#LZ77-output').html(outputString);
}


// Script 3 - Fin de page
function inputHuffmanToggleClass(obj) {
	if($(obj).val() && $(obj).val() != '') {
		$(obj).addClass('input-test-placeholder');
	} else {
		$(obj).removeClass('input-test-placeholder');
	}
}


var HuffmanCanvas  = document.getElementById('HuffmanExemple');
var HuffmanContext = HuffmanCanvas.getContext('2d');
var HuffmanAnimationRunning = false;


class HuffmanTreeClass {
	constructor() {
		this.branch1 = null;
		this.branch2 = null;

		this.char = null;
		this.val = null;
	}
}

function functionCallbackCompressionHuffman() {
	HuffmanAnimationRunning = false;

	setTimeout(function()  {
		HuffmanAnimationRunning = true;
		BuildCanvas($('#Huffman-input').val());
	}, 3000);
}

function BuildCanvas(text) {
	var AllChar = [];
	var AllFrequency = [];

	// Make a list of all char
	for(var i=0; i < text.length; i++) {
		let IsIn = false;

		for(var x=0; x < AllChar.length; x++) {
			if(AllChar[x] == text.charAt(i)) {
				IsIn = true;
			}
		}

		if(IsIn == false) {
			AllChar.push(text.charAt(i));
		}
	}

	// Build the frequency list
	for(var i=0; i<AllChar.length; i++) {
		AllFrequency.push(0);

		for(var x=0; x<text.length; x++) {
			if(AllChar[i] == text.charAt(x)) {
				AllFrequency[AllFrequency.length - 1] += 1;
			}
		}

	}


	/// Organise list...
	var HuffmanTreeRootList = [];
	for(var i=0; i<AllChar.length; i++) {
		HuffmanTreeRootList.push({
			value: AllFrequency[i],
			char: AllChar[i]
		});
	}
	HuffmanTreeRootList.sort(function(a, b) {
		if(a.value > b.value) return 1;
		if(b.value > a.value) return -1;
	});





	// Build Huffman Tree
	var HuffmanTreeList = [];
	for(var i=0; i<HuffmanTreeRootList.length; i++) {
		let nHUFF = new HuffmanTreeClass();
		nHUFF.char = HuffmanTreeRootList[i].char;
		nHUFF.val = HuffmanTreeRootList[i].value;
		HuffmanTreeList.push(nHUFF);
	}




	// Start canvas update
	CanvasAnimate(HuffmanTreeRootList, HuffmanTreeList);
}



function RecurrentDrawHuffmanTree(HuffmanTree, x, y, ctx, angle, size) {

	// Print actual HuffmanTree
	ctx.lineWidth = 3;
	rond(x, y, 30, 0, Math.PI*2, false, "rgb(0, 0, 0)", false, ctx);
	texte(x-19,y+7, "15px", HuffmanTree.val.toString(), "rgb(255, 0, 0)", ctx);

	if(HuffmanTree.char != null) {
		texte(x+0,y+7, "15px", ": '" + HuffmanTree.char + "'", "rgb(255, 0, 0)", ctx);
	}

	// Make the same on branch
	if(HuffmanTree.branch1 != null) {
		let X = Math.cos((180-angle) * 3.14159265358979 / 180);
		let Y = Math.sin((180-angle) * 3.14159265358979 / 180);

		ligne(x + X * 30, y + Y * 30, x + X * size, y + Y * size, "rgb(250, 50, 50)", ctx);
		RecurrentDrawHuffmanTree(HuffmanTree.branch1, x + X * (size+30), y + Y * (size+30), ctx, angle+15, size-15);
	}

	if(HuffmanTree.branch2 != null) {
		let X = Math.cos(angle * 3.14159265358979 / 180);
		let Y = Math.sin(angle * 3.14159265358979 / 180);

		ligne(x + X * 30, y + Y * 30, x + X * size, y + Y * size, "rgb(250, 50, 50)", ctx);
		RecurrentDrawHuffmanTree(HuffmanTree.branch2, x + X * (size+30), y + Y * (size+30), ctx, angle+15, size-15);
	}

}

function CanvasAnimate(HuffmanTreeRootList, HuffmanTreeList) {

	// CLS
	HuffmanContext.clearRect(0, 0, HuffmanCanvas.width, HuffmanCanvas.height);
	let wdCanvas = HuffmanCanvas.width;
	let awdCanvasx = (wdCanvas - HuffmanTreeList.length * 65)/2;


	// Display the Huffman Tree
	for(var i=0; i<HuffmanTreeList.length; i++) {
		/// CENTER THE TREE...
		RecurrentDrawHuffmanTree(HuffmanTreeList[i], awdCanvasx+(i)*65, 50, HuffmanContext, 30, 100);
	}


	// Calculate Next Step....
	if(HuffmanTreeList.length > 1) {

		let b1 = HuffmanTreeList.shift();
		let b2 = HuffmanTreeList.shift();

		let newb = new HuffmanTreeClass();
		newb.branch1 = b1;
		newb.branch2 = b2;
		newb.val = b1.val + b2.val;

		HuffmanTreeList.push(newb);
		HuffmanTreeList.sort(function(a, b){
			if(a.val > b.val) return 1;
			if(b.val > a.val) return -1;
		});

	}
		



	/// Animatition Loop
	if(HuffmanAnimationRunning) {
		setTimeout(function() {
			CanvasAnimate(HuffmanTreeRootList, HuffmanTreeList);
		}, 2000);
	} else {
		HuffmanContext.clearRect(0, 0, HuffmanCanvas.width, HuffmanCanvas.height);
	}
	
}

// Late Script (See changes on github) !! Not authentic
document.getElementById("Huffman-input").addEventListener("change", e => {
	functionCallbackCompressionHuffman(); inputHuffmanToggleClass(e.target);
});
document.getElementById("Huffman-input").addEventListener("keyup", e => functionCallbackCompressionHuffman());
document.getElementById("Huffman-input").addEventListener("keydown", e => functionCallbackCompressionHuffman());


document.getElementById("RLE-input").addEventListener("change", e => {
	functionCallbackCompressionRLE(); inputRLEtoggleClass(e.target);
});
document.getElementById("RLE-input").addEventListener("keyup", e => functionCallbackCompressionRLE());
document.getElementById("RLE-input").addEventListener("keydown", e => functionCallbackCompressionRLE());


document.getElementById("LZ77-input").addEventListener("change", e => {
	functionCallbackCompressionLZ77(); inputLZ77ToggleClass(e.target);
});
document.getElementById("LZ77-input").addEventListener("keyup", e => functionCallbackCompressionLZ77());
document.getElementById("LZ77-input").addEventListener("keydown", e => functionCallbackCompressionLZ77());