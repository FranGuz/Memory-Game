$(document).ready(function(){
	
	var classes = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow"];
	var upsideDown = $(".upsideDown");
    var upsideDownLength = upsideDown.length;


for (i = 0; i < upsideDownLength; i++) {
		var g = Math.floor(Math.random()*classes.length);
		upsideDown.addClass(classes[g]);
		classes.splice(g, 1);
		upsideDown.splice(g, 1);
		console.log(upsideDown);
	}
	

	
});