import{_ as s,c as a,o as n,V as l}from"./chunks/framework.be58fd72.js";const u=JSON.parse('{"title":"Creating Plugins","description":"","frontmatter":{"title":"Creating Plugins","order":-98,"outline":[1,6],"comment":false},"headers":[],"relativePath":"tutorials/free/making-plugins/creating-plugins.md","lastUpdated":1681588959000}'),e={name:"tutorials/free/making-plugins/creating-plugins.md"},o=l(`<h1 id="creating-plugins" tabindex="-1">Creating Plugins <a class="header-anchor" href="#creating-plugins" aria-label="Permalink to &quot;Creating Plugins&quot;">​</a></h1><p>Plugins in the Athena Framework are made in a specific way. Meaning, that following this general structure will help you create robust plugins without touching the core of the framework.</p><p>It is important that when a plugin is created that is does not adjust the core of the Athena Framework. This ensures that compatibility is future-proof and additional updates to the plugin can be made without over complicating it.</p><p>Plugins allow you to change the <code>core</code> code without actually modifying any of the core code.</p><p>For the sake of this page imagine <code>my-plugin</code> as the folder you are working out of.</p><h2 id="quick-plugin-template" tabindex="-1">Quick Plugin Template <a class="header-anchor" href="#quick-plugin-template" aria-label="Permalink to &quot;Quick Plugin Template&quot;">​</a></h2><p>Create a folder in <code>src/core/plugins</code> called <code>my-plugin</code></p><p>Path should be <code>src/core/plugins/my-plugin</code></p><p>Create <code>3</code> folders inside of the <code>my-plugin</code> folder:</p><ul><li>server</li><li>client</li><li>webview</li></ul><p>Create an <code>index.ts</code> file inside of these <code>2</code> folders:</p><ul><li>server/index.ts</li><li>client/index.ts</li></ul><p>Inside of <code>server/index.ts</code> put the following:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> alt </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt-server</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> Athena </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@AthenaServer/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> PLUGIN_NAME </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myPlugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerPlugin</span><span style="color:#A6ACCD;">(PLUGIN_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from Athena Server!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Inside of <code>client/index.ts</code> put the following:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> alt </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt-client</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> AthenaClient </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@AthenaClient/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello from Athena Client!</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Run the server, and you will see each corresponding message in server, and client side.</p><p>That&#39;s all that is needed to start building plugins.</p><h2 id="integrating-an-api" tabindex="-1">Integrating an API <a class="header-anchor" href="#integrating-an-api" aria-label="Permalink to &quot;Integrating an API&quot;">​</a></h2><p>If you want to know how to integrate your own API to distribute it to users of Athena with auto-completion, there is a guide for that.</p><p><a href="/tutorials/free/top/plugin-api">Check the Guide Out</a></p><h2 id="special-files" tabindex="-1">Special Files <a class="header-anchor" href="#special-files" aria-label="Permalink to &quot;Special Files&quot;">​</a></h2><p>These are files that can be created in a plugin folder to do different things.</p><h3 id="disable" tabindex="-1">disable <a class="header-anchor" href="#disable" aria-label="Permalink to &quot;disable&quot;">​</a></h3><p>Create a file called <code>disable</code> will disable the plugin from loading.</p><h3 id="dependencies-json" tabindex="-1">dependencies.json <a class="header-anchor" href="#dependencies-json" aria-label="Permalink to &quot;dependencies.json&quot;">​</a></h3><p>This lets you install additional npm packages for a plugin.</p><p>Create the file and put whatever packages you need.</p><details class="details custom-block"><summary>Example</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xyz</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><h2 id="special-folders" tabindex="-1">Special Folders <a class="header-anchor" href="#special-folders" aria-label="Permalink to &quot;Special Folders&quot;">​</a></h2><p>Now that we have the template out of the way.</p><p>Let&#39;s talk about the plugin structure more in-depth.</p><p>For the sake of this page imagine <code>my-plugin</code> as the folder you are working out of.</p><h3 id="my-plugin-icons" tabindex="-1">my-plugin/icons <a class="header-anchor" href="#my-plugin-icons" aria-label="Permalink to &quot;my-plugin/icons&quot;">​</a></h3><p>This folder is mostly used for the built-in inventory system.</p><p>Any icon in here can be used in a <code>BaseItem</code> as long as you specify the correct path.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">AthenaPlugins</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">icons</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">my</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">some</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">icon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">png</span></span></code></pre></div><h3 id="my-plugin-sounds" tabindex="-1">my-plugin/sounds <a class="header-anchor" href="#my-plugin-sounds" aria-label="Permalink to &quot;my-plugin/sounds&quot;">​</a></h3><p>This folder is used for <code>.ogg</code> sounds only. It only supports the <code>.ogg</code> format, and no other format of audio will work.</p><p>This is a restriction of the chromium instance, so don&#39;t try.</p><p>A custom sound can be played through the following pathway:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">AthenaPlugins</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sounds</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">my</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">some</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ogg</span></span></code></pre></div><h3 id="my-plugin-webview" tabindex="-1">my-plugin/webview <a class="header-anchor" href="#my-plugin-webview" aria-label="Permalink to &quot;my-plugin/webview&quot;">​</a></h3><p>All custom vue components can go in here. Create a Vue file, and start coding a new page.</p><p>It is highly recommended to use <code>ThisFormatForVueFiles.vue</code> and give them prefixes or suffixes which make sense.</p><p>Example: <code>StuykVueCharSelect</code></p><details class="details custom-block"><summary>Vue File Example</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">purple</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{ helloWorldText }}, {{ saySomethingElse ? saySomethingElse : &#39;&#39; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> WebViewEvents </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@utility/webViewEvents</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> helloWorldText </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> saySomethingElse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello in console</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">saySomethingElse</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">I have assigned this value later.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">purple</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> purple</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h3 id="my-plugin-webview-assets" tabindex="-1">my-plugin/webview/assets <a class="header-anchor" href="#my-plugin-webview-assets" aria-label="Permalink to &quot;my-plugin/webview/assets&quot;">​</a></h3><p>Assets are pretty much images, media, etc.</p><p>They belong to the WebView and are easily accessed.</p><p>The should be named in a <code>unique</code> way which means, prefix your files to make them unique.</p><p>If you place a file in this folder called <code>stuyk-logo-custom.png</code> the HTML code below will load it.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">img src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/plugins/stuyk-logo-custom.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div>`,53),p=[o];function t(c,r,i,y,D,F){return n(),a("div",null,p)}const C=s(e,[["render",t]]);export{u as __pageData,C as default};
