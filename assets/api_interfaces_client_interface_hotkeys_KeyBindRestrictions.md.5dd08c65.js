import{_ as a,c as i,x as e,a as n,t as r,S as o,o as s}from"./chunks/framework.175b5f45.js";const y=JSON.parse('{"title":"AthenaClient.interface.hotkeys.KeyBindRestrictions","description":"","frontmatter":{"title":"AthenaClient.interface.hotkeys.KeyBindRestrictions","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/client_interface_hotkeys_KeyBindRestrictions.md","lastUpdated":null}'),l={name:"api/interfaces/client_interface_hotkeys_KeyBindRestrictions.md"},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=o('<p><a href="./../modules/client_interface_hotkeys">client/interface/hotkeys</a>.KeyBindRestrictions</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="isaiming" tabindex="-1">isAiming <a class="header-anchor" href="#isaiming" aria-label="Permalink to &quot;isAiming&quot;">​</a></h3><p>• <code>Optional</code> <strong>isAiming</strong>: <code>boolean</code></p><p>Player must be aiming a weapon of some sort to trigger this key bind.</p><p><strong><code>Memberof</code></strong></p><p>KeyBindRestrictions</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L37" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:37</a></p><hr><h3 id="isonfoot" tabindex="-1">isOnFoot <a class="header-anchor" href="#isonfoot" aria-label="Permalink to &quot;isOnFoot&quot;">​</a></h3><p>• <code>Optional</code> <strong>isOnFoot</strong>: <code>boolean</code></p><p>Player must be out of a vehicle to use this key bind.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L7" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:7</a></p><hr><h3 id="isswimming" tabindex="-1">isSwimming <a class="header-anchor" href="#isswimming" aria-label="Permalink to &quot;isSwimming&quot;">​</a></h3><p>• <code>Optional</code> <strong>isSwimming</strong>: <code>boolean</code></p><p>Player must be swimming to be able to trigger this key bind.</p><p><strong><code>Memberof</code></strong></p><p>KeyBindRestrictions</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L45" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:45</a></p><hr><h3 id="isvehicle" tabindex="-1">isVehicle <a class="header-anchor" href="#isvehicle" aria-label="Permalink to &quot;isVehicle&quot;">​</a></h3><p>• <code>Optional</code> <strong>isVehicle</strong>: <code>boolean</code></p><p>Player must be in any vehicle to use this key bind. Accessible by anyone in the vehicle.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L15" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:15</a></p><hr><h3 id="isvehicledriver" tabindex="-1">isVehicleDriver <a class="header-anchor" href="#isvehicledriver" aria-label="Permalink to &quot;isVehicleDriver&quot;">​</a></h3><p>• <code>Optional</code> <strong>isVehicleDriver</strong>: <code>boolean</code></p><p>Player must be the driver of the vehicle.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L29" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:29</a></p><hr><h3 id="isvehiclepassenger" tabindex="-1">isVehiclePassenger <a class="header-anchor" href="#isvehiclepassenger" aria-label="Permalink to &quot;isVehiclePassenger&quot;">​</a></h3><p>• <code>Optional</code> <strong>isVehiclePassenger</strong>: <code>boolean</code></p><p>Player must be in a vehicle as a passenger. Not the driver.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L22" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:22</a></p><hr><h3 id="vehiclemodels" tabindex="-1">vehicleModels <a class="header-anchor" href="#vehiclemodels" aria-label="Permalink to &quot;vehicleModels&quot;">​</a></h3><p>• <code>Optional</code> <strong>vehicleModels</strong>: <code>number</code>[]</p><p>Create an array of vehicle model hashes that this key bind only works under. Example: <code>[alt.hash(&#39;infernus&#39;), alt.hash(&#39;police2&#39;)]</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L53" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:53</a></p><hr><h3 id="weaponmodels" tabindex="-1">weaponModels <a class="header-anchor" href="#weaponmodels" aria-label="Permalink to &quot;weaponModels&quot;">​</a></h3><p>• <code>Optional</code> <strong>weaponModels</strong>: <code>number</code>[]</p><p>Create an array of weapon model hashes that this key bind only works under. Example: <code>[alt.hash(&#39;w_ar_advancedrifle&#39;)]</code></p><p><strong><code>Memberof</code></strong></p><p>KeyBindRestrictions</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/interface/hotkeys.ts#L62" target="_blank" rel="noreferrer">client/interface/hotkeys.ts:62</a></p>',55);function f(t,p,b,m,u,k){return s(),i("div",null,[e("h1",c,[n(r(t.$frontmatter.title)+" ",1),h]),d])}const _=a(l,[["render",f]]);export{y as __pageData,_ as default};
