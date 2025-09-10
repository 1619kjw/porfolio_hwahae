/* a태그 새로고침 막기 */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (anchor.getAttribute('href') === '#') {
        e.preventDefault();
        }
    });
});

const mainSwiper = new Swiper('.main_bnr',{
    direction:'horizontal',
    // autoplay:{delay:1000,},
    pagination:{
        el:'.main_bnr + .ad_btn_group .swiper-pagination',//대상설정
        type:'fraction',
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    on:{/* custom-pagination 제어 */
        /* this는 Swiper 인스턴스 */
        init:function(){update(this);},
        slideChange:function(){update(this);},
    },
});
function update(swiper){
    document.querySelector('.current').textContent=String(swiper.realIndex + 1).padStart(2, '0');
    document.querySelector('.total').textContent=String(swiper.slides.length).padStart(2,'0');
}
/* $('.swiper-pause').click(function(){
    mainSwiper.autoplay.stop();
})
$('.swiper-play').click(function(){
    mainSwiper.autoplay.start();
}) */

/* 재생, 일시정지버튼 */
// const mainBnr = document.querySelector('.main_bnr');
const pauseBtn = document.querySelector('.pause');
const playBtn = document.querySelector('.play');
console.log(pauseBtn,playBtn);
pauseBtn.addEventListener('click',()=>{
    mainSwiper.autoplay.stop();
    console.log('정지')
    // playBtn.style.display = 'none';
})
playBtn.addEventListener('click',()=>{
    mainSwiper.autoplay.start();
})

/* let isPlaying = true;
$('.pause_play').click(function(){
    const $img = $(this).find('img');
    if (isPlaying){
        mainSwiper.autoplay.stop();
        $img.attr('src', './images/icon_play.png').attr('alt','재생');
    }else{
        mainSwiper.autoplay.stop();
    }
})
 */





/* 어워드 영역 스와이퍼 */
const awardSwiper = new Swiper('.award',{
    slidesPerView:3,
    spaceBetween:20,
    direction:'vertical',
});

