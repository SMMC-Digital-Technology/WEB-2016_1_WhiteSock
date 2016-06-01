function income() {
   var inputNameElement = document.getElementById("income"); /* to read the income box */
   var I = inputNameElement.value; /* to set the value of Income to var 'I' */
   var outputContent = document.getElementById("outputContent"); /* sets the text so can change */
  var TP = 0;
  
if (I < 16000){ /* the first income bracket */
   TP = 0;
   outputContent.innerHTML = "Tax Paid = $" + TP;
}
else if (I < 52500){ /* the seccond income bracket */
  TP = (I - 16000) * 0.1;
    outputContent.innerHTML = "Tax Paid = $" + TP;
}
else if (I < 113000){ /* the third income bracket */
  TP = (((I - 52500)* 0.16) + 3650);
  outputContent.innerHTML = "Tax Paid = $" + TP;
}
else if (I < 184500){ /* the fourth income bracket */
  TP = (((I - 113000)* 0.24) + 13330);
 outputContent.innerHTML = "Tax Paid = $" + TP;
}
else{ /* the fifth income bracket */
  TP = (((I - 184500)* 0.36) + 30490);
  outputContent.innerHTML = "Tax Paid = $" + TP;
}
}
