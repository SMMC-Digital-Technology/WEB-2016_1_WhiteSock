function income() {
   var inputNameElement = document.getElementById("inputContent");
   var I = inputNameElement.value;
   var titleElement = document.getElementById("title");

  
if (I<16000){
   titleElement.innerHTML = "taxpayed = $0";
}
else if (I<52500){
  titleElement.innerHTML = ("tax payed = $" + ((R - 16000) * 0.1));
}
else if (I<113000){
  titleElement.innerHTML = ("tax payed = $" + (((R - 52500)* 0.16) + 3650));
}
else if (I<184500){
  titleElement.innerHTML = ("tax payed = $" + (((R - 113000)* 0.24) + 13330));
}
else{
  titleElement.innerHTML = ("tax payed = $" + (((R - 184500)* 0.36) + 30490));
}
}
