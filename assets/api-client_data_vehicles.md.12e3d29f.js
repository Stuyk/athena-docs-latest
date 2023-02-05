import{_ as a,c as l,a as s,b as p,t as o,d as e,o as c}from"./app.df8cb8f1.js";const B=JSON.parse('{"title":".vehicles","description":"","frontmatter":{"title":".vehicles","order":-99},"headers":[],"relativePath":"api-client/data/vehicles.md","lastUpdated":1675601610000}'),t={name:"api-client/data/vehicles.md"},r={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=e(`<p>Simply returns a list of all vehicle information. Includes the following interface for each vehicle.</p><h2 id="vehicleinfo" tabindex="-1">VehicleInfo <a class="header-anchor" href="#vehicleinfo" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Interface for working with / using vehicles.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">export</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">interface</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VehicleInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The display name of the vehicle.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The model of the vehicle.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The vehicle type; vehicle, boat, plane, etc.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">VEHICLE_TYPE</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VEHICLE_TYPE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The class of the vehicle; sport, utility, etc.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">VEHICLE_CLASS</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VEHICLE_CLASS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Is this vehicle purchaseable?</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sell</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The price of this vehicle if purchaseable.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * How much storage this vehicle should have.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">(number | null)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">VehicleInfo</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">storage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> vehicleInfo </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vehicles) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vehicleInfo</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5);function i(n,D,C,A,E,h){return c(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),y]),F])}const d=a(t,[["render",i]]);export{B as __pageData,d as default};
