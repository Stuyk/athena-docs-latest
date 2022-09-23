import{_ as i,c as o,a as e,b as n,t,d as s,o as l}from"./app.acab1cac.js";const v=JSON.parse('{"title":"Using VSCode","description":"","frontmatter":{"title":"Using VSCode","order":0},"headers":[{"level":2,"title":"Opening a Folder","slug":"opening-a-folder","link":"#opening-a-folder","children":[]},{"level":2,"title":"Pushing Changes","slug":"pushing-changes","link":"#pushing-changes","children":[{"level":3,"title":"Visual Guide","slug":"visual-guide","link":"#visual-guide","children":[]},{"level":3,"title":"CLI Command","slug":"cli-command","link":"#cli-command","children":[]}]}],"relativePath":"intro/info/using-vscode.md"}'),r={name:"intro/info/using-vscode.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=s(`<h2 id="opening-a-folder" tabindex="-1">Opening a Folder <a class="header-anchor" href="#opening-a-folder" aria-hidden="true">#</a></h2><p>The biggest improvement you can make is opening the entire project folder into VSCode. This will allow you to easily weave through folders, files, etc. and pretty much use VSCode as an entire workspace for development.</p><p>How do you do it?</p><ol><li>Open VSCode</li><li>Go to File</li><li>Click on Open Folder</li><li>Navigate to your privately cloned Athena Framework folder</li><li>Open!</li></ol><p>Want to know if you did it right? Your Athena folder should look like this:</p><p><img src="https://i.imgur.com/c65E1lz.png" alt="A Workspace Folder of Athena in VSCode"></p><h2 id="pushing-changes" tabindex="-1">Pushing Changes <a class="header-anchor" href="#pushing-changes" aria-hidden="true">#</a></h2><p>If you modify code you can use VSCode to push your changes to your private repository. This will only work if you follow the full installation tutorial with a private fork.</p><p>You can <code>stage changes</code> by click the <code>+</code> sign.</p><hr><h3 id="visual-guide" tabindex="-1">Visual Guide <a class="header-anchor" href="#visual-guide" aria-hidden="true">#</a></h3><p>Follow the image below.</p><p><img src="https://i.imgur.com/cNf74iX.png" alt=""></p><p>Once changes are staged, you can write about it and push it up to your private repository by hitting the checkmark or type the command.</p><p><img src="https://i.imgur.com/RJZVMx1.png" alt=""></p><hr><h3 id="cli-command" tabindex="-1">CLI Command <a class="header-anchor" href="#cli-command" aria-hidden="true">#</a></h3><p>You write these into a terminal.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add ./src/somefileOrFolder</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git commit -m &quot;i changed some stuff&quot; &amp;&amp; git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20);function h(a,u,g,m,f,y){return l(),o("div",null,[e("h1",d,[n(t(a.$frontmatter.title)+" ",1),c]),p])}const C=i(r,[["render",h]]);export{v as __pageData,C as default};