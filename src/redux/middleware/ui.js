import {
    get as getUsuario,
    clean as cleanUsuario
} from "../actions/usuario";
import {
    DISPARAR_TIMER,
    setTimer,
    setContador,
    MOSTRAR_ERROR
} from "../actions/ui";
import {
    modoPantalla,
    dispararTimer as dispararTimerAction
} from "../actions/ui";
import {
    tiempos
} from "../datos/inicio/datos/tiempoEspera"

export const dispararTimer = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === DISPARAR_TIMER) {
        const timer = setTimeout(function () {
            dispatch(modoPantalla(action.target));
        }, action.tiempo * 1000)
        const intervalo = setInterval(function () {
            dispatch(setContador());
        }, 1000)
        dispatch(setTimer(timer, intervalo, action.tiempo, action.pantallaQueLLamo))
    }
};

/* export const mostrarError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === MOSTRAR_ERROR) {
        dispatch(modoPantalla(action.target))
        dispatch(dispararTimerAction(tiempos.error.segundos, action.pantallaQueLLamo, action.pantallaQueLLamo))
    }
}; */

export const middleware = [dispararTimer];