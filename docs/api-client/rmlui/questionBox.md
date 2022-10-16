---
title: '.questionBox'
order: -99
---

# {{ $frontmatter.title }}

This menu can be described as a way to ask a simple yes or no question and get a result.

Questions can easily be chained together.

The `ESCAPE` key will automatically decline the question.

![](https://i.imgur.com/lBJtcFf.png)

## Usage

* Question Interface (See Below)

```ts
AthenaClient.rmlui.questionBox.create(questionInterface): void;
```

_Note: Options are limited to 12_

## Example

```ts
async function askQuestion() {
    const response = await AthenaClient.rmlui.questionBox.create({
        placeholder: 'Would you like to proceed?',
        blur: true,
        darken: true,
        hideHud: true,
        buttons: {
            accept: 'Accept',
            decline: 'Decline'
        }
    });

    alt.log(response);
}
```