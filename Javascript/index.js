const goalButton = document.getElementById("goalButton")
const goalSection = document.getElementById("goalSection")
const startSection = document.getElementById("startSection")

goalButton.onclick = function(){
    startSection.style.display="none"
    goalSection.style.display="flex"

    goalSection.animate([
        {opacity:0, transform:"translateY(20px)"}
        ,
        {opacity:1, transform:"translateY(0px)"}
    ],
    {
        duration:400
        ,
        easing:"ease-out"
        ,
        fill:"forwards"

    })

    
}