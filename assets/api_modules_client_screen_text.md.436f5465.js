import{_ as d,c as a,x as e,a as r,t as o,S as l,o as n}from"./chunks/framework.175b5f45.js";const m=JSON.parse('{"title":"AthenaClient.screen.text","description":"","frontmatter":{"title":"AthenaClient.screen.text","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_screen_text.md","lastUpdated":1679789238000}'),c={name:"api/modules/client_screen_text.md"},i={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addtemporarytext" tabindex="-1">addTemporaryText <a class="header-anchor" href="#addtemporarytext" aria-label="Permalink to &quot;addTemporaryText&quot;">​</a></h3><p>▸ <strong>addTemporaryText</strong>(<code>identifier</code>, <code>msg</code>, <code>x</code>, <code>y</code>, <code>scale</code>, <code>r</code>, <code>g</code>, <code>b</code>, <code>a</code>, <code>ms</code>): <code>void</code></p><p>Adds text temporarily on the screen.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>identifier</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>r</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>g</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>ms</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/text.ts#L116" target="_blank" rel="noreferrer">client/screen/text.ts:116</a></p><hr><h3 id="drawrectangle" tabindex="-1">drawRectangle <a class="header-anchor" href="#drawrectangle" aria-label="Permalink to &quot;drawRectangle&quot;">​</a></h3><p>▸ <strong>drawRectangle</strong>(<code>pos</code>, <code>size</code>, <code>color</code>): <code>void</code></p><p>Draw a box at a 3D coordinate</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>IVector2</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>RGBA</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/text.ts#L52" target="_blank" rel="noreferrer">client/screen/text.ts:52</a></p><hr><h3 id="drawrectangle2d" tabindex="-1">drawRectangle2D <a class="header-anchor" href="#drawrectangle2d" aria-label="Permalink to &quot;drawRectangle2D&quot;">​</a></h3><p>▸ <strong>drawRectangle2D</strong>(<code>pos</code>, <code>size</code>, <code>color</code>): <code>void</code></p><p>Draw a box on-screen</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector2</code></td></tr><tr><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>IVector2</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>RGBA</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/text.ts#L71" target="_blank" rel="noreferrer">client/screen/text.ts:71</a></p><hr><h3 id="drawtext2d" tabindex="-1">drawText2D <a class="header-anchor" href="#drawtext2d" aria-label="Permalink to &quot;drawText2D&quot;">​</a></h3><p>▸ <strong>drawText2D</strong>(<code>text</code>, <code>pos</code>, <code>scale</code>, <code>color</code>, <code>alignment?</code>, <code>padding?</code>): <code>void</code></p><p>Draw text on your screen in a 2D position with an every tick.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector2</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>RGBA</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>alignment</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">0 Center, 1 Left, 2 Right</td></tr><tr><td style="text-align:left;"><code>padding</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/text.ts#L15" target="_blank" rel="noreferrer">client/screen/text.ts:15</a></p><hr><h3 id="drawtext3d" tabindex="-1">drawText3D <a class="header-anchor" href="#drawtext3d" aria-label="Permalink to &quot;drawText3D&quot;">​</a></h3><p>▸ <strong>drawText3D</strong>(<code>text</code>, <code>pos</code>, <code>scale</code>, <code>color</code>): <code>void</code></p><p>Draw stable text in a 3D position with an every tick.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>RGBA</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/text.ts#L83" target="_blank" rel="noreferrer">client/screen/text.ts:83</a></p>',53);function f(t,x,g,y,p,u){return n(),a("div",null,[e("h1",i,[r(o(t.$frontmatter.title)+" ",1),s]),h])}const q=d(c,[["render",f]]);export{m as __pageData,q as default};
