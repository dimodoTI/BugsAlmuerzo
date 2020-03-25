import {
    POST
} from "../datos/inicio/datos/dispositivos"
import {
    COMANDO,
    ejecutarComando,
    reintentoComando,
    interpretar,
    COMANDO_TEST,
    INTERPRETAR
} from "../actions/posNet";
import {
    enviarMensaje as operadoraEnviar
} from "../actions/operadora"
import {
    showError
} from "../actions/ui";
import {
    store
} from "../store"


const ACK = String.fromCharCode(6)
const NACK = String.fromCharCode(21)
const ENQ = String.fromCharCode(5)
const STX = String.fromCharCode(2)
const ETX = String.fromCharCode(3)

export const test = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === COMANDO_TEST) {

        const timeOut = setTimeout(() => {
            dispatch(interpretar("fallo"))
        }, 3000)
        dispatch(ejecutarComando(0, timeOut))

    }
};

export const interpretarProccess = ({

    dispatch

}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        const ultimo = store.getState().postNet.ultimoComando
        if (store.getState().postNet.finDeMensaje) {
            if (action.mensaje == "fallo" || !store.getState().postNet.correcto) {
                if (store.getState().postNet.reintentos < 3) {
                    const espera = setTimeout(() => {
                        const timeOut = setTimeout(() => {
                            dispatch(interpretar("fallo"))
                        }, 3000)
                        dispatch(ejecutarComando(ultimo, timeOut))
                    }, 10000)
                } else {
                    dispatch(showError("El posNet no responde"))
                }
            } else {

                if (ultimo < store.getState().postNet.comandos.length - 1) {
                    // si espera respuesta pongo el timeout
                    if (store.getState().postNet.comandos[ultimo + 1].respuesta) {
                        const timeOut = setTimeout(() => {
                            dispatch(interpretar("fallo"))
                        }, 3000)


                        dispatch(ejecutarComando(ultimo + 1, timeOut))
                    } else {


                        dispatch(ejecutarComando(ultimo + 1))
                    }
                }

            }
        }
    }
}


export const ejecutarComandoProcces = ({

    dispatch
}) => next => action => {
    next(action);
    if (action.type === COMANDO) {
        dispatch(operadoraEnviar(store.getState().postNet.comandos[action.comando].comando))
    }
};




export const middleware = [ejecutarComandoProcces, interpretarProccess, test]