document.addEventListener('DOMContentLoaded', function () {
  const gallerySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    spaceBetween: window.innerWidth * 0.01, // 设置图片间距为屏幕宽度的 1%
    autoplay: {
      delay: 3000, // 自动播放间隔，单位：毫秒
      disableOnInteraction: true, // 用户操作后，自动播放是否继续进行
    },
    pagination: {
      el: '.friends-swiper-pagination',
      clickable: true,
    },
  });
});




