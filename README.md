# completion-tag

A TypeScript library that leverages OpenAI's GPT-3.5 Turbo for simple and efficient chat-based text completions.

## Overview

`completion-tag` is a simple-to-use TypeScript library designed to interact with OpenAI's GPT-3.5 Turbo model. It streamlines the process of sending requests and receiving completions from the AI, making it easier for developers to integrate the model into their applications. By using a template literal tag, developers can quickly pass their text prompts to the AI and receive a response.

## Usage

Simple:

```typescript
import { completion } from 'completion-tag'

const got = await completion`Please echo the following to prove we can communicate: "hello"`
console.log(got)
// "hello"
```

See tests for more examples.

## Author

- [C. Large](https://github.com/chantzlarge)
