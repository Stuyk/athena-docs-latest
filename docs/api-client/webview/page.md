---
title: '.page'
order: -99
---

# {{ $frontmatter.title }}

A useful page constructor for generating a new Page to be rendered through the WebView.

### Usage

The pathway `AthenaClient.webivew.page` is a class. Which means to use it, you must create a new class.

Here's a full example below that is rendering the 'Designs' page which comes defautl with Athena.

```typescript
import * as alt from 'alt-client';
import { AthenaClient } from '@AthenaClient/api/athena';

function onReady() {
    AthenaClient.webview.emit('do:something...', 'hi');
}

function onClose() {
    // Nothing actually needs to be done.
    // The internal controller handled it all.
}

const page = new AthenaClient.webview.page({
    name: 'Designs',
    callbacks: { onReady, onClose },
    options: {
        onOpen: {
            disableControls: true,
            blurBackground: true,
            focus: true,
            hideHud: true,
            hideOverlays: true,
            setIsMenuOpenToTrue: true,
            showCursor: true,
        },
        onClose: {
            enableControls: true,
            hideCursor: true,
            setIsMenuOpenToFalse: true,
            showHud: true,
            showOverlays: true,
            unblurBackground: true,
            unfocus: true,
        },
    },
    keybind: {
        key: 75, // k
        isLongPress: true,
        useSameKeyToClose: true,
    },
});

alt.onServer('openMyPage', page.open);
alt.onServer('forceCloseMyPage', () => {
    page.close(true);
});
```

## IPage Interface

This describes the individual options available when creating a new page with the page class.

```ts
export interface IPage {
    /**
     * The full name of the Vue file you are trying to load.
     *
     * @type {string}
     * @memberof IPage
     */
    name: string;

    /**
     * Events to call when the page is opened.
     *
     * @memberof IPage
     */
    callbacks: {
        /**
         * Function to call when the View is loaded.
         * Usually used to pass data to the WebView after it's ready.
         */
        onReady: (...args: any[]) => void | Function;
        /**
         * Function to call when the View is closed.
         */
        onClose: (...args: any[]) => void | Function;
    };

    options?: {
        onOpen?: {
            /**
             * Focus the WebView when this page is opened.
             *
             * @type {boolean}
             */
            focus?: boolean;

            /**
             * Show the cursor when the WebView is focused?
             *
             * @type {boolean}
             */
            showCursor?: boolean;

            /**
             * Hide the HUD when the WebView is opened.
             *
             * @type {boolean}
             */
            hideHud?: boolean;

            /**
             * Hide overlays when the WebView is opened.
             *
             * @type {boolean}
             */
            hideOverlays?: boolean;

            /**
             * Disable game controls on open?
             *
             * @type {boolean}
             */
            disableControls?: boolean;

            /**
             * Blur the game.
             *
             * @type {boolean}
             */
            blurBackground?: boolean;

            /**
             * Sets alt.Player.local.isMenuOpen to false if false.
             *
             * @type {boolean}
             */
            setIsMenuOpenToTrue?: boolean;
        };
        onClose?: {
            /**
             * Unfocus the WebView when it is closed?
             *
             * @type {boolean}
             */
            unfocus?: boolean;

            /**
             * Hide the cursor when the WebView is closed?
             *
             * @type {boolean}
             */
            hideCursor?: boolean;

            /**
             * Show the HUD when the WebView is closed?
             *
             * @type {boolean}
             */
            showHud?: boolean;

            /**
             * Show overlays when the WebView is closed?
             *
             * @type {boolean}
             */
            showOverlays?: boolean;

            /**
             * Enable game controls on close.
             *
             * @type {boolean}
             */
            enableControls?: boolean;

            /**
             * Unblur the game.
             *
             * @type {boolean}
             */
            unblurBackground?: boolean;

            /**
             * Sets alt.Player.local.isMenuOpen to false if true.
             *
             * @type {boolean}
             */
            setIsMenuOpenToFalse?: boolean;
        };
    };

    /**
     * An optional hotkey to open this page.
     *
     * @type {number}
     * @memberof IPage
     */
    keybind?: {
        /**
         * JavaScript key code for this keybind.
         *
         * @type {number}
         */
        key: number;

        /**
         * Hold the key for a longer time to open this menu?
         *
         * @type {boolean}
         */
        isLongPress?: boolean;

        /**
         * Use the same hotkey to invoke a close event.
         * @type {boolean}
         */
        useSameKeyToClose?: boolean;
    };
}
```