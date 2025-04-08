// 정렬 버튼을 누르면 정렬 모달창 켜짐
const sortModal = document.querySelector(".modal-section");
const openModalButton = 

// 정렬 모달창에서 누르면 각 옵션이 선택되며 스타일이 달라짐
const optionButtons = document.querySelectorAll(".modal-radio");
const optionTexts = document.querySelectorAll(".label");

optionButtons.forEach((optionButton) => {
    optionButton.addEventListener("click", (e) => {
        // 모든 버튼에서 checked 클래스 제거
        optionButtons.forEach((btn) => btn.classList.remove("checked"));
        // 선택한 버튼만 checked 클래스 추가
        optionButton.classList.add("checked");
    });
});

// 취소 버튼 누르면 정렬 모달창 꺼짐
const cancelButton = document.querySelector(".button-cancel");

cancelButton.addEventListener((e) => {
    sortModal.style.display = "none";
});
