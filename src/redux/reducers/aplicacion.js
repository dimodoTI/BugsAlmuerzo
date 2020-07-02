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
    importes: null

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

            break;
    }
    return newState;
}