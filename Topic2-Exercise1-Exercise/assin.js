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



//-----------------------------------execise 7------------------------------------------------------

var fo = document.getElementById('circle');
var left = parseInt(fo.offsetLeft);
function o () {
    fo.style.left = fo.offsetLeft + 10 + 'px';
    document.addEventListener('click', p);
    alert('m here');
    console.log ('hii');
}

function p () {
    fo = document.getElementById('circle');
    left = parseInt(fo.offsetLeft);
    fo.style.left = fo.offsetLeft + 10 + 'px';
    
}

document.addEventListener('DOMContentLoaded', o);



//-----------------------------------execise 7------------------------------------------------------


