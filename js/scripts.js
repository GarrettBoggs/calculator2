// UI logic
$(document).ready(function() {
  $("#addition form").submit(function(event) {
    var num1 = parseInt($("input#add1").val());
    var num2 = parseInt($("input#add2").val());
    var answer = add(num1,num2);
    $(".answer").text(answer);
    $("#answer").show();
    event.preventDefault();
    });
  $("#subtraction form").submit(function(event) {
    var num1 = parseInt($("input#subtract1").val());
    var num2 = parseInt($("input#subtract2").val());
    var answer = subtract(num1,num2);
    $(".answer").text(answer);
    $("#answer").show();
    event.preventDefault();
    });
    $("#multiplication form").submit(function(event) {
      // alert()
      var num1 = parseInt($("input#multiplication1").val());
      var num2 = parseInt($("input#multiplication2").val());
      answer = multiply(num1,num2);
      $(".answer").text(answer);
      $("#answer").show();
      event.preventDefault();
      });
      $("#division form").submit(function(event) {
        // alert()
        var num1 = parseInt($("input#division1").val());
        var num2 = parseInt($("input#division2").val());
        answer = divide(num1,num2);
        $(".answer").text(answer);
        $("#answer").show();
        event.preventDefault();
        });
  });

// Biz Logic
var add = function(number1, number2) {
  return number1 + number2;
}
var subtract = function(num1,num2){
  return num1 - num2;
}
var divide=function(num1,num2){
	return num1/num2;
}
var remainder=function(num1, num2){
	return num1%num2;
}
var multiply = function(num1, num2){
	return num1*num2;
}
