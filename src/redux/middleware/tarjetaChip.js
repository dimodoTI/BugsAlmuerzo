import { ENVIAR, RECIBIR, PING, INTERPRETAR } from "../actions/tarjetaChip";
import { enviarMensaje as operadoraEnviar } from "../actions/operadora"
const dispositivo = "tarjetaChip"

export const ping = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === PING) {
        operadoraEnviar(dispositivo + ":PING")
    }
};

export const enviar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ENVIAR) {
        operadoraEnviar(dispositivo + ":" + action.orden + ":" + action.codigo + ":" + action.saldo)
    }
};

export const interpretar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {


    }
};