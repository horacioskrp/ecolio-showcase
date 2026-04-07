import { useEffect } from "react";

function animateOrb(gsap: typeof import("gsap").gsap, selector: string, x: number, y: number, duration: number) {
  const orb = document.querySelector(selector) as HTMLElement | null;
  if (!orb) return;

  gsap.to(orb, {
    x,
    y,
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

function registerFadeUps(gsap: typeof import("gsap").gsap, ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger) {
  const elements = gsap.utils.toArray<HTMLElement>(".gs-fade-up");
  for (const element of elements) {
    gsap.from(element, {
      opacity: 0,
      y: 44,
      duration: 0.72,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
  }

  gsap.registerPlugin(ScrollTrigger);
}

function registerStaggerUps(gsap: typeof import("gsap").gsap) {
  const parents = gsap.utils.toArray<HTMLElement>(".gs-stagger-up");
  for (const parent of parents) {
    gsap.from(parent.children, {
      opacity: 0,
      y: 36,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: parent, start: "top 86%", once: true },
    });
  }
}

export function useLandingAnimations(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    const loadAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        registerFadeUps(gsap, ScrollTrigger);
        registerStaggerUps(gsap);
        animateOrb(gsap, "[data-orb='a']", 30, -20, 8);
        animateOrb(gsap, "[data-orb='b']", -25, 18, 10);
      }, rootRef.current);
    };

    void loadAnimations();

    return () => {
      if (ctx.revert) {
        ctx.revert();
      }
    };
  }, [rootRef]);
}
