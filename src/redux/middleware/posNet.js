import { POST, LECTORLED } from "../datos/inicio/datos/dispositivos"
import { COMANDO, ejecutarComando, reintentoComando, COMANDO_TEST, INTERPRETAR } from "../actions/posNet";
import { enviarMensaje as operadoraEnviar } from "../actions/operadora"

const ACK = String.fromCharCode(6)
const NACK = String.fromCharCode(21)
const ENQ = String.fromCharCode(5)
const STX = String.fromCharCode(2)
const ETX = String.fromCharCode(3)

export const test = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === COMANDO_TEST) {

    }
};

export const interpretar = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {

        /* if (action.mensaje != ACK) {
            if (store.getState().posNet.intentos < 3) {
                setTimeout(function () {
                    dispatch(reintentoComando(store.getState().posNet.ultimoComando))
                }, 10000)
            } else {
                //// disparar Accion de Error
            }
        } else {
            //// Disprar Accion de Todo Ok
        } */
    }
};

export const operadoraEjecutarComando = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === COMANDO) {
        const LRC = texto => {
            let a = 0
            for (let i = 0; i < texto.length; i++) {
                a = a ^ (texto.substr(i, 1).charCodeAt(0))

            }
            return String.fromCharCode(a & 255)
        }
        dispatch(operadoraEnviar("#" + POST + "#" + ENQ))
        setTimeout(function () { dispatch(operadoraEnviar("#" + POST + "#" + STX + action.comando + ETX + LRC(action.comando + ETX))) }, 5000)
        setTimeout(function () { dispatch(operadoraEnviar("#" + POST + "#" + ACK)) }, 1000)
    }
};

export const middleware = [operadoraEjecutarComando, interpretar, test]