// 버튼을 클릭하면 도서 찜하기
const scrapButton = document.querySelector(".mds-icon-scrap");

scrapButton.addEventListener("click", (e) => {
    const isScrapped = e.target.classList.toggle("scrapped");

    if (isScrapped) {
        alert("내 서재에 도서를 넣었습니다.");
        e.target.style.backgroundImage =
            "url('https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/back-heart-on.d6a405d1a7177f4eaeb7ddd3793866c4.png')";
    } else {
        alert("내 서재에 도서를 뺐습니다.");
        e.target.style.backgroundImage =
            "url('https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/detail-heart-off.fc064a68f51248a73513a5ef4c5035f5.png')";
    }
});

// 버튼을 클릭하면 도서 찜하기(모바일 버튼)
const mobileScrapButton = document.querySelector(".scrap-button");

mobileScrapButton.addEventListener("click", (e) => {
    // 버튼 안의 찜 이미지
    const img = e.target.querySelector("img");

    const isScrapped = e.target.classList.toggle("scrapped");

    if (isScrapped) {
        alert("내 서재에 도서를 넣었습니다.");
        img.src =
            "https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/back-heart-on.d6a405d1a7177f4eaeb7ddd3793866c4.png";
    } else {
        alert("내 서재에 도서를 뺐습니다.");
        img.src =
            "https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/back-heart-off.b5cd493b0e38b74654f26e2ebf2a3aaf.png";
    }
});

// 현재 nav에 맞춰 동적으로 이동하는 밑줄 span

const tabItems = document.querySelectorAll(".mds-tab-item");
const tabBar = document.querySelector(".mds-tab-bar");

// 밑줄 위치 및 너비 업데이트 함수
function updateTabBar(targetItem) {
    const textSpan = targetItem.querySelector("span"); // 클릭된 탭 안의 span 요소
    const textRect = textSpan.getBoundingClientRect(); // span의 위치와 크기 정보
    const parentRect = targetItem.parentElement.getBoundingClientRect(); // 부모 요소(.mds-tab-wrapper)의 위치

    const width = textRect.width; // 글씨의 너비
    const offsetLeft = textRect.left - parentRect.left; // 글씨의 왼쪽 위치를 부모 기준으로 계산

    // 밑줄의 길이와 위치를 설정
    tabBar.style.width = `${width}px`;
    tabBar.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
}

// 탭 클릭 시 이벤트 설정
tabItems.forEach((item) => {
    item.addEventListener("click", () => {
        // 기존에 선택된 탭의 active 클래스 제거
        tabItems.forEach((i) => i.classList.remove("active"));

        // 현재 클릭된 탭에 active 클래스 추가
        item.classList.add("active");

        // 클릭한 탭에 맞춰 밑줄 이동
        updateTabBar(item);
    });
});

// 페이지 로드시 첫 번째 탭에 맞춰 밑줄 초기 위치 설정
window.addEventListener("load", () => {
    updateTabBar(tabItems[0]);
    tabItems[0].classList.add("active"); // 첫 번째 탭 활성화
});

// 창 크기 변경 시에도 밑줄 위치 재계산 (반응형 대응)
window.addEventListener("resize", () => {
    const activeTab =
        document.querySelector(".mds-tab-item.active") || tabItems[0];
    updateTabBar(activeTab);
});

// 책 소개의 더보기 버튼을 누르면 더보기 버튼이 텍스트가 바뀌고 hidden 클래스가 사라짐
const introText = document.querySelector(".book-info-more-cont-inner");
const introButton = document.querySelector(
    '[data-content-type="intro-more-button"]'
);

introButton.addEventListener("click", (e) => {
    const isHidden = introText.classList.toggle("hidden");
    introButton.innerText = isHidden ? "더보기" : "접어보기";
});
