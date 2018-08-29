var wWidth;
var wHeight;


$('document').ready(function () {
  wWidth = $(window).width();
  wHeight = $(window).height();

  $('.frontpage').height(wHeight - 60);
  $('#intro').css('margin-top', $('.frontpage').height()/3 + "px")

//$('#nyheder').height($('#nyheder').height() + 20)
  reScale();


  $( window ).resize(function() {
    wWidth = $(window).width();
    wHeight = $(window).height();

    reScale();
  });

})


function reScale() {

    if (wWidth < 1516) {
      console.log("inline");

      //Sidebar
      $(".sidebar").width("200px")

      //content
      $(".content").css("margin-left", "200px")
      $(".content").width((wWidth - 200 - 15 - 15) + "px")

      //Nyheder
      $('.nyhed *').css("clear", "both");
      $('.nyhed .dato').width("100%");
      $('.nyhed .dato').css("margin", "0");
      $('.nyhed .billeder').css("margin","0");
      $('.nyhed .billeder').width("100%");
      $('.nyhed img').width("100%");


      $('.nyhed').css("text-align","justify");
      $('.tekst').css("float", "none");
      $('.tekst').css("margin-left", "auto");
      $('.tekst').css("margin-right", "auto");
      $('.tekst').width("100%");

      //Om chgp
      $('.left').addClass("center")
      $('.right').addClass("center")
      $('.left').removeClass('left')
      $('.right').removeClass('right')
      $('#om').height("auto")
      $('.pair .img').height("400px")
      $('.pair .img').css("background-size",   "cover")
      $('.pair .img').css("background-position",   (wWidth - 1516)/10 + 40  + "px " + -(wHeight)/10 + "px")

    } else{
      //Om chgp
      $('.pair').children(".right").height($(".pair").height())
      $('.pair').children(".left").height($(".pair").height())
      $('.pair .img').css("background-size",   "cover")
      $('.pair .img').css("background-position",   "0px 0px")
  }

  sizeBefore = wWidth;

}










//SLideshow shit
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showDropdown(string, string2, string3) {
  $(string).toggle();
  $(string2).toggle();
  $(string3).toggle();
}
