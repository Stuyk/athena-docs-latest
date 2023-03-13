import{_ as a,c as l,b as s,d as e,t as p,e as i,o}from"./app.947db47a.js";const D=JSON.parse('{"title":"Loading Plugins","description":"","frontmatter":{"title":"Loading Plugins","order":-97},"headers":[],"relativePath":"plugins/loading-plugins.md","lastUpdated":1678740849000}'),t={name:"plugins/loading-plugins.md"},r={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(`<h3 id="learn-to-load-plugins" tabindex="-1">Learn to Load Plugins <a class="header-anchor" href="#learn-to-load-plugins" aria-hidden="true">#</a></h3><p>All plugins should be placed inside the \u{1F4C1}<code>src/core/plugins</code> folder.</p><p>This can be done by performing a submodule clone, or simply downloading the resource files and dragging and dropping them into the folder.</p><h4 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-hidden="true">#</a></h4><p>The folder structure is very specific.</p><p>It consists of several folders inside your main folder.</p><ul><li>server <ul><li>This should all be server-side code</li></ul></li><li>client <ul><li>This should all be client-side code</li></ul></li><li>shared <ul><li>This should be shared between server, client, and webview</li></ul></li><li>webview <ul><li>This is a WebView Page you want to inject</li></ul></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u{1F4C1} src/core/plugins/core-example</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500\u2500\u2500\u{1F4C1} client</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2514\u2500\u2500\u2500\u{1F4C1} src  </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500\u2500\u2500\u{1F4C1} server</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2514\u2500\u2500\u2500\u{1F4C1} src</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502       \u2502   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500\u2500\u2500\u{1F4C1} shared</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2514\u2500\u2500\u2500\u{1F4C1} webview</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502   Example.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502   tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u251C\u2500\u2500\u2500\u{1F4C1} components</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502       Component1.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502       Component2.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u2502       Component3.vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="enabling-disabling-plugins" tabindex="-1"><strong>Enabling &amp; Disabling Plugins</strong> <a class="header-anchor" href="#enabling-disabling-plugins" aria-hidden="true">#</a></h3><p>In order to disable a plugin, create a file with one of the following names from the list below inside the root folder of the plugin (<code>src/core/plugins/&lt;your-plugin&gt;</code>):</p><ul><li><code>disable.plugin</code></li><li><code>disabled.plugin</code></li><li><code>disable</code></li></ul>`,11);function u(n,C,A,h,g,f){return o(),l("div",null,[s("h1",r,[e(p(n.$frontmatter.title)+" ",1),c]),d])}const b=a(t,[["render",u]]);export{D as __pageData,b as default};
