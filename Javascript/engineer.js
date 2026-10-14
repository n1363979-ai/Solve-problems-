const dialog = document.getElementById("dialog")
const DialogContent = document.getElementById("DialogContent")

const RequestCard = document.getElementById("RequestCard")

RequestCard.onclick = function(){
    dialog.showModal()
    dialog.style.display="flex"
}




dialog.addEventListener("click", (event) => {
    if (!DialogContent.contains(event.target)) {
        dialog.close();
        dialog.style.display="none"
    }
});