//-----------------------------------execise 1-5------------------------------------------------------
// function clicked () {
//     var oops = document.getElementById('circle');
//     alert('button was presssed');
//     var opa = parseInt(oops.style.opacity);
//     //change bg color when clicked
//     oops.style.backgroundColor = 'blue';  
//     //change opacity when clikced
//     oops.style.opacity = opa - 0.25 ;
//     console.log ('opacity 1 ');    
// }


// function op (){
//     var b = document.getElementById('circle');
//     document.getElementById('circle').addEventListener('click' ,clicked);
//     b.style.opacity = '1' ;   
//     console.log ('opacity 0.5 ')  
// }

// document.addEventListener('DOMContentLoaded', op);
//-----------------------------------execise 1-5------------------------------------------------------





//-----------------------------------execise 6------------------------------------------------------

// function p() {
//     var o = document.getElementById('circle');
//     o.style.opacity = 1; 
//     document.addEventListener('click', f);
// }

// function t() {
//     var s = document.getElementById('circle');
//     var d = s.style.opacity;
//     s.style.opacity = d - .01; 
//     document.addEventListener('click', f);
// }

// function f() { 
//     setInterval(t, 10);
// }


// document.addEventListener('DOMContentLoaded', p);

//-----------------------------------execise 6------------------------------------------------------

// 87w  65a  83s  68d

//-----------------------------------execise 7 and 8------------------------------------------------------

// var fo = document.getElementById('circle');
// var left = parseInt(fo.offsetLeft);
// function o () {

//     fo.style.left = fo.offsetLeft + 10 + 'px';
//     document.addEventListener('keydown', p);
//     alert('m here');
//     console.log ('hii');

//         function p () {
//             fo = document.getElementById('circle');
//             left = parseInt(fo.offsetLeft);
//             fo.style.left = fo.offsetLeft + 10 + 'px';
//             //to run what function after keyup
//             document.addEventListener('keyup', what);       
// }
// }
// //to see the pressed button code
// function what(event){
//     console.log(event.keyCode);

// }
// document.addEventListener('DOMContentLoaded', o);



//-----------------------------------execise 7 and 8------------------------------------------------------



// //-----------------------------------execise 9/10 ------------------------------------------------------

// var upgo = false;
// var downgo = false;
// var leftgo = false;
// var rightgo = false;
// var round;
// var ola;
// var go;
// var goa;


// function main (){
//     document.addEventListener('keyup' , unpressed);
//     document.addEventListener('keydown' , pressed);
//     setInterval(move , 10);
// }
// function pressed (event){
//     if (event.keyCode == 83) {
//         upgo = true;
//     }
//     if (event.keyCode == 87){
//         downgo = true;
//     }
//     if (event.keyCode == 65) {
//         rightgo = true;
//     }
//     if (event.keyCode == 68){
//         leftgo = true;
//     }
// }
// // 87w  65a  83s  68d
// function unpressed (event){
//     if (event.keyCode == 83){
//         upgo = false;
//     }
//     if (event.keyCode == 87){
//         downgo = false;
//     }
//     if (event.keyCode == 65) {
//         rightgo = false;
//     }
//     if (event.keyCode == 68){
//         leftgo = false;
//     }
// }

// function move (){
//     if (upgo == true){
//         w();
//     }
//     if (downgo == true){
//         s();
//     }
//     if (leftgo == true){
//         d();
//     }
//     if (rightgo == true){
//         a();
//     }
// }

// function w (){
//     round = document.getElementById('circle');
//     go = round.offsetTop;
//     round.style.top = go + 5 + 'px';

//     ola = document.getElementsByClassName('todo');
//     goa = ola[0].offsetTop;
//     ola[0].style.top = goa + 5 + 'px'; 
// }

// function a (){
//     round = document.getElementById('circle');
//     go = round.offsetLeft;
//     round.style.left = go - 5 + 'px';
//     console.log (ola);

//     console.log (round);
//     ola = document.getElementsByClassName('todo');
//     goa = ola[0].offsetLeft;
//     ola[0].style.left = goa - 5 + 'px';   
// }

// function s (){
//     round = document.getElementById('circle');
//     go = round.offsetTop;
//     round.style.top = go - 5 + 'px';
    
//     ola = document.getElementsByClassName('todo');
//     goa = ola[0].offsetTop;
//     ola[0].style.top = goa - 5 + 'px';   
// }

// function d (){
//     round = document.getElementById('circle');
//     go = round.offsetLeft;
//     round.style.left = go + 5 + 'px';

//     ola = document.getElementsByClassName('todo');
//     goa = ola[0].offsetLeft;
//     ola[0].style.left = goa + 5 + 'px';
// }

// document.addEventListener('DOMContentLoaded' , main);

//-----------------------------------execise 9/ 10------------------------------------------------------

