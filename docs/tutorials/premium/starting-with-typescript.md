---
title: 'TypeScript Tutorial'
order: -98
comment: false
---

# Starting with TypeScript

```info
This was originally a premium article, but releasing for free.
```

The main programming language that Athena uses is TypeScript which is a 'TypeSafe' version of JavaScript. This probably means nothing to you if you have never programmed before and that is OKAY.

Anyway, this tutorial is very basic and will cover some general programming information for TypeScript. It will include general data manipulation, and how to read code in a step-by-step manner.

Obviously if you want something more in-depth you should seek deeper tutorials on YouTube but I consider this all the necessary knowledge you will likely need to build with the Athena Framework.

Let's talk about reading code first.

## How to Read Code

If you have never seen a piece of code before it can be a bit overwhelming at first because there's a bunch of `English` mixed with symbols such as `{}()![]`.

That being said, code reads from top to bottom in most cases and can often by read like an instruction manual telling you what page to jump to.

```ts
// Declares a function - has not executed yet
function something1() {
    console.log('Hello');
}

// Declares a function - has not executed yet
function something2() {
    console.log('World');
}

something2(); // Executes something2 first
something1(); // Executes something1 second

// See what I mean about how it jumps around?
// When executed this would print 'World' 'Hello' in console.
```

[Try Executing this Code](https://www.typescriptlang.org/play)

## Variables

If you have ever taken an algebra course or some basic math classes you were often told that you need to solve for `X` or something of the sort. `X` was a variable in that case.

Now `X` can technically be ANYTHING; which means we can store anything we want inside of `X`. Think of `X` like a box you put something inside of it; but you're unsure of what it could be.

Keep in mind that `X` can be named `ANYTHING` that you want. We're just using `X` here to create a link between some old math teachings and modern programming.

Let me give you an example. We utilize the keyword `let` to declare a variable that can be changed and **does not** have a constant state.

```ts
let x;

x = 'its a string';
console.log(x);

x = 5; // it is now a number
console.log(x);

x = true; // it is now a boolean
console.log(x);

x = {}; // it is now an Object
console.log(x);

x = []; // it is now an Array
console.log(x);
```

[Try Executing this Code](https://www.typescriptlang.org/play)

## Defining Types on Variables

However, not declaring a type for a variable in TypeScript is considered bad practice when we are unsure of what the value may be or if we expect it to only allow a certain type.

So let's talk about declaring a `type` on a variable.

A `type` comes in a few different flavors.

-   number
    -   Actual numbers
-   string
    -   Represents words, letters, numbers, etc.
-   Object
    -   Represents a container that contains other types.
-   boolean
    -   Represents a true or false statement
-   function

    -   The variable can be executed by applying `()` to the end

-   undefined
    -   The variable does not have a value at all.
-   null
    -   The variable was purposely defined as null.

There's quite a few types; but let's put some of this knowledge into practice so you can see how it looks.

When you define a variable with a type in TypeScript you apply the `type` after the variable's name.

```ts
let a: string = 'This is a string and only accepts strings.';

let b: number = 5; // This is a number and only accepts numbers.

let c: Object = {}; // This is an object, and only accepts objects.

let d: boolean = true; // This can only be a boolean (true / false)
```

Arrays however, can be a little more complex because they can contain a `list` of items inside of it. Here's how a list of values may look.

We are defining an array of strings.

```ts
let myList: string[] = ['value1', 'value2', 'value3'];

// This can also be defined in another way.
// There is no difference, just use whatever is easier to read.

let myListAgain: Array<string> = ['value1', 'value2', 'value3'];
```

## Operators

When you want to combine, subtract, multiply, divide, etc. we have a few letters that can be used together to create the result you are looking for.

Take a look at the code below to understand a bit more.

We are introducing `const` here which means the value is not expected to change after the result is created.

### Equals

Checks if two values are equal to each other.

```ts
let x = 1;
let y = 1;

const result = x === y;
console.log(result); // true
```

### Addition

```ts
let x = 1;
let y = 1;

// Add two variables together, print the result.
const result = x + y;
console.log(result); // 2

// Alternatively we can add 'y' directly to 'x' and print x.
x += y;
console.log(x); // 2
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### Subtraction

```ts
let x = 1;
let y = 1;

// Subtract two variables, print the result.
const result = x - y;
console.log(result); // 0

// Alternatively we can subtract 'y' directly from 'x'.
x -= y;
console.log(x); // 0
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### Multiply

```ts
let x = 1;
let y = 2;

// Multiply two variables
const result = x * y;
console.log(result); // 2

// Alternatively we can multiply 'x' directly by 'y'.
x *= y;
console.log(x); // 2
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### Divide

```ts
let x = 4;
let y = 2;

// Divide two variables
const result = x / y;
console.log(result); // 2

// Alternatively we can divide 'x' directly by 'y'.
x /= y;
console.log(x); // 2
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### Greater Than & Less Than

When you want to compare two values to see which is larger you can do this by using the less than and greater than operators.

Using these operators always returns a `true` or `false` value.

```ts
let x = 2;
let y = 4;

// Is X greater than Y?
const result = x > y;
console.log(result); // false

// Is X less than Y?
const anotherResult = x < y;
console.log(anotherResult); // true
```

[Try Executing this Code](https://www.typescriptlang.org/play)

We can also further define these variables with a `is greater than or equal to` or `is less than or equal to`.

This is asking if the value is exactly this value, or less than it.

```ts
let x = 4;
let y = 4;

// Is X less than or equal to Y?
const result = x <= y;
console.log(result); // true
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### If Statements

This is where things start to get a bit more complex.

When we introduce statements that tell the computer to do something you need to think of it like very granual instructions. Computers are incredibly dumb, and you have to tell them exactly what you want them to do.

This is why an `if` statement exists.

Let's start with basic `if` statement that if the value in the variable `name` is equal to a certain value it will print out a result.

```ts
const name = 'stuyk';

if (name === 'stuyk') {
    console.log('Their name is stuyk.');
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Pretty simple right? Okat let's add a few other names in this code block to compare against. This is considered 'bad practice' to write statements like this; but let's show you some amateur programming.

```ts
const name = 'stuyk';

if (name === 'stuyk') {
    console.log('Their name is stuyk.');
}

if (name === 'jones') {
    console.log('Their name is jones.');
}

if (name === 'lord') {
    console.log('Their name is lord.');
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

A lot of online examples will tell you to write `if` statements like this instead, which is also valid and gets the same result.

```ts
const name = 'stuyk';

if (name === 'stuyk') {
    console.log('Their name is stuyk.');
} else if (name === 'jones') {
    console.log('Their name is jones.');
} else if (name === 'lord') {
    console.log('Their name is lord.');
} else {
    console.log('I have no idea who this is.');
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

It looks awful, reads awful and isn't any better. Now let's dive into a `switch` statement so you can see an alterantive way to handle this same statement.

### Switch Statements

Switch statements take an initial value and you write a `case` which a value equals a certain value.

```ts
const name = 'stuyk';

switch (name) {
    case 'stuyk':
        console.log('Their name is stuyk');
        break; // Exits this switch statement
    case 'jones':
        console.log('Their name is jones');
        break;
    case 'lord':
        console.log('Their name is lord');
        break;
    default:
        console.log('I have no idea who this is.');
        break;
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

This still reads really bad and I almost never use switch statements in practice. That's my own opinion though.

Here's how I might write this code to simply print out what the user's name is.

```ts
const name = 'stuyk';
console.log('Their name is ' + name);
```

### Working with Functions

Now maybe we want to make a function that prints someone's name and only takes valid values. This is what we can use TypeScript for.

First lets create a function. There are effectively two ways to write a function.

```ts
// These both do the same thing, there is no difference.
function doSomething() {
    console.log('hi');
}

const doSomethingAgain = () => {
    console.log('hi');
};
```

Functions can take what we call an `argument` or `args` that let us define parameters to pass into the function to utilize inside of the function.

```ts
// name is now a defined variable inside of the `doSomething` function.
function doSomething(name: string) {
    console.log(name);
}
```

Executing a function can be done by writing the function again; just **without declaring** it as a function.

```ts
// name is now a defined variable inside of the `doSomething` function.
function doSomething(name: string) {
    console.log(name);
    // Prints: 'stuyk'
}

// Like this
doSomething('stuyk');
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Now we can actually define as many arguments as we want into a function which is really useful for larger functions.

```ts
function doSomething(first: string, last: string, age: number) {
    console.log(first, last, age);
    // Prints: stuyk, soft, 29
}

// Like this
doSomething('stuyk', 'soft', 29);
```

[Try Executing this Code](https://www.typescriptlang.org/play)

We can also make a function `return` a value at the end. Let's say we want to construct information about the user to console log.

We can define a return type at the end of a function with `:` at the end of the function before the open curly bracket. Notice how the code belows returns a `string`.

```ts
function doSomething(first: string, last: string, age: number): string {
    return `${first} ${last} has an age of ${age}`;
}

// Like this
const info = doSomething('stuyk', 'soft', 29);
console.log(info);
```

[Try Executing this Code](https://www.typescriptlang.org/play)

### Working with Objects & Interfaces

However, having too many arguments in a function is something that can happen very often and I would like to offer an alternative to this. When you have too many arguments in an function, you should use an `object` instead.

We can use an `interface` to define what an `object` should look like.

```ts
interface User {
    first: string;
    last: string;
    age: number;
}

function doSomething(data: User) {
    console.log(data.first, data.last, data.age);
    // Prints: stuyk, soft, 29

    // alternatively can be accessed like this:
    console.log(data['first']);
}

doSomething({ first: 'stuyk', last: 'soft', age: 29 });
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Why do we want to do this? We do this because now we only have to add new property types to the `User` interface without modifying the utility of the function itself. This allows us to add new data quickly without having inflated arguments in the function declaration.

### Working with Arrays & Loops

Arrays can be incredibly tricky to understand. I will try my best to make them as simple as possible given the circumstances of this tutorial and its short scope. The goal is to show you how to access an item in the array, add a new item, and remove an item.

Let's start off by writing an array.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];
```

Now let's access the first item inside of the array. Indexes start at `0` which means the first element of the array is always going to be `0`.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];

console.log(fruits[0]); // banana
```

To access the next element in the array we can increment the number to `1`.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];

console.log(fruits[1]); // apple
```

Okay, pretty simple but what if we want to print `all` of the fruit available in this array one by one? We can use a `for loop` to achieve this.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];

// Starts at index 0, and increments until it runs out of entries in the array.
for (let fruit of fruits) {
    console.log(fruit);
}

// Alternatively we can write a for loop like this
// These are useful when you are using the index values for other parts of your code.
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Okay great we can loop through an array, and we know how to access certain values. What if I'm looking for a specific value inside of the array and I want to know its index value to access it later.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];
const fruitToFind = 'apple';

let foundIndex = -1;
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit === fruitToFind) {
        foundIndex = 1;
        break; // Exit the array, and continue in the code below.
    }
}

if (foundIndex === -1) {
    console.log('fruit not found');
} else {
    console.log(`Found the fruit at: ${foundIndex}`);
    console.log(`Fruit name is: ${fruits[foundIndex]}`);
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Alright, that's a bit complex. I just wanted to show you the broken down version of an algorithm that exists already. Let's do it the simple way now.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];
const fruitToFind = 'apple';

let foundIndex = fruits.findIndex((x) => x === fruitToFind);
if (foundIndex === -1) {
    console.log('fruit not found');
} else {
    console.log(`Found the fruit at: ${foundIndex}`);
    console.log(`Fruit name is: ${fruits[foundIndex]}`);
}
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Excellent! That's much easier to read. This also allows us to make a comparison to determine if the value exists in the array, or use the index to access the array somewhere else in our code base.

Now let's move on to adding some new fruit to our fruits `array`. Let's add an `orange` to the array and a non-fruit item like a `basket`.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];

fruits.push('orange');
fruits.push('basket');

console.log(fruits);
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Oops! We added a basket to our array. Maybe we should remove the basket from our `fruits` array because it is not a fruit.

Let's `splice` that item out of our array. We'll need to figure out what `index` our `basket` is located at.

```ts
const fruits: string[] = ['banana', 'apple', 'pear'];
const nonFruit = 'basket';

fruits.push('orange');
fruits.push('basket');

let foundIndex = fruits.findIndex((x) => x === nonFruit);
if (foundIndex <= -1) {
    console.log('did not find the basket');
} else {
    fruits.splice(foundIndex, 1); // Use the index, and remove 1 element.
}

console.log(fruits);
```

[Try Executing this Code](https://www.typescriptlang.org/play)

Great! We've now removed the element from the array. Perfect!

## What Now?

You hopefully now understand some of the basics revolving around programming but the only thing you can do to get better is to `try and write programs`. There is nothing that can be done by myself, or anyone else to get you better at programming.

Remember that you will not understand anything until you put at least put `100 Hours` of work into something. However, what you get out of programming is only determined by the quality of the work that you put into understanding what you are writing.

I have spent well over `25,000` hours programming in my life time. I am not a master by any means, and never will be. I am constantly humbled by others who are more proficient than myself or have deeper understanding of programming.

**The only way to be successful in programming is by writing code by yourself. There is no other way. Put in the work and you will see the results.**
