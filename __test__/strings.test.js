describe('Comprobar cadenas de texto', () => {
    const text = 'es bonito texto'
    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/)
    })
    // Este va a fallar intencionalmente, porque tiene la palabra "es"
    // y aqui le esta diciendo que no tiene
    /*test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/es/)
    })*/
    test('Comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15)
    })
})
