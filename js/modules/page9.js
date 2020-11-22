function InitCanvasJS9() {

	CanvasJS.addColorSet("customColorSet1",
		[// Color Set Array
			 "#4661EE",
			 "#EC5657",
			 "#1BCDD1",
			 "#8FAABB",
			 "#B08BEB",
			 "#3EA0DD",
			 "#F5A52A",
			 "#23BFAA",
			 "#FAA586",
			 "#EB8CC6"
		]);
	
	var chart = new CanvasJS.Chart("Graphfinal", {
		width: 900,
		animationEnabled: true,
		zoomEnabled: true,
		zoomType: 'xy',
		exportFileName: 'Résultat compression sans perte',
		exportEnabled: true,
		theme: "light2",
		colorSet: "customColorSet1",
		toolTip: {
			shared: false,
			content: " <span style='\"'color: {color}; font-weight: 800;'\"'>{name}</span><br/><span style='\"'color: blue;'\"'>x: </span> {x}, <span style='\"'color: blue;'\"'>y:</span> {y} bits"
		},
		subtitles: [{
			text: "Taille du fichier en fonction de sa durée"
		}],
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries9,
			verticalAlign: "center",
			horizontalAlign: "right",
			fontSize: 14,
			maxWidth: 250
		},
		axisY: {
			includeZero: true,
			title: "Taille du fichier (bits)",
			crosshair: {
				enabled: true,
				snapToDataPoint: true,
				labelFormatter: function(e) {
					return CanvasJS.formatNumber(e.value, "##0") + " bits";
				}
			}
		},
		axisX: {
			title: "Durée de l'enregistrement (s)",
			crosshair: {
				enabled: true,
				snapToDataPoint: true,
			}
		},
		data: [{
			type: "line",
			name: "Aucune compression",
			lineDashType: "shortDash",
			showInLegend: true,
			dataPoints: [
				{ y: 7077941, x:5 },
				{ y: 14139445, x:10},
				{ y: 21184565, x:15},
				{ y: 28246069, x:20},
				{ y: 42352693, x:30},
				{ y: 56475701, x:40},
				{ y: 70582325, x:50},
				{ y: 84688949, x:60}
			]
		},{
			type: "line",
			name: "Huffman (chunk=8)",
			showInLegend: true,
			dataPoints: [
				{ y: 3589777, x:5 },
				{ y: 6874350, x:10},
				{ y: 10311433, x:15},
				{ y: 13276533, x:20},
				{ y: 19997291, x:30},
				{ y: 25450712, x:40},
				{ y: 31398132, x:50},
				{ y: 37691605, x:60}
			]
		}, {
			type: "line",
			name: "FFT (timestep 50)",
			showInLegend: true,
			dataPoints: [
				{ y: 1593463, x: 60 },
				{ y: 1233047, x: 45 },
				{ y: 998615, x: 30 },
				{ y: 581879, x: 15 },
				{ y: 194137, x:5  },
			]
		}]
	});

	chart.render();

	function toggleDataSeries9(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;            
		}
		chart.render();
	}


}