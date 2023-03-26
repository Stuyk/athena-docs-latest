import{_ as a,c as r,x as e,a as n,t as o,S as l,o as i}from"./chunks/framework.175b5f45.js";const _=JSON.parse('{"title":"AthenaClient.menus.player","description":"","frontmatter":{"title":"AthenaClient.menus.player","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_menus_player.md","lastUpdated":null}'),d={name:"api/modules/client_menus_player.md"},s={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="playermenuinjection" tabindex="-1">PlayerMenuInjection <a class="header-anchor" href="#playermenuinjection" aria-label="Permalink to &quot;PlayerMenuInjection&quot;">​</a></h3><p>Ƭ <strong>PlayerMenuInjection</strong>: (<code>target</code>: <code>alt.Player</code>, <code>options</code>: <a href="./server_config#player"><code>player</code></a>[]) =&gt; <a href="./server_config#player"><code>player</code></a>[]</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.player.(<code>target</code>, <code>options</code>): <a href="./server_config#player"><code>player</code></a>[]</p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>alt.Player</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./server_config#player"><code>player</code></a>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./server_config#player"><code>player</code></a>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/menus/player.ts#L5" target="_blank" rel="noreferrer">client/menus/player.ts:5</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addinjection" tabindex="-1">addInjection <a class="header-anchor" href="#addinjection" aria-label="Permalink to &quot;addInjection&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.player.<strong>addInjection</strong>(<code>callback</code>): <code>void</code></p></div><p>Allows the current Menu Options to be modified. Meaning, a callback that will modify existing options, or append new options to the menu. Must always return the original wheel menu options + your changes.</p><p><strong><code>Memberof</code></strong></p><p>PlayerWheelMenu</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_menus_player#PlayerMenuInjection"><code>PlayerMenuInjection</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/menus/player.ts#L17" target="_blank" rel="noreferrer">client/menus/player.ts:17</a></p><hr><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.menus.player.<strong>open</strong>(<code>target</code>): <code>void</code></p></div><p>Opens the wheel menu against a target player.</p><p><strong><code>Memberof</code></strong></p><p>PlayerWheelMenu</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>Player</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/menus/player.ts#L28" target="_blank" rel="noreferrer">client/menus/player.ts:28</a></p>',35);function p(t,u,f,m,y,b){return i(),r("div",null,[e("h1",s,[n(o(t.$frontmatter.title)+" ",1),c]),h])}const x=a(d,[["render",p]]);export{_ as __pageData,x as default};
