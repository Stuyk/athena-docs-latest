import{_ as s,c as t,a as e,b as l,t as o,d as n,o as r}from"./app.579dd51f.js";const A=JSON.parse('{"title":".showOverlays","description":"","frontmatter":{"title":".showOverlays","order":-99},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"api-client/webview/showoverlays.md"}'),i={name:"api-client/webview/showoverlays.md"},p={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n(`<p>Trigger this to hide/show all overlays like Chat, HUD, etc.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>value -&gt; boolean <ul><li>If true, hide the overlays. If false, show the overlays.</li></ul></li><li>doNotUpdate -&gt; boolean = false (optional) <ul><li>If true, don&#39;t update the overlays.</li></ul></li></ul><p>Returns</p><ul><li>Returns a boolean. True if any menu is open, false if not.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webview</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showOverlays</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7);function h(a,u,_,y,f,v){return r(),t("div",null,[e("h1",p,[l(o(a.$frontmatter.title)+" ",1),c]),d])}const w=s(i,[["render",h]]);export{A as __pageData,w as default};
