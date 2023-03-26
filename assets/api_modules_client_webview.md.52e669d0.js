import{_ as a,c as r,x as e,a as o,t as d,S as n,o as l}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"AthenaClient.webview","description":"","frontmatter":{"title":"AthenaClient.webview","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_webview.md","lastUpdated":1679789238000}'),i={name:"api/modules/client_webview.md"},s={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><h3 id="page" tabindex="-1">Page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;Page&quot;">​</a></h3><p>Re-exports <a href="./../classes/client_webview_page_Page">Page</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="anycallback" tabindex="-1">AnyCallback <a class="header-anchor" href="#anycallback" aria-label="Permalink to &quot;AnyCallback&quot;">​</a></h3><p>Ƭ <strong>AnyCallback</strong>: (...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code> | (...<code>args</code>: <code>any</code>[]) =&gt; <code>Promise</code>&lt;<code>void</code>&gt; | <code>Function</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L9" target="_blank" rel="noreferrer">client/webview/index.ts:9</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="closeoverlays" tabindex="-1">closeOverlays <a class="header-anchor" href="#closeoverlays" aria-label="Permalink to &quot;closeOverlays&quot;">​</a></h3><p>▸ <strong>closeOverlays</strong>(<code>pageNames</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Closes an overlay page or pages.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageNames</code></td><td style="text-align:left;"><code>string</code>[]</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L503" target="_blank" rel="noreferrer">client/webview/index.ts:503</a></p><hr><h3 id="closepages" tabindex="-1">closePages <a class="header-anchor" href="#closepages" aria-label="Permalink to &quot;closePages&quot;">​</a></h3><p>▸ <strong>closePages</strong>(<code>pageNames</code>, <code>showOverlays?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Close a group of pages that may or may not be open.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageNames</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>showOverlays</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L544" target="_blank" rel="noreferrer">client/webview/index.ts:544</a></p><hr><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><p>▸ <strong>create</strong>(<code>url</code>): <code>void</code></p><p>Sets the URL to use based on current deployment.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L231" target="_blank" rel="noreferrer">client/webview/index.ts:231</a></p><hr><h3 id="disableescapekeyforpage" tabindex="-1">disableEscapeKeyForPage <a class="header-anchor" href="#disableescapekeyforpage" aria-label="Permalink to &quot;disableEscapeKeyForPage&quot;">​</a></h3><p>▸ <strong>disableEscapeKeyForPage</strong>(<code>pageName</code>): <code>void</code></p><p>Register a page to ignore escape key presence.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L658" target="_blank" rel="noreferrer">client/webview/index.ts:658</a></p><hr><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><p>▸ <strong>dispose</strong>(): <code>void</code></p><p>Destroy the WebView</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L384" target="_blank" rel="noreferrer">client/webview/index.ts:384</a></p><hr><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><p>▸ <strong>emit</strong>&lt;<code>EventNames</code>&gt;(<code>eventName</code>, <code>...args</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Emit through the WebViewEvents Helper Ensures that there is a callback event on the other side.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>EventNames</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>EventNames</code></td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L624" target="_blank" rel="noreferrer">client/webview/index.ts:624</a></p><hr><h3 id="focus" tabindex="-1">focus <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;focus&quot;">​</a></h3><p>▸ <strong>focus</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Focus the WebView Instance</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L457" target="_blank" rel="noreferrer">client/webview/index.ts:457</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>(): <code>Promise</code>&lt;<code>alt.WebView</code>&gt;</p><p>Get the current WebView instance.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>alt.WebView</code>&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L353" target="_blank" rel="noreferrer">client/webview/index.ts:353</a></p><hr><h3 id="isanymenuopen" tabindex="-1">isAnyMenuOpen <a class="header-anchor" href="#isanymenuopen" aria-label="Permalink to &quot;isAnyMenuOpen&quot;">​</a></h3><p>▸ <strong>isAnyMenuOpen</strong>(<code>excludeDead?</code>): <code>boolean</code></p><p>Checks if any menu is currently open</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>excludeDead</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L673" target="_blank" rel="noreferrer">client/webview/index.ts:673</a></p><hr><h3 id="isdoneupdating" tabindex="-1">isDoneUpdating <a class="header-anchor" href="#isdoneupdating" aria-label="Permalink to &quot;isDoneUpdating&quot;">​</a></h3><p>▸ <strong>isDoneUpdating</strong>(): <code>boolean</code></p><p>Returns whether or not all pages are done closing / opening</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L648" target="_blank" rel="noreferrer">client/webview/index.ts:648</a></p><hr><h3 id="ispageopen" tabindex="-1">isPageOpen <a class="header-anchor" href="#ispageopen" aria-label="Permalink to &quot;isPageOpen&quot;">​</a></h3><p>▸ <strong>isPageOpen</strong>(<code>pageName</code>): <code>boolean</code></p><p>Returns if a page is currently open.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L639" target="_blank" rel="noreferrer">client/webview/index.ts:639</a></p><hr><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>▸ <strong>on</strong>&lt;<code>EventNames</code>&gt;(<code>eventName</code>, <code>callback</code>): <code>void</code></p><p>Registers an event to call when a component is loaded.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>EventNames</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>EventNames</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_webview#AnyCallback"><code>AnyCallback</code></a></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L604" target="_blank" rel="noreferrer">client/webview/index.ts:604</a></p><hr><h3 id="openpages" tabindex="-1">openPages <a class="header-anchor" href="#openpages" aria-label="Permalink to &quot;openPages&quot;">​</a></h3><p>▸ <strong>openPages</strong>(<code>pageOrPages</code>, <code>hideOverlays?</code>, <code>closeOnEscapeCallback?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Used to open a page or pages. Use a single page if you have closing callbacks.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageOrPages</code></td><td style="text-align:left;"><code>string</code> | <code>string</code>[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">An array of pages, or a single page name. Case sensitive.</td></tr><tr><td style="text-align:left;"><code>hideOverlays</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>closeOnEscapeCallback?</code></td><td style="text-align:left;">() =&gt; <code>void</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">An event to call when the page is closed.</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L399" target="_blank" rel="noreferrer">client/webview/index.ts:399</a></p><hr><h3 id="ready" tabindex="-1">ready <a class="header-anchor" href="#ready" aria-label="Permalink to &quot;ready&quot;">​</a></h3><p>▸ <strong>ready</strong>(<code>pageName</code>, <code>callback</code>): <code>void</code></p><p>Registers an event to call when a component is loaded.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_webview#AnyCallback"><code>AnyCallback</code></a></td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L592" target="_blank" rel="noreferrer">client/webview/index.ts:592</a></p><hr><h3 id="registeroverlay" tabindex="-1">registerOverlay <a class="header-anchor" href="#registeroverlay" aria-label="Permalink to &quot;registerOverlay&quot;">​</a></h3><p>▸ <strong>registerOverlay</strong>(<code>pageName</code>, <code>callback?</code>): <code>void</code></p><p>Register a Page Overlay such as HUD elements.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>isVisible</code>: <code>boolean</code>) =&gt; <code>void</code></td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L314" target="_blank" rel="noreferrer">client/webview/index.ts:314</a></p><hr><h3 id="registerpersistentpage" tabindex="-1">registerPersistentPage <a class="header-anchor" href="#registerpersistentpage" aria-label="Permalink to &quot;registerPersistentPage&quot;">​</a></h3><p>▸ <strong>registerPersistentPage</strong>(<code>pageName</code>): <code>void</code></p><p>Registers a page that never, ever closes. Ever.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L296" target="_blank" rel="noreferrer">client/webview/index.ts:296</a></p><hr><h3 id="setoverlayvisible" tabindex="-1">setOverlayVisible <a class="header-anchor" href="#setoverlayvisible" aria-label="Permalink to &quot;setOverlayVisible&quot;">​</a></h3><p>▸ <strong>setOverlayVisible</strong>(<code>pageName</code>, <code>state</code>): <code>void</code></p><p>Trigger this to hide/show a specific overlay</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pageName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>state</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L333" target="_blank" rel="noreferrer">client/webview/index.ts:333</a></p><hr><h3 id="setoverlaysvisible" tabindex="-1">setOverlaysVisible <a class="header-anchor" href="#setoverlaysvisible" aria-label="Permalink to &quot;setOverlaysVisible&quot;">​</a></h3><p>▸ <strong>setOverlaysVisible</strong>(<code>value</code>, <code>doNotUpdate?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Trigger this to hide/show all overlays like Chat, HUD, etc.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>doNotUpdate</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L266" target="_blank" rel="noreferrer">client/webview/index.ts:266</a></p><hr><h3 id="showcursor" tabindex="-1">showCursor <a class="header-anchor" href="#showcursor" aria-label="Permalink to &quot;showCursor&quot;">​</a></h3><p>▸ <strong>showCursor</strong>(<code>state</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Show or hide the cursor.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>state</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L478" target="_blank" rel="noreferrer">client/webview/index.ts:478</a></p><hr><h3 id="unfocus" tabindex="-1">unfocus <a class="header-anchor" href="#unfocus" aria-label="Permalink to &quot;unfocus&quot;">​</a></h3><p>▸ <strong>unfocus</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Focus the WebView Instance</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>WebViewController</p><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/webview/index.ts#L467" target="_blank" rel="noreferrer">client/webview/index.ts:467</a></p>',251);function p(t,b,g,f,u,m){return l(),r("div",null,[e("h1",s,[o(d(t.$frontmatter.title)+" ",1),c]),h])}const v=a(i,[["render",p]]);export{x as __pageData,v as default};
