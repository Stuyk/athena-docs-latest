import{_ as s,c as t,x as a,a as o,t as n,S as l,o as p}from"./chunks/framework.175b5f45.js";const g=JSON.parse('{"title":"How to Read the API","description":"","frontmatter":{"title":"How to Read the API","order":-99999},"headers":[],"relativePath":"api/how-to-read.md","lastUpdated":1679836520000}'),r={name:"api/how-to-read.md"},i={id:"frontmatter-title",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=l(`<p>Reading API pages can be a bit overwhelming but I promise there is a method to the madness.</p><p>Those of you who are unfamiliar with API documentation will <strong>definitely need to read this</strong>.</p><h2 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-label="Permalink to &quot;Navigation&quot;">​</a></h2><p>In the left-hand sidebar you will see API pathways.</p><p><img src="https://i.imgur.com/WJS4vXa.png" alt=""></p><p>Inside you will find a <em>similar</em> folder structure to the default intellisense when you use any of the standard imports while programming.</p><p><img src="https://i.imgur.com/lmqhTIh.png" alt=""></p><h2 id="digestion" tabindex="-1">Digestion <a class="header-anchor" href="#digestion" aria-label="Permalink to &quot;Digestion&quot;">​</a></h2><p>When you are reading a page it&#39;s going to look like a bunch of random words if you&#39;ve never seen an API page before.</p><p>In the example below we will be using the following pathway in the server API: <code>Athena.controllers.blip</code></p><h3 id="right-sidebar" tabindex="-1">Right Sidebar <a class="header-anchor" href="#right-sidebar" aria-label="Permalink to &quot;Right Sidebar&quot;">​</a></h3><p>On the right-hand side you will see a sidebar of all the available functions. They are listed under the header called <code>Functions</code>, if there is no header called <code>Functions</code> then it is not a function.</p><p><img src="https://i.imgur.com/HoF4yxw.png" alt=""></p><p>Knowing that the API pathway is <code>Athena.controllers.blip</code>, we can append a function name to the end of our code.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> Athena </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@AthenaServer/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// append is the function name</span></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blip</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Now how do we determine what we should pass inside of the parenthesis?</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>These are the values that need to be passed inside of the function, they should be passed in the same order that they are listed in the table.</p><p>In the case of <code>Athena.controllers.blip.append</code> we have exactly <code>1</code> parameter.</p><p><img src="https://i.imgur.com/lqfC9sA.png" alt=""></p><h3 id="parameter-types" tabindex="-1">Parameter Types <a class="header-anchor" href="#parameter-types" aria-label="Permalink to &quot;Parameter Types&quot;">​</a></h3><p>If the <code>type</code> has a clickable link you can read more about the <code>Object</code> that needs to be passed.</p><p>If you are unfamiliar with objects, they look like this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">z</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">shortRange</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My Blip!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">sprite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Notice how the object defined above, matches the <code>Type</code> definition of the <code>Blip</code> type.</p><p><img src="https://i.imgur.com/di45whh.png" alt=""></p><p>The individual properties for a <code>type</code> have individual definitions as well. Which will help you understand what is supposed to be passed to a specific <code>property</code> inside of an <code>object</code>.</p><p>ie. If we look at the property <code>scale</code> it clearly says it needs a <code>number</code> type.</p><p><img src="https://i.imgur.com/8HT8amw.png" alt=""></p><h2 id="that-s-about-it" tabindex="-1">That&#39;s About It! <a class="header-anchor" href="#that-s-about-it" aria-label="Permalink to &quot;That&#39;s About It!&quot;">​</a></h2><p>There isn&#39;t much else to say about this other than trying a few functions in your own in VSCode, and utilizing the intellisense window that pops up as you are typing.</p><p>Hope this helps someone out there understand API documentation a bit better.</p>`,32);function h(e,y,F,u,m,D){return p(),t("div",null,[a("h1",i,[o(n(e.$frontmatter.title)+" ",1),c]),d])}const b=s(r,[["render",h]]);export{g as __pageData,b as default};
