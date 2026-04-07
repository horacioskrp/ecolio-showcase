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

function registerFadeUps(gsap: typeof import("gsap").gsap) {
  const elements = gsap.utils.toArray<HTMLElement>(".gs-fade-up");
  for (const element of elements) {
    gsap.from(element, {
      opacity: 0,
      y: 44,
      duration: 0.72,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
  }
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
      immediateRender: false,
      scrollTrigger: { trigger: parent, start: "top 86%", once: true },
    });
  }
}

function registerModuleCards(gsap: typeof import("gsap").gsap) {
  const cards = gsap.utils.toArray<HTMLElement>(".gs-module-card");
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay: index * 0.08,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      },
    );
  });
}

export function useLandingAnimations(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    let isCancelled = false;

    const loadAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (isCancelled || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        registerFadeUps(gsap);
        registerStaggerUps(gsap);
        registerModuleCards(gsap);
        animateOrb(gsap, "[data-orb='a']", 30, -20, 8);
        animateOrb(gsap, "[data-orb='b']", -25, 18, 10);
      }, rootRef.current);
    };

    void loadAnimations();

    return () => {
      isCancelled = true;
      if (ctx.revert) {
        ctx.revert();
      }
    };
  }, [rootRef]);
}
