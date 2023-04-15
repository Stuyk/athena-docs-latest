import{_ as e,c as t,o as a,V as s}from"./chunks/framework.be58fd72.js";const y=JSON.parse('{"title":"Athena.systems.messenger.messaging","description":"","frontmatter":{"title":"Athena.systems.messenger.messaging","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_messenger_messaging.md","lastUpdated":null}'),r={name:"api/modules/server_systems_messenger_messaging.md"},d=s('<h1 id="athena-systems-messenger-messaging" tabindex="-1">Athena.systems.messenger.messaging <a class="header-anchor" href="#athena-systems-messenger-messaging" aria-label="Permalink to &quot;Athena.systems.messenger.messaging&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="messagecallback" tabindex="-1">MessageCallback <a class="header-anchor" href="#messagecallback" aria-label="Permalink to &quot;MessageCallback&quot;">​</a></h3><p>Ƭ <strong>MessageCallback</strong>: (<code>player</code>: <code>alt.Player</code>, <code>msg</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.(<code>player</code>, <code>msg</code>): <code>void</code></p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>alt.Player</code></td></tr><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L8" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:8</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>• <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addCallback</code></td><td style="text-align:left;">(<code>callback</code>: <a href="./server_systems_messenger_messaging#MessageCallback"><code>MessageCallback</code></a>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>cleanMessage</code></td><td style="text-align:left;">(<code>msg</code>: <code>string</code>) =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>emit</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>send</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>sendToPlayers</code></td><td style="text-align:left;">(<code>players</code>: <code>Player</code>[], <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L134" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:134</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addcallback" tabindex="-1">addCallback <a class="header-anchor" href="#addcallback" aria-label="Permalink to &quot;addCallback&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>addCallback</strong>(<code>callback</code>): <code>any</code></p></div><p>Register a callback that handles messages. The messages from other clients, and Athena itself will be pushed through all callbacks registered. Useful for plugin creators.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./server_systems_messenger_messaging#MessageCallback"><code>MessageCallback</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L83" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:83</a></p><hr><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>emit</strong>(<code>player</code>, <code>msg</code>): <code>any</code></p></div><p>Emits a message to all callbacks.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L96" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:96</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override messaging functionality</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;addCallback&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>callback</code>: <a href="./server_systems_messenger_messaging#MessageCallback"><code>MessageCallback</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L146" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:146</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override messaging functionality</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;cleanMessage&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>msg</code>: <code>string</code>) =&gt; <code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L147" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:147</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override messaging functionality</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;emit&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L148" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:148</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override messaging functionality</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;send&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L149" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:149</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override messaging functionality</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;sendToPlayers&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>players</code>: <code>Player</code>[], <code>msg</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L150" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:150</a></p><hr><h3 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>send</strong>(<code>player</code>, <code>msg</code>): <code>any</code></p></div><p>Send a message to an individual player.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L54" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:54</a></p><hr><h3 id="sendtoplayers" tabindex="-1">sendToPlayers <a class="header-anchor" href="#sendtoplayers" aria-label="Permalink to &quot;sendToPlayers&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.messaging.<strong>sendToPlayers</strong>(<code>players</code>, <code>msg</code>): <code>any</code></p></div><p>Send a message to a group of players.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>players</code></td><td style="text-align:left;"><code>Player</code>[]</td></tr><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/systems/messenger/messaging.ts#L68" target="_blank" rel="noreferrer">server/systems/messenger/messaging.ts:68</a></p>',101),l=[d];function o(n,i,c,h,g,m){return a(),t("div",null,l)}const f=e(r,[["render",o]]);export{y as __pageData,f as default};
