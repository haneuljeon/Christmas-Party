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

function createSnowflakes(){
  const snowflakeCount = 10;
  const body = document.body;

  for (let i =0; i < snowflakeCount; i++){
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 +'vw';
    snowflake.style.animationDuration = Math.random() * 10 + 20 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 
    snowflake.innerHTML = '❄';
    body.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
  }
}

window.onload = function () {
  setInterval(createSnowflakes, 1000); 
};