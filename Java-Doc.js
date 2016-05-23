function income() {
   var inputNameElement = document.getElementById("inputContent");
   var I = inputNameElement.value;
   var innerHTML = document.getElementById("outputContent");

  
if (I<16000){
   var TP = "taxpayed = $0";
   statementDisplay.innerHTML = "tax payed = $" + TP;
}
else if (I<52500){
  var TP = (R - 16000) * 0.1;
}
else if (I<113000){
  var TP = (((R - 52500)* 0.16) + 3650);
}
else if (I<184500){
  var TP = (((R - 113000)* 0.24) + 13330);
}
else{
  var TP = (((R - 184500)* 0.36) + 30490);
}
}
