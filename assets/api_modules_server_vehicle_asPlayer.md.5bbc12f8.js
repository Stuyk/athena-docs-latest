import{_ as a,c as l,x as e,a as r,t as o,S as d,o as c}from"./chunks/framework.175b5f45.js";const v=JSON.parse('{"title":"Athena.vehicle.asPlayer","description":"","frontmatter":{"title":"Athena.vehicle.asPlayer","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_vehicle_asPlayer.md","lastUpdated":null}'),i={name:"api/modules/server_vehicle_asPlayer.md"},n={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=d('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override vehicle control as a player functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleLock&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L123" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:123</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override vehicle control as a player functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleDoor&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>vehicle</code>: <code>Vehicle</code>, <code>door</code>: <code>0</code> | <code>3</code> | <code>2</code> | <code>1</code> | <code>4</code> | <code>5</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L124" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:124</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override vehicle control as a player functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleEngine&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L125" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:125</a></p><hr><h3 id="toggledoor" tabindex="-1">toggleDoor <a class="header-anchor" href="#toggledoor" aria-label="Permalink to &quot;toggleDoor&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>toggleDoor</strong>(<code>player</code>, <code>vehicle</code>, <code>door</code>): <code>any</code></p></div><p>Toggles a door lock as if a player toggled it.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr><tr><td style="text-align:left;"><code>door</code></td><td style="text-align:left;"><code>0</code> | <code>3</code> | <code>2</code> | <code>1</code> | <code>4</code> | <code>5</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L85" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:85</a></p><hr><h3 id="toggleengine" tabindex="-1">toggleEngine <a class="header-anchor" href="#toggleengine" aria-label="Permalink to &quot;toggleEngine&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>toggleEngine</strong>(<code>player</code>, <code>vehicle</code>): <code>any</code></p></div><p>Toggles an engine lock as if a player toggled it.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L60" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:60</a></p><hr><h3 id="togglelock" tabindex="-1">toggleLock <a class="header-anchor" href="#togglelock" aria-label="Permalink to &quot;toggleLock&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.vehicle.asPlayer.<strong>toggleLock</strong>(<code>player</code>, <code>vehicle</code>): <code>any</code></p></div><p>Toggles a vehicle lock as if a player toggled it.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/vehicle/asPlayer.ts#L31" target="_blank" rel="noreferrer">server/vehicle/asPlayer.ts:31</a></p>',59);function g(t,y,f,p,u,b){return c(),l("div",null,[e("h1",n,[r(o(t.$frontmatter.title)+" ",1),s]),h])}const x=a(i,[["render",g]]);export{v as __pageData,x as default};
