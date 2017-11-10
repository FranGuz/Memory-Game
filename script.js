$(document).ready(function(){
	
	var classes = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow"];
	var upsideDown = $(".upsideDown");
	var upsideDownLength = upsideDown.length;
	var cardOne = null;
	var cardTwo = null;
	
	// this function returns a random class to our upside down divs 
	
	function random() {
		upsideDown.each(function(){
		var g = Math.floor(Math.random()*classes.length);
		$(this).addClass(classes[g]);
		classes.splice(g, 1);
	});
		classes.splice(0,0, "red", "red", "blue", "blue", "green", "green", "yellow", "yellow")
	}
	
    // the start on click function displays our game 
	
	$("#start").on("click",function() {
		random();
		$(".container").css("display", "flex").fadeIn();
		$("#start").css("display", "none");
		$("h1").css("display", "none");
		$("h2").css("display", "none");
		$("#reset").fadeIn(800);
	});
	
   // the rest function resets our game and rassigns classes in a random order  
    $("#reset").on("click", function(){
		$(".container").hide(); 
		$(".card").removeClass("red").removeClass("yellow").removeClass("blue").removeClass("green").addClass("upsideDown").css("display","block");
		random();
		$(".container").fadeIn();
    });
	
   // this function assigns a value to card one and card two, compares them and either makes them disappear or stay based on the class 
	
	$(".card").on("click", function() {
		
		if (cardOne) {
			cardTwo = $(this);
			$(this).removeClass("upsideDown");
		}
		if ($(this).hasClass("upsideDown")) {
			$(this).removeClass("upsideDown");
			cardOne = $(this);
		} 

		console.log(cardOne, cardTwo);

		if (cardTwo.attr("class") === cardOne.attr("class")) {
			console.log("we won");
			cardOne.delay(3000).fadeOut(250);
			cardTwo.delay(3000).fadeOut(250);
			cardOne = null;
			cardTwo = null;
		} else {
			setTimeout(function(){
				$(cardOne).addClass("upsideDown");
				$(cardTwo).addClass("upsideDown");
				console.log("timeout working");
				cardOne = null;
				cardTwo = null;
			}, 3000)
		}
	});


});