import{_ as a,c as r,x as e,a as d,t as o,S as s,o as l}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.systems.messenger.commands","description":"","frontmatter":{"title":"Athena.systems.messenger.commands","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_messenger_commands.md","lastUpdated":null}'),n={name:"api/modules/server_systems_messenger_commands.md"},c={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=s('<h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>• <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>execute</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>commandName</code>: <code>string</code>, <code>args</code>: <code>any</code>[]) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>get</code></td><td style="text-align:left;">(<code>commandName</code>: <code>string</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>getCommands</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <a href="./server_config#player"><code>player</code></a>[]</td></tr><tr><td style="text-align:left;"><code>populateCommands</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>register</code></td><td style="text-align:left;">(<code>name</code>: <code>string</code>, <code>desc</code>: <code>string</code>, <code>perms</code>: <code>string</code>[], <code>callback</code>: <code>CommandCallback</code>&lt;<code>Player</code>&gt;, <code>isCharacterPermission</code>: <code>boolean</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L168" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:168</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="execute" tabindex="-1">execute <a class="header-anchor" href="#execute" aria-label="Permalink to &quot;execute&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>execute</strong>(<code>player</code>, <code>commandName</code>, <code>args</code>): <code>any</code></p></div><p>Used to execute a command by name.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>commandName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L19" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:19</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>get</strong>(<code>commandName</code>): <code>any</code></p></div><p>Get command information by command name.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>commandName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L46" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:46</a></p><hr><h3 id="getcommands" tabindex="-1">getCommands <a class="header-anchor" href="#getcommands" aria-label="Permalink to &quot;getCommands&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>getCommands</strong>(<code>player</code>): <a href="./server_config#player"><code>player</code></a>[]</p></div><p>Get all commands the player has access to. Includes names of individual parameters for each callback function as well. Excludes callbacks.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./server_config#player"><code>player</code></a>[]</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L127" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:127</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override command functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;execute&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>commandName</code>: <code>string</code>, <code>args</code>: <code>any</code>[]) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L180" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:180</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override command functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;get&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>commandName</code>: <code>string</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L181" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:181</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override command functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getCommands&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <a href="./server_config#player"><code>player</code></a>[]</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L182" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:182</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override command functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;populateCommands&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L183" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:183</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override command functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;register&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>name</code>: <code>string</code>, <code>desc</code>: <code>string</code>, <code>perms</code>: <code>string</code>[], <code>callback</code>: <code>CommandCallback</code>&lt;<code>Player</code>&gt;, <code>isCharacterPermission</code>: <code>boolean</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L184" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:184</a></p><hr><h3 id="populatecommands" tabindex="-1">populateCommands <a class="header-anchor" href="#populatecommands" aria-label="Permalink to &quot;populateCommands&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>populateCommands</strong>(<code>player</code>): <code>any</code></p></div><p>Get all commands that are associated with a player&#39;s current permission level.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L86" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:86</a></p><hr><h3 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;register&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.messenger.commands.<strong>register</strong>(<code>name</code>, <code>desc</code>, <code>perms</code>, <code>callback</code>, <code>isCharacterPermission?</code>): <code>any</code></p></div><p>Register a new command that can be called.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>desc</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>perms</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>CommandCallback</code>&lt;<code>Player</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>isCharacterPermission</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/messenger/commands.ts#L59" target="_blank" rel="noreferrer">server/systems/messenger/commands.ts:59</a></p>',105);function h(t,f,g,y,p,b){return l(),r("div",null,[e("h1",c,[d(o(t.$frontmatter.title)+" ",1),i]),m])}const k=a(n,[["render",h]]);export{x as __pageData,k as default};
