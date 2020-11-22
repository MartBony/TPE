setTimeout(function(){InitCanvasJS6result()},2000);
// SCRIPT CANVAS JS

function InitCanvasJS6result() {
	CanvasJS.addColorSet("customColorSet2",
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

	var chart6 = new CanvasJS.Chart("chartContainerResultLOSS", {
		animationEnabled: false,
		zoomEnabled: true,
		zoomType: 'xy',
		exportFileName: 'Résultat compression avec perte (FFT)',
		exportEnabled: true,
		theme: "light2",
		colorSet: "customColorSet2",
		toolTip: {
			shared: false,
			content: " <span style='\"'color: {color}; font-weight: 800;'\"'>{name}</span><br/><span style='\"'color: blue;'\"'>x: </span> {x}, <span style='\"'color: blue;'\"'>y:</span> {y} bits"
		},
		subtitles: [{
			text: "Taille du fichier en fonction de sa durée"
		}],
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries6,
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
				{ y: 0, x:0 },
				{ y: 7077941, x:5 },
				{ y: 14139445, x:10},
				{ y: 21184565, x:15},
				{ y: 28246069, x:20},
				{ y: 42352693, x:30},
				{ y: 56475701, x:40},
				{ y: 70582325, x:50},
				{ y: 84688949, x:60}
			]
		},
		{
			type: "line",
			name: "FFT (timestep 100)",
			showInLegend: true,
			dataPoints: [
				{ y: 2710232, x: 60 },
				{ y: 2087864, x: 45 },
				{ y: 1623192, x: 30 },
				{ y: 914616, x: 15 },
				{ y: 0, x: 0 }
			]
		}, {
			type: "line",
			name: "FFT (timestep 150)",
			showInLegend: true,
			dataPoints: [
				{ y: 3845369, x: 60 },
				{ y: 2950233, x: 45 },
				{ y: 2266137, x: 30 },
				{ y: 1253689, x: 15 },
				{ y: 0, x: 0 },
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
				{ y: 0, x: 0 },
			]
		}, {
			type: "line",
			name: "LimitDerivateInstantanate=100",
			showInLegend: true,
			dataPoints: [
				{ y: 1965912, x: 60 },
				{ y: 1507896, x: 45 },
				{ y: 1063000, x: 30 },
				{ y: 579064, x: 15 },
				{ y: 0, x: 0 },
			]
		}]
	});

	chart6.render();

	function toggleDataSeries6(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;            
		}
		chart6.render();
	}
}