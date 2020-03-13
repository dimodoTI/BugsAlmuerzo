export const TRAER_USUARIO = "[tarjetaChipRecarga] TRAER_USUARIO"
export const GUARDAR_USUARIO = "[tarjetaChipRecarga] GUARDAR_USUARIO"
export const GUARDAR_IMPORTE_SALDO = "[tarjetaChipRecarga] GUARDAR_IMPORTE_SALDO"
export const GUARDAR_IMPORTE_RECARGA = "[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA"
export const GUARDAR_IMPORTE_RECARGA_DESCRIPCION = "[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA_DESCRIPCION"
export const GUARDAR_TARJETA_CREDITO_RECARGA = "[tarjetaChipRecarga] GUARDAR_TARJETA_CREDITO_RECARGA"

export const traerUsuario = (id) => ({
    type: TRAER_USUARIO,
    id: id
})

export const guardarUsuario = (usuario) => ({
    type: GUARDAR_USUARIO,
    usuario: usuario
})

export const guardarImporteSaldo = (saldo) => ({
    type: GUARDAR_IMPORTE_SALDO,
    saldo: saldo
})

export const guardarImporteRecarga = (recarga) => ({
    type: GUARDAR_IMPORTE_RECARGA,
    recarga: recarga
})

export const guardarTarjetaCreditoRecarga = (tarjeta) => ({
    type: GUARDAR_TARJETA_CREDITO_RECARGA,
    tarjeta: tarjeta
})