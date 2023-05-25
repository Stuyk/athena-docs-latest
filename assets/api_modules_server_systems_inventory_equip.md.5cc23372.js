import{_ as e,c as t,o as a,V as o}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Athena.systems.inventory.equip","description":"","frontmatter":{"title":"Athena.systems.inventory.equip","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_inventory_equip.md","lastUpdated":null}'),r={name:"api/modules/server_systems_inventory_equip.md"},d=o('<h1 id="athena-systems-inventory-equip" tabindex="-1">Athena.systems.inventory.equip <a class="header-anchor" href="#athena-systems-inventory-equip" aria-label="Permalink to &quot;Athena.systems.inventory.equip&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="invoke" tabindex="-1">invoke <a class="header-anchor" href="#invoke" aria-label="Permalink to &quot;invoke&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.equip.<strong>invoke</strong>(<code>event</code>, <code>player</code>, <code>item</code>): <code>void</code></p></div><p>Invoke a specific event for listening to a specific item type being equipped / unequipped</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>item</code></td><td style="text-align:left;"><code>StoredItem</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4bfd806/src/core/server/systems/inventory/equip.ts#L22" target="_blank" rel="noreferrer">server/systems/inventory/equip.ts:22</a></p><hr><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.inventory.equip.<strong>on</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>dbName</code>, <code>cb</code>): <code>void</code></p></div><p>Listen for a when a specific item is equipped or unequipped</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr><tr><td style="text-align:left;"><code>dbName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>item</code>: <code>StoredItemEx</code>&lt;<code>T</code>&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4bfd806/src/core/server/systems/inventory/equip.ts#L42" target="_blank" rel="noreferrer">server/systems/inventory/equip.ts:42</a></p>',25),n=[d];function s(i,l,c,h,p,u){return a(),t("div",null,n)}const f=e(r,[["render",s]]);export{m as __pageData,f as default};