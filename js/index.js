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


$(document).ready(function(){
	$(window).scroll(function(){
		$('.skill-percentage').each(function(){
			if($(this).offset().top>=$(window).scrollTop() && $(this).offset().top<$(window).scrollTop()+$(window).height()-100){
				$(this).removeClass('active');
				$(this).addClass('active');
			}
			else{
				$(this).removeClass('active');
			}
		});
	});
});