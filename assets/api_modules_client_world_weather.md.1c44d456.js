import{_ as a,c as r,x as e,a as o,t as n,S as i,o as l}from"./chunks/framework.175b5f45.js";const w=JSON.parse('{"title":"AthenaClient.world.weather","description":"","frontmatter":{"title":"AthenaClient.world.weather","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_world_weather.md","lastUpdated":null}'),d={name:"api/modules/client_world_weather.md"},s={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="changeto" tabindex="-1">changeTo <a class="header-anchor" href="#changeto" aria-label="Permalink to &quot;changeTo&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.world.weather.<strong>changeTo</strong>(<code>nextWeather</code>, <code>timeInSeconds</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Change the weather gracefully.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nextWeather</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>timeInSeconds</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/world/weather.ts#L40" target="_blank" rel="noreferrer">client/world/weather.ts:40</a></p><hr><h3 id="freeze" tabindex="-1">freeze <a class="header-anchor" href="#freeze" aria-label="Permalink to &quot;freeze&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.world.weather.<strong>freeze</strong>(): <code>void</code></p></div><p>Used to freeze the weather to a specific value.</p><p>Call this function after using the <code>changeTo</code> function.</p><p><strong><code>Export</code></strong></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/world/weather.ts#L20" target="_blank" rel="noreferrer">client/world/weather.ts:20</a></p><hr><h3 id="ischanging" tabindex="-1">isChanging <a class="header-anchor" href="#ischanging" aria-label="Permalink to &quot;isChanging&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.world.weather.<strong>isChanging</strong>(): <code>boolean</code></p></div><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/world/weather.ts#L9" target="_blank" rel="noreferrer">client/world/weather.ts:9</a></p><hr><h3 id="unfreeze" tabindex="-1">unfreeze <a class="header-anchor" href="#unfreeze" aria-label="Permalink to &quot;unfreeze&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.world.weather.<strong>unfreeze</strong>(): <code>void</code></p></div><p>Unfreeze the weather function.</p><p><strong><code>Export</code></strong></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/world/weather.ts#L29" target="_blank" rel="noreferrer">client/world/weather.ts:29</a></p>',37);function u(t,f,p,b,g,m){return l(),r("div",null,[e("h1",s,[o(n(t.$frontmatter.title)+" ",1),c]),h])}const k=a(d,[["render",u]]);export{w as __pageData,k as default};
