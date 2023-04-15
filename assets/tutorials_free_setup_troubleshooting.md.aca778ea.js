import{_ as e,c as o,o as t,V as a}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{"title":"Troubleshooting","order":9999},"headers":[],"relativePath":"tutorials/free/setup/troubleshooting.md","lastUpdated":1681588959000}'),n={name:"tutorials/free/setup/troubleshooting.md"},i=a('<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><p>While not everything can be magically fixed when working with Athena, there are some steps you can take to help identify your problem.</p><h2 id="fix-most-issues" tabindex="-1">Fix Most Issues <a class="header-anchor" href="#fix-most-issues" aria-label="Permalink to &quot;Fix Most Issues&quot;">​</a></h2><p>This only works if you have ran <code>npm install</code> at least once.</p><p>After having ran that command once, you can run the following in a terminal.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run fix</span></span></code></pre></div><p>After running this command run the following:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run update</span></span></code></pre></div><p>If you&#39;re lucky everything will go back to normal.</p><p>If not, you may need to seek out additional help in Discord.</p><h2 id="black-screen-no-webview" tabindex="-1">Black Screen, No WebView <a class="header-anchor" href="#black-screen-no-webview" aria-label="Permalink to &quot;Black Screen, No WebView&quot;">​</a></h2><p>This means that there&#39;s a Vue plugin which has an error in it. This is mostly due to adding plugins that may be broken.</p><p>This can be resolved by doing the following:</p><ol><li>Look at each plugin your <code>src/core/plugins</code> folder.</li><li>Determine which plugins were added or modified.</li><li>Disable or remove a custom plugin.</li><li>Start the server. Check if it resolves it.</li><li>If it did not resolve it, go to step 2 again.</li></ol><p>If successful you&#39;ll determine which plugin is causing issues in your installation.</p><p>Alternatively, having empty and incomplete Vue components can prevent proper usage.</p><h2 id="slow-startup" tabindex="-1">Slow Startup <a class="header-anchor" href="#slow-startup" aria-label="Permalink to &quot;Slow Startup&quot;">​</a></h2><p>We strongly advise that you develop with <code>npm run dev</code>.</p><p>When you use <code>npm run windows</code> for development you are waiting for a ton of images, files, etc. to be packed up and loaded into the server for distribution.</p><p>Other reasons why your startup is slow:</p><ul><li>Too Many Mods</li><li>Too Many MLOs</li></ul><h2 id="reconnecting" tabindex="-1">Reconnecting <a class="header-anchor" href="#reconnecting" aria-label="Permalink to &quot;Reconnecting&quot;">​</a></h2><p>Use <code>npm run dev</code> to turn on <code>reconnect</code>.</p><p>In your <code>alt:V Client installation folder</code> you will need to edit the <code>altv.toml</code> file and set the parameter <code>debug = true</code>.</p><p>Restart your alt:V client after making any changes to the configuration.</p>',26),s=[i];function l(r,c,p,d,u,h){return t(),o("div",null,s)}const b=e(n,[["render",l]]);export{m as __pageData,b as default};
