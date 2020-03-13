export const SUMA = "[basicas] SUMA"
export const RESTA = "[basicas] RESTA"
export const MULTIPLICACION = "[basicas] MULTIPLICACION"
export const DIVISION = "[basicas] DIVISION"
export const RESULTADO = "[basicas] RESULTADO"

export const sumar = (valor1, valor2) => ({
    type: SUMA, 
    valor1: valor1,
    valor2: valor2
})

export const restar = (valor1, valor2) => ({
    type: RESTA, 
    valor1: valor1,
    valor2: valor2
})

export const multiplicar = (valor1, valor2) => ({
    type: MULTIPLICACION, 
    valor1: valor1,
    valor2: valor2
})

export const dividir = (valor1, valor2) => ({
    type: DIVISION, 
    valor1: valor1,
    valor2: valor2
})

export const resulta = (resultado) => ({
    type: RESULTADO,
    resultado: resultado
})