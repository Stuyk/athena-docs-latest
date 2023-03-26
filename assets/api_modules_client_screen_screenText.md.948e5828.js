import{_ as a,c as r,x as e,a as d,t as o,S as n,o as c}from"./chunks/framework.175b5f45.js";const y=JSON.parse('{"title":"AthenaClient.screen.screenText","description":"","frontmatter":{"title":"AthenaClient.screen.screenText","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_screen_screenText.md","lastUpdated":1679789238000}'),l={name:"api/modules/client_screen_screenText.md"},s={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/client_screen_screenText_TextProperties">TextProperties</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addlongstring" tabindex="-1">addLongString <a class="header-anchor" href="#addlongstring" aria-label="Permalink to &quot;addLongString&quot;">​</a></h3><p>▸ <strong>addLongString</strong>(<code>text</code>): <code>void</code></p><p>Used as a utility for string length.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>ScreenText</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/screenText.ts#L22" target="_blank" rel="noreferrer">client/screen/screenText.ts:22</a></p><hr><h3 id="drawtextwithbackground" tabindex="-1">drawTextWithBackground <a class="header-anchor" href="#drawtextwithbackground" aria-label="Permalink to &quot;drawTextWithBackground&quot;">​</a></h3><p>▸ <strong>drawTextWithBackground</strong>(<code>text</code>, <code>x</code>, <code>y</code>, <code>scale</code>, <code>font</code>, <code>background</code>, <code>foreground</code>, <code>props</code>): <code>void</code></p><p>Draw text with a background and apply padding.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>ScreenText</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>font</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>background</code></td><td style="text-align:left;"><code>RGBA</code></td></tr><tr><td style="text-align:left;"><code>foreground</code></td><td style="text-align:left;"><code>RGBA</code></td></tr><tr><td style="text-align:left;"><code>props</code></td><td style="text-align:left;"><a href="./../interfaces/client_screen_screenText_TextProperties"><code>TextProperties</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/screenText.ts#L85" target="_blank" rel="noreferrer">client/screen/screenText.ts:85</a></p><hr><h3 id="getheight" tabindex="-1">getHeight <a class="header-anchor" href="#getheight" aria-label="Permalink to &quot;getHeight&quot;">​</a></h3><p>▸ <strong>getHeight</strong>(<code>scale</code>, <code>font</code>): <code>number</code></p><p>Get the height of text based on scale and font.</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>ScreenText</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>font</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/screenText.ts#L68" target="_blank" rel="noreferrer">client/screen/screenText.ts:68</a></p><hr><h3 id="getwidth" tabindex="-1">getWidth <a class="header-anchor" href="#getwidth" aria-label="Permalink to &quot;getWidth&quot;">​</a></h3><p>▸ <strong>getWidth</strong>(<code>text</code>, <code>font</code>, <code>scale</code>): <code>number</code></p><p>Get the float width of text. (0.1 - 1)</p><p><strong><code>Static</code></strong></p><p><strong><code>Memberof</code></strong></p><p>ScreenText</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>font</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>scale</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/screen/screenText.ts#L52" target="_blank" rel="noreferrer">client/screen/screenText.ts:52</a></p>',54);function f(t,g,p,x,u,b){return c(),r("div",null,[e("h1",s,[d(o(t.$frontmatter.title)+" ",1),i]),h])}const _=a(l,[["render",f]]);export{y as __pageData,_ as default};
