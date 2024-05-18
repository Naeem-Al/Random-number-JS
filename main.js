const mybutton =document.getElementById("mybutton");
const myp1 =document.getElementById("myp1");
const myp2 =document.getElementById("myp2");
const myp3 =document.getElementById("myp3");

let min=1;
let max=6;
let random1;
let random2;
let random3;


mybutton.onclick=function(){
    random1=Math.floor(Math.random() * max)+min;
    random2=Math.floor(Math.random() * max)+min;
    random3=Math.floor(Math.random() * max)+min;

    myp1.textContent=random1;
    myp2.textContent=random2;
    myp3.textContent=random3;


}
