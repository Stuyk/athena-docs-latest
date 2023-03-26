import{_ as a,c as r,x as e,a as o,t as s,S as n,o as i}from"./chunks/framework.175b5f45.js";const q=JSON.parse('{"title":"Athena.extensions.extColshape.GarageSpaceShape","description":"","frontmatter":{"title":"Athena.extensions.extColshape.GarageSpaceShape","outline":[1,3],"order":0},"headers":[],"relativePath":"api/classes/server_extensions_extColshape_GarageSpaceShape.md","lastUpdated":null}'),d={name:"api/classes/server_extensions_extColshape_GarageSpaceShape.md"},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),c=n('<p><a href="./../modules/server_extensions_extColshape">server/extensions/extColshape</a>.GarageSpaceShape</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./../modules/server_config#player"><code>player</code></a></p><p>↳ <strong><code>GarageSpaceShape</code></strong></p></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new GarageSpaceShape</strong>(<code>position</code>, <code>rotation</code>, <code>radius</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>position</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>rotation</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>radius</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>alt.ColshapeSphere.constructor</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L38" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:38</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="isgarage" tabindex="-1">isGarage <a class="header-anchor" href="#isgarage" aria-label="Permalink to &quot;isGarage&quot;">​</a></h3><p>• <strong>isGarage</strong>: <code>boolean</code> = <code>true</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L36" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:36</a></p><hr><h3 id="isopen" tabindex="-1">isOpen <a class="header-anchor" href="#isopen" aria-label="Permalink to &quot;isOpen&quot;">​</a></h3><p>• <code>Private</code> <strong>isOpen</strong>: <code>boolean</code> = <code>true</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L35" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:35</a></p><hr><h3 id="rotation" tabindex="-1">rotation <a class="header-anchor" href="#rotation" aria-label="Permalink to &quot;rotation&quot;">​</a></h3><p>• <code>Private</code> <strong>rotation</strong>: <code>IVector3</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L34" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:34</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getpositionandrotation" tabindex="-1">getPositionAndRotation <a class="header-anchor" href="#getpositionandrotation" aria-label="Permalink to &quot;getPositionAndRotation&quot;">​</a></h3><p>▸ <strong>getPositionAndRotation</strong>(): <code>Object</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>position</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>rotation</code></td><td style="text-align:left;"><code>IVector3</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L47" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:47</a></p><hr><h3 id="getspacestatus" tabindex="-1">getSpaceStatus <a class="header-anchor" href="#getspacestatus" aria-label="Permalink to &quot;getSpaceStatus&quot;">​</a></h3><p>▸ <strong>getSpaceStatus</strong>(): <code>boolean</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L51" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:51</a></p><hr><h3 id="setspacestatus" tabindex="-1">setSpaceStatus <a class="header-anchor" href="#setspacestatus" aria-label="Permalink to &quot;setSpaceStatus&quot;">​</a></h3><p>▸ <strong>setSpaceStatus</strong>(<code>value</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/extensions/extColshape.ts#L43" target="_blank" rel="noreferrer">server/extensions/extColshape.ts:43</a></p>',51);function p(t,u,b,f,x,g){return i(),r("div",null,[e("h1",l,[o(s(t.$frontmatter.title)+" ",1),h]),c])}const _=a(d,[["render",p]]);export{q as __pageData,_ as default};
