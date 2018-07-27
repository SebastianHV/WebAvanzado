$(document).ready(function(){
	$('.sidenav').sidenav();

	$("#irpersona12").click(function(){
		var posicion = $("#persona12").offset().top;
		$("html,body").animate({
			scrollTop:posicion
		},800)
	});
	$("#irpersona3").click(function(){
		var posicion = $("#persona3").offset().top;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop3");

		$("#navega").removeClass("#03a9f4 light-blue");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#1565c0 blue darken-3");
		$("#pie").addClass("#1565c0 blue darken-3");
	});
	$("#irpersona4").click(function(){
		var posicion = $("#persona4").offset().top;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop4");

		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#03a9f4 light-blue");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").addClass("#f9a825 yellow darken-3");
		$("#pie").addClass("#f9a825 yellow darken-3");
	});
	$("#irpersona5").click(function(){
		var posicion = $("#persona5").offset().top;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop3");
		$("body").addClass("fondop5");

		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#03a9f4 light-blue");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").addClass("#c62828 red darken-3");
		$("#pie").addClass("#c62828 red darken-3");
	});

	$("#irintro").click(function(){
		var posicion = $("#intro").offset().top;
		$("html,body").animate({
			scrollTop:posicion
		},800)
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondodefault");
	});

	$("#irpersona12")
	.mouseenter(function(){
		$("#irpersona12").addClass("agranda");
	})
	.mouseout(function(){
		$("#irpersona12").removeClass("agranda");
	});

	$("#irpersona3")
	.mouseenter(function(){
		$("#irpersona3").addClass("agranda");
	})
	.mouseout(function(){
		$("#irpersona3").removeClass("agranda");
	});

	$("#irpersona4")
	.mouseenter(function(){
		$("#irpersona4").addClass("agranda");
	})
	.mouseout(function(){
		$("#irpersona4").removeClass("agranda");
	});

	$("#irpersona5")
	.mouseenter(function(){
		$("#irpersona5").addClass("agranda");
	})
	.mouseout(function(){
		$("#irpersona5").removeClass("agranda");
	});

	/*$("persona3")
	.mouseenter(function(){
		$("body").removeClass("fondodefault");
		$("body").addClass("fondop3");

	})
	.mouseout(function(){
		$("body").removeClass("fondop3");
		$("body").addClass("fondodefault");
	});
	*/



});