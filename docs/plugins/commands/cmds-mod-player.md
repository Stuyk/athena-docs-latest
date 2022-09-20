---
title: 'Mod Commands - Player'
order: -97
---

# {{ $frontmatter.title }}


### sethealth

Used to set a target player's health.

Health ranges from 99 - 199. 99 = Death

Don't ask, it's just GTA:V internal values.

```
/sethealth [99-199] [player_id]
```

```
/sethealth 199 5
```


### setarmour

Used to set a target player's armour.

Armour ranges from 0 - 100.

Don't ask, it's just GTA:V internal values.

```
/setarmour [0-100] [player_id]
```
```
/setarmour 100 5
```

### freeze

Used to freeze a specified player by id.

```
/freeze [player_id]
```

```
/freeze 5
```

### unfreeze

Used to unfreeze a specified player by id.

```
/unfreeze [player_id]
```

```
/unfreeze 5
```

### kick

Used to kick a player

```
/kick [player_id] [really_long_reason_here]
```

```
/kick 5 Learn to not be hateful.
```

### ban

Used to ban a player

```
/ban [player_id] [really_long_reason_here]
```

```
/ban 5 Cheating
```

### unban

Used to kick a player

```
/unban [discord_identifier]
```

```
/unban 202685967935471617
```

### makeadmin

Used to set a player's admin level in-game as an Admin.

Set to `0` to revoke all administrative privilege's.


```
/makeadmin [player_id] [admin_level_number]
```

```
/makeadmin 5 4
```


### info

Used to retrieve account information of a player in-game.

```
/info [player_id]
```

```
/info 5
```

