import {
    INTERPRETAR,
    PEDIR_ARCHIVO,
    GUARDAR_LOG_VENTA

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
    if (action.type === PEDIR_ARCHIVO || action.type == GUARDAR_LOG_VENTA) {
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