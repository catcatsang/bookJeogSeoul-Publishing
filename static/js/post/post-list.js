// 상단 버튼을 누를 때마다 추천과 팔로잉 독후감 목록이 뜸
const recommendListButton = document.querySelector(
    ".menu-list>ul>li:nth-child(1)"
);
const followingListButton = document.querySelector(
    ".menu-list>ul>li:nth-child(2)"
);

const recommendList = document.querySelector(".card-list.recommend");
const followingList = document.querySelector(".card-list.following");

// 팔로잉 메뉴를 눌렀을 때
followingListButton.addEventListener("click", (e) => {
    e.preventDefault();

    // 클릭된 요소의 부모 요소인 <li>나 <a>를 찾아서 클래스 수정
    const clickedButton = e.target.closest("li");

    // 추천 목록 및 팔로잉 목록의 활성화 상태 변경
    recommendList.classList.remove("active");
    followingList.classList.add("active");

    // 버튼의 활성화 상태 변경
    recommendListButton.classList.remove("active");
    clickedButton.classList.add("active"); // clickedButton은 <li>가 됨
});

// 추천 메뉴를 눌렀을 때
recommendListButton.addEventListener("click", (e) => {
    e.preventDefault();

    // 클릭된 요소의 부모 요소인 <li>를 찾아서 클래스 수정
    const clickedButton = e.target.closest("li");

    // 팔로잉 목록을 비활성화하고 추천 목록을 활성화
    followingList.classList.remove("active");
    recommendList.classList.add("active");

    // 버튼의 활성화 상태 변경
    followingListButton.classList.remove("active");
    clickedButton.classList.add("active"); // clickedButton은 <li>가 됨
});
// 점 세개 버튼을 누르면 신고하기 버튼이 뜸
const moreButtons = document.querySelectorAll(".more > button");

moreButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const more = btn.closest(".more");
        const moreArea = more.querySelector(".more-area");

        const isHidden = btn.classList.toggle("hidden");
        if (isHidden) {
            moreArea.style.display = "flex";
        } else {
            moreArea.style.display = "none";
        }
    });
});

// 팔로우 누르면 버튼 스타일이 바뀜
const followButtons = document.querySelectorAll(".user>button");

followButtons.forEach((followButton) => {
    followButton.addEventListener("click", (e) => {
        const notFollowing = e.target.classList.toggle("following");
        if (notFollowing) {
            alert("팔로우했습니다.");
            e.target.innerText = "팔로잉";
        } else {
            alert("팔로우를 해제했습니다.");
            e.target.innerText = "팔로우";
        }
    });
});
