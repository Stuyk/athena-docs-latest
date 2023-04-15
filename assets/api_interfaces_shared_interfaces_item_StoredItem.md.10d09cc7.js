import{_ as e,c as a,o as t,V as r}from"./chunks/framework.be58fd72.js";const b=JSON.parse('{"title":"AthenaShared.interfaces.item.StoredItem","description":"","frontmatter":{"title":"AthenaShared.interfaces.item.StoredItem","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_item_StoredItem.md","lastUpdated":null}'),i={name:"api/interfaces/shared_interfaces_item_StoredItem.md"},n=r('<h1 id="athenashared-interfaces-item-storeditem" tabindex="-1">AthenaShared.interfaces.item.StoredItem <a class="header-anchor" href="#athenashared-interfaces-item-storeditem" aria-label="Permalink to &quot;AthenaShared.interfaces.item.StoredItem&quot;">​</a></h1><p><a href="./../modules/shared_interfaces_item">shared/interfaces/item</a>.StoredItem</p><p>The StoredItem is stored in the player in the following locations: equipment, inventory, and toolbar</p><p><strong><code>Interface</code></strong></p><p>StoredItem</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./shared_interfaces_item_SharedItem"><code>SharedItem</code></a>&lt;<code>CustomData</code>&gt;</p><p>↳ <strong><code>StoredItem</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><p>• <strong>data</strong>: <code>CustomData</code></p><p>Any custom data assigned to this item.</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_item_SharedItem">SharedItem</a>.<a href="./shared_interfaces_item_SharedItem#data">data</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L204" target="_blank" rel="noreferrer">shared/interfaces/item.ts:204</a></p><hr><h3 id="dbname" tabindex="-1">dbName <a class="header-anchor" href="#dbname" aria-label="Permalink to &quot;dbName&quot;">​</a></h3><p>• <strong>dbName</strong>: <code>string</code></p><p>The matching database name for this item.</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_item_SharedItem">SharedItem</a>.<a href="./shared_interfaces_item_SharedItem#dbName">dbName</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L196" target="_blank" rel="noreferrer">shared/interfaces/item.ts:196</a></p><hr><h3 id="disablecrafting" tabindex="-1">disableCrafting <a class="header-anchor" href="#disablecrafting" aria-label="Permalink to &quot;disableCrafting&quot;">​</a></h3><p>• <code>Optional</code> <strong>disableCrafting</strong>: <code>boolean</code></p><p>Flag this item as uncraftable. Just in case it has a shared base.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L277" target="_blank" rel="noreferrer">shared/interfaces/item.ts:277</a></p><hr><h3 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;icon&quot;">​</a></h3><p>• <code>Optional</code> <strong>icon</strong>: <code>string</code></p><p>Specify an icon to override the default base item icon with.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L269" target="_blank" rel="noreferrer">shared/interfaces/item.ts:269</a></p><hr><h3 id="isequipped" tabindex="-1">isEquipped <a class="header-anchor" href="#isequipped" aria-label="Permalink to &quot;isEquipped&quot;">​</a></h3><p>• <code>Optional</code> <strong>isEquipped</strong>: <code>boolean</code></p><p>A generic way to flag an item to be equipped. Equipped can mean anything in the code base; it&#39;s up to the user to define its equip usage.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L253" target="_blank" rel="noreferrer">shared/interfaces/item.ts:253</a></p><hr><h3 id="quantity" tabindex="-1">quantity <a class="header-anchor" href="#quantity" aria-label="Permalink to &quot;quantity&quot;">​</a></h3><p>• <strong>quantity</strong>: <code>number</code></p><p>The amount of this item the player has.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L236" target="_blank" rel="noreferrer">shared/interfaces/item.ts:236</a></p><hr><h3 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;slot&quot;">​</a></h3><p>• <strong>slot</strong>: <code>number</code></p><p>Where this item should be displayed in a toolbar, equipment bar, or inventory bar.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L244" target="_blank" rel="noreferrer">shared/interfaces/item.ts:244</a></p><hr><h3 id="totalweight" tabindex="-1">totalWeight <a class="header-anchor" href="#totalweight" aria-label="Permalink to &quot;totalWeight&quot;">​</a></h3><p>• <code>Optional</code> <strong>totalWeight</strong>: <code>number</code></p><p>The weight calculated for this item.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L261" target="_blank" rel="noreferrer">shared/interfaces/item.ts:261</a></p><hr><h3 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h3><p>• <code>Optional</code> <strong>version</strong>: <code>number</code></p><p>The version of this item it is based upon.</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_item_SharedItem">SharedItem</a>.<a href="./shared_interfaces_item_SharedItem#version">version</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/item.ts#L212" target="_blank" rel="noreferrer">shared/interfaces/item.ts:212</a></p>',69),o=[n];function d(h,s,l,c,f,m){return t(),a("div",null,o)}const u=e(i,[["render",d]]);export{b as __pageData,u as default};
