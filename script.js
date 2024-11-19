document.getElementById("enter-button").addEventListener("click", function() {
    // 사진과 버튼을 숨깁니다
    document.getElementById("welcome-section").style.display = "none";
    
    // 결혼식 정보를 보여줍니다
    document.getElementById("wedding-info").style.display = "block";
});

new Swiper('.swiper-container', {

    slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 30, // 슬라이드간 간격
    slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : true,
  
    loop : true, // 무한 반복

    navigation : { // 네비게이션
      nextEl : '.swiper-button-next', // 다음 버튼 클래스명
      prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
  });