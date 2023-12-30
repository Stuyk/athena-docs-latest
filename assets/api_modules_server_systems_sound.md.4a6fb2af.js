import{_ as e,c as t,o as a,V as o}from"./chunks/framework.be58fd72.js";const y=JSON.parse('{"title":"Athena.systems.sound","description":"","frontmatter":{"title":"Athena.systems.sound","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_sound.md","lastUpdated":null}'),s={name:"api/modules/server_systems_sound.md"},r=o('<h1 id="athena-systems-sound" tabindex="-1">Athena.systems.sound <a class="header-anchor" href="#athena-systems-sound" aria-label="Permalink to &quot;Athena.systems.sound&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_systems_sound_CustomSoundInfo">CustomSoundInfo</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override sound trigger functions.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;playSound&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>soundInfo</code>: <a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L129" target="_blank" rel="noreferrer">server/systems/sound.ts:129</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override sound trigger functions.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;playSoundInDimension&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>dimension</code>: <code>number</code>, <code>soundInfo</code>: <a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a>, <code>&quot;pos&quot;</code>&gt;) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L130" target="_blank" rel="noreferrer">server/systems/sound.ts:130</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override sound trigger functions.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;playSoundInArea&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>soundInfo</code>: <a href="./server_extensions_extColshape_Internal#Required"><code>Required</code></a>&lt;<a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a>, <code>&quot;volume&quot;</code> | <code>&quot;target&quot;</code>&gt;&gt;) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L131" target="_blank" rel="noreferrer">server/systems/sound.ts:131</a></p><hr><h3 id="playsound" tabindex="-1">playSound <a class="header-anchor" href="#playsound" aria-label="Permalink to &quot;playSound&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>playSound</strong>(<code>player</code>, <code>soundInfo</code>): <code>any</code></p></div><p>Play a single sound for a player.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>soundInfo</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L51" target="_blank" rel="noreferrer">server/systems/sound.ts:51</a></p><hr><h3 id="playsoundinarea" tabindex="-1">playSoundInArea <a class="header-anchor" href="#playsoundinarea" aria-label="Permalink to &quot;playSoundInArea&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>playSoundInArea</strong>(<code>soundInfo</code>): <code>any</code></p></div><p>Play a custom sound in a 3D position for all players in the area.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>soundInfo</code></td><td style="text-align:left;"><a href="./server_extensions_extColshape_Internal#Required"><code>Required</code></a>&lt;<a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a>, <code>&quot;volume&quot;</code> | <code>&quot;target&quot;</code>&gt;&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L100" target="_blank" rel="noreferrer">server/systems/sound.ts:100</a></p><hr><h3 id="playsoundindimension" tabindex="-1">playSoundInDimension <a class="header-anchor" href="#playsoundindimension" aria-label="Permalink to &quot;playSoundInDimension&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.sound.<strong>playSoundInDimension</strong>(<code>dimension</code>, <code>soundInfo</code>): <code>any</code></p></div><p>Play a custom non-frontend sound in a dimension. Specify an entity to make the sound play from that specific entity.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dimension</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>soundInfo</code></td><td style="text-align:left;"><a href="./server_player_inventory_Internal#Omit"><code>Omit</code></a>&lt;<a href="./../interfaces/server_systems_sound_CustomSoundInfo"><code>CustomSoundInfo</code></a>, <code>&quot;pos&quot;</code>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/90cd63d/src/core/server/systems/sound.ts#L73" target="_blank" rel="noreferrer">server/systems/sound.ts:73</a></p>',62),n=[r];function d(l,i,c,u,h,f){return a(),t("div",null,n)}const p=e(s,[["render",d]]);export{y as __pageData,p as default};