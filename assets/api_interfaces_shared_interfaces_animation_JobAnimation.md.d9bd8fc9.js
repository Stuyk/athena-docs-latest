import{_ as a,c as e,o as i,V as n}from"./chunks/framework.be58fd72.js";const p=JSON.parse('{"title":"AthenaShared.interfaces.animation.JobAnimation","description":"","frontmatter":{"title":"AthenaShared.interfaces.animation.JobAnimation","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_animation_JobAnimation.md","lastUpdated":null}'),t={name:"api/interfaces/shared_interfaces_animation_JobAnimation.md"},r=n('<h1 id="athenashared-interfaces-animation-jobanimation" tabindex="-1">AthenaShared.interfaces.animation.JobAnimation <a class="header-anchor" href="#athenashared-interfaces-animation-jobanimation" aria-label="Permalink to &quot;AthenaShared.interfaces.animation.JobAnimation&quot;">​</a></h1><p><a href="./../modules/shared_interfaces_animation">shared/interfaces/animation</a>.JobAnimation</p><p>Used to pass animation information from server-side to client-side.</p><p><strong><code>Interface</code></strong></p><p>Animation</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./shared_interfaces_animation_Animation"><code>Animation</code></a></p><p>↳ <strong><code>JobAnimation</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="atobjectivestart" tabindex="-1">atObjectiveStart <a class="header-anchor" href="#atobjectivestart" aria-label="Permalink to &quot;atObjectiveStart&quot;">​</a></h3><p>• <code>Optional</code> <strong>atObjectiveStart</strong>: <code>boolean</code></p><p>Play the animation when the objective is loaded?</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L55" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:55</a></p><hr><h3 id="delay" tabindex="-1">delay <a class="header-anchor" href="#delay" aria-label="Permalink to &quot;delay&quot;">​</a></h3><p>• <code>Optional</code> <strong>delay</strong>: <code>number</code></p><p>When to play this animation after a certain amount of ms.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L48" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:48</a></p><hr><h3 id="dict" tabindex="-1">dict <a class="header-anchor" href="#dict" aria-label="Permalink to &quot;dict&quot;">​</a></h3><p>• <strong>dict</strong>: <code>string</code></p><p>The animation dictionary for the animation.</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_animation_Animation">Animation</a>.<a href="./shared_interfaces_animation_Animation#dict">dict</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L16" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:16</a></p><hr><h3 id="duration" tabindex="-1">duration <a class="header-anchor" href="#duration" aria-label="Permalink to &quot;duration&quot;">​</a></h3><p>• <strong>duration</strong>: <code>number</code></p><p>How long should this animation play for. Set this to -1 for infinite.</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_animation_Animation">Animation</a>.<a href="./shared_interfaces_animation_Animation#duration">duration</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L39" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:39</a></p><hr><h3 id="flags" tabindex="-1">flags <a class="header-anchor" href="#flags" aria-label="Permalink to &quot;flags&quot;">​</a></h3><p>• <strong>flags</strong>: <code>ANIMATION_FLAGS</code></p><p>A bitwise enum of values that determine how an animation looks / works. Combine them with &#39;ANIMATION_FLAGS.X | ANIMATION_FLAGS.Y&#39;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_animation_Animation">Animation</a>.<a href="./shared_interfaces_animation_Animation#flags">flags</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L31" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:31</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>The name of the animation.</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_animation_Animation">Animation</a>.<a href="./shared_interfaces_animation_Animation#name">name</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L23" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:23</a></p><hr><h3 id="rotation" tabindex="-1">rotation <a class="header-anchor" href="#rotation" aria-label="Permalink to &quot;rotation&quot;">​</a></h3><p>• <code>Optional</code> <strong>rotation</strong>: <code>IVector3</code></p><p>What direction to face when playing the animation.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/b149a44/src/core/shared/interfaces/animation.ts#L62" target="_blank" rel="noreferrer">shared/interfaces/animation.ts:62</a></p>',57),o=[r];function h(d,s,c,l,f,m){return i(),e("div",null,o)}const u=a(t,[["render",h]]);export{p as __pageData,u as default};
