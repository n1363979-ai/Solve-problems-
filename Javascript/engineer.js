const personSection = document.getElementById("personSection")
const cardButton = document.querySelectorAll(".cardButton")

const chat = document.getElementById("chat")
const goBack = document.getElementById("goBack")


const summaryS = document.getElementById("summarySection")
const requestsS = document.getElementById("requestsSection")
const traineeS = document.getElementById("traineeSection")

const summaryB=document.getElementById("summaryButton")
const requestsB=document.getElementById("ordersButton")
const traineeB=document.getElementById("traineeButton")

const dialogB=document.querySelectorAll(".dialogButton")
const dialogclose=document.querySelectorAll(".dialogclose")

cardButton.forEach(card =>{
    card.addEventListener("click",(e)=>{
        personSection.style.display="none"
        chat.style.display="flex"
    })
})

goBack.onclick = function(){
    
    chat.style.display="none"
    personSection.style.display="flex"
}

dialogB.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const dataTarget = e.currentTarget.getAttribute('data-target')
        const dialogid= document.getElementById(dataTarget)

        if(dataTarget){
            dialogid.showModal()
            dialogid.style.display="flex"


  


        }
    })
})


dialogclose.forEach(dialog =>{
    dialog.addEventListener("click",(e) =>{
        const dialogcontent= dialog.querySelector(".DialogContent")
        
        if(dialogcontent && !dialogcontent.contains(e.target)){
                dialog.close();
                dialog.style.display="none";
        }
    })
});










summaryB.onclick = () => sectionsSwitch(1)
requestsB.onclick = () => sectionsSwitch(2)
traineeB.onclick = () => sectionsSwitch(3)
   
function sectionsSwitch(button){
    summaryS.style.display="none"
    requestsS.style.display="none"
    traineeS.style.display="none"

    if(button===1){
        summaryS.style.display="grid"
    }
    else if(button===2){
        requestsS.style.display="flex"
    }
     else if(button===3){
        traineeS.style.display="flex"
    }
}