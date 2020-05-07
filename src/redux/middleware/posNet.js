import {
    COMANDO,
    ejecutarComando,
    interpretar,
    COMANDO_TEST,
    COMANDO_VENTA,
    INTERPRETAR,
    COMANDO_CIERRE
} from "../actions/posNet";
import {
    enviarMensaje as operadoraEnviar
} from "../actions/operadora"
import {
    showError
} from "../actions/ui";



export const test = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === COMANDO_TEST || action.type === COMANDO_VENTA || action.type === COMANDO_CIERRE) {
        lanzarComando(getState().posNet, dispatch, 0)
    }
};


export const interpretarProccess = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        const posNet = getState().posNet
        //si es un timeout o no verifica el DV
        if (action.mensaje == "fallo" || (!posNet.correcto && posNet.finDeMensaje)) {
            if (posNet.reintentos < 3) {
                const espera = setTimeout(() => {
                    lanzarComando(posNet, dispatch, 0)
                }, 10000)
            } else {
                dispatch(showError("El posNet no responde"))
            }
        } else {
            //limpio el timeout porque el posNet esta respondiendo
            window.clearTimeout(posNet.ultimoTimeOut)
            //window.clearTimeout(posNet.ultimoTimeOut)
            if (posNet.finDeMensaje) {
                //limpio el timeOut del operador si lo hubiera
                if (posNet.operadorTimeOut) window.clearTimeout(posNet.operadorTimeOut)
                //ejecuto el proximo comando
                if (posNet.ultimoComando < posNet.comandos.length - 1) {
                    lanzarComando(posNet, dispatch, 1)
                }
            }
        }
    }
}

export const ejecutarComandoProcces = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === COMANDO) {
        const posNet = getState().posNet
        dispatch(operadoraEnviar({
            periferico: "posNet",
            comando: "write",
            subComando: posNet.comandos[action.comando].comando
        }))
    }
};

const lanzarComando = (posNet, dispatch, proximo) => {
    // si el comando espera un cacrater de fin de mensaje programa el timeout
    if (posNet.comandos[posNet.ultimoComando + proximo].fin) {
        const timeOut = setTimeout(() => {
            dispatch(interpretar("fallo"))
        }, 3000)
        // si el comando tiene un timeout por esperar acciones del operador
        let operadorTimeOut = null
        if (posNet.comandos[posNet.ultimoComando + proximo].timeOut) {
            operadorTimeOut = setTimeout(() => {
                dispatch(showError("El posNet no responde"))
            }, posNet.comandos[posNet.ultimoComando + proximo].timeOut)
        }
        dispatch(ejecutarComando(posNet.ultimoComando + proximo, timeOut, operadorTimeOut))
    } else {
        dispatch(ejecutarComando(posNet.ultimoComando + proximo))
    }
}


export const middleware = [ejecutarComandoProcces, interpretarProccess, test]