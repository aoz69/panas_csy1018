function color () {
    var white = document.getElementById('o');
    white.style.color = 'blue';
    white.style.backgroundColor = 'red';
    white.style.borderRadius = '50px';
    console.log ("changebhayota?");
    document.addEventListener( 'keydown', lol); 
}

function x (){
    document.addEventListener( 'keyPress', lol); 
    console.log ('d');
}

function lol (Event){
    alert(Event.keyCode);
    console.log ('d');
}

document.addEventListener('DOMContentLoaded',color); 
document.addEventListener( 'click', x);
// x(keyDown);