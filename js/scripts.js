//this code will run after everything loads
$(document).ready(function(){
  $("#survey").submit(function(event) {
    var userAge = parseInt($("#age").val());
    var userFavColor = $("#color").val();
    var userFavFood = $("#food").val();
    event.preventDefault();

    if(userAge <= 25 && userFavColor === "Red" && userFavFood === "Sandwich") {
      $(".joey").show();
    } else if(userAge > 25 && userFavColor === "Red" && userFavFood === "Sandwich") {
      $(".rachel").show();
    } else if(userAge <= 25 && userFavColor === "Purple" && userFavFood === "Sandwich") {
      $(".chandler").show();
    } else if(userAge > 25 && userFavColor === "Purple" && userFavFood === "Spaghetti") {
      $(".monica").show();
    } else if(userAge <= 25 && userFavColor === "Red" && userFavFood === "Spaghetti") {
      $(".phoebe").show();
    } else if(userAge <= 25 && userFavColor === "Purple" && userFavFood === "Spaghetti") {
      $(".ross").show();
    } else {
      $(".gunther").show();
    }
  });

});
