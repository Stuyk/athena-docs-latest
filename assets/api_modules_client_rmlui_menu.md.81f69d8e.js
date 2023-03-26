import{_ as a,c as r,x as e,a as n,t as o,S as i,o as l}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"AthenaClient.rmlui.menu","description":"","frontmatter":{"title":"AthenaClient.rmlui.menu","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_rmlui_menu.md","lastUpdated":1679789238000}'),d={name:"api/modules/client_rmlui_menu.md"},c={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h3><p>▸ <strong>close</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Call this function to close the menu. Make sure to wait for it to close before opening a new menu.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/menu/index.ts#L373" target="_blank" rel="noreferrer">client/rmlui/menu/index.ts:373</a></p><hr><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><p>▸ <strong>create</strong>(<code>info</code>): <code>void</code></p><p>Create a menu similar to NativeUI.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>info</code></td><td style="text-align:left;"><a href="./../interfaces/client_rmlui_menu_menuInterfaces_MenuInfo"><code>MenuInfo</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/menu/index.ts#L344" target="_blank" rel="noreferrer">client/rmlui/menu/index.ts:344</a></p><hr><h3 id="createoption" tabindex="-1">createOption <a class="header-anchor" href="#createoption" aria-label="Permalink to &quot;createOption&quot;">​</a></h3><p>▸ <strong>createOption</strong>&lt;<code>T</code>&gt;(<code>menuTemplate</code>): <code>T</code></p><p>Build a menu option, and return the result. Used like: <code>createOption&lt;Range&gt;({ ... })</code>;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><a href="./../interfaces/client_rmlui_menu_menuInterfaces_Selection"><code>Selection</code></a> | <a href="./../interfaces/client_rmlui_menu_menuInterfaces_Range"><code>Range</code></a> | <a href="./../interfaces/client_rmlui_menu_menuInterfaces_Toggle"><code>Toggle</code></a> | <a href="./../interfaces/client_rmlui_menu_menuInterfaces_Invoke"><code>Invoke</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>menuTemplate</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/menu/index.ts#L386" target="_blank" rel="noreferrer">client/rmlui/menu/index.ts:386</a></p>',31);function u(t,m,f,p,_,b){return l(),r("div",null,[e("h1",c,[n(o(t.$frontmatter.title)+" ",1),s]),h])}const y=a(d,[["render",u]]);export{x as __pageData,y as default};
