"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const selectors = [
      ".hero-inner", ".hero-art", ".section-head", ".project-card",
      ".manifesto-left", ".manifesto-right", ".trust-grid > div",
      ".live-project-card", ".principle", ".about-story > *",
      ".contact-content > *", ".contact-method", ".inner-hero > h1",
      ".inner-hero > p", ".list-heading", ".page-eyebrow"
    ];

    const targets = new Set<Element>();
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => targets.add(element));
    });

    targets.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      const parent = element.parentElement;
      if (parent && (parent.classList.contains("project-grid") || parent.classList.contains("live-project-grid") || parent.classList.contains("trust-grid"))) {
        (element as HTMLElement).style.setProperty("--reveal-delay", `${(index % 6) * 75}ms`);
      }
    });

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
