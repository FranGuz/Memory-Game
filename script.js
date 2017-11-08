$(document).ready(function(){
	
	var classes = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow"];
	var upsideDown = $(".upsideDown");
    var upsideDownLength = upsideDown.length;


// for (i = 0; i < upsideDownLength; i++) {
// 		var g = Math.floor(Math.random()*classes.length);
		
// 		upsideDown.addClass(classes[g]);
// 		classes.splice(g, 1);
// 		upsideDown.splice(g, 1);
// 		console.log(upsideDown);
// 	}

upsideDown.each(function(){
	var g = Math.floor(Math.random()*classes.length);
	$(this).addClass(classes[g]);
	classes.splice(g, 1);
});
	
upsideDown.on("click", function(){
	var cardOne = $(this);
	upsideDown.on("click", function(){
		var cardTwo = $(this);	  
		console.log(cardTwo);
		console.log(cardOne);
		if (cardTwo.attr("class") === cardOne.attr("class")) {
			console.log("we won");
		} else {
			console.log("we lost");
		}
		});
});
	

	
});