import{_ as a,c as r,x as e,a as d,t as o,S as s,o as l}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.systems.streamer","description":"","frontmatter":{"title":"Athena.systems.streamer","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_streamer.md","lastUpdated":1679789238000}'),c={name:"api/modules/server_systems_streamer.md"},n={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="registercallback" tabindex="-1">registerCallback <a class="header-anchor" href="#registercallback" aria-label="Permalink to &quot;registerCallback&quot;">​</a></h3><p>▸ <strong>registerCallback</strong>&lt;<code>T</code>&gt;(<code>key</code>, <code>callback</code>, <code>range?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Register a custom callback function. When the key is updated with data it will come back through the callback.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>StreamerService</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">A unique key for this stream data.</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>streamedData</code>: <code>T</code>[]) =&gt; <code>void</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>range</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>100</code></td><td style="text-align:left;">How far away should we look from the player&#39;s position.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/streamer.ts#L145" target="_blank" rel="noreferrer">server/systems/streamer.ts:145</a></p><hr><h3 id="updatedata" tabindex="-1">updateData <a class="header-anchor" href="#updatedata" aria-label="Permalink to &quot;updateData&quot;">​</a></h3><p>▸ <strong>updateData</strong>&lt;<code>T</code>&gt;(<code>key</code>, <code>array</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Populates Stream Data for External Process</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>StreamerService</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/streamer.ts#L190" target="_blank" rel="noreferrer">server/systems/streamer.ts:190</a></p>',30);function m(t,p,f,y,u,g){return l(),r("div",null,[e("h1",n,[d(o(t.$frontmatter.title)+" ",1),i]),h])}const _=a(c,[["render",m]]);export{x as __pageData,_ as default};
