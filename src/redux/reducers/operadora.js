import { RECIBIR_MENSAJE } from "../actions/operadora";

const initialState = {
    mensajeRecibido: null,
    recibidoTimeStamp: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case RECIBIR_MENSAJE:
            newState.mensajeRecibido = action.mensaje
            newState.recibidoTimeStamp = (new Date()).getTime()

            break;
    }
    return newState;
};