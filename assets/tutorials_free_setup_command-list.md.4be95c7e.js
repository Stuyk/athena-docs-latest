import{_ as s,c as n,o as a,V as l}from"./chunks/framework.be58fd72.js";const i=JSON.parse('{"title":"Command List","description":"","frontmatter":{"title":"Command List","order":90000},"headers":[],"relativePath":"tutorials/free/setup/command-list.md","lastUpdated":1702040143000}'),p={name:"tutorials/free/setup/command-list.md"},o=l(`<h1 id="command-list" tabindex="-1">Command List <a class="header-anchor" href="#command-list" aria-label="Permalink to &quot;Command List&quot;">​</a></h1><p>Generated April 17, 2023</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">activateExtra [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">addbank [amount] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">addcash [amount] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">additem [dbName] [amount] [version</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">addperm [account or character] [ingame</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">id] [permission] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Add an account permission</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">addvehicle [model] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Adds an owned vehicle to self</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">attachmenteditor</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ban [id] [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">reason]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">clearinventory [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">clearskin [</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cleartimecycle</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cleartoolbar [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">clearweapons [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">coords [x] [y] [z]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">deactivateExtra [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">do [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">message] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Describe an action you are performing</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">freeze [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">fullTuneVehicle </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Full tunes a vehicle</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">getcar [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">getclothing [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">gethere [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">getperms [account or character] [ingame</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">id] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Show current perms a player has</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">getprop [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">getweapons [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">goto [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">hasitemcheck</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Print your current identifier</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">joaat [string]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">kick [id] [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">reason]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">low </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Speak </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> a lower radius</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">me </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Describe what you are doing</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">noclip</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ooc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Speak out </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> character</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pedHash</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">propHash</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">quitjob</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">removeitem [dbName] [amount] [version</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">removeperm [account or character] [ingame</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">id] [permission] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Remove an account permission</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">seatbelt</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sessionvehicle [model] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Spawn a session vehicle</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setarmour [value] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setbank [amount] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setcash [amount] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setclothing [id] [drawable] [texture] [</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">create]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setdimension [id] [dimension]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sethealth [value] [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setinterior [id] [interior]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setprop [id] [drawable] [texture] [</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">create]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setskin [model] [</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setvehicledirtLevel [level] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Sets vehicle dirt level</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">setVehicleLivery [nummer] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Sets vehicle livery</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">svdl [level] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Sets vehicle dirt level</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">svl [nummer] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Sets vehicle livery</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tempcomponent [id] [value]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tempprop [id] [value]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tempvehicle [model] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Adds a temporary vehicle to drive around</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> Despawns on exit</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testactionmenu </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> A test action menu</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testcredits </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows a temporary credits display</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testerrorscreen </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows a temporary error screen</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testjobmenu </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows a test job menu</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testobjectattach </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Test object attachment</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testobjectattachinfinite </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Test object attachment</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testped </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> A Test Ped</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> Does not </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> itself</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testshard </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows a temporary shard</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testspinner </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows a temporary spinner</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">testworldhelptext </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Shows temporary world help text</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">timecycle [name]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">toggledoor</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tpall</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tphere [partial_name]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tpto [partial_name]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tpwp [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tunevehicle [modID] [value] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Sets the specified Mod to the given value</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">unban [discord_identifier]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">unfreeze [id]</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vehdoor [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Open </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> Close a Vehicle Door</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vehengine </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Toggle Vehicle Engine</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vehHash</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vehiclerepair </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Repairs the nearest vehicle</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vehlock </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Toggle Vehicle Lock</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">whisper [id] [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">message] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Whisper to another player</span><span style="color:#89DDFF;">.</span></span></code></pre></div>`,3),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
