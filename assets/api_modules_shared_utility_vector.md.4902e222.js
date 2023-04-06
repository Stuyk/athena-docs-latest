import{_ as d,c as a,x as e,a as o,t as r,S as l,o as c}from"./chunks/framework.74a8bdba.js";const m=JSON.parse('{"title":"AthenaShared.utility.vector","description":"","frontmatter":{"title":"AthenaShared.utility.vector","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/shared_utility_vector.md","lastUpdated":null}'),s={name:"api/modules/shared_utility_vector.md"},i={id:"frontmatter-title",tabindex:"-1"},n=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>• <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>distance</code></td><td style="text-align:left;">(<code>vector1</code>: <code>IVector3</code>, <code>vector2</code>: <code>IVector3</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>distance2d</code></td><td style="text-align:left;">(<code>vector1</code>: <code>IVector2</code>, <code>vector2</code>: <code>IVector2</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>fwdX</code></td><td style="text-align:left;">(<code>x</code>: <code>number</code>, <code>z</code>: <code>number</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>fwdY</code></td><td style="text-align:left;">(<code>x</code>: <code>number</code>, <code>z</code>: <code>number</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>fwdZ</code></td><td style="text-align:left;">(<code>x</code>: <code>number</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>getClosestEntity</code></td><td style="text-align:left;">&lt;T&gt;(<code>playerPosition</code>: <code>IVector3</code>, <code>rot</code>: <code>IVector3</code>, <code>entities</code>: { <code>pos</code>: <code>IVector3</code> ; <code>valid?</code>: <code>boolean</code> }[], <code>dist</code>: <code>number</code>, <code>checkBackwards</code>: <code>boolean</code>) =&gt; <code>T</code> | <code>null</code></td></tr><tr><td style="text-align:left;"><code>getClosestOfType</code></td><td style="text-align:left;">&lt;T&gt;(<code>pos</code>: <code>IVector3</code>, <code>elements</code>: readonly <code>T</code> &amp; { <code>pos</code>: <code>IVector3</code> }[], <code>lastDistance</code>: <code>number</code>) =&gt; <code>T</code> | <code>undefined</code></td></tr><tr><td style="text-align:left;"><code>getClosestTypes</code></td><td style="text-align:left;">&lt;T&gt;(<code>pos</code>: <code>IVector3</code>, <code>elements</code>: <code>T</code>[], <code>maxDistance</code>: <code>number</code>, <code>mustHaveProperties</code>: <code>string</code>[], <code>positionName</code>: <code>string</code>) =&gt; <code>T</code>[]</td></tr><tr><td style="text-align:left;"><code>getClosestVector</code></td><td style="text-align:left;">(<code>pos</code>: <code>IVector3</code>, <code>arrayOfPositions</code>: <code>IVector3</code>[]) =&gt; <code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>getClosestVectorByPos</code></td><td style="text-align:left;">&lt;T&gt;(<code>pos</code>: <code>IVector3</code>, <code>arrayOfPositions</code>: <code>T</code>[], <code>posVariable?</code>: <code>string</code>) =&gt; <code>T</code></td></tr><tr><td style="text-align:left;"><code>getForwardVector</code></td><td style="text-align:left;">(<code>rot</code>: <code>IVector3</code>) =&gt; <code>alt.IVector3</code></td></tr><tr><td style="text-align:left;"><code>getVectorInFrontOfPlayer</code></td><td style="text-align:left;">(<code>entity</code>: { <code>pos</code>: <code>IVector3</code> ; <code>rot</code>: <code>IVector3</code> }, <code>distance</code>: <code>number</code>) =&gt; <code>alt.Vector3</code></td></tr><tr><td style="text-align:left;"><code>isBetweenVectors</code></td><td style="text-align:left;">(<code>pos</code>: <code>IVector3</code>, <code>vector1</code>: <code>IVector3</code>, <code>vector2</code>: <code>IVector3</code>) =&gt; <code>boolean</code></td></tr><tr><td style="text-align:left;"><code>lerp</code></td><td style="text-align:left;">(<code>a</code>: <code>number</code>, <code>b</code>: <code>number</code>, <code>t</code>: <code>number</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>vectorLerp</code></td><td style="text-align:left;">(<code>start</code>: <code>IVector3</code>, <code>end</code>: <code>IVector3</code>, <code>l</code>: <code>number</code>, <code>clamp</code>: <code>boolean</code>) =&gt; <code>alt.IVector3</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L315" target="_blank" rel="noreferrer">shared/utility/vector.ts:315</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="distance" tabindex="-1">distance <a class="header-anchor" href="#distance" aria-label="Permalink to &quot;distance&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>distance</strong>(<code>vector1</code>, <code>vector2</code>): <code>number</code></p></div><p>Get the distance between two positions.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector1</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>vector2</code></td><td style="text-align:left;"><code>IVector3</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L11" target="_blank" rel="noreferrer">shared/utility/vector.ts:11</a></p><hr><h3 id="distance2d" tabindex="-1">distance2d <a class="header-anchor" href="#distance2d" aria-label="Permalink to &quot;distance2d&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>distance2d</strong>(<code>vector1</code>, <code>vector2</code>): <code>number</code></p></div><p>Get the distance between two positions. Excludes z</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vector1</code></td><td style="text-align:left;"><code>IVector2</code></td></tr><tr><td style="text-align:left;"><code>vector2</code></td><td style="text-align:left;"><code>IVector2</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L29" target="_blank" rel="noreferrer">shared/utility/vector.ts:29</a></p><hr><h3 id="getclosestentity" tabindex="-1">getClosestEntity <a class="header-anchor" href="#getclosestentity" aria-label="Permalink to &quot;getClosestEntity&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getClosestEntity</strong>&lt;<code>T</code>&gt;(<code>playerPosition</code>, <code>rot</code>, <code>entities</code>, <code>dist</code>, <code>checkBackwards?</code>): <code>T</code> | <code>null</code></p></div><p>Get the closest server entity type. Server only.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>playerPosition</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>rot</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">player rotation</td></tr><tr><td style="text-align:left;"><code>entities</code></td><td style="text-align:left;">{ <code>pos</code>: <code>IVector3</code> ; <code>valid?</code>: <code>boolean</code> }[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>dist</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>checkBackwards</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> | <code>null</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L208" target="_blank" rel="noreferrer">shared/utility/vector.ts:208</a></p><hr><h3 id="getclosestoftype" tabindex="-1">getClosestOfType <a class="header-anchor" href="#getclosestoftype" aria-label="Permalink to &quot;getClosestOfType&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getClosestOfType</strong>&lt;<code>T</code>&gt;(<code>pos</code>, <code>elements</code>, <code>lastDistance?</code>): <code>T</code> | <code>undefined</code></p></div><p>Get the closest of a specific type of object with a <code>pos</code> property.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{ <code>pos</code>: <code>IVector3</code> }</td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>elements</code></td><td style="text-align:left;">readonly <code>T</code> &amp; { <code>pos</code>: <code>IVector3</code> }[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>lastDistance</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>100</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> | <code>undefined</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L297" target="_blank" rel="noreferrer">shared/utility/vector.ts:297</a></p><hr><h3 id="getclosesttypes" tabindex="-1">getClosestTypes <a class="header-anchor" href="#getclosesttypes" aria-label="Permalink to &quot;getClosestTypes&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getClosestTypes</strong>&lt;<code>T</code>&gt;(<code>pos</code>, <code>elements</code>, <code>maxDistance</code>, <code>mustHaveProperties?</code>, <code>positionName?</code>): <code>T</code>[]</p></div><p>Gets an array of the closest types.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>Object</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>elements</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>maxDistance</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>mustHaveProperties</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>positionName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;pos&#39;</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[]</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L80" target="_blank" rel="noreferrer">shared/utility/vector.ts:80</a></p><hr><h3 id="getclosestvector" tabindex="-1">getClosestVector <a class="header-anchor" href="#getclosestvector" aria-label="Permalink to &quot;getClosestVector&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getClosestVector</strong>(<code>pos</code>, <code>arrayOfPositions</code>): <code>IVector3</code></p></div><p>Get the closest vector given an array of positions.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>arrayOfPositions</code></td><td style="text-align:left;"><code>IVector3</code>[]</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>IVector3</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L45" target="_blank" rel="noreferrer">shared/utility/vector.ts:45</a></p><hr><h3 id="getclosestvectorbypos" tabindex="-1">getClosestVectorByPos <a class="header-anchor" href="#getclosestvectorbypos" aria-label="Permalink to &quot;getClosestVectorByPos&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getClosestVectorByPos</strong>&lt;<code>T</code>&gt;(<code>pos</code>, <code>arrayOfPositions</code>, <code>posVariable?</code>): <code>T</code></p></div><p>Get the closest Vector by position.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>arrayOfPositions</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>posVariable?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;pos&#39;</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L63" target="_blank" rel="noreferrer">shared/utility/vector.ts:63</a></p><hr><h3 id="getforwardvector" tabindex="-1">getForwardVector <a class="header-anchor" href="#getforwardvector" aria-label="Permalink to &quot;getForwardVector&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getForwardVector</strong>(<code>rot</code>): <code>alt.IVector3</code></p></div><p>SERVER ONLY Gets the direction the player is facing.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>rot</code></td><td style="text-align:left;"><code>IVector3</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.IVector3</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L156" target="_blank" rel="noreferrer">shared/utility/vector.ts:156</a></p><hr><h3 id="getvectorinfrontofplayer" tabindex="-1">getVectorInFrontOfPlayer <a class="header-anchor" href="#getvectorinfrontofplayer" aria-label="Permalink to &quot;getVectorInFrontOfPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>getVectorInFrontOfPlayer</strong>(<code>entity</code>, <code>distance</code>): <code>alt.Vector3</code></p></div><p>SERVER ONLY Return a position in front of a player based on distance.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>entity</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>entity.pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>entity.rot</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>distance</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.Vector3</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L172" target="_blank" rel="noreferrer">shared/utility/vector.ts:172</a></p><hr><h3 id="isbetweenvectors" tabindex="-1">isBetweenVectors <a class="header-anchor" href="#isbetweenvectors" aria-label="Permalink to &quot;isBetweenVectors&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>isBetweenVectors</strong>(<code>pos</code>, <code>vector1</code>, <code>vector2</code>): <code>boolean</code></p></div><p>Determine if a vector is between vectors.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;">A position in the world.</td></tr><tr><td style="text-align:left;"><code>vector1</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>vector2</code></td><td style="text-align:left;"><code>IVector3</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L193" target="_blank" rel="noreferrer">shared/utility/vector.ts:193</a></p><hr><h3 id="lerp" tabindex="-1">lerp <a class="header-anchor" href="#lerp" aria-label="Permalink to &quot;lerp&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>lerp</strong>(<code>a</code>, <code>b</code>, <code>t</code>): <code>number</code></p></div><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>t</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L118" target="_blank" rel="noreferrer">shared/utility/vector.ts:118</a></p><hr><h3 id="vectorlerp" tabindex="-1">vectorLerp <a class="header-anchor" href="#vectorlerp" aria-label="Permalink to &quot;vectorLerp&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.utility.vector.<strong>vectorLerp</strong>(<code>start</code>, <code>end</code>, <code>l</code>, <code>clamp</code>): <code>alt.IVector3</code></p></div><p>Finds a position between two vectors to ease into. Returns a new position.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>start</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>end</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>l</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>clamp</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>alt.IVector3</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/128b8a7/src/core/shared/utility/vector.ts#L133" target="_blank" rel="noreferrer">shared/utility/vector.ts:133</a></p>',134);function f(t,y,b,u,p,g){return c(),a("div",null,[e("h1",i,[o(r(t.$frontmatter.title)+" ",1),n]),h])}const v=d(s,[["render",f]]);export{m as __pageData,v as default};
