import {
    interpretar
} from "../actions/aplicacion";
import {
    INTERPRETAR
} from "../actions/aplicacion";


const initialState = {
    menuTimeStamp: null,
    menu: null,
    usuariosTimeStamp: null,
    usuarios: null,
    importesTimeStamp: null,
    importes: null,
    tarjetas: null,
    tarjetasTimeStamp: null,
    horarios: null,
    horariosTimestamp: null

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case INTERPRETAR:
            if (action.mensaje.subComando == "/data/usuarios.json") {
                newState.usuarios = action.mensaje.data
                newState.usuariosTimeStamp = (new Date()).getTime()
            }
            if (action.mensaje.subComando == "/data/menu.json") {
                newState.menu = action.mensaje.data
                newState.menuTimeStamp = (new Date()).getTime()
            }
            if (action.mensaje.subComando == "/data/importesPrecarga.json") {
                newState.importes = action.mensaje.data
                newState.importesTimeStamp = (new Date()).getTime()
            }
            if (action.mensaje.subComando == "/data/tarjetas.json") {
                newState.tarjetas = action.mensaje.data
                newState.tarjetasTimeStamp = (new Date()).getTime()
            }
            if (action.mensaje.subComando == "/data/horarios.json") {
                newState.horarios = action.mensaje.data
                newState.horariosTimestamp = (new Date()).getTime()
            }

            break;
    }
    return newState;
}