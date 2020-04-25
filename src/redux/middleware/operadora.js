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
} from "../datos/inicio/datos/dispositivos";
import {
    interpretar as tarjetaChipInterpretar
} from "../actions/tarjetaChip";
import {
    interpretar as posNetInterpretar
} from "../actions/posNet";

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
        }

        /*         if (action.mensaje.data.indexOf("$") == 0) {
                        dispatch(recibirBugs(action.mensaje.data))
                    }
             */ //console.log(action.mensaje)
    }
};

export const middleware = [enviar, recibir];