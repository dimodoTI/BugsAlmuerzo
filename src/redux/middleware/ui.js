import {
    get as getUsuario,
    clean as cleanUsuario
} from "../actions/usuario";
import {
    DISPARAR_TIMER, setTimer, setContador
} from "../actions/ui";
import { modoPantalla } from "../actions/ui";

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


export const middleware = [dispararTimer];
