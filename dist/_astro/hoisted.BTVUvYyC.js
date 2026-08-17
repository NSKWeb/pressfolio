import"./hoisted.DOttxPmw.js";const g=document.querySelectorAll(".stage-btn"),f=document.querySelectorAll(".stage-content");function d(t){g.forEach((o,n)=>{o.classList.toggle("active",n+1===t),o.classList.toggle("completed",n+1<t)}),f.forEach((o,n)=>{o.classList.toggle("active",n+1===t)})}g.forEach((t,o)=>{t.addEventListener("click",()=>d(o+1))});document.getElementById("parse-btn")?.addEventListener("click",()=>{h(),d(2)});document.getElementById("proceed-refine")?.addEventListener("click",()=>d(3));document.getElementById("back-to-input")?.addEventListener("click",()=>d(1));document.getElementById("generate-post")?.addEventListener("click",()=>{v(),d(4)});document.getElementById("back-to-parse")?.addEventListener("click",()=>d(2));document.getElementById("proceed-export")?.addEventListener("click",()=>{d(5)});document.getElementById("back-to-refine")?.addEventListener("click",()=>d(3));document.getElementById("back-to-compose")?.addEventListener("click",()=>d(4));document.getElementById("start-new")?.addEventListener("click",()=>d(1));function h(){const t=document.getElementById("raw-input")?.value||"",o=document.getElementById("source-type")?.value||"pib";if(!t.trim()){alert("Please paste a press release first!");return}const n=t.replace(/\s+/g," ").trim();let s=y(n,o);const e=w(n),r=E(n),c=B(n),u=I(n),a=x(n),l=k(n,c);document.getElementById("extracted-source").textContent=s,document.getElementById("extracted-date").textContent=e,document.getElementById("extracted-location").textContent=r,document.getElementById("extracted-headline").textContent=c,document.getElementById("extracted-quote").value=u,document.getElementById("extracted-figures").value=a.length>0?a.map(i=>`• ${i}`).join(`
`):"",document.getElementById("extracted-context").value=l}function y(t,o){const n=[/Ministry\s+of\s+[\w\s&,]+?(?=\.|\n|Government|has|will|will)/gi,/Department\s+of\s+[\w\s&,]+/gi,/(?:Shri|Smt|Mr|Ms)\s+[\w\s]+\s+(?:said|stated|announced|added|mentioned)/gi,/Press\s+Information\s+Bureau/gi,/(?:Govt|Government)\s+of\s+India/gi];for(const r of n){const c=t.match(r);if(c&&c[0].length>5&&c[0].length<100)return c[0].trim()}const s=[/(?:Company|Inc|Corp|Ltd|Private)\s+[\w\s]+/gi,/[\w\s]+:\s*(?:New Delhi|Mumbai|Bengaluru)/gi];for(const r of s){const c=t.match(r);if(c)return c[0].trim()}return{pib:"Press Information Bureau (PIB)",company:"Company Press Release",ministerial:"Ministerial Statement",other:"Press Release"}[o]||"Press Release"}function w(t){const o=[/Posted\s+On:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,/(\d{1,2}\s+\w+\s+\d{4})/i,/(\w+\s+\d{1,2},?\s+\d{4})/i,/(\d{4}-\d{2}-\d{2})/,/(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,/Released\s+on:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,/Date:?\s*(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/i];for(const n of o){const s=t.match(n);if(s&&s[1]){let e=s[1].trim();return e=e.replace(/(\d{4})-(\d{2})-(\d{2})/,"$3-$2-$1"),e}}return new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}function E(t){const o=["New Delhi","Mumbai","Bengaluru","Bangalore","Chennai","Kolkata","Hyderabad","Pune","Ahmedabad","Jaipur","Lucknow","Chandigarh","Bhopal","Patna","Guwahati","New Delhi,","Mumbai,","Bengaluru,","Chennai,","Kolkata,"];for(const n of o){const s=new RegExp(`(${n})`,"i"),e=t.match(s);if(e)return e[1].replace(",","")}return"India"}function B(t){const o=t.split(/\n|\.\s+/).filter(s=>s.trim()),n=[/(?:New Delhi|Mumbai|Bengaluru|Chennai|Kolkata)[,:\s]+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[\s,]+(?:The\s+)?([A-Z][^.!?]{10,80})/i,/^([A-Z][a-zA-Z\s]{10,100})$/m,/(?:announces?|announcement|launches?|introduces?)\s+(?:the\s+)?([A-Z][^.!?\n]{15,100})/i];for(const s of n){const e=t.match(s);if(e&&e[1]){let r=e[1].trim();if(r=r.replace(/\s+/g," "),r.length>15&&r.length<150)return r}}for(const s of o.slice(0,5)){const e=s.trim();if(e.length>20&&e.length<150&&/^[A-Z]/.test(e)&&!e.includes(" said ")&&!e.includes(" stated "))return e}return"News Update"}function I(t){const o=[/"([^"]{30,500})"/g,/"([^"]{30,500})"/g,/"([^"]{30,500})"/g,/'([^']{30,500})'/g,/«([^»]{30,500})»/g];for(const s of o){let e;for(;(e=s.exec(t))!==null;){const r=e[1].trim();if(r.length>30&&!r.includes("PIB")&&!r.includes("Copying"))return r}}const n=[/(?:Shri|Smt|Mr|Ms|Dr)\s+[\w\s]+(?:said|stated|announced|added|mentioned|observed):\s*[""]?([^"".!?\n]{50,300})/gi,/(?:According to|As per)\s+[\w\s]+:\s*[""]?([^"".!?\n]{50,300})/gi];for(const s of n){const e=t.match(s);if(e&&e[1])return e[1].trim()}return""}function x(t){const o=new Set,n=[/Rs\.?\s*([\d,]+(?:\.\d+)?)\s*(?:crore|cr|Cr)/gi,/Rs\.?\s*([\d,]+(?:\.\d+)?)\s*(?:lakh|L\/-|Lacs)/gi,/₹\s*([\d,]+(?:\.\d+)?)/g,/INR\s*([\d,]+(?:\.\d+)?)/gi],s=[/(\d+(?:\.\d+)?)\s*%/g,/(\d+(?:\.\d+)?)\s*per\s*cent/gi],e=[/([\d,]+)\s*(?:MW|MGW|GW|MW|megawatt|gigawatt)/gi,/([\d,]+)\s*(?:MT|Million\s+Tonnes?|MMT)/gi,/([\d,]+)\s*(?:Million|lakh|TH|Thousand)\s+(?:jobs|people|units?|people)/gi],r=[/([\d,]+)\s*(?:PS|HP|bhp|BHP)/gi,/([\d,]+)\s*(?:cc|Cubic\s+Centimeters)/gi,/([\d,]+)\s*(?:kmph|km\/h|kmph)/gi,/([\d,]+)\s*(?:kg|kilograms)/gi,/([\d,]+)\s*(?:km|kilometers)/gi],c=[...n,...s,...e,...r];for(const a of c){let l;for(;(l=a.exec(t))!==null;){let i=l[0].trim();!i.includes("PIB")&&i.length>2&&o.add(i)}}return Array.from(o).filter(a=>a.length>2&&a.length<50).slice(0,10)}function k(t,o){let n=t.replace(o,"");const s=[/This\s+is\s+with\s+reference.*$/gi,/Copying\s+restricted.*$/gi,/PIB\s+release.*$/gi,/^(?:Shri|Smt|Mr|Ms)\s+[\w\s]+\s+(?:said|stated|added).*$/gim,/(?:Posted\s+On|PIB\s+Delhi|Source\s+:).*$/gi,/\*\*.*?\*\*/g];for(const r of s)n=n.replace(r,"");const e=n.split(/\n\n|\.\s+/).filter(r=>r.trim().length>50);for(const r of e){const c=r.trim();if(c.length>50&&c.length<500&&/\D/.test(c))return c}return e[0]?.trim().substring(0,500)||"Summary not available"}function v(){const t=document.getElementById("refine-title")?.value||document.getElementById("extracted-headline")?.textContent||"News Update",o=document.getElementById("refine-category")?.value||"news",n=document.getElementById("extracted-quote")?.value||"",s=document.getElementById("extracted-figures")?.value||"",e=document.getElementById("extracted-context")?.value||"",r=document.getElementById("extracted-date")?.textContent||"",c=document.getElementById("extracted-source")?.textContent||"",u=document.getElementById("refine-format")?.value||"article";document.getElementById("preview-title").textContent=t,document.getElementById("preview-meta").textContent=`${o.charAt(0).toUpperCase()+o.slice(1)} • ${r}`;let a="";u==="brief"?a=`
<p><strong>Quick Take:</strong> ${e.substring(0,150)}...</p>

<h2>Key Points</h2>
${s.split(`
`).map(i=>`<li>${i.replace("• ","")}</li>`).join("")}
${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}
            `:u==="thread"?a=`
<p>🧵 Thread: ${t}</p>
<p>${e.substring(0,200)}...</p>

${s.split(`
`).map((i,p)=>`<p>${p+1}. ${i.replace("• ","")}</p>`).join("")}
${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}
<p>${c} | ${r}</p>
            `:a=`
${e?`<p>${e.substring(0,200)}...</p>`:""}

${n?`<blockquote class="preview-quote">"${n}"</blockquote>`:""}

<h2>Key Highlights</h2>
<ul>
${s.split(`
`).map(i=>`<li>${i.replace("• ","")}</li>`).join(`
`)}
</ul>

<p><em>Source: ${c} | ${r}</em></p>
            `,document.getElementById("preview-content").innerHTML=a;const l=$(t,o,r,c,n,s,e);document.getElementById("markdown-output").textContent=l}function $(t,o,n,s,e,r,c,u){let a=`# ${t}

`;return a+=`*${o.charAt(0).toUpperCase()+o.slice(1)} • ${n}*

`,c&&(a+=`${c.substring(0,200)}...

`),e&&(a+=`> "${e}"

`),r&&(a+=`## Key Highlights

`,r.split(`
`).forEach(l=>{l.trim()&&(a+=`- ${l.replace("• ","")}
`)}),a+=`
`),a+=`---

`,a+=`*Source: ${s}*`,a}document.getElementById("copy-markdown")?.addEventListener("click",()=>{const t=document.getElementById("markdown-output")?.textContent||"";navigator.clipboard.writeText(t).then(()=>{const o=document.getElementById("copy-markdown");o&&(o.textContent="✅ Copied!",setTimeout(()=>o.textContent="📋 Copy Markdown",2e3))})});document.getElementById("download-md")?.addEventListener("click",()=>{const t=document.getElementById("markdown-output")?.textContent||"",n=(document.getElementById("preview-title")?.textContent||"post").toLowerCase().replace(/[^a-z0-9]+/g,"-").substring(0,50),s=new Blob([t],{type:"text/markdown"}),e=URL.createObjectURL(s),r=document.createElement("a");r.href=e,r.download=`${n}.md`,r.click(),URL.revokeObjectURL(e)});document.getElementById("copy-html")?.addEventListener("click",()=>{const t=document.getElementById("preview-content")?.innerHTML||"",n=`<article>
<h1>${document.getElementById("preview-title")?.textContent||""}</h1>
${t}
</article>`;navigator.clipboard.writeText(n).then(()=>{const s=document.getElementById("copy-html");s&&(s.textContent="✅ Copied!",setTimeout(()=>s.textContent="🌐 Copy HTML",2e3))})});setInterval(()=>{const t=document.getElementById("raw-input")?.value;t&&localStorage.setItem("pressfolio-draft",t)},5e3);const m=localStorage.getItem("pressfolio-draft");if(m){const t=document.getElementById("raw-input");t&&(t.value=m)}
