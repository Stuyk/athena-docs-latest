import{_ as a,c as r,x as e,a as i,t as n,S as o,o as s}from"./chunks/framework.175b5f45.js";const _=JSON.parse('{"title":"Athena.systems.inventory.crafting.CraftRecipe","description":"","frontmatter":{"title":"Athena.systems.inventory.crafting.CraftRecipe","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/server_systems_inventory_crafting_CraftRecipe.md","lastUpdated":null}'),d={name:"api/interfaces/server_systems_inventory_crafting_CraftRecipe.md"},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=o('<p><a href="./../modules/server_systems_inventory_crafting">server/systems/inventory/crafting</a>.CraftRecipe</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="combo" tabindex="-1">combo <a class="header-anchor" href="#combo" aria-label="Permalink to &quot;combo&quot;">​</a></h3><p>• <strong>combo</strong>: <a href="./../modules/server_systems_inventory_crafting#ItemCombo"><code>ItemCombo</code></a></p><p>Two items that can be combined.</p><p><strong><code>Memberof</code></strong></p><p>Recipe</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L28" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:28</a></p><hr><h3 id="datamigration" tabindex="-1">dataMigration <a class="header-anchor" href="#datamigration" aria-label="Permalink to &quot;dataMigration&quot;">​</a></h3><p>• <code>Optional</code> <strong>dataMigration</strong>: <a href="./../modules/server_systems_inventory_crafting#ItemCombo"><code>ItemCombo</code></a></p><p>What items to take the data from. ORDER MATTERS. What item is specified first will get data appended first. Second item overwrites matching property names.</p><p><strong><code>Memberof</code></strong></p><p>CraftRecipe</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L83" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:83</a></p><hr><h3 id="quantities" tabindex="-1">quantities <a class="header-anchor" href="#quantities" aria-label="Permalink to &quot;quantities&quot;">​</a></h3><p>• <strong>quantities</strong>: <a href="./../modules/server_systems_inventory_crafting#Quantities"><code>Quantities</code></a></p><p>The amount required to combine.</p><p><strong><code>Memberof</code></strong></p><p>Recipe</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L36" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:36</a></p><hr><h3 id="result" tabindex="-1">result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;result&quot;">​</a></h3><p>• <code>Optional</code> <strong>result</strong>: <code>Object</code></p><p>The crafting result.</p><p><strong><code>Memberof</code></strong></p><p>CraftRecipe</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><a href="./../modules/server_systems_inventory_crafting_Internal#Object"><code>Object</code></a> | (<code>item1</code>: <code>StoredItem</code>, <code>item2</code>: <code>StoredItem</code>) =&gt; <a href="./../modules/server_systems_inventory_crafting_Internal#Object"><code>Object</code></a></td><td style="text-align:left;">The custom data to start with on this item. If data migration is specified; the data will be stacked on top of this data object.</td></tr><tr><td style="text-align:left;"><code>dbName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the item.</td></tr><tr><td style="text-align:left;"><code>quantity</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The amount of this item.</td></tr><tr><td style="text-align:left;"><code>version?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">What version of this item to use.</td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L44" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:44</a></p><hr><h3 id="sound" tabindex="-1">sound <a class="header-anchor" href="#sound" aria-label="Permalink to &quot;sound&quot;">​</a></h3><p>• <code>Optional</code> <strong>sound</strong>: <code>string</code></p><p>The custom sound associated with this crafting recipe.</p><p><strong><code>Memberof</code></strong></p><p>CraftRecipe</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L91" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:91</a></p><hr><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>• <strong>uid</strong>: <code>string</code></p><p>A unique identifier for this recipe.</p><p><strong><code>Memberof</code></strong></p><p>Recipe</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/inventory/crafting.ts#L20" target="_blank" rel="noreferrer">server/systems/inventory/crafting.ts:20</a></p>',51);function f(t,p,m,b,g,u){return s(),r("div",null,[e("h1",c,[i(n(t.$frontmatter.title)+" ",1),l]),h])}const v=a(d,[["render",f]]);export{_ as __pageData,v as default};
