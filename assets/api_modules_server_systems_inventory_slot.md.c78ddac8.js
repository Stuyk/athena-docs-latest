import{_ as a,c as r,x as e,a as o,t as d,S as n,o as l}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.systems.inventory.slot","description":"","frontmatter":{"title":"Athena.systems.inventory.slot","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_inventory_slot.md","lastUpdated":null}'),s={name:"api/modules/server_systems_inventory_slot.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="findopen" tabindex="-1">findOpen <a class="header-anchor" href="#findopen" aria-label="Permalink to &quot;findOpen&quot;">​</a></h3><p>▸ <strong>findOpen</strong>(<code>slotSize</code>, <code>data</code>): <code>number</code> | <code>undefined</code></p><p>Find an open slot that is available within a dataset.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>slotSize</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>StoredItem</code>[]</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code> | <code>undefined</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L14" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:14</a></p><hr><h3 id="getat" tabindex="-1">getAt <a class="header-anchor" href="#getat" aria-label="Permalink to &quot;getAt&quot;">​</a></h3><p>▸ <strong>getAt</strong>&lt;<code>CustomData</code>&gt;(<code>slot</code>, <code>data</code>): <a href="./server_config#player"><code>player</code></a>&lt;<code>CustomData</code>&gt; | <code>undefined</code></p><p>Get an item at a specific slot. Returns undefined if an item is unavailable in a slot.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>StoredItem</code>[]</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./server_config#player"><code>player</code></a>&lt;<code>CustomData</code>&gt; | <code>undefined</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L47" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:47</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override inventory item slot functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;findOpen&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>slotSize</code>: <code>any</code>, <code>data</code>: <code>StoredItem</code>[]) =&gt; <code>number</code> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L90" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:90</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override inventory item slot functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;removeAt&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>slot</code>: <code>number</code>, <code>data</code>: <code>StoredItem</code>[]) =&gt; <a href="./server_config#player"><code>player</code></a>[] | <code>undefined</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L91" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:91</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override inventory item slot functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getAt&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomData&gt;(<code>slot</code>: <code>number</code>, <code>data</code>: <code>StoredItem</code>[]) =&gt; <a href="./server_config#player"><code>player</code></a>&lt;<code>CustomData</code>&gt; | <code>undefined</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L92" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:92</a></p><hr><h3 id="removeat" tabindex="-1">removeAt <a class="header-anchor" href="#removeat" aria-label="Permalink to &quot;removeAt&quot;">​</a></h3><p>▸ <strong>removeAt</strong>(<code>slot</code>, <code>data</code>): <a href="./server_config#player"><code>player</code></a>[] | <code>undefined</code></p><p>Remove a specific item from a specific slot.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>StoredItem</code>[]</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./server_config#player"><code>player</code></a>[] | <code>undefined</code></p><p>Returns undefined if the item was not found.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/slot.ts#L67" target="_blank" rel="noreferrer">server/systems/inventory/slot.ts:67</a></p>',63);function f(t,u,m,p,y,b){return l(),r("div",null,[e("h1",i,[o(d(t.$frontmatter.title)+" ",1),c]),h])}const v=a(s,[["render",f]]);export{x as __pageData,v as default};
