// Бургер
menu.onclick = function Burger(){

    var myTopnav = document.getElementById('myTopnav')

    if(myTopnav.className === "topnav"){

    myTopnav.className += " responsive"

    }
    else{
        myTopnav.className = "topnav"
    }

}