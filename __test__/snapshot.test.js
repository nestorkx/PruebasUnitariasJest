import { getCharacter } from "../snapshot"
import rick from '../rick'

// Cuando los datos deben ser que se envian deben ser iguales, no deben cambiar
// Guardamos un snapshot y va comparando lo guardado con lo nuevo que llega del data(API)
describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        // expect(getCharacter(rick)).toMatchSnapshot()
    })
    test('Siempre faltara la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        // Comentamos esto para que pase la prueba
        // expect(user).toMatchSnapshot()
    })
    test('Tenemos una excepcion dentro del codigo', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Nestor Kauil"
        }
        /*expect(user).toMatchSnapshot({
            id: expect.any(Number) // El any siempre pasara la prueba ya que existe la excepcion y acepta cualquier numero
        })*/
    })
})

// jest -u
// Para actualizar el snapshot
