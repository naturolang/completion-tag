import { completion } from './index'

describe('completion', () => {
    test('SHOULD create completion without arguments', async () => {
        const got = await completion`Please echo the following to prove we can communicate: "hello"`
        console.log(got)
    }, 6000)
    test('SHOULD create completion with one argument', async () => {
        const got = await completion`Please echo the following to prove we can communicate: ${"hello"}`
        console.log(got)
    }, 6000)
    test('SHOULD create completion with multiple arguments', async () => {
        const got = await completion`Please echo the following to prove we can communicate: ${"hello"}, ${"world"}!`
        console.log(got)
    }, 6000)
})