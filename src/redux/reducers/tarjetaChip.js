import {
    INTERPRETAR,
    GRABAR,
    LEER

} from "../actions/tarjetaChip";


const initialState = {
    buffer: "",
    usuario: null,
    credito: null,
    status: null,
    colocada: false,
    respuestaTimeStamp: null,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case INTERPRETAR:
            action.mensaje.split("").forEach(m => {
                if (m.charCodeAt(0) != 16) {
                    newState.buffer += m
                } else {
                    const respuestas = newState.buffer.split(",")
                    newState.usuario = parseInt(respuestas[0].substr(1), 16)
                    newState.credito = parseInt(respuestas[1], 16)
                    newState.status = parseInt(respuestas[2], 16)
                    if (newState.status == 5) newState.colocada = false
                    if (newState.status == 0) newState.colocada = true
                    newState.buffer = ""
                    newState.respuestaTimeStamp = (new Date()).getTime()
                }
            })
            break;
    }
    return newState;
};