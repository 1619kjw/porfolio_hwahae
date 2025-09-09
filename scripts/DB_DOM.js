/* a태그 새로고침 방지 */
/* 장바구니클릭시 이미지변경 */
/* 좋아요클릭시 이미지변경 */




/* 어워드 슬라이드 DB삽입(li생성) */
const awardContent = document.querySelector('#con1_award .container .contentG');//생성된DB가삽입될부모
awardMoreContent();//함수호출
function awardMoreContent(){
    const liNum = 5;
    const liStart = 0;
    let liEnd = liStart + liNum;
    for(let i=liStart; i<liEnd; i++){
        const awardLi = document.creatElement('li');
        const item = awardDB[i];
        awardLi.innerHTML = `
            <li>
                <a href="#"><img src="#" alt="카테고리별 배너"></a>
                <div class="swiper award">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide slide1">slide1</div>
                        <div class="swiper-slide slide2">slide2</div>
                        <div class="swiper-slide slide3">slide3</div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </li>
        `
        awardContent.appendChild(awardLi);
    }
}


