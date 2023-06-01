gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// VanillaTilt.registerPlugin()
if (ScrollTrigger.isTouch !== 1) {
  //ScrollSmoother
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });
  gsap.fromTo(
    '.main-section',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.main-section',
        start: 'center',
        end: '800',
        scrub: true,
      },
    },
  );
  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -50, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          start: '-700',
          end: '-100',
          trigger: item,
          //   scrub: true,
        },
      },
    );
  });
  let itemsR = gsap.utils.toArray('.gallery__rigth .gallery__item');

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 50, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          start: '-700',
          end: '-100',
          trigger: item,
          //   scrub: true,
        },
      },
    );
  });
  gsap.fromTo(
    '.container-cards',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: '.container-cards',
        start: '-900',
        end: '0',
        scrub: true,
      },
    },
  );
  //Vanilla
  VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 1,
  });
}
