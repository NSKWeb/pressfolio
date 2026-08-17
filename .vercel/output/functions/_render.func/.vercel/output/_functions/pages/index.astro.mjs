import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C8NFGx30.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_X3ew3aYa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Press to Blog Converter", "description": "Transform press releases into beautiful blog posts instantly." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "/" })} ${maybeRenderHead()}<main> <!-- Hero --> <section class="hero container"> <h1>Press <span>→</span> Blog</h1> <p class="hero-tagline">Paste any press release. Get a beautifully formatted blog post ready to publish.</p> </section> <!-- Ad --> <div class="container"> <div class="ad-placeholder leaderboard">📢 AD SPACE — Google AdSense</div> </div> <!-- Tool Container --> <div class="tool-container container"> <!-- Stage Navigation --> <div class="stages-nav"> <button class="stage-btn active" data-stage="1"> <span class="stage-number">1</span> <span>Input</span> </button> <button class="stage-btn" data-stage="2"> <span class="stage-number">2</span> <span>Parse</span> </button> <button class="stage-btn" data-stage="3"> <span class="stage-number">3</span> <span>Refine</span> </button> <button class="stage-btn" data-stage="4"> <span class="stage-number">4</span> <span>Compose</span> </button> <button class="stage-btn" data-stage="5"> <span class="stage-number">5</span> <span>Export</span> </button> </div> <!-- STAGE 1: INPUT --> <div class="stage-content active" id="stage-1"> <div class="stage-header"> <h2>📥 Stage 1: Paste Your Press Release</h2> <p>Copy the text from any official press release and paste it below. We support PIB India, company PRs, and more.</p> </div> <div class="form-group"> <label class="form-label">Raw Press Release Text</label> <textarea id="raw-input" class="form-textarea raw-input" placeholder="Paste the press release text here...">Ministry of New and Renewable Energy

Government of India approves National Green Hydrogen Mission with an outlay of Rs. 19,744 crore.

Posted On: 04 JAN 2023 3:45PM by PIB Delhi

New Delhi: The Union Cabinet, chaired by Prime Minister Shri Narendra Modi, has approved the National Green Hydrogen Mission. The initial outlay for the Mission will be Rs. 19,744 crore, including an outlay of Rs. 17,490 crore for the SIGHT programme, Rs. 1,466 crore for pilot projects, Rs. 400 crore for R&D, and Rs. 388 crore towards other Mission components.

"The National Green Hydrogen Mission will place India at the forefront of clean energy transition, reducing fossil fuel imports and creating over six lakh jobs by 2030," Union Minister Anurag Thakur stated during the briefing.

The Mission aims to deliver an annual production of 5 MMT (Million Metric Tonnes) of Green Hydrogen by 2030, with an associated renewable energy capacity addition of about 125 GW. It will bring over Rs. 8 lakh crore in total investments and abate nearly 50 MMT of annual greenhouse gas emissions.</textarea> </div> <div class="form-group"> <label class="form-label">Source Type</label> <select id="source-type" class="form-select"> <option value="pib">Press Information Bureau (PIB)</option> <option value="company">Company Press Release</option> <option value="ministerial">Ministerial Statement</option> <option value="other">Other Source</option> </select> </div> <button class="btn btn-primary" id="parse-btn">
🔍 Run Auto-Parse →
</button> </div> <!-- STAGE 2: PARSE --> <div class="stage-content" id="stage-2"> <div class="stage-header"> <h2>🔍 Stage 2: Extracted Parameters</h2> <p>We've analyzed your press release and extracted the key information. Review and edit below.</p> </div> <div class="params-grid"> <div class="param-card"> <h4>Ministry / Source</h4> <div class="value" id="extracted-source">-</div> </div> <div class="param-card"> <h4>Date</h4> <div class="value" id="extracted-date">-</div> </div> <div class="param-card"> <h4>Location</h4> <div class="value" id="extracted-location">-</div> </div> <div class="param-card"> <h4>Headline</h4> <div class="value" id="extracted-headline">-</div> </div> </div> <div class="form-group"> <label class="form-label">Key Quote</label> <textarea id="extracted-quote" class="form-textarea" style="min-height: 100px;" placeholder="Key statement from the release..."></textarea> </div> <div class="form-group"> <label class="form-label">Key Figures (one per line)</label> <textarea id="extracted-figures" class="form-textarea" style="min-height: 100px;" placeholder="• Figure 1
• Figure 2
• Figure 3"></textarea> </div> <div class="form-group"> <label class="form-label">Context / Summary</label> <textarea id="extracted-context" class="form-textarea" style="min-height: 100px;" placeholder="Brief context about the announcement..."></textarea> </div> <div class="btn-group"> <button class="btn btn-primary" id="proceed-refine">
✏️ Proceed to Refine →
</button> <button class="btn btn-secondary" id="back-to-input">
← Back to Input
</button> </div> </div> <!-- STAGE 3: REFINE --> <div class="stage-content" id="stage-3"> <div class="stage-header"> <h2>✏️ Stage 3: Refine & Edit</h2> <p>Fine-tune the extracted parameters to match your style and ensure accuracy.</p> </div> <div class="params-grid"> <div class="form-group"> <label class="form-label">Title</label> <input type="text" id="refine-title" class="form-input" placeholder="Your blog post title"> </div> <div class="form-group"> <label class="form-label">Category</label> <select id="refine-category" class="form-select"> <option value="government">Government</option> <option value="business">Business</option> <option value="technology">Technology</option> <option value="economy">Economy</option> <option value="health">Health</option> <option value="environment">Environment</option> <option value="other">Other</option> </select> </div> </div> <div class="form-group"> <label class="form-label">Intro Paragraph</label> <textarea id="refine-intro" class="form-textarea" style="min-height: 120px;" placeholder="Auto-generated from parsing, or write your own intro..."></textarea> </div> <div class="form-group"> <label class="form-label">Blog Format</label> <select id="refine-format" class="form-select"> <option value="article">📄 News Article</option> <option value="brief">📋 Quick Brief (bullet points)</option> <option value="thread">🐦 Tweet Thread Style</option> </select> </div> <!-- AI Enhancement Section --> <div class="ai-section"> <div class="ai-header"> <span class="ai-icon">✨</span> <span>AI Enhancement</span> </div> <p class="ai-description">Use AI to generate a detailed, engaging blog post from your extracted content.</p> <div class="ai-options"> <label class="ai-option"> <input type="radio" name="ai-mode" value="basic" checked> <span>📝 Basic (Quick)</span> <small>Use local formatting</small> </label> <label class="ai-option"> <input type="radio" name="ai-mode" value="ai"> <span>🤖 AI Enhanced</span> <small>GPT-powered detailed post</small> </label> </div> <div id="ai-loading" class="ai-loading" style="display: none;"> <div class="spinner"></div> <span>Generating with AI...</span> </div> <div id="ai-error" class="ai-error" style="display: none;"></div> </div> <div class="btn-group"> <button class="btn btn-primary" id="generate-post">
✍️ Generate Blog Post
</button> <button class="btn btn-secondary" id="back-to-parse">
← Back to Parse
</button> </div> </div> <!-- STAGE 4: COMPOSE --> <div class="stage-content" id="stage-4"> <div class="stage-header"> <h2>✍️ Stage 4: Your Blog Post</h2> <p>Here's your generated blog post. Review it and make any final tweaks.</p> </div> <!-- Preview --> <div class="preview-box" id="preview-box"> <h1 class="preview-title" id="preview-title">Your Title Here</h1> <p class="preview-meta" id="preview-meta">Category • Date</p> <div class="preview-content" id="preview-content"> <p>Your blog content will appear here...</p> </div> </div> <div class="btn-group"> <button class="btn btn-primary" id="proceed-export">
📤 Proceed to Export →
</button> <button class="btn btn-secondary" id="back-to-refine">
← Edit More
</button> </div> </div> <!-- STAGE 5: EXPORT --> <div class="stage-content" id="stage-5"> <div class="stage-header"> <h2>📤 Stage 5: Export & Share</h2> <p>Copy your blog post as Markdown, download it, or share it directly.</p> </div> <div class="btn-group"> <button class="btn btn-primary" id="copy-markdown">
📋 Copy Markdown
</button> <button class="btn btn-secondary" id="download-md">
📥 Download .md
</button> <button class="btn btn-success" id="copy-html">
🌐 Copy HTML
</button> </div> <div class="form-group" style="margin-top: 2rem;"> <label class="form-label">Raw Markdown Output</label> <div class="markdown-output" id="markdown-output">
Your markdown will appear here...
</div> </div> <div class="btn-group"> <button class="btn btn-primary" id="start-new">
🔄 Start New Post
</button> <button class="btn btn-secondary" id="back-to-compose">
← Back to Preview
</button> </div> </div> </div> <!-- Ad --> <div class="container"> <div class="ad-placeholder leaderboard">📢 AD SPACE — Google AdSense</div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/workspace/pressfolio/src/pages/index.astro", void 0);

const $$file = "/workspace/pressfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
