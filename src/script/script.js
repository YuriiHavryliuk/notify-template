'use strict';

//functionn animation header
$(document).ready(function() {
		$(".js-header-hand").animate({
			'right': '0'
		}, 1000);



//functionn show comments
		$(".comment__face").hover(function(e){
			var $this = $(e.currentTarget);
			var text =  $this.data('text');
			var name =  $this.data('name');
	
			$(".js-comment-text").html("“" + text + "”");
			$(".js-comment-name").html(name);
		});

});
