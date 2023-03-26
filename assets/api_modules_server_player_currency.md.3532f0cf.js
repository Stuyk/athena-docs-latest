import{_ as a,c as r,x as e,a as o,t as l,S as n,o as s}from"./chunks/framework.175b5f45.js";const C=JSON.parse('{"title":"Athena.player.currency","description":"","frontmatter":{"title":"Athena.player.currency","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_player_currency.md","lastUpdated":1679789238000}'),c={name:"api/modules/server_player_currency.md"},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=n(`<h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="defaultcurrency" tabindex="-1">DefaultCurrency <a class="header-anchor" href="#defaultcurrency" aria-label="Permalink to &quot;DefaultCurrency&quot;">​</a></h3><p>Ƭ <strong>DefaultCurrency</strong>: <code>&quot;bank&quot;</code> | <code>&quot;cash&quot;</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L5" target="_blank" rel="noreferrer">server/player/currency.ts:5</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>&lt;<code>CustomCurrency</code>&gt;(<code>player</code>, <code>type</code>, <code>amount</code>): <code>boolean</code></p><p>Add currency type to the player.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didAddFullAmount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currency</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Memberof</code></strong></p><p>Currency</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomCurrency</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>CustomCurrency</code> | <a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a></td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L20" target="_blank" rel="noreferrer">server/player/currency.ts:20</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any internal currency functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;add&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomCurrency&gt;(<code>player</code>: <code>Player</code>, <code>type</code>: <code>CustomCurrency</code> | <a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a>, <code>amount</code>: <code>number</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L202" target="_blank" rel="noreferrer">server/player/currency.ts:202</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any internal currency functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;set&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomCurrency&gt;(<code>player</code>: <code>Player</code>, <code>type</code>: <a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a> | <code>CustomCurrency</code>, <code>amount</code>: <code>number</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L203" target="_blank" rel="noreferrer">server/player/currency.ts:203</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any internal currency functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;sub&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;CustomCurrency&gt;(<code>player</code>: <code>Player</code>, <code>type</code>: <a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a> | <code>CustomCurrency</code>, <code>amount</code>: <code>number</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L204" target="_blank" rel="noreferrer">server/player/currency.ts:204</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any internal currency functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;subAllCurrencies&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>amount</code>: <code>number</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L205" target="_blank" rel="noreferrer">server/player/currency.ts:205</a></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>&lt;<code>CustomCurrency</code>&gt;(<code>player</code>, <code>type</code>, <code>amount</code>): <code>boolean</code></p><p>Replace the current currency type value with this exact value.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didSetFullAmount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currency</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code>Memberof</code></strong></p><p>CurrencyPrototype</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomCurrency</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a> | <code>CustomCurrency</code></td><td style="text-align:left;">Type of currency we are modifying.</td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The amount we want to set that type to.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L117" target="_blank" rel="noreferrer">server/player/currency.ts:117</a></p><hr><h3 id="sub" tabindex="-1">sub <a class="header-anchor" href="#sub" aria-label="Permalink to &quot;sub&quot;">​</a></h3><p>▸ <strong>sub</strong>&lt;<code>CustomCurrency</code>&gt;(<code>player</code>, <code>type</code>, <code>amount</code>): <code>boolean</code></p><p>Remove currency type from the player.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didSubFullAmount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currency</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CustomCurrency</code></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./server_player_currency#DefaultCurrency"><code>DefaultCurrency</code></a> | <code>CustomCurrency</code></td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L68" target="_blank" rel="noreferrer">server/player/currency.ts:68</a></p><hr><h3 id="suballcurrencies" tabindex="-1">subAllCurrencies <a class="header-anchor" href="#suballcurrencies" aria-label="Permalink to &quot;subAllCurrencies&quot;">​</a></h3><p>▸ <strong>subAllCurrencies</strong>(<code>player</code>, <code>amount</code>): <code>boolean</code></p><p>Only subtracts &#39;bank&#39; and &#39;cash&#39; currency types. Always takes from cash first.</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> didRemoveFullAmount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currency</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subAllCurrencies</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/currency.ts#L153" target="_blank" rel="noreferrer">server/player/currency.ts:153</a></p>`,101);function y(t,u,h,b,f,m){return s(),r("div",null,[e("h1",d,[o(l(t.$frontmatter.title)+" ",1),p]),i])}const D=a(c,[["render",y]]);export{C as __pageData,D as default};
