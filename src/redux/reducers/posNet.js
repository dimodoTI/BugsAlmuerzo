import {
    COMANDO,
    INTERPRETAR,
    COMANDO_TEST,
    COMANDO_VENTA,
    COMANDO_CIERRE
} from "../actions/posNet";

import {
    LRC
} from "../datos/posNet/constantes"

const initialState = {
    respuesta: "",
    control: "",
    fin: false,
    correcto: false,
    respuestaTimeStamp: null,
    finDeMensaje: false,
    ultimoComando: null,
    ultimoTimeOut: null,
    operadorTimeOut: null,
    finTimeOut: null,
    reintentos: 0,
    comandos: []

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case COMANDO_TEST:
        case COMANDO_VENTA:
        case COMANDO_CIERRE:
            newState.reintentos = 0
            newState.respuesta = ""
            newState.control = ""
            newState.fin = false
            newState.correcto = false
            newState.comandos = action.comandos
            break;
        case COMANDO:
            if (newState.ultimoComando != action.comando) {
                newState.reintentos = 0
            }
            newState.ultimoComando = action.comando
            newState.ultimoTimeOut = action.timeOut
            newState.operadorTimeOut = action.operadorTimeOut
            if (newState.comandos[action.comando].fin) {
                newState.respuesta = ""
            }
            newState.control = ""
            newState.fin = false
            newState.correcto = false
            newState.finDeMensaje = false
            break;
        case INTERPRETAR:
            // si no es un timeout
            if (action.mensaje != "fallo") {
                //Armo el mensaje y compruebo el DV final.
                action.mensaje.split("").forEach(m => {
                    // si tiene DV lo toma y verifica
                    if (newState.fin) {
                        newState.control = m
                        newState.correcto = LRC(newState.respuesta.substr(2)) == m
                        newState.respuestaTimeStamp = (new Date()).getTime()
                        newState.finDeMensaje = true
                    } else {
                        //encadena el siguiente caracter
                        newState.respuesta += m
                        //si es igual a la respuesta esperada
                        if (newState.comandos[newState.ultimoComando].fin == m) {
                            // si no espera DV termina el mensaje
                            if (!newState.comandos[newState.ultimoComando].verificado) {
                                newState.correcto = true
                                newState.finDeMensaje = true
                                newState.fin = false
                            } else {
                                // si espera DV continua escucahndo un caracter mas
                                newState.fin = true
                            }
                        }
                    }
                })
            } else {
                newState.reintentos += 1
            }
            break;
    }
    return newState;
};