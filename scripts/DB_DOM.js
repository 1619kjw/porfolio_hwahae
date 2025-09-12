/* a태그 새로고침 방지 */
/* 장바구니클릭시 이미지변경 */
/* 좋아요클릭시 이미지변경 */




/* 어워드 슬라이드 DB삽입(slide생성) */
const awardWrapper = document.querySelector('.award .swiper-wrapper');//생성된DB가삽입될부모
awardMoreContent();//함수호출
function awardMoreContent(){
    const slideNum = 12;
    const slideStartIndex = 0;
    let slideEndIndex = slideStartIndex + slideNum;

    for(let i=slideStartIndex; i<slideEndIndex; i++){
        const newSlide = document.createElement('div');
        newSlide.className = `swiper-slide slide${i+1}`;
        const item = awardDB[i];
        /* 슬라이드 안에 들어가는 태그 쓰기 ↓ */
        newSlide.innerHTML = `
            <a class="product" href="#">
                <img src="${item.src}" alt="${item.brand} + ${item.name}">
            </a>
            <div class="info">
                <div class="field">
                    <img src="./images/award/award_icon.png" alt="어워드아이콘">
                    <p>${item.kind}</p>
                    <em>${item.ranking}</em>
                </div>
                <div class="main">
                    <p>${item.brand}</p>
                    <em>${item.name}</em>
                </div>
                <div class="price">
                    <em>${item.discount}</em>
                    <p>${(item.price).toLocaleString('ko-kr')}원</p>
                </div>
                <div class="bottom">
                    <div class="review">
                        <img src="./images/common/star_icon.png" alt="별아이콘">
                        <em>${item.score}</em>
                        <p>(${item.review})</p>
                    </div>
                    <div class="user">
                        <a class="likeBtn" href="#"><img src="./images/common/like_icon.png" alt="좋아요담기"></a>
                        <a class="cartBtn" href="#"><img src="./images/common/cart_icon.png" alt="장바구니등록하기"></a>
                    </div>
                </div>
            </div>
        `
        awardWrapper.appendChild(newSlide);
    }
}


