import { sumar, multiplicar, restar, dividir } from '../math'

describe('Calculos matematicos', () => {
    test('Pruebas de sumas', () => {
        expect(sumar(1,1)).toBe(2)
    })
    test('Pruebas de multiplicacion', () => {
        expect(multiplicar(2,2)).toBe(4)
    })
    test('Pruebas de resta', () => {
        expect(restar(6,2)).toBe(4)
    })
    test('Pruebas de division', () => {
        expect(dividir(6,2)).toBe(3)
    })
})
