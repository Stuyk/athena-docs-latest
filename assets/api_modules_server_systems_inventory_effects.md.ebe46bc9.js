import{_ as e,c as t,o as a,V as o}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Athena.systems.inventory.effects","description":"","frontmatter":{"title":"Athena.systems.inventory.effects","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_inventory_effects.md","lastUpdated":null}'),r={name:"api/modules/server_systems_inventory_effects.md"},d=o('<h1 id="athena-systems-inventory-effects" tabindex="-1">Athena.systems.inventory.effects <a class="header-anchor" href="#athena-systems-inventory-effects" aria-label="Permalink to &quot;Athena.systems.inventory.effects&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="effectcallback" tabindex="-1">EffectCallback <a class="header-anchor" href="#effectcallback" aria-label="Permalink to &quot;EffectCallback&quot;">​</a></h3><p>Ƭ <strong>EffectCallback</strong>: (<code>player</code>: <code>alt.Player</code>, <code>slot</code>: <code>number</code>, <code>type</code>: <code>&quot;inventory&quot;</code> | <code>&quot;toolbar&quot;</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.(<code>player</code>, <code>slot</code>, <code>type</code>): <code>void</code></p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>alt.Player</code></td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>&quot;inventory&quot;</code> | <code>&quot;toolbar&quot;</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L5" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:5</a></p><hr><h3 id="inventorytype" tabindex="-1">InventoryType <a class="header-anchor" href="#inventorytype" aria-label="Permalink to &quot;InventoryType&quot;">​</a></h3><p>Ƭ <strong>InventoryType</strong>: <code>&quot;inventory&quot;</code> | <code>&quot;toolbar&quot;</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L4" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:4</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>add</strong>(<code>effectNameFromItem</code>, <code>callback</code>): <code>any</code></p></div><p>Register an item effect to invoke a callback on consumption.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>effectNameFromItem</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./server_systems_inventory_effects#EffectCallback"><code>EffectCallback</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L17" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:17</a></p><hr><h3 id="invoke" tabindex="-1">invoke <a class="header-anchor" href="#invoke" aria-label="Permalink to &quot;invoke&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>invoke</strong>(<code>player</code>, <code>slot</code>, <code>type</code>, <code>eventToCall?</code>): <code>boolean</code></p></div><p>Invokes a callback for an item effect</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The player who is using the item.</td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./server_systems_inventory_effects#InventoryType"><code>InventoryType</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">INVENTORY_TYPE</td></tr><tr><td style="text-align:left;"><code>eventToCall</code></td><td style="text-align:left;"><code>string</code> | <code>string</code>[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>The callback function.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L51" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:51</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory item effects functionality</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;add&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>effectNameFromItem</code>: <code>string</code>, <code>callback</code>: <a href="./server_systems_inventory_effects#EffectCallback"><code>EffectCallback</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L142" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:142</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory item effects functionality</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>effectName</code>: <code>string</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L143" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:143</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory item effects functionality</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;invoke&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>slot</code>: <code>number</code>, <code>type</code>: <a href="./server_systems_inventory_effects#InventoryType"><code>InventoryType</code></a>, <code>eventToCall</code>: <code>string</code> | <code>string</code>[]) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L144" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:144</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.effects.<strong>remove</strong>(<code>effectName</code>): <code>boolean</code></p></div><p>Remove an effect from the effects map.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>effectName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the effect to remove.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>The value of the effect.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/inventory/effects.ts#L35" target="_blank" rel="noreferrer">server/systems/inventory/effects.ts:35</a></p>',76),n=[d];function s(l,c,i,f,h,y){return a(),t("div",null,n)}const b=e(r,[["render",s]]);export{m as __pageData,b as default};