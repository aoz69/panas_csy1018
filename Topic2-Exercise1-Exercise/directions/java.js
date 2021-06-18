var man = document.getElementsByClassName('one');
var pressed = false;

function main () {
    console.log ('supp');
    document.addEventListener('keydown' , down);
}


function down () {
    if (event.keyCode == 87)
    {
        pressed = true;
        w();
    }

    if (event.keyCode == 83)
    {
        pressed = true;
        a();
    }

    if (event.keyCode == 65)
    {
        pressed = true;
        d();
    }

    if (event.keyCode == 68)
    {
        pressed = true;
        s();
    }
}

function pres () {
    if (pressed == true)
    {
        w();
    }
    if (pressed == true)
    {
        a();
    }
    if (pressed == true)
    {
        s();
    }
    if (pressed == true)
    {
        d();
    }
}
function w () {
    pressed == true
    console.log('2nd');
    man[0].style.backgroundImage = 'url("pics/1.png")';
}

function a () {
    pressed == true
    console.log('3rd');
    man[0].style.backgroundImage = 'url("pics/2.png")';
}

function s () {
    pressed == true
    console.log('4rd');
    man[0].style.backgroundImage = 'url("pics/3.png")';
}

function d () {
    pressed == true
    console.log('5rd');
    man[0].style.backgroundImage = 'url("pics/4.png")';
}
document.addEventListener('DOMContentLoaded' , main);