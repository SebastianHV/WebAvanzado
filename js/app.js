$(document).ready(function(){
	$('.sidenav').sidenav();

	var ofst = 100;

	$("#irpersona12").click(function(){
		var posicion = $("#persona12").offset().top - ofst ;
		$("html,body").animate({
			scrollTop:posicion
		},800)
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop12");

		$("#navega").addClass("#33691e light-green darken-4");
		$("#pie").addClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");

		$("#mobile-demo").addClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});
	$("#irpersona3").click(function(){
		var posicion = $("#persona3").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop3");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#1565c0 blue darken-3");
		$("#pie").addClass("#1565c0 blue darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").addClass("#1565c0 blue darken-3");
	});
	$("#irpersona4").click(function(){
		var posicion = $("#persona4").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop4");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").addClass("#f9a825 yellow darken-3");
		$("#pie").addClass("#f9a825 yellow darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").addClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});
	$("#irpersona5").click(function(){
		var posicion = $("#persona5").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop3");
		$("body").addClass("fondop5");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").addClass("#c62828 red darken-3");
		$("#pie").addClass("#c62828 red darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").addClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});

	$("#irintro").click(function(){
		var posicion = $("#intro").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800)
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondodefault");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#757575 grey darken-1");
		$("#pie").addClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").addClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
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

	$("#persona3").mouseenter(function(){
		$("body").removeClass("fondop12");
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop3");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#1565c0 blue darken-3");
		$("#pie").addClass("#1565c0 blue darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").addClass("#1565c0 blue darken-3");
	})

	$("#persona4").mouseenter(function(){
		$("body").removeClass("fondop12");
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop4");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").addClass("#f9a825 yellow darken-3");
		$("#pie").addClass("#f9a825 yellow darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").addClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	})

	$("#persona5").mouseenter(function(){
		$("body").removeClass("fondop12");
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop3");
		$("body").addClass("fondop5");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").addClass("#c62828 red darken-3");
		$("#pie").addClass("#c62828 red darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").addClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	})

	$("#persona12").mouseenter(function(){
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop12");

		$("#navega").addClass("#33691e light-green darken-4");
		$("#pie").addClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");

		$("#mobile-demo").addClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
		
	})

	$("#intro").mouseenter(function(){
		$("body").removeClass("fondop12");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondodefault");

		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#757575 grey darken-1");
		$("#pie").addClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").addClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	})










	$("#irpersona12m").click(function(){
		var posicion = $("#persona12").offset().top - ofst ;
		$("html,body").animate({
			scrollTop:posicion
		},800)
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").addClass("fondop12");


		$("#navega").addClass("#33691e light-green darken-4");
		$("#pie").addClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");

		$("#mobile-demo").addClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});
	$("#irpersona3m").click(function(){
		var posicion = $("#persona3").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").addClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").removeClass("fondop12");


		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").addClass("#1565c0 blue darken-3");
		$("#pie").addClass("#1565c0 blue darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").addClass("#1565c0 blue darken-3");
	});
	$("#irpersona4m").click(function(){
		var posicion = $("#persona4").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").addClass("fondop4");
		$("body").removeClass("fondop5");
		$("body").removeClass("fondop12");


		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").removeClass("#c62828 red darken-3");
		$("#pie").removeClass("#c62828 red darken-3");
		$("#navega").addClass("#f9a825 yellow darken-3");
		$("#pie").addClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").removeClass("#c62828 red darken-3");
		$("#mobile-demo").addClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});
	$("#irpersona5m").click(function(){
		var posicion = $("#persona5").offset().top - ofst;
		$("html,body").animate({
			scrollTop:posicion
		},800);
		$("body").removeClass("fondodefault");
		$("body").removeClass("fondop3");
		$("body").removeClass("fondop4");
		$("body").addClass("fondop5");
		$("body").removeClass("fondop12");


		$("#navega").removeClass("#33691e light-green darken-4");
		$("#pie").removeClass("#33691e light-green darken-4");
		$("#navega").removeClass("#757575 grey darken-1");
		$("#pie").removeClass("#757575 grey darken-1");
		$("#navega").addClass("#c62828 red darken-3");
		$("#pie").addClass("#c62828 red darken-3");
		$("#navega").removeClass("#f9a825 yellow darken-3");
		$("#pie").removeClass("#f9a825 yellow darken-3");
		$("#navega").removeClass("#1565c0 blue darken-3");
		$("#pie").removeClass("#1565c0 blue darken-3");

		$("#mobile-demo").removeClass("#33691e light-green darken-4");
		$("#mobile-demo").removeClass("#757575 grey darken-1");
		$("#mobile-demo").addClass("#c62828 red darken-3");
		$("#mobile-demo").removeClass("#f9a825 yellow darken-3");
		$("#mobile-demo").removeClass("#1565c0 blue darken-3");
	});

	$( "#introhs" ).hide();
	$("#bintro2").hide();

	$("#bintro").click(function(){
        $("#introhs").toggle();
        $("#bintro2").toggle();
        $("#bintro").toggle();

    });

    $("#bintro2").click(function(){
        $("#introhs").toggle();
        $("#bintro2").toggle();
        $("#bintro").toggle();

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

/*var $target = $('.wrapper');
inView('.section').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});*/

 $('img').load(function() {
    $(this).data('height', this.height);
}).bind('mouseenter mouseleave', function(e) {
    $(this).stop().animate({
        height: $(this).data('height') * (e.type === 'mouseenter' ? 1.5 : 1)
    });
});