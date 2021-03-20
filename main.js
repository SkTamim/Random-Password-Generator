"use stict";
/*======================
Targeting the Fildes
=======================*/
let passwordFild = document.querySelector("#fild");
let copyButton = document.querySelector("#copyIcon");
let generateButton = document.querySelector("#generateButton");

/*==========================
Functioning The Copy Button
============================*/
copyButton.addEventListener("click",function(){
   passwordFild.select()
   passwordFild.setSelectionRange(0, 99999)
   document.execCommand("copy")
});

/*==========================
Creating Arrays
============================*/
let lowerCaseAlfabates = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseAlfabates = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let spacelCharecters = ["!","@","#","$","%","^","&","*","(",")","/","?",">","<",","];
let numbers = ["00","01","02","03","04","05","06","07","08","09"];
let numbers2 = ["0","1","2","3","4","5","6","7","8","9"];
let numbers3 = ["10","11","12","13","14","15","16","17","18","19"];

/*==========================
Functioning The Generate Button
============================*/
generateButton.addEventListener("click",function(){

   let Password = lowerCaseAlfabates[Math.floor( Math.random()*lowerCaseAlfabates.length)]
   + numbers2[Math.floor( Math.random()*numbers2.length)]
   + spacelCharecters[Math.floor( Math.random()*spacelCharecters.length)]
    + upperCaseAlfabates[Math.floor( Math.random()*upperCaseAlfabates.length)]
    + numbers2[Math.floor( Math.random()*numbers2.length)]
     + numbers[Math.floor( Math.random()*numbers.length)]
     + spacelCharecters[Math.floor( Math.random()*spacelCharecters.length)]
       + numbers2[Math.floor( Math.random()*numbers2.length)]
       + spacelCharecters[Math.floor( Math.random()*spacelCharecters.length)]
       + numbers3[Math.floor( Math.random()*numbers3.length)]
       +   lowerCaseAlfabates[Math.floor( Math.random()*lowerCaseAlfabates.length)];

       passwordFild.value = Password;
       console.log(Password)

});
