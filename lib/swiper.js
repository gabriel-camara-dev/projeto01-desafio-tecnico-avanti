function initializeSwiper() {
  if (typeof Swiper === "undefined") {
    return;
  }

  const carousels = document.querySelectorAll(".products-swiper");

  carousels.forEach((carousel) => {
    const section = carousel.closest("section");
    if (!section) {
      return;
    }

    const paginationEl = section.querySelector(".products-pagination");
    const nextEl = section.querySelector(".products-next");
    const prevEl = section.querySelector(".products-prev");

    new Swiper(carousel, {
      loop: false,
      centeredSlides: false,
      roundLengths: true,
      spaceBetween: 12,
      slidesPerView: 2,
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      navigation: {
        nextEl,
        prevEl,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      },
    });
  });
}
