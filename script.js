document.getElementById("enter-button").addEventListener("click", function() {
    // 사진과 버튼을 숨깁니다
    document.getElementById("welcome-section").style.display = "none";
    
    // 결혼식 정보를 보여줍니다
    document.getElementById("wedding-info").style.display = "block";
});


document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
