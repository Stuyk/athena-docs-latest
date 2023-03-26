import{_ as a,c as r,x as e,a as o,t as n,S as i,o as d}from"./chunks/framework.175b5f45.js";const v=JSON.parse('{"title":"Athena.systems.inventory.crafting","description":"","frontmatter":{"title":"Athena.systems.inventory.crafting","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_inventory_crafting.md","lastUpdated":null}'),s={name:"api/modules/server_systems_inventory_crafting.md"},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./server_systems_inventory_crafting_Internal">Internal</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe">CraftRecipe</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="itemcombo" tabindex="-1">ItemCombo <a class="header-anchor" href="#itemcombo" aria-label="Permalink to &quot;ItemCombo&quot;">​</a></h3><p>Ƭ <strong>ItemCombo</strong>: [<a href="./server_systems_inventory_crafting#dbName"><code>dbName</code></a>, <a href="./server_systems_inventory_crafting#dbName"><code>dbName</code></a>]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L9" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:9</a></p><hr><h3 id="quantities" tabindex="-1">Quantities <a class="header-anchor" href="#quantities" aria-label="Permalink to &quot;Quantities&quot;">​</a></h3><p>Ƭ <strong>Quantities</strong>: [<code>number</code>, <code>number</code>]</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L11" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:11</a></p><hr><h3 id="dbname" tabindex="-1">dbName <a class="header-anchor" href="#dbname" aria-label="Permalink to &quot;dbName&quot;">​</a></h3><p>Ƭ <strong>dbName</strong>: <code>string</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L7" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:7</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addrecipe" tabindex="-1">addRecipe <a class="header-anchor" href="#addrecipe" aria-label="Permalink to &quot;addRecipe&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>addRecipe</strong>(<code>recipe</code>): <code>boolean</code></p></div><p>Add a recipe in-memory. Does not store to database.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>recipe</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe"><code>CraftRecipe</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L101" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:101</a></p><hr><h3 id="combineitems" tabindex="-1">combineItems <a class="header-anchor" href="#combineitems" aria-label="Permalink to &quot;combineItems&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>combineItems</strong>(<code>dataSet</code>, <code>slot1</code>, <code>slot2</code>, <code>type</code>): { <code>dataSet</code>: <a href="./server_config#player"><code>player</code></a>[] ; <code>sound?</code>: <code>string</code> } | <code>undefined</code></p></div><p>Combine two slots given a data set. It will attempt to find a matching recipe and make modifications according to the combination. Returns an object with the modified dataSet, and a sound associated with the crafting recipe if provided in the recipe itself.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dataSet</code></td><td style="text-align:left;"><code>StoredItem</code>[]</td></tr><tr><td style="text-align:left;"><code>slot1</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>slot2</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>&quot;inventory&quot;</code> | <code>&quot;toolbar&quot;</code> | <code>&quot;custom&quot;</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>{ <code>dataSet</code>: <a href="./server_config#player"><code>player</code></a>[] ; <code>sound?</code>: <code>string</code> } | <code>undefined</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L173" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:173</a></p><hr><h3 id="findrecipe" tabindex="-1">findRecipe <a class="header-anchor" href="#findrecipe" aria-label="Permalink to &quot;findRecipe&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>findRecipe</strong>(<code>combo</code>): <a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe"><code>CraftRecipe</code></a> | <code>undefined</code></p></div><p>Attempts to find a matching recipe. If a matching recipe is found; it is returned. Otherwise, returns undefined.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>combo</code></td><td style="text-align:left;"><a href="./server_systems_inventory_crafting#ItemCombo"><code>ItemCombo</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe"><code>CraftRecipe</code></a> | <code>undefined</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L129" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:129</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory crafting functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addRecipe&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>recipe</code>: <a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe"><code>CraftRecipe</code></a>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L288" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:288</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory crafting functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;combineItems&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>dataSet</code>: <code>StoredItem</code>[], <code>slot1</code>: <code>number</code>, <code>slot2</code>: <code>number</code>, <code>type</code>: <code>&quot;inventory&quot;</code> | <code>&quot;toolbar&quot;</code> | <code>&quot;custom&quot;</code>) =&gt; { <code>dataSet</code>: <a href="./server_config#player"><code>player</code></a>[] ; <code>sound?</code>: <code>string</code> } | <code>undefined</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L289" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:289</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.crafting.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override inventory crafting functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;findRecipe&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>combo</code>: <a href="./server_systems_inventory_crafting#ItemCombo"><code>ItemCombo</code></a>) =&gt; <a href="./../interfaces/server_systems_inventory_crafting_CraftRecipe"><code>CraftRecipe</code></a> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/inventory/crafting.ts#L290" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:290</a></p>',78);function f(t,m,b,u,p,y){return d(),r("div",null,[e("h1",c,[o(n(t.$frontmatter.title)+" ",1),l]),h])}const _=a(s,[["render",f]]);export{v as __pageData,_ as default};
