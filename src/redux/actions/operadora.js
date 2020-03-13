export const ENVIAR_MENSAJE = "[servidorWS] ENVIAR_MENSAJE"
export const RECIBIR_MENSAJE = "[servidorWS] RECIBIR_MENSAJE"

export const enviarMensaje = (mensaje) => ({
    type: ENVIAR_MENSAJE,
    mensaje: mensaje
})

export const recibirMensaje = (mensaje) => ({
    type: RECIBIR_MENSAJE,
    mensaje: mensaje
})