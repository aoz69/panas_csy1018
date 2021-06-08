function clicked () {
    var oops = document.getElementById('circle');
    alert('button was presssed');
}

function op (){
    document.getElementById('circle').addEventListener('click' ,clicked);
}

document.addEventListener('DOMContentLoaded', op);