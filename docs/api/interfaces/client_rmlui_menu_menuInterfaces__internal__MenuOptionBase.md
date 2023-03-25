# Interface: MenuOptionBase<T\>

[client/rmlui/menu/menuInterfaces](../modules/client_rmlui_menu_menuInterfaces.md).[<internal>](../modules/client_rmlui_menu_menuInterfaces__internal_.md).MenuOptionBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Function` |

## Hierarchy

- **`MenuOptionBase`**

  ↳ [`Selection`](client_rmlui_menu_menuInterfaces_Selection.md)

  ↳ [`Toggle`](client_rmlui_menu_menuInterfaces_Toggle.md)

  ↳ [`Range`](client_rmlui_menu_menuInterfaces_Range.md)

  ↳ [`Invoke`](client_rmlui_menu_menuInterfaces_Invoke.md)

## Properties

### callback

• **callback**: `Function` \| `T`

A callback when this menu option is changed.

**`Memberof`**

MenuOptionBase

#### Defined in

[client/rmlui/menu/menuInterfaces.ts:26](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/rmlui/menu/menuInterfaces.ts#L26)

___

### description

• **description**: `string`

A description of this menu option.

**`Memberof`**

MenuOptionBase

#### Defined in

[client/rmlui/menu/menuInterfaces.ts:18](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/rmlui/menu/menuInterfaces.ts#L18)

___

### onlyUpdateOnEnter

• `Optional` **onlyUpdateOnEnter**: `boolean`

Only for Range & Selection Types

**`Memberof`**

MenuOptionBase

#### Defined in

[client/rmlui/menu/menuInterfaces.ts:34](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/rmlui/menu/menuInterfaces.ts#L34)

___

### title

• **title**: `string`

The title of this menu option.

**`Memberof`**

MenuOptionBase

#### Defined in

[client/rmlui/menu/menuInterfaces.ts:10](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/rmlui/menu/menuInterfaces.ts#L10)
