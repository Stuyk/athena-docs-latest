import{_ as a,c as r,x as e,a as d,t as o,S as l,o as n}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.document.accountData","description":"","frontmatter":{"title":"Athena.document.accountData","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_document_accountData.md","lastUpdated":1679789238000}'),c={name:"api/modules/server_document_accountData.md"},i={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="keychangecallback" tabindex="-1">KeyChangeCallback <a class="header-anchor" href="#keychangecallback" aria-label="Permalink to &quot;KeyChangeCallback&quot;">​</a></h3><p>Ƭ <strong>KeyChangeCallback</strong>: (<code>player</code>: <code>alt.Player</code>, <code>newValue</code>: <code>any</code>, <code>oldValue</code>: <code>any</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>player</code>, <code>newValue</code>, <code>oldValue</code>): <code>void</code></p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>alt.Player</code></td></tr><tr><td style="text-align:left;"><code>newValue</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>oldValue</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L8" target="_blank" rel="noreferrer">server/document/accountData.ts:8</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="bind" tabindex="-1">bind <a class="header-anchor" href="#bind" aria-label="Permalink to &quot;bind&quot;">​</a></h3><p>▸ <strong>bind</strong>(<code>player</code>, <code>document</code>): <code>any</code></p><p>Binds a player identifier to a Account document. This document is cleared on disconnected automatically. This should be the first thing you do after having a user authenticate.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><code>Account</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L22" target="_blank" rel="noreferrer">server/document/accountData.ts:22</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>&lt;<code>T</code>&gt;(<code>player</code>): <code>T</code> | <code>undefined</code></p><p>Return current player data and their associated account object.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>Account</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> | <code>undefined</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L59" target="_blank" rel="noreferrer">server/document/accountData.ts:59</a></p><hr><h3 id="getfield" tabindex="-1">getField <a class="header-anchor" href="#getfield" aria-label="Permalink to &quot;getField&quot;">​</a></h3><p>▸ <strong>getField</strong>&lt;<code>T</code>, <code>ReturnType</code>&gt;(<code>player</code>, <code>fieldName</code>): <code>ReturnType</code> | <code>undefined</code></p><p>Get the current value of a specific field inside of the player data object. Can be extended to obtain any value easily.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>ReturnType</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>fieldName</code></td><td style="text-align:left;"><code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>ReturnType</code> | <code>undefined</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L76" target="_blank" rel="noreferrer">server/document/accountData.ts:76</a></p><hr><h3 id="onchange" tabindex="-1">onChange <a class="header-anchor" href="#onchange" aria-label="Permalink to &quot;onChange&quot;">​</a></h3><p>▸ <strong>onChange</strong>&lt;<code>T</code>&gt;(<code>fieldName</code>, <code>callback</code>): <code>any</code></p><p>Listen for individual player document changes.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fieldName</code></td><td style="text-align:left;"><code>string</code> | <code>number</code> | <code>symbol</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./server_document_accountData#KeyChangeCallback"><code>KeyChangeCallback</code></a></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L182" target="_blank" rel="noreferrer">server/document/accountData.ts:182</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;bind&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>document</code>: <code>Account</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L216" target="_blank" rel="noreferrer">server/document/accountData.ts:216</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;unbind&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>id</code>: <code>number</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L217" target="_blank" rel="noreferrer">server/document/accountData.ts:217</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;get&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;T&gt;(<code>player</code>: <code>Player</code>) =&gt; <code>T</code> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L218" target="_blank" rel="noreferrer">server/document/accountData.ts:218</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getField&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;T, ReturnType&gt;(<code>player</code>: <code>Player</code>, <code>fieldName</code>: <code>string</code> | <code>number</code> | <code>symbol</code>) =&gt; <code>ReturnType</code> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L219" target="_blank" rel="noreferrer">server/document/accountData.ts:219</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;set&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;T, Keys&gt;(<code>player</code>: <code>Player</code>, <code>fieldName</code>: <code>Keys</code>, <code>value</code>: <code>any</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L220" target="_blank" rel="noreferrer">server/document/accountData.ts:220</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;setBulk&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;T, Keys&gt;(<code>player</code>: <code>Player</code>, <code>fields</code>: <code>Keys</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L221" target="_blank" rel="noreferrer">server/document/accountData.ts:221</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override any account data document functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;onChange&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">&lt;T&gt;(<code>fieldName</code>: <code>string</code> | <code>number</code> | <code>symbol</code>, <code>callback</code>: <a href="./server_document_accountData#KeyChangeCallback"><code>KeyChangeCallback</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L222" target="_blank" rel="noreferrer">server/document/accountData.ts:222</a></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>&lt;<code>T</code>, <code>Keys</code>&gt;(<code>player</code>, <code>fieldName</code>, <code>value</code>): <code>any</code></p><p>Sets a player document value, and saves it automatically to the selected account database. Automatically calls all callbacks associated with the field name.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>Keys</code></td><td style="text-align:left;"><code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>fieldName</code></td><td style="text-align:left;"><code>Keys</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L101" target="_blank" rel="noreferrer">server/document/accountData.ts:101</a></p><hr><h3 id="setbulk" tabindex="-1">setBulk <a class="header-anchor" href="#setbulk" aria-label="Permalink to &quot;setBulk&quot;">​</a></h3><p>▸ <strong>setBulk</strong>&lt;<code>T</code>, <code>Keys</code>&gt;(<code>player</code>, <code>fields</code>): <code>any</code></p><p>Sets player document values, and saves it automatically to the selected Account&#39;s database. Automatically calls all callbacks associated with the field name.</p><h4 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>Keys</code></td><td style="text-align:left;"><a href="./server_controllers_textlabel_Internal#Partial"><code>Partial</code></a>&lt;<code>any</code>&gt;</td></tr></tbody></table><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>fields</code></td><td style="text-align:left;"><code>Keys</code></td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L150" target="_blank" rel="noreferrer">server/document/accountData.ts:150</a></p><hr><h3 id="unbind" tabindex="-1">unbind <a class="header-anchor" href="#unbind" aria-label="Permalink to &quot;unbind&quot;">​</a></h3><p>▸ <strong>unbind</strong>(<code>id</code>): <code>any</code></p><p>Unbind stored player character cache data.</p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/document/accountData.ts#L44" target="_blank" rel="noreferrer">server/document/accountData.ts:44</a></p>',156);function u(t,y,f,b,p,m){return n(),r("div",null,[e("h1",i,[d(o(t.$frontmatter.title)+" ",1),s]),h])}const q=a(c,[["render",u]]);export{x as __pageData,q as default};
