const reportButton = document.querySelector(".more-item");
const reportModal = document.querySelector(".more-ul");

reportButton.addEventListener('click',() => {
    if(reportModal.style.display == "none"){
        reportModal.removeAttribute("style")
    }
    else{
        reportModal.style.display = "none";
    }
})

const commentButton = document.querySelector(".comment-item");
const commentDiv = document.querySelector(".comment");
commentButton.addEventListener('click', ( ) => {
        commentDiv.scrollIntoView({
            behavior : 'smooth',
            block : 'start'
        });
})