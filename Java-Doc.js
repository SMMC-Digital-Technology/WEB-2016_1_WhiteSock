function income() {
   var inputNameElement = document.getElementById("income");
   var I = inputNameElement.value;
   var outputContent = document.getElementById("outputContent");
   var R = inputNameElement.value;
  var TP = 0;
  
if (I < 16000){
   TP = 0;
   outputContent.innerHTML = "tax payed = $" + TP;
}
else if (I < 52500){
  TP = (R - 16000) * 0.1;
    outputContent.innerHTML = "tax payed = $" + TP;
}
else if (I < 113000){
  TP = (((R - 52500)* 0.16) + 3650);
  outputContent.innerHTML = "tax payed = $" + TP;
}
else if (I < 184500){
  TP = (((R - 113000)* 0.24) + 13330);
 outputContent.innerHTML = "tax payed = $" + TP;
}
else{
  TP = (((R - 184500)* 0.36) + 30490);
  outputContent.innerHTML = "tax payed = $" + TP;
}
}
