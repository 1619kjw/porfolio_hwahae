const mainSwiper = new Swiper('.main_bnr',{
    direction:'horizontal',
    autoplay:{delay:1000,},
    pagination:{
        el:'.main_bnr + .ad_btn_group .swiper-pagination',//대상설정
        type:'fraction',
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});
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