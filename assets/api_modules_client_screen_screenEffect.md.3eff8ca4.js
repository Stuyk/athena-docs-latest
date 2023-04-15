import{_ as e,c as t,o as a,V as r}from"./chunks/framework.be58fd72.js";const b=JSON.parse('{"title":"AthenaClient.screen.screenEffect","description":"","frontmatter":{"title":"AthenaClient.screen.screenEffect","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_screen_screenEffect.md","lastUpdated":null}'),c={name:"api/modules/client_screen_screenEffect.md"},n=r('<h1 id="athenaclient-screen-screeneffect" tabindex="-1">AthenaClient.screen.screenEffect <a class="header-anchor" href="#athenaclient-screen-screeneffect" aria-label="Permalink to &quot;AthenaClient.screen.screenEffect&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="iseffectactive" tabindex="-1">isEffectActive <a class="header-anchor" href="#iseffectactive" aria-label="Permalink to &quot;isEffectActive&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.screen.screenEffect.<strong>isEffectActive</strong>(<code>screenEffect</code>): <code>any</code></p></div><p>Check whether the specific screen effect is running.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>screenEffect</code></td><td style="text-align:left;"><code>SCREEN_EFFECTS</code></td><td style="text-align:left;">The ScreenEffect to check.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><p>true if the screen effect is active; otherwise false</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/screen/screenEffect.ts#L9" target="_blank" rel="noreferrer">client/screen/screenEffect.ts:9</a></p><hr><h3 id="starteffect" tabindex="-1">startEffect <a class="header-anchor" href="#starteffect" aria-label="Permalink to &quot;startEffect&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.screen.screenEffect.<strong>startEffect</strong>(<code>screenEffect</code>, <code>duration?</code>, <code>looped?</code>): <code>void</code></p></div><p>Starts applying the specified effect to the screen.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>screenEffect</code></td><td style="text-align:left;"><code>SCREEN_EFFECTS</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The ScreenEffect to start playing.</td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">The duration of the effect in milliseconds or zero to use the default length.</td></tr><tr><td style="text-align:left;"><code>looped</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">If true the effect won&#39;t stop until stopEffect(ScreenEffect) is called.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/screen/screenEffect.ts#L19" target="_blank" rel="noreferrer">client/screen/screenEffect.ts:19</a></p><hr><h3 id="stopalleffects" tabindex="-1">stopAllEffects <a class="header-anchor" href="#stopalleffects" aria-label="Permalink to &quot;stopAllEffects&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.screen.screenEffect.<strong>stopAllEffects</strong>(): <code>void</code></p></div><p>Stops all currently running effects.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/screen/screenEffect.ts#L34" target="_blank" rel="noreferrer">client/screen/screenEffect.ts:34</a></p><hr><h3 id="stopeffect" tabindex="-1">stopEffect <a class="header-anchor" href="#stopeffect" aria-label="Permalink to &quot;stopEffect&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.screen.screenEffect.<strong>stopEffect</strong>(<code>screenEffect</code>): <code>void</code></p></div><p>Stops applying the specified effect to the screen.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>screenEffect</code></td><td style="text-align:left;"><code>SCREEN_EFFECTS</code></td><td style="text-align:left;">The ScreenEffect to stop playing.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/client/screen/screenEffect.ts#L27" target="_blank" rel="noreferrer">client/screen/screenEffect.ts:27</a></p>',40),s=[n];function l(o,i,d,f,h,p){return a(),t("div",null,s)}const g=e(c,[["render",l]]);export{b as __pageData,g as default};
