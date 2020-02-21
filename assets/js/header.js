   //Tab Gallery //
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

      //Modal//

 $(window).on('load',function(){
        $('#myModal').modal('show');
    });