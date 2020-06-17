import {
    INTERPRETAR,
    GRABAR,
    LEER,
    SET_DATOS,
    SERVICIO,
    BUFFER,
    SERVICIO_ACERTADO,
    SERVICIO_ERROR,
    ERROR_EN_TARJETA,
    CONECTADO,
    DESCONECTADO

} from "../actions/tarjetaChip";


const initialState = {
    buffer: "",
    colocada: null,
    usuario: null,
    credito: null,
    enServicio: false,
    enServicioTimeStamp: null,
    errorServicioTimeStamp: null,
    errorEnTarjeta: null,
    respuestaTimeStamp: null,
    conectado: false,
    nextActions: []
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GRABAR:
            newState.nextActions = action.nextActions
            break;
        case LEER:
            newState.nextActions = []
            break;
        case SERVICIO:
            newState.buffer = ""
            newState.nextActions = []
            newState.enServicio = action.activo
            break
        case BUFFER:
            newState.buffer += action.cadena
            break
        case SERVICIO_ACERTADO:
            newState.buffer = ""
            newState.enServicioTimeStamp = (new Date()).getTime()
            break
        case SERVICIO_ERROR:
            newState.nextActions = []
            newState.buffer = ""
            newState.errorServicioTimeStamp = (new Date()).getTime()
            break
        case ERROR_EN_TARJETA:
            newState.nextActions = []
            newState.buffer = ""
            newState.errorEnTarjeta = (new Date()).getTime()
            break
        case SET_DATOS:
            newState.nextActions = []
            newState.buffer = ""
            newState.usuario = action.usuario
            newState.credito = action.importe
            newState.colocada = action.colocada
            newState.respuestaTimeStamp = (new Date()).getTime()
            break;
        case CONECTADO:
            newState.conectado = true
            break
        case DESCONECTADO:
            newState.conectado = false
            break
    }
    return newState;
};