export const PING = "[posNet] PING"
export const INTERPRETAR = "[posNet] INTERPRETAR"
export const RECIBIR = "[posNet] RECIBIR"
export const ENVIAR = "[posNet] ENVIAR"
export const COMANDO = "[posNet] COMANDO"
export const REINTENTO = "[posNet] REINTENTO"
export const COMANDO_TEST = "[posNet] COMANDO_TEST"


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

export const enviar = (comando, timeOut) => ({
    type: ENVIAR,
    comando: comando,
    timeOut: timeOut
})

export const ejecutarComando = (comando, timeOut) => ({
    type: COMANDO,
    comando: comando,
    timeOut: timeOut
})

export const reintentoComando = (comando, timeOut) => ({
    type: REINTENTO,
    comando: comando,
    timeOut: timeOut
})

export const comandoTest = () => ({
    type: COMANDO_TEST

})