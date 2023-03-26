import{_ as a,c as r,x as e,a as n,t as l,S as i,o}from"./chunks/framework.175b5f45.js";const q=JSON.parse('{"title":"Athena.getters.players","description":"","frontmatter":{"title":"Athena.getters.players","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_getters_players.md","lastUpdated":1679789238000}'),d={name:"api/modules/server_getters_players.md"},s={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),c=i('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="driving" tabindex="-1">driving <a class="header-anchor" href="#driving" aria-label="Permalink to &quot;driving&quot;">​</a></h3><p>▸ <strong>driving</strong>(): <code>alt.Player</code>[]</p><p>Returns all players who are currently driving a vehicle.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L124" target="_blank" rel="noreferrer">server/getters/players.ts:124</a></p><hr><h3 id="drivingspecificmodel" tabindex="-1">drivingSpecificModel <a class="header-anchor" href="#drivingspecificmodel" aria-label="Permalink to &quot;drivingSpecificModel&quot;">​</a></h3><p>▸ <strong>drivingSpecificModel</strong>(<code>model</code>): <code>alt.Player</code>[]</p><p>Return all online players driving a specific vehicle model.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L156" target="_blank" rel="noreferrer">server/getters/players.ts:156</a></p><hr><h3 id="inrange" tabindex="-1">inRange <a class="header-anchor" href="#inrange" aria-label="Permalink to &quot;inRange&quot;">​</a></h3><p>▸ <strong>inRange</strong>(<code>pos</code>, <code>range</code>): <code>alt.Player</code>[]</p><p>Gets all players around a specific position.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>range</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L80" target="_blank" rel="noreferrer">server/getters/players.ts:80</a></p><hr><h3 id="inrangewithdistance" tabindex="-1">inRangeWithDistance <a class="header-anchor" href="#inrangewithdistance" aria-label="Permalink to &quot;inRangeWithDistance&quot;">​</a></h3><p>▸ <strong>inRangeWithDistance</strong>(<code>pos</code>, <code>range</code>): { <code>dist</code>: <code>number</code> ; <code>player</code>: <code>alt.Player</code> }[]</p><p>Creates an array of players who are closest to a position. Array is automatically sorted into ascending order.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>range</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>{ <code>dist</code>: <code>number</code> ; <code>player</code>: <code>alt.Player</code> }[]</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L47" target="_blank" rel="noreferrer">server/getters/players.ts:47</a></p><hr><h3 id="invehicle" tabindex="-1">inVehicle <a class="header-anchor" href="#invehicle" aria-label="Permalink to &quot;inVehicle&quot;">​</a></h3><p>▸ <strong>inVehicle</strong>(<code>vehicle</code>): <code>alt.Player</code>[]</p><p>Returns all passengers and the driver. No specific order.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L190" target="_blank" rel="noreferrer">server/getters/players.ts:190</a></p><hr><h3 id="online" tabindex="-1">online <a class="header-anchor" href="#online" aria-label="Permalink to &quot;online&quot;">​</a></h3><p>▸ <strong>online</strong>(): <code>alt.Player</code>[]</p><p>Return all players currently online and logged into a character.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L10" target="_blank" rel="noreferrer">server/getters/players.ts:10</a></p><hr><h3 id="onlinewithweapons" tabindex="-1">onlineWithWeapons <a class="header-anchor" href="#onlinewithweapons" aria-label="Permalink to &quot;onlineWithWeapons&quot;">​</a></h3><p>▸ <strong>onlineWithWeapons</strong>(): <code>alt.Player</code>[]</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L21" target="_blank" rel="noreferrer">server/getters/players.ts:21</a></p><hr><h3 id="walking" tabindex="-1">walking <a class="header-anchor" href="#walking" aria-label="Permalink to &quot;walking&quot;">​</a></h3><p>▸ <strong>walking</strong>(): <code>alt.Player</code>[]</p><p>Return all players who are currently walking / on foot.</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L139" target="_blank" rel="noreferrer">server/getters/players.ts:139</a></p><hr><h3 id="withname" tabindex="-1">withName <a class="header-anchor" href="#withname" aria-label="Permalink to &quot;withName&quot;">​</a></h3><p>▸ <strong>withName</strong>(<code>name</code>): <code>alt.Player</code>[]</p><p>Gets all online players with a given name.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Player</code>[]</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/players.ts#L103" target="_blank" rel="noreferrer">server/getters/players.ts:103</a></p>',81);function p(t,u,f,b,g,y){return o(),r("div",null,[e("h1",s,[n(l(t.$frontmatter.title)+" ",1),h]),c])}const P=a(d,[["render",p]]);export{q as __pageData,P as default};
