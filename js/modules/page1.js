setTimeout(function(){InitCanvasJS1()}, 2000);

function InitCanvasJS1() {
	
	var chart = new CanvasJS.Chart("chartContainer", {
		height: 300,
		width: 500,
		animationEnabled: false,
		title:{
			text: "La pollution du web",
			horizontalAlign: "center"
		},
		subtitles:[{
			text: '(% dans les emissions de gaz à effet de serre)',
			horizontalAlign: "center"
		}],
		data: [{
			type: "doughnut",
			startAngle: 180,
			//innerRadius: 60,
			indexLabelFontSize: 17,
			indexLabel: "{label} - #percent%",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 28, label: "Installations" },
				{ y: 25, label: "Datacenters" },
				{ y: 47, label: "Internautes" }
			]
		}]
	});

	chart.render();
}