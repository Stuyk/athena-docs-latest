import{_ as e,c as t,o as a,V as r}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Athena.vehicle.tempVehicles","description":"","frontmatter":{"title":"Athena.vehicle.tempVehicles","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_vehicle_tempVehicles.md","lastUpdated":null}'),l={name:"api/modules/server_vehicle_tempVehicles.md"},o=r('<h1 id="athena-vehicle-tempvehicles" tabindex="-1">Athena.vehicle.tempVehicles <a class="header-anchor" href="#athena-vehicle-tempvehicles" aria-label="Permalink to &quot;Athena.vehicle.tempVehicles&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>add</strong>(<code>vehicle</code>, <code>options</code>): <code>any</code></p></div><p>Register a vehicle as temporary</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>options.deleteOnLeave?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>options.owner?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L14" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:14</a></p><hr><h3 id="has" tabindex="-1">has <a class="header-anchor" href="#has" aria-label="Permalink to &quot;has&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>has</strong>(<code>vehicle</code>): <code>boolean</code></p></div><p>Check if a vehicle is temporary by id, or vehicle instance.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L60" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:60</a></p><hr><h3 id="isowner" tabindex="-1">isOwner <a class="header-anchor" href="#isowner" aria-label="Permalink to &quot;isOwner&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>isOwner</strong>(<code>player</code>, <code>vehicle</code>): <code>boolean</code></p></div><p>Check if player is owner of a temporary vehicle.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L77" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:77</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override temporary vehicle functionality</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;add&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>, <code>options</code>: { <code>deleteOnLeave?</code>: <code>boolean</code> ; <code>owner?</code>: <code>number</code> }) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L114" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:114</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override temporary vehicle functionality</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>id</code>: <code>number</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L115" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:115</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override temporary vehicle functionality</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;has&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>any</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L116" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:116</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override temporary vehicle functionality</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;isOwner&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L117" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:117</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override temporary vehicle functionality</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;shouldBeDestroyed&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L118" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:118</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>remove</strong>(<code>id</code>): <code>void</code></p></div><p>Removes a temporary vehicle from the tracker.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L36" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:36</a></p><hr><h3 id="shouldbedestroyed" tabindex="-1">shouldBeDestroyed <a class="header-anchor" href="#shouldbedestroyed" aria-label="Permalink to &quot;shouldBeDestroyed&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.tempVehicles.<strong>shouldBeDestroyed</strong>(<code>vehicle</code>): <code>boolean</code></p></div><p>Check if this vehicle should be removed when a player leaves the drivers seat.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/vehicle/tempVehicles.ts#L96" target="_blank" rel="noreferrer">server/vehicle/tempVehicles.ts:96</a></p>',93),d=[o];function i(c,s,n,h,p,b){return a(),t("div",null,d)}const f=e(l,[["render",i]]);export{m as __pageData,f as default};
