import{_ as e,c as a,o as r,V as t}from"./chunks/framework.be58fd72.js";const g=JSON.parse('{"title":"AthenaShared.interfaces.progressBar.ProgressBar","description":"","frontmatter":{"title":"AthenaShared.interfaces.progressBar.ProgressBar","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_progressBar_ProgressBar.md","lastUpdated":null}'),s={name:"api/interfaces/shared_interfaces_progressBar_ProgressBar.md"},o=t('<h1 id="athenashared-interfaces-progressbar-progressbar" tabindex="-1">AthenaShared.interfaces.progressBar.ProgressBar <a class="header-anchor" href="#athenashared-interfaces-progressbar-progressbar" aria-label="Permalink to &quot;AthenaShared.interfaces.progressBar.ProgressBar&quot;">​</a></h1><p><a href="./../modules/shared_interfaces_progressBar">shared/interfaces/progressBar</a>.ProgressBar</p><p>Used to create and show a progress bar. Used in server to client.</p><p><strong><code>Interface</code></strong></p><p>ProgressBar</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>• <strong>color</strong>: <code>RGBA</code></p><p>The color of the progress bar.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L30" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:30</a></p><hr><h3 id="distance" tabindex="-1">distance <a class="header-anchor" href="#distance" aria-label="Permalink to &quot;distance&quot;">​</a></h3><p>• <strong>distance</strong>: <code>number</code></p><p>The distance in which the progress bar can be seen.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L44" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:44</a></p><hr><h3 id="finaltime" tabindex="-1">finalTime <a class="header-anchor" href="#finaltime" aria-label="Permalink to &quot;finalTime&quot;">​</a></h3><p>• <code>Optional</code> <strong>finalTime</strong>: <code>number</code></p><p>Do not set this. Leave it alone.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L67" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:67</a></p><hr><h3 id="milliseconds" tabindex="-1">milliseconds <a class="header-anchor" href="#milliseconds" aria-label="Permalink to &quot;milliseconds&quot;">​</a></h3><p>• <strong>milliseconds</strong>: <code>number</code></p><p>How long this progress bar should last.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L37" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:37</a></p><hr><h3 id="percentageenabled" tabindex="-1">percentageEnabled <a class="header-anchor" href="#percentageenabled" aria-label="Permalink to &quot;percentageEnabled&quot;">​</a></h3><p>• <code>Optional</code> <strong>percentageEnabled</strong>: <code>boolean</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L53" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:53</a></p><hr><h3 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h3><p>• <strong>position</strong>: <code>Object</code></p><p>The position in a 3D space to show the progress bar. Only a single client will see it.</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>z</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L23" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:23</a></p><hr><h3 id="starttime" tabindex="-1">startTime <a class="header-anchor" href="#starttime" aria-label="Permalink to &quot;startTime&quot;">​</a></h3><p>• <code>Optional</code> <strong>startTime</strong>: <code>number</code></p><p>Do not set this. Leave it alone.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L60" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:60</a></p><hr><h3 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;text&quot;">​</a></h3><p>• <code>Optional</code> <strong>text</strong>: <code>string</code></p><p>The text to display on the progress bar.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L51" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:51</a></p><hr><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>• <code>Optional</code> <strong>uid</strong>: <code>string</code></p><p>A unique identifier to remove the progress bar early.</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/progressBar.ts#L15" target="_blank" rel="noreferrer">shared/interfaces/progressBar.ts:15</a></p>',60),n=[o];function i(d,h,l,c,p,f){return r(),a("div",null,n)}const u=e(s,[["render",i]]);export{g as __pageData,u as default};
