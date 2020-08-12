import {
    GRABAR,
    LEER,
    INTERPRETAR,
    SERVICIO,
    buffer,
    setDatos,
    errorEnTarjeta,
    servicioAcertado,
    conectado,
    desconectado
} from "../actions/tarjetaChip";
import {
    enviarMensaje as operadoraEnviar
} from "../actions/operadora";
import {
    TARJETACHIP
} from "../datos/inicio/datos/dispositivos";
import {
    modoPantalla
} from "../actions/ui";

export const grabarProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GRABAR) {

        dispatch(operadoraEnviar({
            periferico: "tarjetaChip",
            comando: "write",
            subComando: ">G," + (action.importe * 100).toString(16).toUpperCase().padStart(6, "0")
        }))
    }
};

export const leerProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LEER) {
        dispatch(operadoraEnviar({
            periferico: "tarjetaChip",
            comando: "write",
            subComando: ">L"
        }))
    }
};


export const servicioProcces = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === SERVICIO) {
        if (action.activo) {
            dispatch(operadoraEnviar({
                periferico: "tarjetaChip",
                comando: "set",
                subComando: "on"
            }))
            //dispatch(operadoraEnviar("#" + TARJETACHIP + "#>s1" + String.fromCharCode(parseInt("0A", 16))))
        } else {
            dispatch(operadoraEnviar({
                periferico: "tarjetaChip",
                comando: "set",
                subComando: "off"
            }))
            //dispatch(operadoraEnviar("#" + TARJETACHIP + "#>s0" + String.fromCharCode(parseInt("0A", 16))))
        }
    }
};

const ejecutarNextActions = (dispatch, nextActions) => {
    if (nextActions) {
        nextActions.forEach(action => {
            dispatch(action)
        })
    }
}
export const interpretarProccess = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        decodeURIComponent(action.mensaje.data).split("").forEach(m => {
            if (m.charCodeAt(0) != 10 && m.charCodeAt(0) != 16) {
                dispatch(buffer(m))
            } else {
                const respuestas = getState().tarjetaChip.buffer.split(",")
                if (respuestas.length == 3) {
                    let usuario = parseInt(respuestas[0].substr(1), 16)
                    let importe = parseInt(respuestas[1], 16) / 100
                    let status = parseInt(respuestas[2], 16)
                    let colocada = false
                    switch (status) {
                        case 5:
                            colocada = false
                            //dispatch(modoPantalla("inicio"))
                            ejecutarNextActions(dispatch, getState().tarjetaChip.nextActions)
                            break
                        case 0:
                            colocada = true
                            ejecutarNextActions(dispatch, getState().tarjetaChip.nextActions)
                            break
                        case 9: //desconectada
                            dispatch(desconectado())
                            break;
                        case 1: //conectada
                            dispatch(conectado())
                            break;
                        default:
                            colocada = true
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