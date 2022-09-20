import{_ as o,c as r,a as e,b as a,t as i,d as n,o as s}from"./app.579dd51f.js";const g=JSON.parse('{"title":"Best Server for You","description":"","frontmatter":{"title":"Best Server for You","order":-95},"headers":[{"level":2,"title":"Server Deployment and Infrastructure","slug":"server-deployment-and-infrastructure","link":"#server-deployment-and-infrastructure","children":[{"level":3,"title":"Do I need to buy a server?","slug":"do-i-need-to-buy-a-server","link":"#do-i-need-to-buy-a-server","children":[]},{"level":3,"title":"Developing with Athena","slug":"developing-with-athena","link":"#developing-with-athena","children":[]},{"level":3,"title":"Deploying a Server with Athena","slug":"deploying-a-server-with-athena","link":"#deploying-a-server-with-athena","children":[]}]}],"relativePath":"intro/intro/best-server-for-you.md"}'),l={name:"intro/intro/best-server-for-you.md"},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=n('<p>There is <strong>no best server option</strong> if you cannot do basic system administration. You also do not need a server host for development.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Avoid hosts that do not give you full control of your server. Server hosts like Zap.</p></div><h2 id="server-deployment-and-infrastructure" tabindex="-1">Server Deployment and Infrastructure <a class="header-anchor" href="#server-deployment-and-infrastructure" aria-hidden="true">#</a></h2><p>When you are working with the Athena Framework you will be creating a private fork. A private fork is a copy of the Athena repository that contains your changes. It will only contain your changes if you know how utilize <code>git</code>. Which is a tool used for pushing changes to repositories.</p><p>As I&#39;ve stated dozens of times. If you are not familiar with these tools you will have a hard time working with them. Athena Framework will move forward without you and if you do not learn to use these tools your server will struggle with security updates.</p><h3 id="do-i-need-to-buy-a-server" tabindex="-1">Do I need to buy a server? <a class="header-anchor" href="#do-i-need-to-buy-a-server" aria-hidden="true">#</a></h3><p>In most cases NO. You do not need to buy a server. Your local machine will work just fine until you decide you want to add more users to your server. </p><p>When you are launching for a full community you should look into these items:</p><ul><li>A CDN to host your server resource downloads such as mods.</li><li>A Dedicated Server with Unmetered Up / Down</li><li>At least 4 cores.</li><li>At least 8 GB of RAM.</li><li>At least 256GB of Storage</li><li>A dedicated CPU</li><li>DDoS Protection</li><li>Ability to access a server with full CLI access. Unmanaged.</li></ul><p>Want a recommendation? It&#39;s not any of the server providers that charge you per-slot for hosting.</p><h3 id="developing-with-athena" tabindex="-1">Developing with Athena <a class="header-anchor" href="#developing-with-athena" aria-hidden="true">#</a></h3><p>You should be using the Athena Framework in a local windows environment for development. If you are knowledgeable you can figure out other ways to go about this, but the current toolsets and fastest way to develop with Athena has to be done in a windows environment.</p><p>tl;dr - Push changes to your repository on a windows platform with <code>git</code>.</p><h3 id="deploying-a-server-with-athena" tabindex="-1">Deploying a Server with Athena <a class="header-anchor" href="#deploying-a-server-with-athena" aria-hidden="true">#</a></h3><p>When you have committed changes to your private repository. You should pull that private repository into any VPS or Dedicated Server that can support MongoDB. It can be a Windows Server, or a Linux Server. If you are not familiar with a cli put it on a windows machine and pull it into your Windows Server.</p><p>tl;dr - Pull changes into your dedicated server / vps with <code>git</code>.</p>',16);function c(t,p,v,y,w,f){return s(),r("div",null,[e("h1",d,[a(i(t.$frontmatter.title)+" ",1),h]),u])}const b=o(l,[["render",c]]);export{g as __pageData,b as default};
