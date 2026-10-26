const personSection = document.getElementById("personSection")
const cardButton = document.querySelectorAll(".cardButton")

const chat = document.getElementById("chat")
const goBack = document.getElementById("goBack")

const dialogB=document.querySelectorAll(".dialogButton")
const dialogclose=document.querySelectorAll(".dialogclose")

const showSection = document.querySelectorAll(".showSection")
const requestsS= document.getElementById("requestsSection")
const requestInfo= document.getElementById("requestsInfoSection")
const chatSectionn = document.getElementById("chatSectionn")

// const issuesTag = document.querySelectorAll(".issuesTagSelect")


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



// this is trainer page 
function closeSections(){

     if (requestsS) requestsS.style.display = "none";
    if (requestInfo) requestInfo.style.display = "none";
    if(chatSectionn) chatSectionn.style.display="none"

}


showSection.forEach(button=>{
    button.addEventListener("click",(e)=>{
        const dataTarget = e.currentTarget.getAttribute("data-target")
        const section = document.getElementById(dataTarget)

        if(dataTarget){
            closeSections()
           
            section.style.display="flex";
        }
    })
})


// issuesTag.forEach(button =>{
//     button.addEventListener("click", (e) =>{
     
//         button.onclick = function(){

//             if(button.getAttribute("selected") == "no"){
//                 button.setAttribute("yes")
//                 button.style.backgroundcolor=("red")
//             }

//             if(button.getAttribute("selected") == "yes"){
//                 button.setAttribute("no")
//                 button.style.background-color("blue")
//             }

// //         }
    
        
       
        
//     })
// })