$(".btnEnviar").on("click", function(){
    var nombre  = $(".nombre").val();
	    email     = $(".email").val(),
	    tel       = $(".tel").val(),
      mensaje   = $(".mensaje").val();

    var data = new FormData();

	  data.append("nombre", nombre);
	  data.append("email", email);
	  data.append("tel", tel);
    data.append("mensaje", mensaje);
      

      if(nombre == ""){
		$(".ajaxAlert").html(
        '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave name empty.</b>'
		+' </div>');
	}else

	if(email == ""){
		$(".ajaxAlert").html(
          '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave email empty</b>'
		+' </div>');
	}else

	if(tel == ""){
		$(".ajaxAlert").html(
          '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave tel empty</b>'
		+' </div>');
	}else

	if(mensaje == ""){
		$(".ajaxAlert").html(
          '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave message empty</b>'
		+' </div>');
	}else{
        $(".ajaxAlert").html(
            '<div class="alert alert-success">'
          + '<div class="alert-icon">'
          +'<i class="material-icons">check</i>'
          +' </div>'
          +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
          +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
          +'</button>'
          +'<b>Success!</b>'
          +' </div>');

          $.ajax({

			url: "ajax/contacto.ajax.php",
			method: "POST",
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			success: function(respuesta){
				
				if (respuesta === "ok") {

					swal({
					   type: "success",
					   title: "We will be with you in a moment!",
					   showConfirmButton: true,
					   confirmButtonText: "Cerrar"
					   }).then((result) => {
					 	if (result.value) {

					 	window.location = "#contact";

					 	}
                     })
                    

				}

		

		    }
	    })
    }
        
})