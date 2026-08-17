import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C8NFGx30.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_X3ew3aYa.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy", "description": "Privacy Policy for PressFolio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container"> <article class="legal-content" style="padding: 3rem 0;"> <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Privacy Policy</h1> <p style="color: var(--text-muted); margin-bottom: 2rem;">Last updated: August 2026</p> <h2>1. User Data Non-Retention</h2> <p>PressFolio is a client-side tool. All text processing happens entirely within your web browser. We do not:</p> <ul> <li>Upload, transmit, or store any text you input</li> <li>Collect any personal information from users</li> <li>Maintain any user accounts or profiles</li> </ul> <h2>2. Local Storage</h2> <p>We use browser localStorage to store:</p> <ul> <li><strong>Theme Preference:</strong> Your light/dark mode selection</li> <li><strong>Draft Auto-Save:</strong> Your current work-in-progress (last 5 minutes)</li> </ul> <p>This data stays on your device and is never transmitted to our servers.</p> <h2>3. Third-Party Services</h2> <ul> <li><strong>Google Fonts:</strong> Used for typography. See <a href="https://policies.google.com/privacy">Google Privacy Policy</a></li> <li><strong>Google AdSense:</strong> For advertising. See <a href="https://policies.google.com/privacy">Google Privacy Policy</a></li> </ul> <h2>4. Cookies</h2> <p><strong>Essential:</strong> Theme preference cookie (1 year)<br> <strong>Advertising:</strong> Third-party AdSense cookies may be used</p> <h2>5. Your Rights</h2> <ul> <li>Clear your browser's localStorage to remove saved data</li> <li>Opt out of personalized ads via <a href="https://www.google.com/settings/ads">Google Ads Settings</a></li> <li>Disable cookies in your browser (may affect site functionality)</li> </ul> <h2>6. Contact</h2> <p>Questions about this policy? <a href="/contact">Contact us</a>.</p> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/workspace/pressfolio/src/pages/privacy.astro", void 0);

const $$file = "/workspace/pressfolio/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Privacy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
