import {
    INTERPRETAR,
    GRABAR,
    LEER,
    SET_DATOS,
    SERVICIO,
    BUFFER,
    SERVICIO_ACERTADO,
    SERVICIO_ERROR,
    ERROR_EN_TARJETA

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
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case SERVICIO:
            newState.buffer = ""
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
            newState.buffer = ""
            newState.errorServicioTimeStamp = (new Date()).getTime()
            break
        case ERROR_EN_TARJETA:
            newState.buffer = ""
            newState.errorEnTarjeta = (new Date()).getTime()
            break
        case SET_DATOS:
            newState.buffer = ""
            newState.usuario = action.usuario
            newState.credito = action.importe
            newState.colocada = action.colocada
            newState.respuestaTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};