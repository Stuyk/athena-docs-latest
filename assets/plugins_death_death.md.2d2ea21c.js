import{_ as t,c as s,a as e,b as n,t as l,d as i,o as r}from"./app.579dd51f.js";const A=JSON.parse('{"title":"Death","description":"","frontmatter":{"title":"Death","order":-99},"headers":[{"level":3,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]}],"relativePath":"plugins/death/death.md"}'),o={name:"plugins/death/death.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(`<h3 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-hidden="true">#</a></h3><p>The death plugin simply allows the player to choose when they want to revive. It&#39;s simply command based, and will prompt the user to type the command once a re-spawn timer is exhausted.</p><p>\u{1F4C1} <code>src/core/plugins/core-death/</code></p><p>Current Features</p><ul><li>Respawn at Hospital</li><li>Ragdoll on Death</li><li>Command to Invoke re-spawn after Timer</li><li>A very simple death screen</li></ul><p><img src="https://gfycat.com/lividdetailedkomododragon" alt=""></p><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h3><p>The default death configuration can be found here:</p><p>\u{1F4C1} <code>src/core/plugins/core-death/server/src/config.ts</code></p><ul><li>RESPAWN_TIME <ul><li>Time in milliseconds before a player my type <code>/acceptdeath</code>.</li></ul></li><li>LOSE_ALL_WEAPONS_ON_RESPAWN <ul><li>Self explanatory.</li></ul></li><li>RESPAWN_HEALTH <ul><li>The health to give the player when they respawn. <code>100-199</code>.</li></ul></li><li>RESPAWN_ARMOUR <ul><li>The armour to give the player when they respawn.</li></ul></li><li>HOSPITALS <ul><li>An array of Vector3 positions where they can respawn.</li></ul></li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>When a player dies it triggers the dead state.</p><p>The death state also invokes a meta change client-side and on server-side.</p><p>After the change is invoked. A timer is started and updated frequently until the player&#39;s timer hits zero. After zero a player may type <code>/accpetdeath</code> to fully revive at a hospital.</p><p>A hospital is determined by closest to the dead player.</p><h4 id="server" tabindex="-1">Server <a class="header-anchor" href="#server" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">player.data.isDead</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">alt.Player.local.meta.isDead</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><h4 id="revive" tabindex="-1">revive <a class="header-anchor" href="#revive" aria-hidden="true">#</a></h4><p>An administrative command to revive a player.</p><p>If an id is <strong>not defined</strong> it will revive self.</p><p><strong>Usage</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/revive [ingame_player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="acceptdeath" tabindex="-1">acceptdeath <a class="header-anchor" href="#acceptdeath" aria-hidden="true">#</a></h4><p>A player command that will allow a player to re-spawn after some time.</p><p>Alternative: <code>/respawn</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/acceptdeath</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,29);function h(a,u,m,g,y,v){return r(),s("div",null,[e("h1",d,[n(l(a.$frontmatter.title)+" ",1),c]),p])}const _=t(o,[["render",h]]);export{A as __pageData,_ as default};
