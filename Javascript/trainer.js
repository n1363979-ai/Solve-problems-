const dialog = document.getElementById("Dialog")
const DialogContent = document.getElementById("DialogContent")

const AddRButton = document.getElementById("AddRequestButton")

const selected = document.getElementById("selected")



AddRButton.onclick = function(){
    dialog.showModal()
    dialog.style.display="flex"
}




dialog.addEventListener("click", (event) => {
    if (!DialogContent.contains(event.target)) {
        dialog.close();
        dialog.style.display="none"
    }
});

selected.onclick=function(){
    if (selected.classList.contains("selected")) {
        selected.classList.remove("selected")
    }
    else{
        selected.classList.add("selected")
    }
}
