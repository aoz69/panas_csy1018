var photo = document.getElementsByClassName('me');

function main () {
    document.addEventListener('click' , one);
    console.log ('1st'); 
}

function one () {
    photo[0].addEventListener('click', second);
    console.log ('2nd'); 
}

function second (){
    var big = document.getElementById('left');
    big.style.backgroundImage = 'url("pics/2.png")';
    photo[1].addEventListener('click', third);
}

function third (){
    var big = document.getElementById('left');
    big.style.backgroundImage = 'url("pics/3.png")';
    photo[2].addEventListener('click', forth);
}

function forth () {
    var big = document.getElementById('left');
    big.style.backgroundImage = 'url("pics/1.png")';    
}

document.addEventListener('DOMContentLoaded' , main);