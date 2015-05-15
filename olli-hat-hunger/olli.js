$(document).ready(function(){
  window.setTimeout(function(){
    $('#arm').addClass("move");
  }, 2000);
  window.setTimeout(function(){
    $('#crapple').removeClass("crapple-0");
    $('#crapple').addClass("crapple-1");
  }, 3500);
  window.setTimeout(function(){
    $('#arm').removeClass("move");
  }, 4000);
})
