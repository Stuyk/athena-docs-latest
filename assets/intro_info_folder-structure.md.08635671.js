import{_ as r,c as i,a as e,b as a,t as s,d as o,o as n}from"./app.57362daf.js";const b=JSON.parse('{"title":"Folder Structure","description":"","frontmatter":{"title":"Folder Structure","order":-98},"headers":[{"level":3,"title":"What is this structure?","slug":"what-is-this-structure","link":"#what-is-this-structure","children":[]},{"level":3,"title":"Single Resource","slug":"single-resource","link":"#single-resource","children":[]},{"level":3,"title":"Where to Modify Code?","slug":"where-to-modify-code","link":"#where-to-modify-code","children":[]},{"level":3,"title":"Server Structure Explained","slug":"server-structure-explained","link":"#server-structure-explained","children":[]}],"relativePath":"intro/info/folder-structure.md"}'),h={name:"intro/info/folder-structure.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o('<h3 id="what-is-this-structure" tabindex="-1">What is this structure? <a class="header-anchor" href="#what-is-this-structure" aria-hidden="true">#</a></h3><p>It is no mystery that the Athena Framework is <strong>HUGE</strong>. There are well over 400+ files, and tons of folders to look through. This framework can be intimidating but there is a method to the madness if you&#39;ve never seen a project of this size before.</p><p>This page will teach you how the author organized the project structure.</p><h3 id="single-resource" tabindex="-1">Single Resource <a class="header-anchor" href="#single-resource" aria-hidden="true">#</a></h3><p>Unlike in FiveM or other platforms the Athena Framework runs out of a <code>single resource</code> using the alt:V client. Which means that there is no resource restarting. Instead it&#39;s a full server restart.</p><p>You may think; but that&#39;s really slow isn&#39;t it? That&#39;s what I originally thought when I started writing this project but by using the most bleeding edge technologies we&#39;ve made the Athena Framework one of the <code>FASTEST</code> frameworks that will exist in the GTA:V space.</p><p>While running in <code>development</code> mode which has been purely created for development, you can literally reboot the entire server in less than 20 seconds.</p><p><img src="https://thumbs.gfycat.com/ThunderousFlusteredBinturong-size_restricted.gif" alt="Running Development Mode for the Athena Framework"></p><h3 id="where-to-modify-code" tabindex="-1">Where to Modify Code? <a class="header-anchor" href="#where-to-modify-code" aria-hidden="true">#</a></h3><p>Everything that you may want to modify for your server is inside of the <code>src</code> folder. Everything in this folder contains everything you will ever likely want to modify to customize Athena.</p><p><img src="https://i.imgur.com/pjHQuy2.png" alt="Athena Framework Folder in VSCode"></p><h3 id="server-structure-explained" tabindex="-1">Server Structure Explained <a class="header-anchor" href="#server-structure-explained" aria-hidden="true">#</a></h3><p>If you are planning on modifying these folders they are highly likely to be modified in the future. If you want to expand upon the Framework consider using plugins.</p><h4 id="\u{1F4C1}-api" tabindex="-1">\u{1F4C1} api <a class="header-anchor" href="#\u{1F4C1}-api" aria-hidden="true">#</a></h4><p>This folder contains the core API. It&#39;s mostly only useful for adding new functions to the Athena API in groups.</p><h4 id="\u{1F4C1}-athena" tabindex="-1">\u{1F4C1} athena <a class="header-anchor" href="#\u{1F4C1}-athena" aria-hidden="true">#</a></h4><p>There is a configuration file inside of here for customizing some of the core game mode&#39;s features. It&#39;s currently being phased out but some configuration data is still present.</p><h4 id="\u{1F4C1}decorators" tabindex="-1">\u{1F4C1}decorators <a class="header-anchor" href="#\u{1F4C1}decorators" aria-hidden="true">#</a></h4><p>All existing TypeScript based decorates for the framework.</p><h4 id="\u{1F4C1}effects" tabindex="-1">\u{1F4C1}effects <a class="header-anchor" href="#\u{1F4C1}effects" aria-hidden="true">#</a></h4><p>These are the default item effects that come with the Athena Framework. There isn&#39;t very many in here; but enough information to build your own item effects.</p><h4 id="\u{1F4C1}-events" tabindex="-1">\u{1F4C1} events <a class="header-anchor" href="#\u{1F4C1}-events" aria-hidden="true">#</a></h4><p>These are mostly event structures to help make Athena tick. They should remain mostly untouched as there isn&#39;t much to customize here.</p><h4 id="\u{1F4C1}-extensions" tabindex="-1">\u{1F4C1} extensions <a class="header-anchor" href="#\u{1F4C1}-extensions" aria-hidden="true">#</a></h4><p>This is where player functionality currently lives. They can usually be accessed through <code>Athena.player.x</code> or <code>Athena.vehicle.x</code> inside of VSCode when writing functions.</p><p>Extensions can usually be modified with an <code>override</code> function to change the behavior and logic. Which is accessible through the plugin structure as well.</p><h4 id="\u{1F4C1}-imports" tabindex="-1">\u{1F4C1} imports <a class="header-anchor" href="#\u{1F4C1}-imports" aria-hidden="true">#</a></h4><p>This is where all core game mode imports are done. These usually consist of many different imports with a load order to ensure the game mode runs correctly. You may append any additional core import files here. However, it is highly recommended to use the plugin structure instead for modifying / adding new features to the framework.</p><p><a href="./../../plugins/creating-plugins.html">creating-plugins.md</a></p><h4 id="\u{1F4C1}-interface" tabindex="-1">\u{1F4C1} interface <a class="header-anchor" href="#\u{1F4C1}-interface" aria-hidden="true">#</a></h4><p>These are server-side specific interfaces which help define different type structures in the framework. You can find account structure, category information, configs, etc. in here. Usually you don&#39;t want to directly modify these but instead extend them. You can find examples of extensions of common interfaces inside of some of the plugins in the <code>src/core/plugins</code> folder.</p><h4 id="\u{1F4C1}-streamers" tabindex="-1">\u{1F4C1} streamers <a class="header-anchor" href="#\u{1F4C1}-streamers" aria-hidden="true">#</a></h4><p>These help synchronize server and client specific information using a custom node based streamer that runs along-side the Athena Framework. The streamer basically takes in player information, determines the closest set of data around that player, then feeds it to the player&#39;s client-side.</p><p>In most cases all major streamers are covered such as objects, markers, static pedestrians, text labels, etc.</p><p>These can be accessed under <code>Athena.controllers.x</code></p><h4 id="\u{1F4C1}-systems" tabindex="-1">\u{1F4C1} systems <a class="header-anchor" href="#\u{1F4C1}-systems" aria-hidden="true">#</a></h4><p>This is a huge portion of the logic for the framework. This is where a lot of core functionality can be found. Everything from sound systems, character systems, blip systems, chat systems, storage systems can all be found here.</p><p>This also contains injections which can be accessed through <code>Athena.injections</code>. Injections will let you override or modify existing features without touching the core too much.</p><p>The catch is that the functionality in most of this section is abstracted to be used or called from other interfaces such as WebViews / Views.</p><h4 id="\u{1F4C1}-utility" tabindex="-1">\u{1F4C1} utility <a class="header-anchor" href="#\u{1F4C1}-utility" aria-hidden="true">#</a></h4><p>General utility functions to make the game mode tick. Try <code>Athena.utility</code>.</p><h4 id="\u{1F4C1}-views" tabindex="-1">\u{1F4C1} views <a class="header-anchor" href="#\u{1F4C1}-views" aria-hidden="true">#</a></h4><p>General view functionality for built-in things like Inventory, Storage, and Login (Discord).</p>',43);function u(t,f,p,m,y,g){return n(),i("div",null,[e("h1",d,[a(s(t.$frontmatter.title)+" ",1),c]),l])}const v=r(h,[["render",u]]);export{b as __pageData,v as default};