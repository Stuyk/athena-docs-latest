import{_ as a,c as d,x as e,a as o,t as r,S as l,o as n}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.vehicle.add","description":"","frontmatter":{"title":"Athena.vehicle.add","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_vehicle_add.md","lastUpdated":1679789238000}'),c={name:"api/modules/server_vehicle_add.md"},i={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_vehicle_add_AddOptions">AddOptions</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override add owned vehicle functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toDatabase&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>owner</code>: <code>string</code>, <code>model</code>: <code>string</code>, <code>pos</code>: <code>IVector3</code>, <code>options</code>: <a href="./../interfaces/server_vehicle_add_AddOptions"><code>AddOptions</code></a>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L195" target="_blank" rel="noreferrer">server/vehicle/add.ts:195</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override add owned vehicle functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toPlayer&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>model</code>: <code>string</code>, <code>pos</code>: <code>IVector3</code>, <code>options</code>: <a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_vehicle_add_AddOptions"><code>AddOptions</code></a>, <code>&quot;doNotDespawn&quot;</code>&gt;) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L196" target="_blank" rel="noreferrer">server/vehicle/add.ts:196</a></p><hr><h3 id="todatabase" tabindex="-1">toDatabase <a class="header-anchor" href="#todatabase" aria-label="Permalink to &quot;toDatabase&quot;">​</a></h3><p>▸ <strong>toDatabase</strong>(<code>owner</code>, <code>model</code>, <code>pos</code>, <code>options?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Add a vehicle to the database.</p><p>Owner can be an identifier, group, etc.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>owner</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/server_vehicle_add_AddOptions"><code>AddOptions</code></a></td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L134" target="_blank" rel="noreferrer">server/vehicle/add.ts:134</a></p><hr><h3 id="toplayer" tabindex="-1">toPlayer <a class="header-anchor" href="#toplayer" aria-label="Permalink to &quot;toPlayer&quot;">​</a></h3><p>▸ <strong>toPlayer</strong>(<code>player</code>, <code>model</code>, <code>pos</code>, <code>options?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Add a vehicle to a player. The position specified is where the vehicle can be found.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_vehicle_add_AddOptions"><code>AddOptions</code></a>, <code>&quot;doNotDespawn&quot;</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L64" target="_blank" rel="noreferrer">server/vehicle/add.ts:64</a></p>',45);function f(t,p,u,b,g,y){return n(),d("div",null,[e("h1",i,[o(r(t.$frontmatter.title)+" ",1),s]),h])}const v=a(c,[["render",f]]);export{x as __pageData,v as default};
