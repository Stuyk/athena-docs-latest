import{_ as e,c as t,o as a,V as o}from"./chunks/framework.be58fd72.js";const p=JSON.parse('{"title":"AthenaClient.camera.switch","description":"","frontmatter":{"title":"AthenaClient.camera.switch","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_camera_switch.md","lastUpdated":null}'),c={name:"api/modules/client_camera_switch.md"},r=o('<h1 id="athenaclient-camera-switch" tabindex="-1">AthenaClient.camera.switch <a class="header-anchor" href="#athenaclient-camera-switch" aria-label="Permalink to &quot;AthenaClient.camera.switch&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.switch.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;switchToMultiSecondpart&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>timeInMs</code>: <code>number</code>, <code>switchType</code>: <code>SWITCHOUT_TYPES</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/switch.ts#L38" target="_blank" rel="noreferrer">client/camera/switch.ts:38</a></p><hr><h3 id="switchtomultisecondpart" tabindex="-1">switchToMultiSecondpart <a class="header-anchor" href="#switchtomultisecondpart" aria-label="Permalink to &quot;switchToMultiSecondpart&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.switch.<strong>switchToMultiSecondpart</strong>(<code>timeInMs</code>, <code>switchType?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Zoom all the way out. Then zoom all the way in from the sky.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>timeInMs</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>switchType</code></td><td style="text-align:left;"><code>SWITCHOUT_TYPES</code></td><td style="text-align:left;"><code>SWITCHOUT_TYPES.THREE_STEPS</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/switch.ts#L14" target="_blank" rel="noreferrer">client/camera/switch.ts:14</a></p>',20),i=[r];function l(d,n,s,h,m,u){return a(),t("div",null,i)}const b=e(c,[["render",l]]);export{p as __pageData,b as default};
