import{_ as n,c as l,a as s,b as o,t as e,d as p,o as t}from"./app.57362daf.js";const g=JSON.parse('{"title":".vehicle","description":"","frontmatter":{"title":".vehicle","order":-99},"headers":[{"level":2,"title":"byDatabaseID","slug":"bydatabaseid","link":"#bydatabaseid","children":[]},{"level":2,"title":"byID","slug":"byid","link":"#byid","children":[]},{"level":2,"title":"inFrontOf","slug":"infrontof","link":"#infrontof","children":[]},{"level":2,"title":"isNearPosition","slug":"isnearposition","link":"#isnearposition","children":[]},{"level":2,"title":"passengers","slug":"passengers","link":"#passengers","children":[]},{"level":2,"title":"driver","slug":"driver","link":"#driver","children":[]},{"level":2,"title":"closestToPlayer","slug":"closesttoplayer","link":"#closesttoplayer","children":[]},{"level":2,"title":"closestToVehicle","slug":"closesttovehicle","link":"#closesttovehicle","children":[]}],"relativePath":"api-server/get/vehicle.md"}'),c={name:"api-server/get/vehicle.md"},r={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=p(`<p>Used to get vehicle information for vehicles that are spawned.</p><h2 id="bydatabaseid" tabindex="-1">byDatabaseID <a class="header-anchor" href="#bydatabaseid" aria-hidden="true">#</a></h2><p>Get an online vehicle based on their MongoDB _id</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someVehicle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">byDatabaseID</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">631779d7119e86368a313e1b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">vehicle </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">valid) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find vehicle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="byid" tabindex="-1">byID <a class="header-anchor" href="#byid" aria-hidden="true">#</a></h2><p>Used to get a vehicle by an alt:V identifier.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vehicle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">byID</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">vehicle </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">valid) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find vehicle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="infrontof" tabindex="-1">inFrontOf <a class="header-anchor" href="#infrontof" aria-hidden="true">#</a></h2><p>Used to get a vehicle in front of an entity such as a player, or vehicle.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSomething</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">someVehicle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">inFrontOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// 8 -&gt; Distance</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">someVehicle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">someVehicle</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find something that the player, or vehicle has in front of them.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><em>This function is async. Must use an async function.</em></p><h2 id="isnearposition" tabindex="-1">isNearPosition <a class="header-anchor" href="#isnearposition" aria-hidden="true">#</a></h2><p>Used to check if a vehicle is near a position.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isNear </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isNearPosition</span><span style="color:#A6ACCD;">(someVehicle</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 3 -&gt; Distance</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">isNear) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vehicle is not near it yet.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="passengers" tabindex="-1">passengers <a class="header-anchor" href="#passengers" aria-hidden="true">#</a></h2><p>Returns the passengers of the vehicle.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> passengers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">passengers</span><span style="color:#A6ACCD;">(someVehicle)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="driver" tabindex="-1">driver <a class="header-anchor" href="#driver" aria-hidden="true">#</a></h2><p>Returns the driver of the vehicle.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> driver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">driver</span><span style="color:#A6ACCD;">(someVehicle)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="closesttoplayer" tabindex="-1">closestToPlayer <a class="header-anchor" href="#closesttoplayer" aria-hidden="true">#</a></h2><p>Return the closest vehicle to a player.</p><p>Does not have a distance limitation.</p><p>Does not return self.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> targetVehicle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closestToPlayer</span><span style="color:#A6ACCD;">(somePlayer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">targetVehicle </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">targetVehicle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">valid) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find a vehicle close to a player.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="closesttovehicle" tabindex="-1">closestToVehicle <a class="header-anchor" href="#closesttovehicle" aria-hidden="true">#</a></h2><p>Return the closest vehicle to a vehicle.</p><p>Does not have a distance limitation.</p><p>Does not return self.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> targetVehicle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closestToVehicle</span><span style="color:#A6ACCD;">(someVehicle)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">targetVehicle </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">targetVehicle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">valid) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find a vehicle close to a vehicle.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,30);function F(a,i,A,C,h,d){return t(),l("div",null,[s("h1",r,[o(e(a.$frontmatter.title)+" ",1),D]),y])}const u=n(c,[["render",F]]);export{g as __pageData,u as default};