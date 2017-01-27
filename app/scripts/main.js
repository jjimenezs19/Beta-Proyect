$(document).ready(function(){
	var url = window.location.href;
	
	if(url == "http://localhost:9000/index.html"){
		$('.inicio-tab').addClass('active');
	}else{
		$('.contacto-tab').addClass('active');
	}
});
