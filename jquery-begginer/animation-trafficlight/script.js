$(".redLight").css("box-shadow", "0px 0px 50px 20px rgb(144,0,0)");
$("#yellowCar").css("margin-right", "-200px");
$("#yellowCar").animate({
  left: "-800px"
}, 4000);

$(".greenLight").click(function() {
  
  var msg = $("h2").text("Yay!");
  var carMove = $("#yellowCar");
  var redLightOff = $(".redLight");
  var greenLightOn = $(".greenLight").css("box-shadow", "0px 0px 50px 20px rgb(0,110,0)");

  redLightOff.css("box-shadow", "0px 0px 0px 0px");

  carMove.animate({
    left: "-1500px"
  }, 4000);

  carMove.animate({
    left: "1000px"
  }, 1);

});

$("#retryBtn").click(function() {
  
  var msg = $("h2").text('Press "Green light" to go!');
  
  $(".greenLight").css("box-shadow", "0px 0px 0px 0px");
  $(".redLight").css("box-shadow", "0px 0px 50px 20px rgb(144,0,0)");
  $("#yellowCar").css("margin-right", "-200px");
  $("#yellowCar").animate({
    left: "-800px"
  }, 4000);
});