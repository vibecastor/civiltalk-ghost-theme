!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");document.querySelector(".gh-burger").addEventListener("click",(function(){document.body.classList.toggle("gh-head-open")})),function(){if(!e)return;new IntersectionObserver(((t,n)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const n=await t.text(),r=(new DOMParser).parseFromString(n,"text/html"),o=r.querySelectorAll(".post"),c=r.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:o,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:r,nextLink:o}=t;r.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),o?(e=o,n.observe(document.querySelector(".post:last-of-type"))):n.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}(),function(){const e=document.querySelector(".why-civiltalk-hero-subtitle-container"),t=e.innerHTML.split(".");e.innerHTML="";const n=document.createElement("h2");n.setAttribute("class","why-civiltalk-hero-subtitle"),n.innerHTML=t[0],e.appendChild(n);const r=document.createElement("ul");for(let e=1;e<t.length;e++){let n=document.createElement("li");n.setAttribute("class","why-civiltalk-hero-subtitle-disclaimer"),n.innerHTML=t[e],r.appendChild(n)}e.appendChild(r)}()}();
//# sourceMappingURL=index.js.map
