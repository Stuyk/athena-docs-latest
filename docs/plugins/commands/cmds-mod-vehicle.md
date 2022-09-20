---
title: 'Mod Commands - Vehicle'
order: -97
---

# 

### refillvehicle

Should set a vehicle's fuel to 100.

Requires the player to be inside of the vehicle.



```
/refillvehicle
```



### repairvehicle

Fully repairs a vehicle if the player is inside of the vehicle.



```
/repairvehicle
```



### tempvehicle

Spawns a temporary vehicle which despawns after exiting it.



```
/tempvehicle [vehicle_model_hash_or_string]
```



```
/tempvehicle infernus
```



### addvehicle

Spawns and creates a vehicle and adds it to yourself. It can be saved.



```
/addvehicle [vehicle_model_hash_or_string]
```



```
/addvehicle infernus
```



### setvehiclehandling

Set vehicle handling value.

Alternative: `/sh`



```
/setvehiclehandling [tuning_key_name] [tuning_key_value]
```



```
/sh darkness 5
```



### sessionvehicle

Create a session based vehicle. A session vehicle despawns after the server is restarted.



```
/sessionvehicle [vehicle_model_hash_or_string]
```



```
/sessionvehicle akuma
```



### toggleneonlights

Create a session based vehicle. A session vehicle despawns after the server is restarted.

Alternative: `/tnl`



```
/toggleneonlights
```



```
/tnl
```



### setneonlights

Turns neon lights on your vehicle on / off. Can toggle different positions.

Alternative: `/snl`



```
/setneonlights [left_0-1] [right_0-1] [front_0-1] [back_0-1]
```





```
/setneonlights 1 1 0 0
```



### fulltunevehicle

Sets entire vehicle to maximum value for all mods.

Alternative: `/ft`



```
/fulltunevehicle
```


