import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C8NFGx30.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_X3ew3aYa.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Terms of Service", "description": "Terms of Service for PressFolio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container"> <article class="legal-content" style="padding: 3rem 0;"> <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Terms of Service</h1> <p style="color: var(--text-muted); margin-bottom: 2rem;">Last updated: August 2026</p> <h2>1. Acceptance of Terms</h2> <p>By using PressFolio, you agree to these terms. If you do not agree, please do not use this tool.</p> <h2>2. Purpose</h2> <p>PressFolio is a text formatting tool that helps transform press releases into blog-friendly formats. It is intended for legitimate content creation purposes.</p> <h2>3. Content Responsibility</h2> <ul> <li><strong>You retain full ownership</strong> of content you create using PressFolio</li> <li><strong>You are responsible</strong> for verifying the accuracy of generated content before publishing</li> <li><strong>You must attribute</strong> sources appropriately when required</li> </ul> <h2>4. Prohibited Uses</h2> <p>You may not use PressFolio to:</p> <ul> <li>Generate misleading or fraudulent content</li> <li>Create defamatory or harmful material</li> <li>Infringe on intellectual property rights</li> <li>Generate spam or malicious content</li> </ul> <h2>5. Disclaimer</h2> <p>PRESSFOLIO IS PROVIDED "AS IS" WITHOUT WARRANTIES. We do not guarantee the accuracy, completeness, or reliability of any generated content. Users must verify all information independently.</p> <h2>6. Limitation of Liability</h2> <p>We are not liable for any damages arising from the use of PressFolio or content generated through it.</p> <h2>7. Advertisements</h2> <p>PressFolio displays third-party advertisements. We are not responsible for the content of advertiser websites.</p> <h2>8. Changes to Terms</h2> <p>We may update these terms at any time. Continued use constitutes acceptance of new terms.</p> <h2>9. Contact</h2> <p>Questions? <a href="/contact">Contact us</a>.</p> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/workspace/pressfolio/src/pages/terms.astro", void 0);

const $$file = "/workspace/pressfolio/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
