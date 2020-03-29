import {
    GRABAR,
    LEER,
    INTERPRETAR
} from "../actions/tarjetaChip";
import {
    enviarMensaje as operadoraEnviar
} from "../actions/operadora";
import {
    TARJETACHIP
} from "../datos/inicio/datos/dispositivos";

export const grabarProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GRABAR) {}
};

export const leerProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LEER) {
        dispatch(
            operadoraEnviar("#" + TARJETACHIP + "#>L" + String.fromCharCode(parseInt("0A", 16)))
        );

    }
};

export const interpretarProccess = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {}
};

export const middleware = [grabarProcces, leerProcces, interpretarProccess];