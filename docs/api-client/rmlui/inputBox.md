---
title: '.inputBox'
order: -99
---

# {{ $frontmatter.title }}

This is a simple user input box that can be chained together to ask questions, or even just input basic information.

The `ESCAPE` key will automatically decline the input box and return `undefined`.

![](https://i.imgur.com/byW7gfI.png)

## Usage

* Input Interface (See Below)

```ts
AthenaClient.rmlui.inputBox.create(inputInterface): void;
```

_Note: Options are limited to 12_

## Example

```ts
async function askQuestion() {
    // Let's ask some questions.
    let answers = [];
    let response = await AthenaClient.rmlui.inputBox.create({
        placeholder: 'What is your first name?',
        blur: true,
        darken: false,
        hideHud: true,
    });
    answers.push(response);

    response = await AthenaClient.rmlui.inputBox.create({
        placeholder: 'What is your last name?',
        blur: true,
        darken: false,
        hideHud: true,
    });
    answers.push(response);
    console.log(`Final Responses: ${JSON.stringify(answers)}`);
}
```