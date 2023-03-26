import{_ as a,c as r,x as t,a as l,t as o,S as s,o as n}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"AthenaClient.systems.alarm","description":"","frontmatter":{"title":"AthenaClient.systems.alarm","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_systems_alarm.md","lastUpdated":null}'),d={name:"api/modules/client_systems_alarm.md"},i={id:"frontmatter-title",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="loadalarm" tabindex="-1">loadAlarm <a class="header-anchor" href="#loadalarm" aria-label="Permalink to &quot;loadAlarm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.systems.alarm.<strong>loadAlarm</strong>(<code>name</code>, <code>count?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Attempts to load an alarm multiple times before returning false.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The name of the alarm.</td></tr><tr><td style="text-align:left;"><code>count?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">Do not modify this. Leave it as zero.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/systems/alarm.ts#L17" target="_blank" rel="noreferrer">client/systems/alarm.ts:17</a></p><hr><h3 id="startalarm" tabindex="-1">startAlarm <a class="header-anchor" href="#startalarm" aria-label="Permalink to &quot;startAlarm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.systems.alarm.<strong>startAlarm</strong>(<code>name</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Play an alarm for the local player.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the alarm.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/systems/alarm.ts#L50" target="_blank" rel="noreferrer">client/systems/alarm.ts:50</a></p><hr><h3 id="stopalarm" tabindex="-1">stopAlarm <a class="header-anchor" href="#stopalarm" aria-label="Permalink to &quot;stopAlarm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.systems.alarm.<strong>stopAlarm</strong>(<code>name</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Stop an alarm for the local player.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the alarm.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/systems/alarm.ts#L73" target="_blank" rel="noreferrer">client/systems/alarm.ts:73</a></p><hr><h3 id="stopallalarms" tabindex="-1">stopAllAlarms <a class="header-anchor" href="#stopallalarms" aria-label="Permalink to &quot;stopAllAlarms&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.systems.alarm.<strong>stopAllAlarms</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Stop all alarms for the local player.</p><p><strong><code>Export</code></strong></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/217ba5f/src/core/client/systems/alarm.ts#L86" target="_blank" rel="noreferrer">client/systems/alarm.ts:86</a></p>',41);function m(e,p,f,u,b,g){return n(),r("div",null,[t("h1",i,[l(o(e.$frontmatter.title)+" ",1),c]),h])}const _=a(d,[["render",m]]);export{x as __pageData,_ as default};
