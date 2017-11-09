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

$(".card").on("click", function() {
	if (cardOne) {
		cardTwo = $(this);
		$(this).removeClass("upsideDown");
	}
	if ($(this).hasClass("upsideDown")) {
		$(this).removeClass("upsideDown");
		$(this).off("click");
		cardOne = $(this);


		
	} 
	
	console.log(cardOne, cardTwo);
	// $(".upsideDown").on("click", function(){
	// 	$(this).removeClass("upsideDown");
	// 	$(this).off("click")
	// 	$(".upsideDown").off("click")
	// 	cardOne = $(this);
	// 	console.log(cardOne+"1")
	// });


	// if ($(this).hasClass("upsideDown")){
	// 	cardTwo = $(this);	 
	// 	cardTwo.removeClass("upsideDown");
	// 	console.log(cardTwo+"2");
	// 	}
		
	
	// 	if (cardTwo.attr("class") === cardOne.attr("class")) {
	// 		console.log("we won");
	// 		cardOne.fadeOut(500);
	// 		cardTwo.fadeOut(500);
		
	
	// 	} else {
	// 		cardOne.addClass("upsideDown");
	// 		cardTwo.addClass("upsideDown");
	// 			console.log("we lost");	
	// 		}
	});


	});