import{_ as e,c as t,o as a,V as r}from"./chunks/framework.be58fd72.js";const f=JSON.parse('{"title":"AthenaClient.camera.cinematic","description":"","frontmatter":{"title":"AthenaClient.camera.cinematic","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_camera_cinematic.md","lastUpdated":null}'),o={name:"api/modules/client_camera_cinematic.md"},c=r('<h1 id="athenaclient-camera-cinematic" tabindex="-1">AthenaClient.camera.cinematic <a class="header-anchor" href="#athenaclient-camera-cinematic" aria-label="Permalink to &quot;AthenaClient.camera.cinematic&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/client_camera_cinematic_iCameraNode">iCameraNode</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addnode" tabindex="-1">addNode <a class="header-anchor" href="#addnode" aria-label="Permalink to &quot;addNode&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>addNode</strong>(<code>node</code>): <code>any</code></p></div><p>Add a camera node to the camera set.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L327" target="_blank" rel="noreferrer">client/camera/cinematic.ts:327</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>This function will destroy all camera instances</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L305" target="_blank" rel="noreferrer">client/camera/cinematic.ts:305</a></p><hr><h3 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>next</strong>(<code>removeFromArray?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Goes to the next camera.</p><p>If <code>false</code> is passed in the function it will not remove a camera from the camera array. Allows for repeating camera movement over and over.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>removeFromArray?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L357" target="_blank" rel="noreferrer">client/camera/cinematic.ts:357</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addNode&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>node</code>: <a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L412" target="_blank" rel="noreferrer">client/camera/cinematic.ts:412</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;destroy&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L413" target="_blank" rel="noreferrer">client/camera/cinematic.ts:413</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;overrideNodes&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>_nodes</code>: <a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a>[]) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L414" target="_blank" rel="noreferrer">client/camera/cinematic.ts:414</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;next&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>removeFromArray?</code>: <code>boolean</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L415" target="_blank" rel="noreferrer">client/camera/cinematic.ts:415</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;play&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L416" target="_blank" rel="noreferrer">client/camera/cinematic.ts:416</a></p><hr><h3 id="overridenodes" tabindex="-1">overrideNodes <a class="header-anchor" href="#overridenodes" aria-label="Permalink to &quot;overrideNodes&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>overrideNodes</strong>(<code>_nodes</code>): <code>any</code></p></div><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_nodes</code></td><td style="text-align:left;"><a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a>[]</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L313" target="_blank" rel="noreferrer">client/camera/cinematic.ts:313</a></p><hr><h3 id="play" tabindex="-1">play <a class="header-anchor" href="#play" aria-label="Permalink to &quot;play&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.camera.cinematic.<strong>play</strong>(): <code>any</code></p></div><p>Play all camera nodes, but do not clear the camera nodes array.</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/camera/cinematic.ts#L390" target="_blank" rel="noreferrer">client/camera/cinematic.ts:390</a></p>',86),n=[c];function i(d,l,s,h,m,u){return a(),t("div",null,n)}const p=e(o,[["render",i]]);export{f as __pageData,p as default};
