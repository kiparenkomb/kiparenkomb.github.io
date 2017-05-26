$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 500) {
					$('.go-top').fadeIn(500);
				} else {
					$('.go-top').fadeOut(300);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});

var select = function(s) {
	return document.querySelector(s);
}

function randomBetween(min,max)
{
		var number = Math.floor(Math.random()*(max-min+1)+min);
	
		if ( number !== 0 ){
			return number;
		}else {
			return 0.5;
		}
}

/*var tl = new TimelineMax();

for(var i = 0; i < 20; i++){

	var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
		x: randomBetween(12, 15) * (randomBetween(-1, 1)),
		y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
		repeat:-1,
		repeatDelay:randomBetween(0.2, 0.5),
		yoyo:true,
		ease:Elastic.easeOut.config(1, 0.5)
	})

	tl.add(t, (i+1)/0.6)
}

tl.seek(50);*/