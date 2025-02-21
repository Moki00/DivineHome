// Get Current Year
function getCurrentYear() {
  let d = new Date();
  let year = d.getFullYear();
  document.querySelector('#displayDateYear').innerText = year;
}
getCurrentYear();

// Client Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
