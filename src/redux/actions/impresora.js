export const INTERPRETAR = "[impresora] INTERPRETAR"
export const PRENDIDA = "[impresora] PRENDIDA"
export const APAGADA = "[impresora] APAGADA"
export const ONLINE = "[impresora] ONLINE"
export const OFFLINE = "[impresora] OFFLINE"


export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})
export const prendida = () => ({
    type: PRENDIDA
})
export const apagada = () => ({
    type: APAGADA
})
export const online = () => ({
    type: ONLINE
})
export const offline = () => ({
    type: OFFLINE
})