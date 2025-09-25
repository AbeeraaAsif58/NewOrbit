// src/components/FooterOrbitMoonTech.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FooterOrbitMoonTech() {
  const root = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top bottom-=80" },
      });
      gsap.from(
        ".ft-stagger",
        {
          opacity: 0,
          y: 12,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        }
      );
      root.current.querySelectorAll(".ft-social a").forEach((el) => {
        el.addEventListener("mouseenter", () => gsap.to(el, { y: -3, duration: 0.18 }));
        el.addEventListener("mouseleave", () => gsap.to(el, { y: 0, duration: 0.22 }));
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const SocialIcon = ({ label, href, path }) => (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );

  return (
    <footer
      ref={root}
      className="relative z-[100] w-full text-slate-300"
      style={{
        background:
          "linear-gradient(180deg, #222B45 0%, #222B45 20%, #27304D 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        {/* GRID */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / intro */}
          <div>
            <h3 className="ft-stagger text-2xl font-extrabold tracking-tight text-slate-100">
              ORBIT WALLS
            </h3>
            <p className="ft-stagger mt-3 max-w-xs leading-relaxed text-slate-300/90">
              Crafting digital excellence through custom
              software solutions.
            </p>

            <div className="ft-social ft-stagger mt-5 flex items-center gap-3 text-slate-100">
              <SocialIcon
                label="Instagram"
                href="https://instagram.com/yourprofile"
                path="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm5.5-.5a1 1 0 100 2 1 1 0 000-2z"
              />
              <SocialIcon
                label="Facebook"
                href="https://facebook.com/yourpage"
                path="M13 22v-7h2.5l.5-3H13V9.5c0-.9.3-1.5 1.8-1.5H16V5.2C15.7 5.1 14.7 5 13.6 5 11 5 9.2 6.6 9.2 9.2V12H7v3h2.2v7H13z"
              />
              <SocialIcon
                label="X"
                href="https://x.com/yourhandle"
                path="M3 3h6.6L14 9.4 20.4 3H23l-8.4 8.4L23 23h-6.6L10 16.6 3.6 23H1l8.4-8.4L1 3z"
              />
              <SocialIcon
                label="LinkedIn"
                href="https://linkedin.com/company/yourcompany"
                path="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.06C12.54 8.88 14.2 8 16.4 8c4.08 0 4.83 2.69 4.83 6.19V23h-4v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.91-2.83 3.89V23h-4V8z"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="ft-stagger text-xl font-semibold text-slate-100">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                ["Custom Software Development", "/services/custom-software"],
                ["Web Application Development", "/services/web-apps"],
                ["Mobile App Development", "/services/mobile-apps"],
                ["UI/UX Design Solutions", "/services/ui-ux"],
              ].map(([label, href]) => (
                <li key={label} className="ft-stagger">
                  <a
                    href={href}
                    className="text-slate-300 hover:text-slate-100 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="ft-stagger text-xl font-semibold text-slate-100">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                ["About Us", "/about"],
                ["Projects", "/projects"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label} className="ft-stagger">
                  <a
                    href={href}
                    className="text-slate-300 hover:text-slate-100 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="ft-stagger text-xl font-semibold text-slate-100">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="ft-stagger">
                <a
                  href="mailto:info@ufglab.com"
                  className="text-slate-300 hover:text-slate-100 transition"
                >
                  info@ORBIT WALLSlab.com
                </a>
              </li>
              <li className="ft-stagger">
                <a
                  href="tel:+97145706249"
                  className="text-slate-300 hover:text-slate-100 transition"
                >
                  +97145706249
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Bottom copyright */}
        <div className="mt-6 text-sm text-slate-400">
          © {year} ORBIT WALLS INFORMATION TECHNOLOGY.      All rights reserved.
        </div>
      </div>
    </footer>
  );
}
