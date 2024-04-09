import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export const createParallaxTimeline = (
  parallaxRef,
  balloon,
  moon,
  boat,
  textRef,
  setBackground
) => {
  let responsive = gsap.matchMedia();
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: parallaxRef.current,
      start: "top top",
      end: "3000 bottom",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        setBackground(Math.ceil(self.progress * 100 + 20));
      },
    },
  });
  responsive.add(
    {
      isMobile: "(max-width:700px)",
      istablet: "(min-width:701px)",
      isDesktop: "(min-width:993px)",
    },

    (context) => {
      var { isMobile, istablet, isDesktop } = context.conditions;
      tl.to(
        balloon.current,
        {
          x: () => {
            if (isMobile) {
              return +50;
            } else if (istablet) {
              return +100;
            } else if (isDesktop) {
              return +100;
            }
          },
          y: () => {
            if (isMobile) {
              return -50;
            } else if (istablet) {
              return -100;
            } else if (isDesktop) {
              return -100;
            }
          },
          scale: 0.2,
          transition: "2s ease-out",
        },
        0
      );
      tl.to(
        boat.current,
        {
          x: () => {
            if (isMobile) {
              return -70;
            } else if (istablet) {
              return -300;
            } else if (isDesktop) {
              return -300;
            }
          },
          scale: 2.2,
          transition: "3s ease-out",
        },
        0
      );
      tl.to(
        moon.current,
        {
          y: "-=60",
        },
        0
      );
      tl.to(
        textRef.current,
        {
          transition: "all 1s ease ",
          opacity: 1,
          fontSize: "20px",
          y: "-=25",
          zIndex: 999,
        },
        0
      );
    }
  );
};
