$(document).ready(function(){
	
	var classes = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow"];
	
	var upsideDown = $(".upsideDown");
//	console.log(upsideDown);
	

	for (i = 0; i < upsideDown.length; i++) {
		var g = Math.floor(Math.random()*classes.length);
		console.log(g);
	}
	

	
});