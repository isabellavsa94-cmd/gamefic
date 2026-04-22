import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealElements: Element[] = [];
    
    // Collect all reveal elements
    if (el.classList.contains("reveal")) {
      revealElements.push(el);
    }
    el.querySelectorAll(".reveal").forEach((child) => {
      revealElements.push(child);
    });

    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Also reveal nested children
            entry.target.querySelectorAll(".reveal").forEach((child) => {
              child.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "50px 0px 50px 0px" }
    );

    // Use requestAnimationFrame to ensure elements are laid out before observing
    requestAnimationFrame(() => {
      revealElements.forEach((r) => observer.observe(r));
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
