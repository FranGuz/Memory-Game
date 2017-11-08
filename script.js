$(document).ready(function(){
	
	var classes = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow"];
	var upsideDown = $(".upsideDown");
	var upsideDownLength = upsideDown.length;
	var cardOne = null;
	var cardTwo = null;

	$("#start").on("click",function() {
		$(".container").fadeIn();
	});
	
upsideDown.each(function(){
	var g = Math.floor(Math.random()*classes.length);
	$(this).addClass(classes[g]);
	classes.splice(g, 1);
});
	
$(".upsideDown").on("click", function(){
	$(this).removeClass("upsideDown");
	cardOne = $(this);
	console.log(cardOne)
	});

if ($("div").hasClass("upsideDown")){
	$(".upsideDown").on("click", function(){
	cardTwo = $(this);	 
	cardTwo.removeClass("upsideDown");
	console.log(cardTwo);
	console.log(cardOne);
	

	if (cardTwo.attr("class") === cardOne.attr("class")) {
		console.log("we won");
		cardOne.fadeOut(500);
		cardTwo.fadeOut(500);


	} else {
			console.log("we lost");	
    	}
		});
	}

});