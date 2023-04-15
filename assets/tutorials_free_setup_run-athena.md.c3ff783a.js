import{_ as e,c as a,o as t,V as n}from"./chunks/framework.be58fd72.js";const y=JSON.parse('{"title":"Running Athena","description":"","frontmatter":{"title":"Running Athena","order":-92},"headers":[],"relativePath":"tutorials/free/setup/run-athena.md","lastUpdated":1681588959000}'),o={name:"tutorials/free/setup/run-athena.md"},r=n('<h1 id="running-athena" tabindex="-1">Running Athena <a class="header-anchor" href="#running-athena" aria-label="Permalink to &quot;Running Athena&quot;">​</a></h1><p>When you are running the framework you should always ensure you are in the <code>altv-athena-private</code> or the directory which has the Athena Framework source files.</p><p>An example of how your terminal should look if you are in the right directory.</p><p><img src="https://i.imgur.com/a6CmKQ3.png" alt=""></p><p>Always open a powershell, command prompt, or a terminal to run the commands below.</p><h2 id="first-step" tabindex="-1">First Step <a class="header-anchor" href="#first-step" aria-label="Permalink to &quot;First Step&quot;">​</a></h2><p>When you are running Athena, always start off by running a windows instance.</p><p>After you run the command below, join the server and create a character.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run windows</span></span></code></pre></div><h2 id="second-step" tabindex="-1">Second Step <a class="header-anchor" href="#second-step" aria-label="Permalink to &quot;Second Step&quot;">​</a></h2><p>When you are done you can hit <code>CTRL + C</code> to close the server.</p><h2 id="third-step" tabindex="-1">Third Step <a class="header-anchor" href="#third-step" aria-label="Permalink to &quot;Third Step&quot;">​</a></h2><p>When you want to make changes, and do development you can use the dev command.</p><p>This only works on your local computer utilizing <strong>windows</strong> with GTA:V installed.</p><p>This is considered the FASTEST way to develop with this framework.</p><p>Here&#39;s what you should do first.</p><ul><li>Edit your <code>altv.toml</code> file where your alt:V installation is located.</li><li>Add <code>debug = true</code> to your configuration.</li><li>Restart your alt:V Client if it was running already.</li></ul><p>After, you can run the server command below.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span></code></pre></div>',19),s=[r];function i(l,p,d,h,c,u){return t(),a("div",null,s)}const g=e(o,[["render",i]]);export{y as __pageData,g as default};
