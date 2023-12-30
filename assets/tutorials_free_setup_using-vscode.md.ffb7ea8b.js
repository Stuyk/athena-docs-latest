import{_ as e,c as a,o,V as s}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Using VSCode","description":"","frontmatter":{"title":"Using VSCode","order":0},"headers":[],"relativePath":"tutorials/free/setup/using-vscode.md","lastUpdated":1703962902000}'),t={name:"tutorials/free/setup/using-vscode.md"},i=s('<h1 id="using-vscode" tabindex="-1">Using VSCode <a class="header-anchor" href="#using-vscode" aria-label="Permalink to &quot;Using VSCode&quot;">​</a></h1><h2 id="opening-a-folder" tabindex="-1">Opening a Folder <a class="header-anchor" href="#opening-a-folder" aria-label="Permalink to &quot;Opening a Folder&quot;">​</a></h2><p>The biggest improvement you can make is opening the entire project folder into VSCode. This will allow you to easily weave through folders, files, etc. and pretty much use VSCode as an entire workspace for development.</p><p>How do you do it?</p><ol><li>Open VSCode</li><li>Go to File</li><li>Click on Open Folder</li><li>Navigate to your privately cloned Athena Framework folder</li><li>Open!</li></ol><p>Want to know if you did it right? Your Athena folder should look like this:</p><p><img src="https://i.imgur.com/c65E1lz.png" alt="A Workspace Folder of Athena in VSCode"></p><h2 id="pushing-changes" tabindex="-1">Pushing Changes <a class="header-anchor" href="#pushing-changes" aria-label="Permalink to &quot;Pushing Changes&quot;">​</a></h2><p>If you modify code you can use VSCode to push your changes to your private repository. This will only work if you follow the full installation tutorial with a private fork.</p><p>You can <code>stage changes</code> by click the <code>+</code> sign.</p><hr><h3 id="visual-guide" tabindex="-1">Visual Guide <a class="header-anchor" href="#visual-guide" aria-label="Permalink to &quot;Visual Guide&quot;">​</a></h3><p>Follow the image below.</p><p><img src="https://i.imgur.com/cNf74iX.png" alt=""></p><p>Once changes are staged, you can write about it and push it up to your private repository by hitting the checkmark or type the command.</p><p><img src="https://i.imgur.com/RJZVMx1.png" alt=""></p><hr><h3 id="cli-command" tabindex="-1">CLI Command <a class="header-anchor" href="#cli-command" aria-label="Permalink to &quot;CLI Command&quot;">​</a></h3><p>You write these into a terminal.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">somefileOrFolder</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i changed some stuff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> git push origin master</span></span></code></pre></div>',21),n=[i];function l(r,p,c,d,h,u){return o(),a("div",null,n)}const y=e(t,[["render",l]]);export{m as __pageData,y as default};