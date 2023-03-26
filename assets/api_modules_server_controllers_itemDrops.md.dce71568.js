import{_ as r,c as a,x as e,a as o,t as s,S as n,o as l}from"./chunks/framework.175b5f45.js";const v=JSON.parse('{"title":"Athena.controllers.itemDrops","description":"","frontmatter":{"title":"Athena.controllers.itemDrops","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_controllers_itemDrops.md","lastUpdated":null}'),d={name:"api/modules/server_controllers_itemDrops.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-label="Permalink to &quot;append&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.itemDrops.<strong>append</strong>(<code>itemDrop</code>): <code>string</code></p></div><p>Append item drop information to the server.</p><p>Do not use this for creating item drops the players can pickup.</p><p>These are mostly visual. Refer to <code>Athena.systems.inventory.drops</code> to make actual item drops.</p><p>Returns a uid or generates one if not specified.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>itemDrop</code></td><td style="text-align:left;"><code>ItemDrop</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/itemDrops.ts#L37" target="_blank" rel="noreferrer">server/controllers/itemDrops.ts:37</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.itemDrops.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any item drop streamer functionality.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;append&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>itemDrop</code>: <code>ItemDrop</code>) =&gt; <code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/itemDrops.ts#L74" target="_blank" rel="noreferrer">server/controllers/itemDrops.ts:74</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.itemDrops.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any item drop streamer functionality.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>id</code>: <code>string</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/itemDrops.ts#L75" target="_blank" rel="noreferrer">server/controllers/itemDrops.ts:75</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.itemDrops.<strong>remove</strong>(<code>id</code>): <code>boolean</code></p></div><p>Removes an item drop in-world.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/itemDrops.ts#L53" target="_blank" rel="noreferrer">server/controllers/itemDrops.ts:53</a></p>',43);function p(t,m,u,f,b,g){return l(),a("div",null,[e("h1",i,[o(s(t.$frontmatter.title)+" ",1),c]),h])}const x=r(d,[["render",p]]);export{v as __pageData,x as default};
