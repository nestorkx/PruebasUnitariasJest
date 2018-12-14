import { callbackHell} from "../callbacks"

describe('Probando un callback', () => {
    test('Callback', (done) => {
        function otherCallback(data) {
            // Este va a fallar intencionalmente porque no es igual al callback declarado
            // expect(data).toBe('Hola Javascripters!')
            expect(data).toBe('Hola Javascripters')
            done()
        }
        callbackHell(otherCallback)
    })
})
