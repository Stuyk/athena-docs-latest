import{_ as e,c as n,x as a,a as s,t as l,S as o,o as i}from"./chunks/framework.74a8bdba.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","order":-99,"comment":false},"headers":[],"relativePath":"intro/intro/index.md","lastUpdated":1680256940000}'),r={name:"intro/intro/index.md"},p={id:"frontmatter-title",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=o(`<h2 id="full-installation" tabindex="-1">Full Installation <a class="header-anchor" href="#full-installation" aria-label="Permalink to &quot;Full Installation&quot;">​</a></h2><p>It is recommended to do a full install but quick instructions are provided below.</p><p><a href="./../install/installing-on-windows">Installing on Windows</a></p><p><a href="./../install/installing-on-linux">Installing on Linux</a></p><h2 id="fast-installation" tabindex="-1">Fast Installation <a class="header-anchor" href="#fast-installation" aria-label="Permalink to &quot;Fast Installation&quot;">​</a></h2><p>If you wish to use Athena but not make any changes to the core (unlikely you won&#39;t make changes) here are some simple instructions for the every day developer who just wants to test this with the alt:V Client quickly.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><ul><li><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noreferrer">Install MongoDB Server</a></li><li><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Install Git</a></li><li><a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">NodeJS 17+</a></li><li><a href="https://altv.mp/" target="_blank" rel="noreferrer">alt:V Client</a></li></ul><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h3><p>Quick start for getting Athena running. Make sure to install the above programs before doing anything below.</p><p>Run all of these in Command Prompt, Powershell, CLI, etc.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/Stuyk/altv-athena</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd altv</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">athena</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run update</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run windows</span></span>
<span class="line"></span></code></pre></div><ul><li>Launch the alt:V Client</li><li>Join with<code>0.0.0.0:7788</code> in Direct Connect <ul><li>If the above does not work, try <code>127.0.0.1:7788</code></li></ul></li><li>That&#39;s it.</li></ul>`,17);function h(t,u,m,g,f,y){return i(),n("div",null,[a("h1",p,[s(l(t.$frontmatter.title)+" ",1),c]),d])}const _=e(r,[["render",h]]);export{C as __pageData,_ as default};
