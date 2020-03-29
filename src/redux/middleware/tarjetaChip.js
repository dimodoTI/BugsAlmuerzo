import {
    GRABAR,
    LEER,
    INTERPRETAR
} from "../actions/tarjetaChip";
import {
    enviarMensaje as operadoraEnviar
} from "../actions/operadora"



export const grabarProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GRABAR) {

    }
};

export const leerProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LEER) {

    }
};

export const interpretarProccess = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {}
};

export const middleware = [grabarProcces, leerProcces, interpretarProccess]