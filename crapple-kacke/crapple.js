$(document).ready(function(){
  window.setTimeout(function(){
    $('#kacke').removeClass("kacke-0");
  }, 2000);
  window.setTimeout(function(){
    $('#kacke').addClass("kacke-1");
    $('#crapple').removeClass("crapple-0");
    $('#crapple').addClass("crapple-1");
  }, 3000);
  window.setTimeout(function(){
    $('#kacke').addClass("kacke-2");
  }, 4000);
})
