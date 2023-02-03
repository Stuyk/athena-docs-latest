import{_ as a,c as s,a as t,b as n,t as o,d as l,o as p}from"./app.d30f6c25.js";const g=JSON.parse('{"title":".playFromEntity","description":"","frontmatter":{"title":".playFromEntity","order":-99},"headers":[],"relativePath":"api-client/sound/playfromentity.md","lastUpdated":1675455528000}'),i={name:"api-client/sound/playfromentity.md"},r={id:"frontmatter-title",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<p>Used to play a 3D sound comming from an entity using the audio webview.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Does not update after first play. So if the entity has moved, the sound will not move.</p></div><p>Audio files are found and can be added in <code>src-webviews/public/assets/sounds</code>.</p><p>Only supports .ogg</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>entity -&gt; alt.Entity <ul><li>The entity to play the sound from</li></ul></li><li>soundName -&gt; string <ul><li>Name of the audio file</li><li>Example: &#39;unlock.ogg&#39;</li></ul></li></ul><p>Returns</p><ul><li>Returns a void.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">playFromEntity</span><span style="color:#A6ACCD;">(targetPlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unlock.ogg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,10);function u(e,y,m,_,f,h){return p(),s("div",null,[t("h1",r,[n(o(e.$frontmatter.title)+" ",1),c]),d])}const A=a(i,[["render",u]]);export{g as __pageData,A as default};