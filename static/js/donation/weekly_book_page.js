const sortModalOpen = document.querySelector(".sort-option");
const sortModal = document.querySelector(".sort-modal")
const modalCloseButton = document.querySelector(".modal-close-button")

sortModalOpen.addEventListener("click",() =>{
    sortModal.removeAttribute("style");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
})

modalCloseButton.addEventListener('click', () =>{
    sortModal.style.display = "none"
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
})

