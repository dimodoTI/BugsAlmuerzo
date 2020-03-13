export const CONECTAR = "[servidorBugs] CONECTAR"
export const RECIBIR = "[servidorBugs] RECIBIR"
export const ENVIAR = "[servidorBugs] ENVIAR"

export const conectar = () => ({
    type: CONECTAR
})

export const recibir = (mensaje) => ({
    type: RECIBIR,
    mensaje: mensaje
})

export const enviar = (mensaje) => ({
    type: ENVIAR,
    mensaje: mensaje
})