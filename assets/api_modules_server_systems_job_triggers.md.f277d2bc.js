import{_ as a,c as r,x as e,a as o,t as s,S as l,o as d}from"./chunks/framework.175b5f45.js";const v=JSON.parse('{"title":"Athena.systems.job.triggers","description":"","frontmatter":{"title":"Athena.systems.job.triggers","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_job_triggers.md","lastUpdated":null}'),n={name:"api/modules/server_systems_job_triggers.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override job objective trigger functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;tryEventCall&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>objective</code>: <code>Objective</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L110" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:110</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override job objective trigger functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;tryAnimation&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>objective</code>: <code>Objective</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L111" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:111</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override job objective trigger functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;tryAttach&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>, <code>objective</code>: <code>Objective</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L112" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:112</a></p><hr><h3 id="tryanimation" tabindex="-1">tryAnimation <a class="header-anchor" href="#tryanimation" aria-label="Permalink to &quot;tryAnimation&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>tryAnimation</strong>(<code>player</code>, <code>objective</code>): <code>any</code></p></div><p>Try playing an animation from the objective.</p><p>This should almost never be invoked manually.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>objective</code></td><td style="text-align:left;"><code>Objective</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L41" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:41</a></p><hr><h3 id="tryattach" tabindex="-1">tryAttach <a class="header-anchor" href="#tryattach" aria-label="Permalink to &quot;tryAttach&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>tryAttach</strong>(<code>player</code>, <code>objective</code>): <code>any</code></p></div><p>Try attaching an object to a player.</p><p>This should almost never be invoked manually.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>objective</code></td><td style="text-align:left;"><code>Objective</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L82" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:82</a></p><hr><h3 id="tryeventcall" tabindex="-1">tryEventCall <a class="header-anchor" href="#tryeventcall" aria-label="Permalink to &quot;tryEventCall&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.triggers.<strong>tryEventCall</strong>(<code>player</code>, <code>objective</code>): <code>any</code></p></div><p>Calls any events attached to the current job objective that is being finished.</p><p>Try calling an event. This should almost never be invoked manually.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr><tr><td style="text-align:left;"><code>objective</code></td><td style="text-align:left;"><code>Objective</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/server/systems/job/triggers.ts#L15" target="_blank" rel="noreferrer">server/systems/job/triggers.ts:15</a></p>',65);function b(t,y,g,p,f,m){return d(),r("div",null,[e("h1",i,[o(s(t.$frontmatter.title)+" ",1),c]),h])}const x=a(n,[["render",b]]);export{v as __pageData,x as default};
