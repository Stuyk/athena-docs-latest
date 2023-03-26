import{_ as a,c as r,x as e,a as l,t as d,S as o,o as i}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.getters.vehicle","description":"","frontmatter":{"title":"Athena.getters.vehicle","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_getters_vehicle.md","lastUpdated":null}'),n={name:"api/modules/server_getters_vehicle.md"},s={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),c=o('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="bydatabaseid" tabindex="-1">byDatabaseID <a class="header-anchor" href="#bydatabaseid" aria-label="Permalink to &quot;byDatabaseID&quot;">​</a></h3><p>▸ <strong>byDatabaseID</strong>(<code>id</code>): <code>alt.Vehicle</code> | <code>undefined</code></p><p>Get a vehicle based on their database _id May return undefined if the vehicle is not currently spawned.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Vehicle</code> | <code>undefined</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L55" target="_blank" rel="noreferrer">server/getters/vehicle.ts:55</a></p><hr><h3 id="byid" tabindex="-1">byID <a class="header-anchor" href="#byid" aria-label="Permalink to &quot;byID&quot;">​</a></h3><p>▸ <strong>byID</strong>(<code>id</code>): <code>alt.Vehicle</code> | <code>undefined</code></p><p>Get a vehicle by their alt:V ID</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Vehicle</code> | <code>undefined</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L11" target="_blank" rel="noreferrer">server/getters/vehicle.ts:11</a></p><hr><h3 id="byincrementaldatabaseid" tabindex="-1">byIncrementalDatabaseID <a class="header-anchor" href="#byincrementaldatabaseid" aria-label="Permalink to &quot;byIncrementalDatabaseID&quot;">​</a></h3><p>▸ <strong>byIncrementalDatabaseID</strong>(<code>id</code>): <code>alt.Vehicle</code> | <code>undefined</code></p><p>Return a spawned vehicle by is incremental data id.</p><p>This only works for persistent vehicles.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Vehicle</code> | <code>undefined</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L24" target="_blank" rel="noreferrer">server/getters/vehicle.ts:24</a></p><hr><h3 id="closesttoplayer" tabindex="-1">closestToPlayer <a class="header-anchor" href="#closesttoplayer" aria-label="Permalink to &quot;closestToPlayer&quot;">​</a></h3><p>▸ <strong>closestToPlayer</strong>(<code>player</code>): <code>alt.Player</code> | <code>undefined</code></p><p>The player closest to a player.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code> | <code>undefined</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L181" target="_blank" rel="noreferrer">server/getters/vehicle.ts:181</a></p><hr><h3 id="closesttovehicle" tabindex="-1">closestToVehicle <a class="header-anchor" href="#closesttovehicle" aria-label="Permalink to &quot;closestToVehicle&quot;">​</a></h3><p>▸ <strong>closestToVehicle</strong>(<code>player</code>): <code>alt.Vehicle</code> | <code>undefined</code></p><p>The vehicle closest to a player.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Vehicle</code> | <code>undefined</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L191" target="_blank" rel="noreferrer">server/getters/vehicle.ts:191</a></p><hr><h3 id="driver" tabindex="-1">driver <a class="header-anchor" href="#driver" aria-label="Permalink to &quot;driver&quot;">​</a></h3><p>▸ <strong>driver</strong>(<code>vehicle</code>): <code>alt.Player</code> | <code>undefined</code></p><p>Just wraps the <code>vehicle.driver</code> lookup. Returns a player if they are driving this vehicle.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code> | <code>undefined</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L171" target="_blank" rel="noreferrer">server/getters/vehicle.ts:171</a></p><hr><h3 id="infrontof" tabindex="-1">inFrontOf <a class="header-anchor" href="#infrontof" aria-label="Permalink to &quot;inFrontOf&quot;">​</a></h3><p>▸ <strong>inFrontOf</strong>(<code>entity</code>, <code>startDistance?</code>): <code>Promise</code>&lt;<code>alt.Vehicle</code> | <code>undefined</code>&gt;</p><p>Creates a temporary ColShape in front of the current vehicle or player. The ColShape is then used to check if a vehicle is present within the ColShape. It will keep subtract distance until it finds a vehicle near the player that is in the ColShape. Works best on flat land or very close distances.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>entity</code></td><td style="text-align:left;"><code>Entity</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>startDistance?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>6</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>alt.Vehicle</code> | <code>undefined</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L99" target="_blank" rel="noreferrer">server/getters/vehicle.ts:99</a></p><hr><h3 id="isnearposition" tabindex="-1">isNearPosition <a class="header-anchor" href="#isnearposition" aria-label="Permalink to &quot;isNearPosition&quot;">​</a></h3><p>▸ <strong>isNearPosition</strong>(<code>vehicle</code>, <code>pos</code>, <code>dist?</code>): <code>boolean</code></p><p>Checks if a vehicle is within 3 distance of a position.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>dist</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L150" target="_blank" rel="noreferrer">server/getters/vehicle.ts:150</a></p><hr><h3 id="isvalidmodel" tabindex="-1">isValidModel <a class="header-anchor" href="#isvalidmodel" aria-label="Permalink to &quot;isValidModel&quot;">​</a></h3><p>▸ <strong>isValidModel</strong>(<code>model</code>): <code>boolean</code></p><p>Check if a vehicle model is currently valid. Use <code>alt.hash</code> to hash a plain text model. ex: <code>alt.hash(&#39;infernus&#39;)</code></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L78" target="_blank" rel="noreferrer">server/getters/vehicle.ts:78</a></p><hr><h3 id="passengers" tabindex="-1">passengers <a class="header-anchor" href="#passengers" aria-label="Permalink to &quot;passengers&quot;">​</a></h3><p>▸ <strong>passengers</strong>(<code>vehicle</code>): <code>alt.Player</code>[]</p><p>Returns all passengers and the driver. No specific order.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/getters/vehicle.ts#L160" target="_blank" rel="noreferrer">server/getters/vehicle.ts:160</a></p>',102);function f(t,b,u,p,y,g){return i(),r("div",null,[e("h1",s,[l(d(t.$frontmatter.title)+" ",1),h]),c])}const v=a(n,[["render",f]]);export{x as __pageData,v as default};
