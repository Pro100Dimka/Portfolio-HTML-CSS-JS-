var Currency = localStorage.getItem("Currency"); //валюта 

var SumOfCredit = localStorage.getItem("SumOfCredit"); 
var Stag = document.getElementById("SumOfCredit");
Stag.innerHTML = SumOfCredit + ' ' + Currency; //Полная сумма кредита

var Mpayment = localStorage.getItem("MonthPayment"); 
var Mtag = document.getElementById("MonthPayment")
Mtag.innerHTML = Mpayment + ' ' + Currency;; // платить в мес

var Overpayment = localStorage.getItem("Overpayment");
var Vtag = document.getElementById("Overpayment")
Vtag.innerHTML = Overpayment + ' ' + Currency;;  // проценты переплата

var Percent = localStorage.getItem("Percent");
var Ptag = document.getElementById("Percent")
Ptag.innerHTML = Percent + ' %';  // проценты переплата

