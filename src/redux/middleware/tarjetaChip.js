import {
    GRABAR,
    LEER,
    INTERPRETAR,
    SERVICIO,
    buffer,
    setDatos,
    errorEnTarjeta,
    servicioAcertado
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
        dispatch(operadoraEnviar("#" + TARJETACHIP + "#>L" + String.fromCharCode(parseInt("0A", 16))))
    }
};


export const servicioProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === SERVICIO) {
        if (action.activo) {
            dispatch(operadoraEnviar("#" + TARJETACHIP + "#>s1" + String.fromCharCode(parseInt("0A", 16))))
        } else {
            dispatch(operadoraEnviar("#" + TARJETACHIP + "#>s0" + String.fromCharCode(parseInt("0A", 16))))
        }
    }
};


export const interpretarProccess = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        action.mensaje.split("").forEach(m => {
            if (m.charCodeAt(0) != 16) {
                dispatch(buffer(m))
            } else {
                const respuestas = getState().tarjetaChip.buffer.split(",")
                if (respuestas.length == 3) {
                    let usuario = parseInt(respuestas[0].substr(1), 16)
                    let importe = parseInt(respuestas[1], 16)
                    let status = parseInt(respuestas[2], 16)
                    let colocada = false
                    switch (status) {
                        case 5:
                            colocada = false
                            break
                        case 0:
                            colocada = true
                            break
                        default:
                            dispatch(errorEnTarjeta(status))
                            break
                    }

                    dispatch(setDatos(usuario, importe, colocada))
                }
                if (respuestas.length == 1) {
                    if (JSON.parse(respuestas[0])) {
                        dispatch(servicioAcertado())
                    } else {
                        dispatch(servicioError())
                    }
                }
            }
        })

    }
};

export const middleware = [grabarProcces, leerProcces, interpretarProccess, servicioProcces];