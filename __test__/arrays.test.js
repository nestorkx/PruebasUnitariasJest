import { arrayFruits, arrayColors } from "../arrays"

// Pruebas para arreglos
describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana')
        // expect(arrayFruits()).toContain('platano')
    })
    test('No contiene un Platano', () => {
        expect(arrayFruits()).not.toContain('platano')
    })
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6)
    })
    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul')
    })
})
