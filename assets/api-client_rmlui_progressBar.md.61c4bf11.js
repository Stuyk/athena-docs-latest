import{_ as n,c as l,a as s,b as p,t as o,d as e,o as r}from"./app.9bb0f3f7.js";const g=JSON.parse('{"title":".progressBar","description":"","frontmatter":{"title":".progressBar","order":-99},"headers":[],"relativePath":"api-client/rmlui/progressBar.md","lastUpdated":1672782395000}'),t={name:"api-client/rmlui/progressBar.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<p>This is an in-world 3D progress bar.</p><p><img src="https://i.imgur.com/nWOVaTy.png" alt=""></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><ul><li>Progress Bar Interface (See Below)</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rmlui</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">progressBar</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(progressBarInterface): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rmlui</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">progressBar</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RGBA</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">distance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">milliseconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pos</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">percentageEnabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7);function F(a,C,i,A,d,_){return r(),l("div",null,[s("h1",c,[p(o(a.$frontmatter.title)+" ",1),D]),y])}const u=n(t,[["render",F]]);export{g as __pageData,u as default};