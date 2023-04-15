import{_ as e,c as t,o as a,V as n}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"AthenaClient.menus.vehicle","description":"","frontmatter":{"title":"AthenaClient.menus.vehicle","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_menus_vehicle.md","lastUpdated":null}'),l={name:"api/modules/client_menus_vehicle.md"},r=n('<h1 id="athenaclient-menus-vehicle" tabindex="-1">AthenaClient.menus.vehicle <a class="header-anchor" href="#athenaclient-menus-vehicle" aria-label="Permalink to &quot;AthenaClient.menus.vehicle&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="vehiclemenuinjection" tabindex="-1">VehicleMenuInjection <a class="header-anchor" href="#vehiclemenuinjection" aria-label="Permalink to &quot;VehicleMenuInjection&quot;">​</a></h3><p>Ƭ <strong>VehicleMenuInjection</strong>: (<code>target</code>: <code>alt.Vehicle</code>, <code>options</code>: <a href="./server_config#player"><code>player</code></a>[]) =&gt; <a href="./server_config#player"><code>player</code></a>[]</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.(<code>target</code>, <code>options</code>): <a href="./server_config#player"><code>player</code></a>[]</p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>alt.Vehicle</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./server_config#player"><code>player</code></a>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./server_config#player"><code>player</code></a>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L8" target="_blank" rel="noreferrer">client/menus/vehicle.ts:8</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addinjection" tabindex="-1">addInjection <a class="header-anchor" href="#addinjection" aria-label="Permalink to &quot;addInjection&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>addInjection</strong>(<code>callback</code>): <code>any</code></p></div><p>Create a vehicle wheel menu injection. Meaning, a callback that will modify existing options, or append new options to the menu. Must always return the original wheel menu options + your changes.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_menus_vehicle#VehicleMenuInjection"><code>VehicleMenuInjection</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L22" target="_blank" rel="noreferrer">client/menus/vehicle.ts:22</a></p><hr><h3 id="disable" tabindex="-1">disable <a class="header-anchor" href="#disable" aria-label="Permalink to &quot;disable&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>disable</strong>(): <code>void</code></p></div><p>Disable the Vehicle Wheel Menu</p><p><strong><code>Export</code></strong></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L155" target="_blank" rel="noreferrer">client/menus/vehicle.ts:155</a></p><hr><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>open</strong>(<code>vehicle</code>): <code>any</code></p></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L87" target="_blank" rel="noreferrer">client/menus/vehicle.ts:87</a></p><hr><h3 id="openinvehiclemenu" tabindex="-1">openInVehicleMenu <a class="header-anchor" href="#openinvehiclemenu" aria-label="Permalink to &quot;openInVehicleMenu&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>openInVehicleMenu</strong>(<code>vehicle</code>): <code>any</code></p></div><p>Open an in-vehicle menu option and add injections relevant to in-vehicle.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L38" target="_blank" rel="noreferrer">client/menus/vehicle.ts:38</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addInjection&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>callback</code>: <a href="./client_menus_vehicle#VehicleMenuInjection"><code>VehicleMenuInjection</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L167" target="_blank" rel="noreferrer">client/menus/vehicle.ts:167</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;open&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L168" target="_blank" rel="noreferrer">client/menus/vehicle.ts:168</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.vehicle.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;openInVehicleMenu&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/vehicle.ts#L169" target="_blank" rel="noreferrer">client/menus/vehicle.ts:169</a></p>',75),i=[r];function o(c,d,s,h,u,p){return a(),t("div",null,i)}const f=e(l,[["render",o]]);export{m as __pageData,f as default};
