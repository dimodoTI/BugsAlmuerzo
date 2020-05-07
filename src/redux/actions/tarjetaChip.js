export const INTERPRETAR = "[tarjetaChip] INTERPRETAR"
export const GRABAR = "[tarjetaChip] GRABAR"
export const LEER = "[tarjetaChip] LEER"
export const SERVICIO = "[tarjetaChip] SERVICIO"
export const BUFFER = "[tarjetaChip] BUFFER"
export const SET_DATOS = "[tarjetaChip] SET_DATOS"
export const ERROR_EN_TARJETA = "[tarjetaChip] ERROR_EN_TARJETA"
export const SERVICIO_ACERTADO = "[tarjetaChip] SERVICIO_ACERTADO"
export const SERVICIO_ERROR = "[tarjetaChip] SERVICIO_ERROR"


export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})

export const grabar = (importe) => ({
    type: GRABAR,
    importe: importe
})

export const leer = () => ({
    type: LEER,

})

export const servicio = (activo) => ({
    type: SERVICIO,
    activo: activo
})

export const buffer = (cadena) => ({
    type: BUFFER,
    cadena: cadena

})

export const setDatos = (usuario, importe, colocada) => ({
    type: SET_DATOS,
    usuario: usuario,
    importe: importe,
    colocada: colocada
})

export const errorEnTarjeta = (error) => ({
    type: ERROR_EN_TARJETA,
    error: error
})

export const servicioAcertado = () => ({
    type: SERVICIO_ACERTADO
})
export const servicioError = () => ({
    type: SERVICIO_ERROR
})