import{_ as a,c as n,a as s,b as t,t as l,d as o,o as r}from"./app.579dd51f.js";const f=JSON.parse('{"title":".identifier","description":"","frontmatter":{"title":".identifier","order":-99},"headers":[{"level":2,"title":"setIdentificationStrategy","slug":"setidentificationstrategy","link":"#setidentificationstrategy","children":[]},{"level":2,"title":"setPlayerIdentifier","slug":"setplayeridentifier","link":"#setplayeridentifier","children":[]},{"level":2,"title":"getPlayer","slug":"getplayer","link":"#getplayer","children":[]},{"level":2,"title":"getIdByStrategy","slug":"getidbystrategy","link":"#getidbystrategy","children":[]},{"level":2,"title":"override","slug":"override","link":"#override","children":[]}],"relativePath":"api-server/systems/identifier.md"}'),p={name:"api-server/systems/identifier.md"},i={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=o(`<p>A system used as a way to obtain a player by an id in-game.</p><h2 id="setidentificationstrategy" tabindex="-1">setIdentificationStrategy <a class="header-anchor" href="#setidentificationstrategy" aria-hidden="true">#</a></h2><p>Used to set a specific strategy for the identification system.</p><ul><li>account_id -&gt; The account identifier associated with a player&#39;s account.</li><li>character_id -&gt; The character identifier associated with the character the player is currently playing.</li><li>server_id -&gt; The native alt:V identification system.</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setIdentificationStrategy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">server_id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="setplayeridentifier" tabindex="-1">setPlayerIdentifier <a class="header-anchor" href="#setplayeridentifier" aria-hidden="true">#</a></h2><p>Automatically sets the player identification by strategy to the synced meta.</p><p>This ID can be obtained through syncedMeta by doing <code>player.getSyncedMeta(PLAYER_SYNCED_META.IDENTIFICATION_ID)</code>.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPlayerIdentifier</span><span style="color:#A6ACCD;">(player)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><em>In most cases you will never need to use this function.</em></p><h2 id="getplayer" tabindex="-1">getPlayer <a class="header-anchor" href="#getplayer" aria-hidden="true">#</a></h2><p>Returns a player based on a number, or string identifier passed to the function.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> somePlayer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPlayer</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">somePlayer </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">somePlayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">valid) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">player not found...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="getidbystrategy" tabindex="-1">getIdByStrategy <a class="header-anchor" href="#getidbystrategy" aria-hidden="true">#</a></h2><p>Returns a numerical identifier associated with the current strategy.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getIdByStrategy</span><span style="color:#A6ACCD;">(somePlayer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Idnetifier is: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">someID</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-hidden="true">#</a></h2><p>Lets you override any other function above. Requires the same arguments, and return type.</p><p><em>No example provided as it&#39;s out of scope for this documentation.</em></p>`,19);function d(e,D,F,A,h,C){return r(),n("div",null,[s("h1",i,[t(l(e.$frontmatter.title)+" ",1),c]),y])}const u=a(p,[["render",d]]);export{f as __pageData,u as default};
