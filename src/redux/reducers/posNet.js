import {
    COMANDO,
    INTERPRETAR,
    COMANDO_TEST
} from "../actions/posNet";

import {
    POST
} from "../datos/inicio/datos/dispositivos"

const ACK = String.fromCharCode(6)
const NACK = String.fromCharCode(21)
const ENQ = String.fromCharCode(5)
const STX = String.fromCharCode(2)
const ETX = String.fromCharCode(3)

const TEST = "TES" + String.fromCharCode(0) + String.fromCharCode(0)

const initialState = {
    respuesta: "",
    control: "",
    fin: false,
    correcto: false,
    respuestaTimeStamp: null,
    finDeMensaje: false,
    ultimoComando: null,
    ultimoTimeOut: null,
    reintentos: 0,
    comandos: []

};
const LRC = texto => {
    let a = 0
    for (let i = 0; i < texto.length; i++) {
        a = a ^ (texto.substr(i, 1).charCodeAt(0))
        //console.log(texto.substr(i, 1).charCodeAt(0))
    }
    //console.log(String.fromCharCode(a & 255))
    return String.fromCharCode(a & 255)
}
export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case COMANDO_TEST:
            newState.reintentos = 0
            newState.respuesta = ""
            newState.control = ""
            newState.fin = false
            newState.correcto = false
            newState.comandos = [{
                    comando: "#" + POST + "#" + ENQ,
                    respuesta: ACK,
                    verificado: false
                },
                {
                    comando: "#" + POST + "#" + STX + TEST + ETX + LRC(TEST + ETX),
                    respuesta: ETX,
                    verificado: true
                },
                {
                    comando: "#" + POST + "#" + ACK,
                    respuesta: null,
                    verificado: false
                }
            ]
            break;
        case COMANDO:
            if (newState.ultimoComando != action.comando) {
                newState.reintentos = 0
            }
            newState.ultimoComando = action.comando
            newState.ultimoTimeOut = action.timeOut
            if (newState.comandos[action.comando].respuesta) {
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
                window.clearTimeout(newState.ultimoTimeOut)
                newState.ultimoTimeOut = 0
                //Armo el mensaje y compruebo el DV final y limpio el timeOut cuando termino el mensaje.
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
                        if (newState.comandos[newState.ultimoComando].respuesta == m) {
                            // si no espera DV termina el mensaje
                            if (!newState.comandos[newState.ultimoComando].verificado) {
                                newState.correcto = true
                                newState.respuestaTimeStamp = (new Date()).getTime()
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