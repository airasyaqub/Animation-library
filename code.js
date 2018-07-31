$(document).ready(function() {
	var anim='rollOut';
	$('button').click(function(){
		if($('h1').hasClass(anim)!=true){
		$('h1').addClass(anim);
		setTimeout(function(){$('h1').removeClass(anim);},1000);
	}
	});

});

	

