export const INTERPRETAR = "[aplicacion] Interpretar"
export const PEDIR_ARCHIVO = "[aplicacion] Pedir Archivo"
export const GUARDAR_LOG_VENTA = "[aplicacion] Guardar log venta"


export const pedirArchivo = (mensaje) => ({
    type: PEDIR_ARCHIVO,
    mensaje: mensaje
})
export const guardarLogVenta = (mensaje) => ({
    type: GUARDAR_LOG_VENTA,
    mensaje: mensaje
})
export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})