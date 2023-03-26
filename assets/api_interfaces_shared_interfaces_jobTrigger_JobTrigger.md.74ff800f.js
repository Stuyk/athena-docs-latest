import{_ as t,c as r,x as e,a as o,t as i,S as n,o as d}from"./chunks/framework.175b5f45.js";const y=JSON.parse('{"title":"AthenaShared.interfaces.jobTrigger.JobTrigger","description":"","frontmatter":{"title":"AthenaShared.interfaces.jobTrigger.JobTrigger","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_jobTrigger_JobTrigger.md","lastUpdated":null}'),c={name:"api/interfaces/shared_interfaces_jobTrigger_JobTrigger.md"},s={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<p><a href="./../modules/shared_interfaces_jobTrigger">shared/interfaces/jobTrigger</a>.JobTrigger</p><p>A unique interface to show the player. Has custom header, summary, and image support.</p><p><strong><code>Export</code></strong></p><p><strong><code>Interface</code></strong></p><p>JobTrigger</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="acceptcallback" tabindex="-1">acceptCallback <a class="header-anchor" href="#acceptcallback" aria-label="Permalink to &quot;acceptCallback&quot;">​</a></h3><p>• <code>Optional</code> <strong>acceptCallback</strong>: (<code>player</code>: <code>T</code>, <code>amount?</code>: <code>number</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.interfaces.jobTrigger.JobTrigger.(<code>player</code>, <code>amount?</code>): <code>void</code></p></div><p>A callback if the trigger is accepted.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>amount?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L57" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:57</a></p><hr><h3 id="cancelcallback" tabindex="-1">cancelCallback <a class="header-anchor" href="#cancelcallback" aria-label="Permalink to &quot;cancelCallback&quot;">​</a></h3><p>• <code>Optional</code> <strong>cancelCallback</strong>: (<code>player</code>: <code>T</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaShared.interfaces.jobTrigger.JobTrigger.(<code>player</code>): <code>void</code></p></div><p>A callback if the trigger is declined.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L64" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:64</a></p><hr><h3 id="cancelevent" tabindex="-1">cancelEvent <a class="header-anchor" href="#cancelevent" aria-label="Permalink to &quot;cancelEvent&quot;">​</a></h3><p>• <code>Optional</code> <strong>cancelEvent</strong>: <code>string</code></p><p>Event to trigger when the player declines this job. Completely optional.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L50" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:50</a></p><hr><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><p>• <code>Optional</code> <strong>event</strong>: <code>string</code></p><p>Event to trigger when it is accepted. Recieve this event with &#39;alt.on&#39;</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L42" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:42</a></p><hr><h3 id="header" tabindex="-1">header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;header&quot;">​</a></h3><p>• <strong>header</strong>: <code>string</code></p><p>The header text of the job trigger.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L20" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:20</a></p><hr><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><p>• <strong>image</strong>: <code>string</code></p><p>An external https:// based image to show for your job.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L13" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:13</a></p><hr><h3 id="maxamount" tabindex="-1">maxAmount <a class="header-anchor" href="#maxamount" aria-label="Permalink to &quot;maxAmount&quot;">​</a></h3><p>• <code>Optional</code> <strong>maxAmount</strong>: <code>number</code></p><p>Maximum amount for quantity input.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L34" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:34</a></p><hr><h3 id="summary" tabindex="-1">summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;summary&quot;">​</a></h3><p>• <strong>summary</strong>: <code>string</code></p><p>A summary describing what will be done during a job.</p><p><strong><code>Memberof</code></strong></p><p>JobTrigger</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/shared/interfaces/jobTrigger.ts#L27" target="_blank" rel="noreferrer">shared/interfaces/jobTrigger.ts:27</a></p>',83);function p(a,g,b,f,m,u){return d(),r("div",null,[e("h1",s,[o(i(a.$frontmatter.title)+" ",1),l]),h])}const k=t(c,[["render",p]]);export{y as __pageData,k as default};
