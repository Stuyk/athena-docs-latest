import{_ as t,c as r,x as e,a as s,t as n,S as i,o}from"./chunks/framework.74a8bdba.js";const C=JSON.parse('{"title":"AthenaShared.interfaces.messageCommand.MessageCommand","description":"","frontmatter":{"title":"AthenaShared.interfaces.messageCommand.MessageCommand","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_messageCommand_MessageCommand.md","lastUpdated":null}'),d={name:"api/interfaces/shared_interfaces_messageCommand_MessageCommand.md"},c={id:"frontmatter-title",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<p><a href="./../modules/shared_interfaces_messageCommand">shared/interfaces/messageCommand</a>.MessageCommand</p><p>Used to describe a command.</p><p><strong><code>Interface</code></strong></p><p>MessageCommand</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="callback" tabindex="-1">callback <a class="header-anchor" href="#callback" aria-label="Permalink to &quot;callback&quot;">​</a></h3><p>• <strong>callback</strong>: <a href="./../modules/shared_interfaces_messageCommand#CommandCallback"><code>CommandCallback</code></a>&lt;<code>T</code>&gt;</p><p>The function to call when this command is executed by a player, or internal function.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/71db7b8/src/core/shared/interfaces/messageCommand.ts#L48" target="_blank" rel="noreferrer">shared/interfaces/messageCommand.ts:48</a></p><hr><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h3><p>• <strong>description</strong>: <code>string</code></p><p>A description of this command.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/71db7b8/src/core/shared/interfaces/messageCommand.ts#L25" target="_blank" rel="noreferrer">shared/interfaces/messageCommand.ts:25</a></p><hr><h3 id="ischaracterpermission" tabindex="-1">isCharacterPermission <a class="header-anchor" href="#ischaracterpermission" aria-label="Permalink to &quot;isCharacterPermission&quot;">​</a></h3><p>• <code>Optional</code> <strong>isCharacterPermission</strong>: <code>boolean</code></p><p>Should this command use character permissions instead of account?</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/71db7b8/src/core/shared/interfaces/messageCommand.ts#L41" target="_blank" rel="noreferrer">shared/interfaces/messageCommand.ts:41</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>The plain text iteration of this command.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/71db7b8/src/core/shared/interfaces/messageCommand.ts#L17" target="_blank" rel="noreferrer">shared/interfaces/messageCommand.ts:17</a></p><hr><h3 id="permissions" tabindex="-1">permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;permissions&quot;">​</a></h3><p>• <strong>permissions</strong>: <code>string</code>[]</p><p>An array of individual permission strings required to run this command.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/71db7b8/src/core/shared/interfaces/messageCommand.ts#L33" target="_blank" rel="noreferrer">shared/interfaces/messageCommand.ts:33</a></p>',36);function l(a,p,f,b,g,u){return o(),r("div",null,[e("h1",c,[s(n(a.$frontmatter.title)+" ",1),m]),h])}const k=t(d,[["render",l]]);export{C as __pageData,k as default};