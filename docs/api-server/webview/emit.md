---
title: '.emit'
order: 0
---

# emit

Emits an event directly to the client's WebView.

::: warning 

WebView event must be unique. Meaning no other event names must match this specific event name.

:::

### Usage

Arguments:

* player -> alt.Player
* eventName -> string
* ...args -> Array\<any>

```typescript
Athena.webview.emit(somePlayer, 'someview:say:hello', 'hello', 'world');
```

### Receiving an Emit

If you have a WebView setup you can receive the corresponding event with the `WebViewEvents` namespace that is a utility built for handling events.

```typescript
mounted() {
    WebViewEvents.on('someview:say:hello', (arg1, arg2) => {
        console.log(arg1 + arg2);
    });
}
```
