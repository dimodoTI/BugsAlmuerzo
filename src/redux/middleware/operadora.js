import {
    ENVIAR_MENSAJE,
    RECIBIR_MENSAJE
} from "../actions/operadora";
import {
    connection
} from "../../sandbox";
import {
    enviar as enviarBugs,
    recibir as recibirBugs,
} from "../actions/servidorBugs";
import {
    TARJETACHIP,
    POST,
    LECTORLED,
    IMPRESORA,
    APLICACION
} from "../datos/inicio/datos/dispositivos";
import {
    interpretar as tarjetaChipInterpretar
} from "../actions/tarjetaChip";
import {
    interpretar as posNetInterpretar
} from "../actions/posNet";
import {
    interpretar as impresoraInterpretar
} from "../actions/impresora";
import {
    interpretar as aplicacionInterpretar
} from "../actions/aplicacion";

export const enviar = ({
    dispatch
}) => (next) => (action) => {
    next(action);
    if (action.type === ENVIAR_MENSAJE) {
        connection.send(action.mensaje);
    }
};

export const recibir = ({
    dispatch
}) => (next) => (action) => {
    next(action);
    if (action.type === RECIBIR_MENSAJE) {
        const mensaje = action.mensaje;

        switch (mensaje.periferico) {
            case TARJETACHIP:
                dispatch(tarjetaChipInterpretar(mensaje));
                break;
            case POST:
                dispatch(posNetInterpretar(mensaje));
                break;
            case LECTORLED:
                break;
            case IMPRESORA:
                dispatch(impresoraInterpretar(mensaje))
                break
            case APLICACION:
                dispatch(aplicacionInterpretar(mensaje))
                break;
        }

    }
};

export const middleware = [enviar, recibir];