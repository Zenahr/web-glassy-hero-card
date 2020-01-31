
TweenMax.from(".hero", 2.5, {
      opacity: 0,
      ease: Power2.easeIn
});

t1 = new TimelineMax();

TweenMax.to(".hero", 2.5, {
      delay: 2,
})

TweenMax.from(".hero-headline", 2, {
      delay: 1,
      opacity: 0,
      ease: Power2.easeIn

})

TweenMax.from(".hero-tagline", 1.5, {
      delay: 2.5,
      opacity: 0,
      ease: Power2.easeIn

})

TweenMax.from(".card", 1.5, {
      delay: 2.5,
      opacity: 0,
      ease: Power2.easeIn

})

