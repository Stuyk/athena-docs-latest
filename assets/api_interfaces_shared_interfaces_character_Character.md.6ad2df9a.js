import{_ as r,c as t,x as e,a as n,t as o,S as i,o as h}from"./chunks/framework.175b5f45.js";const q=JSON.parse('{"title":"AthenaShared.interfaces.character.Character","description":"","frontmatter":{"title":"AthenaShared.interfaces.character.Character","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_character_Character.md","lastUpdated":null}'),c={name:"api/interfaces/shared_interfaces_character_Character.md"},s={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),l=i('<p><a href="./../modules/shared_interfaces_character">shared/interfaces/character</a>.Character</p><p>Used as the main interface for storing character data.</p><p><strong><code>Export</code></strong></p><p><strong><code>Interface</code></strong></p><p>Character</p><h2 id="indexable" tabindex="-1">Indexable <a class="header-anchor" href="#indexable" aria-label="Permalink to &quot;Indexable&quot;">​</a></h2><p>▪ [key: <code>string</code>]: <code>any</code></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="id" tabindex="-1">_id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;\\_id&quot;">​</a></h3><p>• <code>Optional</code> <strong>_id</strong>: <code>any</code></p><p>The character identifier in the database.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L21" target="_blank" rel="noreferrer">shared/interfaces/character.ts:21</a></p><hr><h3 id="account-id" tabindex="-1">account_id <a class="header-anchor" href="#account-id" aria-label="Permalink to &quot;account\\_id&quot;">​</a></h3><p>• <strong>account_id</strong>: <code>any</code></p><p>The account id associated with this character.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L36" target="_blank" rel="noreferrer">shared/interfaces/character.ts:36</a></p><hr><h3 id="appearance" tabindex="-1">appearance <a class="header-anchor" href="#appearance" aria-label="Permalink to &quot;appearance&quot;">​</a></h3><p>• <strong>appearance</strong>: <a href="./shared_interfaces_appearance_Appearance"><code>Appearance</code></a> | <a href="./../modules/server_controllers_textlabel_Internal#Partial"><code>Partial</code></a>&lt;<a href="./shared_interfaces_appearance_Appearance"><code>Appearance</code></a>&gt;</p><p>Appearance data for how this character looks.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L131" target="_blank" rel="noreferrer">shared/interfaces/character.ts:131</a></p><hr><h3 id="armour" tabindex="-1">armour <a class="header-anchor" href="#armour" aria-label="Permalink to &quot;armour&quot;">​</a></h3><p>• <strong>armour</strong>: <code>number</code></p><p>The amount of armour the player last had.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L88" target="_blank" rel="noreferrer">shared/interfaces/character.ts:88</a></p><hr><h3 id="bank" tabindex="-1">bank <a class="header-anchor" href="#bank" aria-label="Permalink to &quot;bank&quot;">​</a></h3><p>• <strong>bank</strong>: <code>number</code></p><p>The amount of cash in the bank this character has.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L74" target="_blank" rel="noreferrer">shared/interfaces/character.ts:74</a></p><hr><h3 id="cash" tabindex="-1">cash <a class="header-anchor" href="#cash" aria-label="Permalink to &quot;cash&quot;">​</a></h3><p>• <strong>cash</strong>: <code>number</code></p><p>The amount of cash this character has.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L67" target="_blank" rel="noreferrer">shared/interfaces/character.ts:67</a></p><hr><h3 id="character-id" tabindex="-1">character_id <a class="header-anchor" href="#character-id" aria-label="Permalink to &quot;character\\_id&quot;">​</a></h3><p>• <code>Optional</code> <strong>character_id</strong>: <code>number</code></p><p>An incremental numerical identifier that increases with each character created. Does not fill gaps. Do not use as a way to save character information.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L29" target="_blank" rel="noreferrer">shared/interfaces/character.ts:29</a></p><hr><h3 id="dimension" tabindex="-1">dimension <a class="header-anchor" href="#dimension" aria-label="Permalink to &quot;dimension&quot;">​</a></h3><p>• <strong>dimension</strong>: <code>number</code></p><p>The current dimension of the player. When they spawn they are automatically moved into this dimension.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L45" target="_blank" rel="noreferrer">shared/interfaces/character.ts:45</a></p><hr><h3 id="food" tabindex="-1">food <a class="header-anchor" href="#food" aria-label="Permalink to &quot;food&quot;">​</a></h3><p>• <strong>food</strong>: <code>number</code></p><p>The amount of food the player has.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L95" target="_blank" rel="noreferrer">shared/interfaces/character.ts:95</a></p><hr><h3 id="health" tabindex="-1">health <a class="header-anchor" href="#health" aria-label="Permalink to &quot;health&quot;">​</a></h3><p>• <strong>health</strong>: <code>number</code></p><p>The amount of health the player last had.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L81" target="_blank" rel="noreferrer">shared/interfaces/character.ts:81</a></p><hr><h3 id="hours" tabindex="-1">hours <a class="header-anchor" href="#hours" aria-label="Permalink to &quot;hours&quot;">​</a></h3><p>• <strong>hours</strong>: <code>number</code></p><p>Amount of hours the player has played.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L117" target="_blank" rel="noreferrer">shared/interfaces/character.ts:117</a></p><hr><h3 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;info&quot;">​</a></h3><p>• <strong>info</strong>: <a href="./../modules/server_controllers_textlabel_Internal#Partial"><code>Partial</code></a>&lt;<a href="./shared_interfaces_characterInfo_CharacterInfo"><code>CharacterInfo</code></a>&gt;</p><p>Character info. Will eventually be used for ID cards.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L138" target="_blank" rel="noreferrer">shared/interfaces/character.ts:138</a></p><hr><h3 id="interior" tabindex="-1">interior <a class="header-anchor" href="#interior" aria-label="Permalink to &quot;interior&quot;">​</a></h3><p>• <strong>interior</strong>: <code>number</code></p><p>Current player interior number. Usually bound to dimension.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L146" target="_blank" rel="noreferrer">shared/interfaces/character.ts:146</a></p><hr><h3 id="inventory" tabindex="-1">inventory <a class="header-anchor" href="#inventory" aria-label="Permalink to &quot;inventory&quot;">​</a></h3><p>• <strong>inventory</strong>: <code>StoredItem</code>[]</p><p>Individual item references that the player currently has on-hand.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L162" target="_blank" rel="noreferrer">shared/interfaces/character.ts:162</a></p><hr><h3 id="isdead" tabindex="-1">isDead <a class="header-anchor" href="#isdead" aria-label="Permalink to &quot;isDead&quot;">​</a></h3><p>• <strong>isDead</strong>: <code>boolean</code></p><p>Is this player dead or not. Health does not dictate whether a player is alive or dead.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L110" target="_blank" rel="noreferrer">shared/interfaces/character.ts:110</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>The name of this character to display to other users.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L60" target="_blank" rel="noreferrer">shared/interfaces/character.ts:60</a></p><hr><h3 id="permissions" tabindex="-1">permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;permissions&quot;">​</a></h3><p>• <strong>permissions</strong>: <code>string</code>[]</p><p>Permissions for a given user.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L154" target="_blank" rel="noreferrer">shared/interfaces/character.ts:154</a></p><hr><h3 id="pos" tabindex="-1">pos <a class="header-anchor" href="#pos" aria-label="Permalink to &quot;pos&quot;">​</a></h3><p>• <strong>pos</strong>: <code>IVector3</code></p><p>The position that this character last logged out at. This also updates every 5s or so.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L53" target="_blank" rel="noreferrer">shared/interfaces/character.ts:53</a></p><hr><h3 id="skin" tabindex="-1">skin <a class="header-anchor" href="#skin" aria-label="Permalink to &quot;skin&quot;">​</a></h3><p>• <code>Optional</code> <strong>skin</strong>: <code>string</code> | <code>number</code></p><p>A custom model that can be applied to the player. If this is set; the clothing items will never be applied. This also goes for appearance as well.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L189" target="_blank" rel="noreferrer">shared/interfaces/character.ts:189</a></p><hr><h3 id="toolbar" tabindex="-1">toolbar <a class="header-anchor" href="#toolbar" aria-label="Permalink to &quot;toolbar&quot;">​</a></h3><p>• <strong>toolbar</strong>: <code>StoredItem</code>[]</p><p>Individual item references that the player may access through the 1-4 keys</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L170" target="_blank" rel="noreferrer">shared/interfaces/character.ts:170</a></p><hr><h3 id="uniform" tabindex="-1">uniform <a class="header-anchor" href="#uniform" aria-label="Permalink to &quot;uniform&quot;">​</a></h3><p>• <code>Optional</code> <strong>uniform</strong>: <code>ClothingComponent</code>[]</p><p>Clothes that will be applied to the player last. Uniforms should be used in tandem with typical inventory clothing.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L179" target="_blank" rel="noreferrer">shared/interfaces/character.ts:179</a></p><hr><h3 id="wanted" tabindex="-1">wanted <a class="header-anchor" href="#wanted" aria-label="Permalink to &quot;wanted&quot;">​</a></h3><p>• <strong>wanted</strong>: <code>number</code></p><p>Wanted stars to display.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L124" target="_blank" rel="noreferrer">shared/interfaces/character.ts:124</a></p><hr><h3 id="water" tabindex="-1">water <a class="header-anchor" href="#water" aria-label="Permalink to &quot;water&quot;">​</a></h3><p>• <strong>water</strong>: <code>number</code></p><p>The amount of water the player has.</p><p><strong><code>Memberof</code></strong></p><p>Character</p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/character.ts#L102" target="_blank" rel="noreferrer">shared/interfaces/character.ts:102</a></p>',191);function p(a,f,b,u,m,g){return h(),t("div",null,[e("h1",s,[n(o(a.$frontmatter.title)+" ",1),d]),l])}const _=r(c,[["render",p]]);export{q as __pageData,_ as default};
