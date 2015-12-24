var settings = {
	move : 10,
	drop : 20
};

var player = {
	score : 0,
	fruits : 0
};

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 37){
		var a = $(".basket").offset().left - settings.move;
		if (a >= 0) {
			$(".basket").css({left: a});
		}
	} else if (event.keyCode == 39) {
		var a = $(".basket").offset().left + settings.move;
		if($(".basket").width() + a < $(window).innerWidth()) {
			$(".basket").css("left", a);
		}
	}

});

setInterval(function(){
	var b = $(".fruit").offset().top + settings.drop;
	$(".fruit").animate({top : b});
}, 2000);


function collides(a, b) {
	var exebaX = false;
	var exebaY = false;
	var aX = a.offset().left;
	var aY = a.offset().top;
	var aW = a.width();
	var aH = a.height();
	var bX = b.offset().left;
	var bY = b.offset().top;
	var bW = b.width();
	var bH = b.height();

	if(aX > bX) {
		exebaX = bX + bW > aX;
	} else {
		exebaX = aX + aW > bX;
	}
	if (aY > bY){
		exebaY = bY + bH > aY;
	} else {
		exebaY = aY + aH > bY;
	}

	return exebaX && exebaY;
}



setInterval(function() {
	var fruit = $(".fruit");
	if (collides($(".basket"), fruit)) {
		fruit.css({top : - fruit.height()});
		player.fruits++;
		player.score +=12;
	}
	$("#info").text("ქულები: " + player.score);
}, 500);