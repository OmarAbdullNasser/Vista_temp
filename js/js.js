function call(){
let dbtn1= document.getElementById("btn4");
let dbtn2= document.getElementById("btn5");
let dbtn3= document.getElementById("btn6");
let search =document.getElementById("btn7");
let clinlic =document.getElementById("btn3");


let call =document.getElementById("btn2");
let examtion =document.getElementById("btn1");


call.addEventListener("click",function(){
  dbtn1.style.display="none";
  dbtn2.style.display="none";
  dbtn3.style.display="none";
call.style.borderBottom="10px solid  #0070CD";
examtion.style.borderBottom="none";

});

examtion.addEventListener("click",function(){
  dbtn1.style.display="inline";
  dbtn2.style.display="inline";
  dbtn3.style.display="inline";
examtion.style.borderBottom="10px solid  #0070CD";
call.style.borderBottom="none";
});





}
call();
