import { CONECTAR, ENVIAR, RECIBIR } from "../actions/servidorBugs";
import { enviarMensaje } from "../actions/operadora";
import { modoPantalla } from "../actions/ui";


export const conectar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === CONECTAR) {
        dispatch(enviarMensaje("connect"))
    }
};

export const enviar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ENVIAR) {
        dispatch(enviarMensaje("$send:" + action.mensaje))
    }
};

export const recibir = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === RECIBIR) {
        if (action.mensaje == "$PR01!") {
            dispatch(modoPantalla("importe"))
        }
    }
};

export const middleware = [conectar, enviar, recibir]