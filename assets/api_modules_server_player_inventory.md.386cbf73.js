import{_ as a,c as o,x as e,a as s,t as l,S as n,o as r}from"./chunks/framework.175b5f45.js";const g=JSON.parse('{"title":"Athena.player.inventory","description":"","frontmatter":{"title":"Athena.player.inventory","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_player_inventory.md","lastUpdated":null}'),d={name:"api/modules/server_player_inventory.md"},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=n(`<h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./server_player_inventory_Internal">Internal</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>add</strong>(<code>player</code>, <code>item</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Add a new stored item to a user, must specify a quantity of greater than zero.</p><p>Automatically checks weight upon new item additions. Exceeding the weight; cancels the add.</p><p>Does not look into toolbar.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didAdd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">dbName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">burger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>item</code></td><td style="text-align:left;"><a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<code>StoredItem</code>, <code>&quot;slot&quot;</code>&gt;</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L24" target="_blank" rel="noreferrer">server/player/inventory.ts:24</a></p><hr><h3 id="getat" tabindex="-1">getAt <a class="header-anchor" href="#getat" aria-label="Permalink to &quot;getAt&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>getAt</strong>&lt;<code>CustomData</code>&gt;(<code>player</code>, <code>slot</code>): <a href="./server_config#player"><code>player</code></a> | <code>undefined</code></p></div><p>Returns an item from a specific slot.</p><p>This item is cloned, and not attached to the inventory.</p><p>Never modify the item directly; this is only to get item information.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAt</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">myCustomStuff</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someSlot)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Export</code></strong></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./server_config#player"><code>player</code></a> | <code>undefined</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L219" target="_blank" rel="noreferrer">server/player/inventory.ts:219</a></p><hr><h3 id="getitemdata" tabindex="-1">getItemData <a class="header-anchor" href="#getitemdata" aria-label="Permalink to &quot;getItemData&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>getItemData</strong>&lt;<code>CustomData</code>&gt;(<code>player</code>, <code>slot</code>): <code>CustomData</code> | <code>undefined</code></p></div><p>Returns the custom item data assigned to a specific item.</p><p>Will return undefined if the custom data is not available.</p><p>Only checks the inventory.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItemData</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">myCustomStuff</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someSlot)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Export</code></strong></p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>CustomData</code> | <code>undefined</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L178" target="_blank" rel="noreferrer">server/player/inventory.ts:178</a></p><hr><h3 id="has" tabindex="-1">has <a class="header-anchor" href="#has" aria-label="Permalink to &quot;has&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>has</strong>(<code>player</code>, <code>dbName</code>, <code>quantity</code>, <code>version?</code>): <code>any</code></p></div><p>Verify that the player has at least &#39;x&#39; of an item in their inventory</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hasItem </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">burger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>dbName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>quantity</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>version</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L143" target="_blank" rel="noreferrer">server/player/inventory.ts:143</a></p><hr><h3 id="modifyitemdata" tabindex="-1">modifyItemData <a class="header-anchor" href="#modifyitemdata" aria-label="Permalink to &quot;modifyItemData&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>modifyItemData</strong>&lt;<code>CustomData</code>&gt;(<code>player</code>, <code>slot</code>, <code>customData</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Find an item at a specific slot, and changes its entire custom data section.</p><p>Think of this like an easy to use &#39;setter&#39; for item data.</p><p>Only checks the inventory.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItemData</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">myCustomStuff</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someSlot)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">someData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myCustomStuff </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">modifyItemData</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> someData</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someSlot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someData)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Export</code></strong></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>customData</code></td><td style="text-align:left;"><code>CustomData</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L264" target="_blank" rel="noreferrer">server/player/inventory.ts:264</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;add&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>item</code>: <a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<code>StoredItem</code>, <code>&quot;slot&quot;</code>&gt;) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L305" target="_blank" rel="noreferrer">server/player/inventory.ts:305</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getAt&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomData&gt;(<code>player</code>: <code>Player</code>, <code>slot</code>: <code>number</code>) =&gt; <a href="./server_config#player"><code>player</code></a> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L306" target="_blank" rel="noreferrer">server/player/inventory.ts:306</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;has&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>dbName</code>: <code>string</code>, <code>quantity</code>: <code>number</code>, <code>version</code>: <code>any</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L307" target="_blank" rel="noreferrer">server/player/inventory.ts:307</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;sub&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>item</code>: <a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<code>StoredItem</code>, <code>&quot;slot&quot;</code> | <code>&quot;data&quot;</code>&gt;) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L308" target="_blank" rel="noreferrer">server/player/inventory.ts:308</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>slot</code>: <code>number</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L309" target="_blank" rel="noreferrer">server/player/inventory.ts:309</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;modifyItemData&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomData&gt;(<code>player</code>: <code>Player</code>, <code>slot</code>: <code>number</code>, <code>customData</code>: <code>CustomData</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L310" target="_blank" rel="noreferrer">server/player/inventory.ts:310</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal inventory functions</p><p><strong><code>Export</code></strong></p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getItemData&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomData&gt;(<code>player</code>: <code>Player</code>, <code>slot</code>: <code>number</code>) =&gt; <code>CustomData</code> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L311" target="_blank" rel="noreferrer">server/player/inventory.ts:311</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>remove</strong>(<code>player</code>, <code>slot</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Delete an item in a specific slot in an inventory data set.</p><p>Does not look into toolbar.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didRemove </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someSlot)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>slot</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L107" target="_blank" rel="noreferrer">server/player/inventory.ts:107</a></p><hr><h3 id="sub" tabindex="-1">sub <a class="header-anchor" href="#sub" aria-label="Permalink to &quot;sub&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.player.inventory.<strong>sub</strong>(<code>player</code>, <code>item</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Subtract a quantity of an item from a player&#39;s inventory. Does not look into toolbar.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didRemove </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">dbName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">burger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>item</code></td><td style="text-align:left;"><a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<code>StoredItem</code>, <code>&quot;slot&quot;</code> | <code>&quot;data&quot;</code>&gt;</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/player/inventory.ts#L70" target="_blank" rel="noreferrer">server/player/inventory.ts:70</a></p>`,170);function y(t,h,u,f,m,b){return r(),o("div",null,[e("h1",c,[s(l(t.$frontmatter.title)+" ",1),p]),i])}const A=a(d,[["render",y]]);export{g as __pageData,A as default};
