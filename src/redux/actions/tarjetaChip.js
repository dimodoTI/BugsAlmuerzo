export const INTERPRETAR = "[tarjetaChip] INTERPRETAR"
export const GRABAR = "[tarjetaChip] GRABAR"
export const LEER = "[tarjetaChip] LEER"


export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})

export const gabar = (importe) => ({
    type: GRABAR,
    importe: importe
})

export const leer = () => ({
    type: LEER,

})