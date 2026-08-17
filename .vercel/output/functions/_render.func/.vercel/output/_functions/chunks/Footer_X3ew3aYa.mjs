import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, m as maybeRenderHead } from './astro/server_C8NFGx30.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://pressfolio.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Transform press releases into beautiful blog posts. PressFolio - Your press release to blog converter." } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} | PressFolio</title><!-- Favicon --><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><!-- Styles --><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/workspace/pressfolio/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://pressfolio.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPage = "" } = Astro2.props;
  const navItems = [
    { href: "/", label: "Tool" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="header-inner"> <a href="/" class="logo">Press<span>Folio</span></a> <nav class="nav-links"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(currentPage === item.href ? "active" : "", "class")}> ${item.label} </a>`)} </nav> <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">🌙</button> </div> </header>`;
}, "/workspace/pressfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-inner"> <div class="footer-grid"> <div class="footer-brand"> <h3>Press<span>Folio</span></h3> <p>Transform press releases into beautiful blog posts. Simple, fast, and free.</p> </div> <div class="footer-links"> <h4>Navigate</h4> <ul> <li><a href="/">Tool</a></li> <li><a href="/how-it-works">How It Works</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <div class="footer-links"> <h4>Legal</h4> <ul> <li><a href="/privacy">Privacy Policy</a></li> <li><a href="/terms">Terms of Service</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>© ${year} PressFolio. All rights reserved.</p> </div> </div> </footer>`;
}, "/workspace/pressfolio/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
