import{_ as e,c as t,o as a,V as n}from"./chunks/framework.be58fd72.js";const f=JSON.parse('{"title":"AthenaClient.menus.object","description":"","frontmatter":{"title":"AthenaClient.menus.object","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_menus_object.md","lastUpdated":null}'),o={name:"api/modules/client_menus_object.md"},r=n('<h1 id="athenaclient-menus-object" tabindex="-1">AthenaClient.menus.object <a class="header-anchor" href="#athenaclient-menus-object" aria-label="Permalink to &quot;AthenaClient.menus.object&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="objectmenuinjection" tabindex="-1">ObjectMenuInjection <a class="header-anchor" href="#objectmenuinjection" aria-label="Permalink to &quot;ObjectMenuInjection&quot;">​</a></h3><p>Ƭ <strong>ObjectMenuInjection</strong>: (<code>existingObject</code>: <a href="./server_config#player"><code>player</code></a>, <code>options</code>: <a href="./../interfaces/shared_interfaces_wheelMenu_IWheelOptionExt"><code>IWheelOptionExt</code></a>[]) =&gt; <a href="./../interfaces/shared_interfaces_wheelMenu_IWheelOptionExt"><code>IWheelOptionExt</code></a>[]</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.(<code>existingObject</code>, <code>options</code>): <a href="./../interfaces/shared_interfaces_wheelMenu_IWheelOptionExt"><code>IWheelOptionExt</code></a>[]</p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>existingObject</code></td><td style="text-align:left;"><a href="./server_config#player"><code>player</code></a></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/shared_interfaces_wheelMenu_IWheelOptionExt"><code>IWheelOptionExt</code></a>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./../interfaces/shared_interfaces_wheelMenu_IWheelOptionExt"><code>IWheelOptionExt</code></a>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L8" target="_blank" rel="noreferrer">client/menus/object.ts:8</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addinjection" tabindex="-1">addInjection <a class="header-anchor" href="#addinjection" aria-label="Permalink to &quot;addInjection&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.<strong>addInjection</strong>(<code>callback</code>): <code>void</code></p></div><p>Allows the current Menu Options to be modified. Meaning, a callback that will modify existing options, or append new options to the menu. Must always return the original wheel menu options + your changes.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_menus_object#ObjectMenuInjection"><code>ObjectMenuInjection</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L25" target="_blank" rel="noreferrer">client/menus/object.ts:25</a></p><hr><h3 id="disable" tabindex="-1">disable <a class="header-anchor" href="#disable" aria-label="Permalink to &quot;disable&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.<strong>disable</strong>(): <code>void</code></p></div><p>Disable the Object Wheel Menu</p><p><strong><code>Export</code></strong></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L98" target="_blank" rel="noreferrer">client/menus/object.ts:98</a></p><hr><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.<strong>open</strong>(<code>object</code>): <code>void</code></p></div><p>Opens the wheel menu against a target object created with the server-side object api</p><p><strong><code>Static</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>CreatedObject</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L45" target="_blank" rel="noreferrer">client/menus/object.ts:45</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addInjection&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>callback</code>: <a href="./client_menus_object#ObjectMenuInjection"><code>ObjectMenuInjection</code></a>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L109" target="_blank" rel="noreferrer">client/menus/object.ts:109</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.object.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;open&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>object</code>: <code>CreatedObject</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/menus/object.ts#L110" target="_blank" rel="noreferrer">client/menus/object.ts:110</a></p>',59),i=[r];function c(l,d,s,h,b,u){return a(),t("div",null,i)}const m=e(o,[["render",c]]);export{f as __pageData,m as default};
