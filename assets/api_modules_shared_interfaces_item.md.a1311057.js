import{_ as a,c as r,x as e,a as o,t as i,S as n,o as d}from"./chunks/framework.175b5f45.js";const y=JSON.parse('{"title":"AthenaShared.interfaces.item","description":"","frontmatter":{"title":"AthenaShared.interfaces.item","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/shared_interfaces_item.md","lastUpdated":null}'),l={name:"api/modules/shared_interfaces_item.md"},s={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/shared_interfaces_item_BaseItem">BaseItem</a></li><li><a href="./../interfaces/shared_interfaces_item_ClothingComponent">ClothingComponent</a></li><li><a href="./../interfaces/shared_interfaces_item_CustomContextAction">CustomContextAction</a></li><li><a href="./../interfaces/shared_interfaces_item_DefaultItemBehavior">DefaultItemBehavior</a></li><li><a href="./../interfaces/shared_interfaces_item_SharedItem">SharedItem</a></li><li><a href="./../interfaces/shared_interfaces_item_StoredItem">StoredItem</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="clothinginfo" tabindex="-1">ClothingInfo <a class="header-anchor" href="#clothinginfo" aria-label="Permalink to &quot;ClothingInfo&quot;">​</a></h3><p>Ƭ <strong>ClothingInfo</strong>: <code>Object</code></p><p>Default Clothing Information</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>components</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_item_ClothingComponent"><code>ClothingComponent</code></a>[]</td></tr><tr><td style="text-align:left;"><code>sex</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/item.ts#L22" target="_blank" rel="noreferrer">shared/interfaces/item.ts:22</a></p><hr><h3 id="item" tabindex="-1">Item <a class="header-anchor" href="#item" aria-label="Permalink to &quot;Item&quot;">​</a></h3><p>Ƭ <strong>Item</strong>&lt;<code>Behavior</code>, <code>CustomData</code>&gt;: <a href="./../interfaces/shared_interfaces_item_BaseItem"><code>BaseItem</code></a>&lt;<code>Behavior</code>, <code>CustomData</code>&gt; &amp; <a href="./../interfaces/shared_interfaces_item_StoredItem"><code>StoredItem</code></a>&lt;<code>CustomData</code>&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Behavior</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_item_DefaultItemBehavior"><code>DefaultItemBehavior</code></a></td></tr><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/item.ts#L370" target="_blank" rel="noreferrer">shared/interfaces/item.ts:370</a></p><hr><h3 id="itemdrop" tabindex="-1">ItemDrop <a class="header-anchor" href="#itemdrop" aria-label="Permalink to &quot;ItemDrop&quot;">​</a></h3><p>Ƭ <strong>ItemDrop</strong>: { <code>_id</code>: <code>unknown</code> ; <code>expiration</code>: <code>number</code> ; <code>model?</code>: <code>string</code> ; <code>name</code>: <code>string</code> ; <code>pos</code>: <code>alt.IVector3</code> } &amp; <a href="./../interfaces/shared_interfaces_item_StoredItem"><code>StoredItem</code></a></p><p>An Item Drop that is represented on server s ide and client side.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/item.ts#L11" target="_blank" rel="noreferrer">shared/interfaces/item.ts:11</a></p><hr><h3 id="weaponinfo" tabindex="-1">WeaponInfo <a class="header-anchor" href="#weaponinfo" aria-label="Permalink to &quot;WeaponInfo&quot;">​</a></h3><p>Ƭ <strong>WeaponInfo</strong>: <code>Object</code></p><p>Default Weapon Data Information</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ammo</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>components?</code></td><td style="text-align:left;">(<code>string</code> | <code>number</code>)[]</td></tr><tr><td style="text-align:left;"><code>hash</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/item.ts#L6" target="_blank" rel="noreferrer">shared/interfaces/item.ts:6</a></p>',31);function f(t,m,p,_,b,u){return d(),r("div",null,[e("h1",s,[o(i(t.$frontmatter.title)+" ",1),c]),h])}const x=a(l,[["render",f]]);export{y as __pageData,x as default};
