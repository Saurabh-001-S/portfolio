const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-content"),
      smooth: true,
      getSpeed: true,
      getDirection: true,
      inertia: 0.75,
});

//each time locomotive scroll updated,tell scrollTrigger to update sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

//tell scrollTrigger to see these proxy methods for the ".snooth-scroll"element since Locomotive Scroll is hi Jacking things
ScrollTrigger.scrollerProxy(".smooth-content", {
      scrollTop(value) {
            return arguments.length ?
                  locoScroll.scrollTo(value, 0, 0) :
                  locoScroll.scroll.instance.scroll.y;
      },// we don't have to define a scrollLeft because we're Only scrooling Vertically.
      getBoundingClientRect() {
            return {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight
            };
      },
      //LocomotiveScroll handles things completely differently on mobile devices- it doesn't even transform  the container at all! So to get the correct behaviour and avoid jitters, we should pin things with position:fixed on mobile.we sense it by checking to see if there's a transform applied to checking to see if there's a transform applied to container (the LocomotiveScroll-contrilled element).
      pinType: document.querySelector(".smooth-content").style.transform ? "transform" : "fixed"
})


const anchorLinks = document.querySelectorAll(
      'a[href^=\\#]:not([href$=\\#])'
);

anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute('href');
      let target = document.querySelector(hashval);

      anchorLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            anchorLinks.forEach((anchorLink) => {
                  anchorLink.classList.remove('is-active');
            });

            anchorLink.classList.add('is-active');

            locoScroll.scrollTo(target);
      });
});

document.addEventListener('DOMContentLoaded', function () {
      function ScrollUpdateDelay() {
            setTimeout(function () {
                  locoScroll.update();
            }, 1000);
      }

      ScrollUpdateDelay();
});