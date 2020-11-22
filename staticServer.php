<?php
if(isset($_POST['page'])){
	$_POST['page'] = (int) $_POST['page'];
	switch($_POST['page']){
		case 1:	require("staticFiles/d1content.html"); break;
		case 2:	require("staticFiles/d2content.html"); break;
		case 3:	require("staticFiles/d3content.html"); break;
		case 4:	require("staticFiles/d4content.html"); break;
		case 5:	require("staticFiles/d5content.html"); break;
		case 6:	require("staticFiles/d6content.html"); break;
		case 7:	require("staticFiles/d7content.html"); break;
		case 8:	require("staticFiles/d8content.html"); break;
		case 9:	require("staticFiles/d9content.html"); break;
		case 10: require("staticFiles/d10content.html"); break;
	}
}
?>