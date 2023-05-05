import { completion } from './index'

describe('completion', () => {
    test('SHOULD create completion', async () => {
        const got = await completion`Please echo the following to prove we can communicate: "hello"`
        console.log(got)
    })
})