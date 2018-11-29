// Pruebas con objetos
describe('Comparadores comunes', () => {
    const user = {
      name: 'Nestor',
      lastname: 'Kauil'
    }
    const user2 = {
      name: 'Julian',
      lastname: 'Kauil'
    }
    test('Igualdad de elementos', () => {
      expect(user).toEqual(user2)
    })
    // Prueba que se cumpla que no son iguales
    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2)
    })
})
