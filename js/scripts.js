// Biz Logic
var add = function(num1, num2) {
  return num1 + num2;
}
var subtract = function(num1,num2){
  return num1 - num2;
}
var divide = function(num1,num2){
	return num1/num2;
}
var multiply = function(num1, num2){
	return num1*num2;
}
// UI logic
$(document).ready(function() {
  $("#addition form").submit(function(event) {
    var num1 = parseInt($("input#add1").val());
    var num2 = parseInt($("input#add2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var answer;
    if(operator === "add")
      answer = add(num1,num2);
    else if(operator === "subtract")
      answer = subtract(num1,num2);
    else if(operator === "multiply")
      answer = multiply(num1,num2);
    else // divide
      answer = divide(num1,num2);
    $(".answer").text(answer);
    $("#answer").show();
    event.preventDefault();
    });
  });
