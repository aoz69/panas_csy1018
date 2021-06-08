function oi () {                           //function banakko ho yo                  
    var ola = document.getElementById('maya2');                                      // name karan gareko id khojera html bata 
    var panas = document.getElementById('maya');                                     // this is to search and idenitify element by id 
    panas.firstChild.nodeValue = "Maya garchu na bhana na mayalu garo huncha !!";   //this is to change the content of 1st child
    ola.firstChild.nodeValue = "Value change bhayo ni haina fucche!!!";             //ola wala baccha ko 1st chora ko value change gareko
}                                                      

function test (){                       //function banakko ho yo
    
    document.getElementById ('maya').addEventListener('click', oi);     //oi bhanne function call gareko when click garda
}   

document.addEventListener('DOMContentLoaded' , test);       //yesle chai 1st ma normal dekhaune kam garcha :) bujeu?    
alert('hii')                        //a pop-up which says "hii" the site with only load agter this...