
const tl = gsap.timeline();

// Navbar ANimation
tl.from(".header_logo", {
      x: -100,
      delay: 0.2,
      duration: .3,
      scale: 2,
      opacity: 0
});

tl.from(".header_links,.header_menu_list>.menu_item", {
      xPercent: 150,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
      stagger: .2,
});
tl.from(".socialLink>ul>.socialLink_li", {
      x: -100,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
      stagger: 0.3
});



// ABOUT ME CONTENT 
gsap.to('.aboutMe_summary .translate_p', {
      transform: 'translateX(-200%)',
      fontWeight: 100,
      scrollTrigger: {
            trigger: '.aboutMe',
            scroller: '.smooth-content',
            start: "top 10%",
            end: "top -150%",
            scrub: 2,
            pin: true,
      },
});

// Text FILLING CONTENT 
let text;
function runSplit() {
      text = new SplitType('.text_filliing', { types: 'lines' });
      const wordElements = document.querySelectorAll(".line");
      wordElements.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("line-mask");
            element.appendChild(div);
      });
}
runSplit();

window.addEventListener("resize", function () {
      text.revert();
      runSplit();
})

const wordElements = document.querySelectorAll(".line");
wordElements.forEach(function (element) {
      let triggerElement = element;
      let targetElement = element.querySelector(".line-mask");
      let tl = gsap.timeline()
      tl.to(targetElement, {
            width: 0,
            duration: 1,
            stagger: .1,
            scrollTrigger: {
                  trigger: triggerElement,
                  scroller: '.smooth-content',
                  scrub: 1,
                  start: "top center",
                  end: "bottom center",
            },
      });
});


// SKILL SECTION 
const skillTl = gsap.timeline({
      scrollTrigger: {
            trigger: '.skills',
            scroller: '.smooth-content',
            start: "top 0%",
            end: "top -100%",
            scrub: 1,
            pin: true,
            yoyo: true
      },
});

skillTl.from('.skill_icon-list', {
      scale: 0,
      delay: 0.3,
      opacity: 0.5,
      duration: 0.3,
      stagger: 0.2
})


gsap.from('.list_1', {
      xPercent: -50,
      duration: 0.1,
      opacity: 0,
      scrollTrigger: {
            trigger: '.project_list_container>ul',
            scroller: '.smooth-content',
            start: "top -10%",
            end: "top -100%",
            scrub: 1,
            pin: true,
      },
})


ScrollTrigger.addEventListener('refresh', () =>
      locoScroll.update())

ScrollTrigger.refresh();