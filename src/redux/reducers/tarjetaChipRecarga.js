import { GUARDAR_USUARIO, GUARDAR_IMPORTE_SALDO, GUARDAR_IMPORTE_RECARGA, GUARDAR_TARJETA_CREDITO_RECARGA } from "../actions/tarjetachipRecarga";

const initialState = {
    usuario: null,
    usuarioTimeStamp: null,
    saldo: null,
    saldoTimeStamp: null,
    recarga: null,
    recargaTimeStamp: null,
    tarjeta: null,
    tarjetaTimeStamp: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GUARDAR_USUARIO:
            newState.usuario = action.usuario
            newState.usuarioTimeStamp = (new Date()).getTime()
            break;
        case GUARDAR_IMPORTE_SALDO:
            newState.saldo = action.saldo
            newState.saldoTimeStamp = (new Date()).getTime()
            break;
        case GUARDAR_IMPORTE_RECARGA:
            newState.recarga = action.recarga
            newState.recargaTimeStamp = (new Date()).getTime()
            break;
        case GUARDAR_TARJETA_CREDITO_RECARGA:
            newState.tarjeta = action.tarjeta
            newState.tarjetaTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};