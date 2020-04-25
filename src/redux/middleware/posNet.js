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
        lanzarComando(getState().postNet, dispatch, 0)
    }
};


export const interpretarProccess = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        const postNet = getState().postNet
        //si es un timeout o no verifica el DV
        if (action.mensaje == "fallo" || (!postNet.correcto && postNet.finDeMensaje)) {
            if (postNet.reintentos < 3) {
                const espera = setTimeout(() => {
                    lanzarComando(postNet, dispatch, 0)
                }, 10000)
            } else {
                dispatch(showError("El posNet no responde"))
            }
        } else {
            //limpio el timeout porque el posNet esta respondiendo
            window.clearTimeout(postNet.ultimoTimeOut)
            //window.clearTimeout(postNet.ultimoTimeOut)
            if (postNet.finDeMensaje) {
                //limpio el timeOut del operador si lo hubiera
                if (postNet.operadorTimeOut) window.clearTimeout(postNet.operadorTimeOut)
                //ejecuto el proximo comando
                if (postNet.ultimoComando < postNet.comandos.length - 1) {
                    lanzarComando(postNet, dispatch, 1)
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
        const postNet = getState().postNet
        dispatch(operadoraEnviar({
            periferico: "posNet",
            comando: "write",
            subComando: postNet.comandos[action.comando].comando
        }))
    }
};

const lanzarComando = (postNet, dispatch, proximo) => {
    // si el comando espera un cacrater de fin de mensaje programa el timeout
    if (postNet.comandos[postNet.ultimoComando + proximo].fin) {
        const timeOut = setTimeout(() => {
            dispatch(interpretar("fallo"))
        }, 3000)
        // si el comando tiene un timeout por esperar acciones del operador
        let operadorTimeOut = null
        if (postNet.comandos[postNet.ultimoComando + proximo].timeOut) {
            operadorTimeOut = setTimeout(() => {
                dispatch(showError("El posNet no responde"))
            }, postNet.comandos[postNet.ultimoComando + proximo].timeOut)
        }
        dispatch(ejecutarComando(postNet.ultimoComando + proximo, timeOut, operadorTimeOut))
    } else {
        dispatch(ejecutarComando(postNet.ultimoComando + proximo))
    }
}


export const middleware = [ejecutarComandoProcces, interpretarProccess, test]