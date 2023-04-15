import{_ as e,c as a,o as t,V as r}from"./chunks/framework.be58fd72.js";const y=JSON.parse('{"title":"Athena.controllers.admin","description":"","frontmatter":{"title":"Athena.controllers.admin","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_controllers_admin.md","lastUpdated":null}'),o={name:"api/modules/server_controllers_admin.md"},l=r('<h1 id="athena-controllers-admin" tabindex="-1">Athena.controllers.admin <a class="header-anchor" href="#athena-controllers-admin" aria-label="Permalink to &quot;Athena.controllers.admin&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="banplayer" tabindex="-1">banPlayer <a class="header-anchor" href="#banplayer" aria-label="Permalink to &quot;banPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.admin.<strong>banPlayer</strong>(<code>player</code>, <code>reason</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Used to ban a player from the server.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">admin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">banPlayer</span><span style="color:#A6ACCD;">(player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">was a bad person :(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>reason</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/controllers/admin.ts#L21" target="_blank" rel="noreferrer">server/controllers/admin.ts:21</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.admin.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;banPlayer&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>reason</code>: <code>string</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/controllers/admin.ts#L78" target="_blank" rel="noreferrer">server/controllers/admin.ts:78</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.admin.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;unbanPlayerByDiscord&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>discord</code>: <code>string</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/controllers/admin.ts#L79" target="_blank" rel="noreferrer">server/controllers/admin.ts:79</a></p><hr><h3 id="unbanplayerbydiscord" tabindex="-1">unbanPlayerByDiscord <a class="header-anchor" href="#unbanplayerbydiscord" aria-label="Permalink to &quot;unbanPlayerByDiscord&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.admin.<strong>unbanPlayerByDiscord</strong>(<code>discord</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Used to unban a player from the server.</p><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">admin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unbanPlayerByDiscord</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">202685967935471617</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>discord</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/server/controllers/admin.ts#L52" target="_blank" rel="noreferrer">server/controllers/admin.ts:52</a></p>',41),n=[l];function s(d,c,i,h,p,b){return t(),a("div",null,n)}const u=e(o,[["render",s]]);export{y as __pageData,u as default};
