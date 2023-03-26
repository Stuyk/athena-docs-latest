import{_ as a,c as o,x as e,a as r,t as l,S as i,o as d}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.controllers.worldNotifications","description":"","frontmatter":{"title":"Athena.controllers.worldNotifications","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_controllers_worldNotifications.md","lastUpdated":null}'),n={name:"api/modules/server_controllers_worldNotifications.md"},s={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addtoplayer" tabindex="-1">addToPlayer <a class="header-anchor" href="#addtoplayer" aria-label="Permalink to &quot;addToPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>addToPlayer</strong>(<code>player</code>, <code>notification</code>): <code>string</code></p></div><p>Add a world notification to a single local player.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>notification</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>uid A unique string for notification</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L93" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:93</a></p><hr><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-label="Permalink to &quot;append&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>append</strong>(<code>notification</code>): <code>string</code></p></div><p>Adds a global world notification for all players.</p><p><strong><code>Memberof</code></strong></p><p>WorldNotificationController</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>notification</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>uid A unique string for notification</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L35" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:35</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any in-world streamer notifications</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;append&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>notification</code>: <a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a>) =&gt; <code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L131" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:131</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any in-world streamer notifications</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>uid</code>: <code>string</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L132" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:132</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any in-world streamer notifications</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addToPlayer&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>notification</code>: <a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a>) =&gt; <code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L133" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:133</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any in-world streamer notifications</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;removeFromPlayer&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>uid</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L134" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:134</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any in-world streamer notifications</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;update&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>notifications</code>: <a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a>[]) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L135" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:135</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>remove</strong>(<code>uid</code>): <code>boolean</code></p></div><p>Removes a global world notification from all players based on the global uid.</p><p><strong><code>Memberof</code></strong></p><p>WorldNotificationController</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>uid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">A unique string</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L55" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:55</a></p><hr><h3 id="removefromplayer" tabindex="-1">removeFromPlayer <a class="header-anchor" href="#removefromplayer" aria-label="Permalink to &quot;removeFromPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>removeFromPlayer</strong>(<code>player</code>, <code>uid</code>): <code>any</code></p></div><p>Remove a world notification from a single local player.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>uid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">A unique string</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L75" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:75</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.worldNotifications.<strong>update</strong>(<code>player</code>, <code>notifications</code>): <code>any</code></p></div><p>Updates world notifications through the streamer service.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>notifications</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_iWorldNotification_IWorldNotification"><code>IWorldNotification</code></a>[]</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/controllers/worldNotifications.ts#L111" target="_blank" rel="noreferrer">server/controllers/worldNotifications.ts:111</a></p>',103);function f(t,p,u,b,m,y){return d(),o("div",null,[e("h1",s,[r(l(t.$frontmatter.title)+" ",1),c]),h])}const k=a(n,[["render",f]]);export{x as __pageData,k as default};
