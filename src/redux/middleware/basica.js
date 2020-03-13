import { SUMA, resulta, RESTA, MULTIPLICACION, DIVISION } from "../actions/basicas";

export const sumar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === SUMA) {
        const salida = action.valor1 + action.valor2
        dispatch(resulta(salida))
    }
};

export const restar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === RESTA) {
        const salida = action.valor1 - action.valor2
        dispatch(resulta(salida))
    }
};

export const multiplicar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === MULTIPLICACION) {
        const salida = action.valor1 * action.valor2
        dispatch(resulta(salida))
    }
};

export const dividir = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === DIVISION) {
        let salida = 0
        if (action.valor2 != 0) {
            salida = action.valor1 / action.valor2
        }
        dispatch(resulta(salida))
    }
};

export const middleware = [sumar, restar, multiplicar, dividir]