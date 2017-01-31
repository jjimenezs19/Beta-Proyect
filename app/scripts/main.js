$(document).ready(function(){
	details();

	var url = window.location.href;
	
	if(url == "http://localhost:9000/index.html"){
		$('.inicio-tab').addClass('active');
	}else{
		$('.contacto-tab').addClass('active');
	}
});

 function details(){
 	$('.fa-dashboard').click(function(){
 		$('.detail-title').addClass('fadeInRight');
 		$('.detail-title').html("Estilos Modernos");
 		$('.detail-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
 		$('.detail-body').addClass('fadeInRight');
 	});

 	$('.fa-money').click(function(){
 		
		 $('.detail-title').html("Comodidad de Precio");
		 $('.detail-title').addClass('fadeInRight');
		 $('.detail-body').html("Lorem ipsumatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
		 $('.detail-body').addClass('fadeInRight');
 	});

 	$('.fa-mobile').click(function(){
 		
 		 $('.detail-title').html("Diseño Responsive");
 		 $('.detail-title').addClass('fadeInRight');
 		 $('.detail-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
 		 $('.detail-body').addClass('fadeInRight');
 	});

 	$('.fa-code').click(function(){
 		
 		 $('.detail-title').html("Codigo Limpio");
 		 $('.detail-title').addClass('fadeInRight');
 		 $('.detail-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
 		 $('.detail-body').addClass('fadeInRight');
 	});

 	$('.fa-history').click(function(){
 		
 		 $('.detail-title').html("Actualizacion Constante");
 		 $('.detail-title').addClass('fadeInRight');
 		 $('.detail-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
 		 $('.detail-body').addClass('fadeInRight');
 	});

 	$('.fa-users').click(function(){
 		
 		 $('.detail-title').html("Soporte de Usuarios");
 		 $('.detail-title').addClass('fadeInRight');
 		 $('.detail-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis veritatis dolor maxime quia totam, omnis odit praesentium asperiores error soluta tempora iusto. Officiis porro quod molestiae, unde placeat architecto");
 		 $('.detail-body').addClass('fadeInRight');
 	});
 }
