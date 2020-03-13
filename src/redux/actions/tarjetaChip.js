export const PING = "[tarjetaChip] PING"
export const INTERPRETAR = "[tarjetaChip] INTERPRETAR"
export const RECIBIR = "[tarjetaChip] RECIBIR"
export const ENVIAR = "[tarjetaChip] ENVIAR"


export const ping = () => ({
    type: PING
})

export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})

export const recibir = (codigo, saldo) => ({
    type: RECIBIR,
    codigo: codigo,
    saldo: saldo
})

export const enviar = (codigo, saldo, orden) => ({
    type: ENVIAR,
    codigo: codigo,
    saldo: saldo,
    orden: orden
})