/**************************************
* TITLE: pick me
* AUTHOR: Kiren Kaur
* CREATE DATE: 3/28/18
* PURPOSE: learn about jquery
* LAST MODIFIED ON: 3/28/18
**************************************/


$(document).ready(function(){

  $("#button1").click(doByTag);
  $("#button2").click(doByID);
  $("#button3").click(doByClass);
  $("#button4").click(doByMultiple);
  $("#button5").click(doByFilteredTag);
  $("#button6").click(doByFilteredID);
  $("#button7").click(doByFilteredClass);

  function doByTag() {
      $('p').append('Argh!');
  }

  function doByID() {
      $('#DeckWasher').append('Get back to washin the deck!');
  }

  function doByClass() {
      $('.Sailor').css({"border-style": "solid", "border-width": "2px"});
  }

  function doByMultiple() {
      $('h1').append('More!').css({"color": "red"});
  }

  function doByFilteredTag() {
      $("p:last").html("A different navigator has taken over!");
  }


  function doByFilteredID() {
      $("#MapCoordinator:first").append("Left! Right!");
  }

  function doByFilteredClass() {
      $(".Sailor:last").html("Last sailor walks the deck!");
  }



}());
