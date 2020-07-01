import {
    INTERPRETAR,
    PEDIR_ARCHIVO

} from "../actions/aplicacion";
import {
    enviarMensaje
} from "../actions/operadora"
import {
    store
} from "../store";

export const pedirArchivo = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === PEDIR_ARCHIVO) {
        dispatch(enviarMensaje(action.mensaje))
    }
};
export const interpretar = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {


    }
};



export const middleware = [interpretar, pedirArchivo];