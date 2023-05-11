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
// Якорь
const anchors = document.querySelectorAll('a[href*= "#"]');
for (let anc of anchors){
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const BlockID = anc.getAttribute('href')
        document.querySelector('' +BlockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>500)
})
function scrollTopTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}