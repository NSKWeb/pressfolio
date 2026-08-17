import"./hoisted.DOttxPmw.js";const h=document.querySelectorAll(".stage-btn"),B=document.querySelectorAll(".stage-content");function i(e){h.forEach((t,n)=>{t.classList.toggle("active",n+1===e),t.classList.toggle("completed",n+1<e)}),B.forEach((t,n)=>{t.classList.toggle("active",n+1===e)})}h.forEach((e,t)=>{e.addEventListener("click",()=>i(t+1))});document.getElementById("parse-btn")?.addEventListener("click",()=>{v(),i(2)});document.getElementById("proceed-refine")?.addEventListener("click",()=>i(3));document.getElementById("back-to-input")?.addEventListener("click",()=>i(1));document.getElementById("generate-post")?.addEventListener("click",()=>{k(),i(4)});document.getElementById("back-to-parse")?.addEventListener("click",()=>i(2));document.getElementById("proceed-export")?.addEventListener("click",()=>{i(5)});document.getElementById("back-to-refine")?.addEventListener("click",()=>i(3));document.getElementById("back-to-compose")?.addEventListener("click",()=>i(4));document.getElementById("start-new")?.addEventListener("click",()=>i(1));function v(){const e=document.getElementById("raw-input")?.value||"",t=document.getElementById("source-type")?.value||"pib",d=(e.match(/(\d{1,2}\s+\w+\s+\d{4}|\d{4}-\d{2}-\d{2})/i)||[])[0]||"Recent",a=(e.match(/(New Delhi|Mumbai|Chennai|Kolkata|Bengaluru|Hyderabad|Lucknow|Chandigarh)[,:\s]/i)||[])[1]||"India";let u=e.split(`
`).filter(c=>c.trim()).find(c=>c.length>10&&c.length<100)||"News Update",o="Press Release";if(t==="pib"&&(o="Press Information Bureau"),e.includes("Ministry")){const c=e.match(/Ministry\s+of\s+[\w\s]+/i);c&&(o=c[0])}const s=[],m=e.matchAll(/Rs\.?\s*[\d,]+(?:\.\d+)?\s*(?:crore|cr|lakh|L|%)?|[\d,]+(?:\.\d+)?\s*(?:million|MT|GW|PS|cc|kmph|kg)/gi);for(const c of m)c[0]&&!s.includes(c[0])&&s.push(c[0]);const f=(e.match(/"([^"]{20,200})"/)||e.match(/'([^']{20,200})'/)||[])[1]||"",g=(c,I)=>{const y=document.getElementById(c);y&&(y.textContent=I)};g("extracted-source",o),g("extracted-date",d),g("extracted-location",a),g("extracted-headline",u),document.getElementById("extracted-quote").value=f,document.getElementById("extracted-figures").value=s.slice(0,5).map(c=>`• ${c}`).join(`
`),document.getElementById("extracted-context").value=e.substring(0,300)+"..."}function k(){const e=document.getElementById("refine-title")?.value||document.getElementById("extracted-headline")?.textContent||"News Update",t=document.getElementById("refine-category")?.value||"news",n=document.getElementById("extracted-quote")?.value||"",d=document.getElementById("extracted-figures")?.value||"",l=document.getElementById("extracted-context")?.value||"",a=document.getElementById("extracted-date")?.textContent||"",r=document.getElementById("extracted-source")?.textContent||"",u=document.getElementById("refine-format")?.value||"article";document.getElementById("preview-title").textContent=e,document.getElementById("preview-meta").textContent=`${t.charAt(0).toUpperCase()+t.slice(1)} • ${a}`;let o="";u==="brief"?o=`
<p><strong>Quick Take:</strong> ${l.substring(0,150)}...</p>

<h2>Key Points</h2>
${d.split(`
`).map(m=>`<li>${m.replace("• ","")}</li>`).join("")}
${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}
            `:u==="thread"?o=`
<p>🧵 Thread: ${e}</p>
<p>${l.substring(0,200)}...</p>

${d.split(`
`).map((m,p)=>`<p>${p+1}. ${m.replace("• ","")}</p>`).join("")}
${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}
<p>${r} | ${a}</p>
            `:o=`
${l?`<p>${l.substring(0,200)}...</p>`:""}

${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}

<h2>Key Highlights</h2>
<ul>
${d.split(`
`).map(m=>`<li>${m.replace("• ","")}</li>`).join(`
`)}
</ul>

<p><em>Source: ${r} | ${a}</em></p>
            `,document.getElementById("preview-content").innerHTML=o;const s=w(e,t,a,r,n,d,l);document.getElementById("markdown-output").textContent=s}function w(e,t,n,d,l,a,r,u){let o=`# ${e}

`;return o+=`*${t.charAt(0).toUpperCase()+t.slice(1)} • ${n}*

`,r&&(o+=`${r.substring(0,200)}...

`),l&&(o+=`> "${l}"

`),a&&(o+=`## Key Highlights

`,a.split(`
`).forEach(s=>{s.trim()&&(o+=`- ${s.replace("• ","")}
`)}),o+=`
`),o+=`---

`,o+=`*Source: ${d}*`,o}document.getElementById("copy-markdown")?.addEventListener("click",()=>{const e=document.getElementById("markdown-output")?.textContent||"";navigator.clipboard.writeText(e).then(()=>{const t=document.getElementById("copy-markdown");t&&(t.textContent="✅ Copied!",setTimeout(()=>t.textContent="📋 Copy Markdown",2e3))})});document.getElementById("download-md")?.addEventListener("click",()=>{const e=document.getElementById("markdown-output")?.textContent||"",n=(document.getElementById("preview-title")?.textContent||"post").toLowerCase().replace(/[^a-z0-9]+/g,"-").substring(0,50),d=new Blob([e],{type:"text/markdown"}),l=URL.createObjectURL(d),a=document.createElement("a");a.href=l,a.download=`${n}.md`,a.click(),URL.revokeObjectURL(l)});document.getElementById("copy-html")?.addEventListener("click",()=>{const e=document.getElementById("preview-content")?.innerHTML||"",n=`<article>
<h1>${document.getElementById("preview-title")?.textContent||""}</h1>
${e}
</article>`;navigator.clipboard.writeText(n).then(()=>{const d=document.getElementById("copy-html");d&&(d.textContent="✅ Copied!",setTimeout(()=>d.textContent="🌐 Copy HTML",2e3))})});setInterval(()=>{const e=document.getElementById("raw-input")?.value;e&&localStorage.setItem("pressfolio-draft",e)},5e3);const E=localStorage.getItem("pressfolio-draft");if(E){const e=document.getElementById("raw-input");e&&(e.value=E)}
