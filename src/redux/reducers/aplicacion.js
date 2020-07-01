import {
    interpretar
} from "../actions/aplicacion";
import {
    INTERPRETAR
} from "../actions/aplicacion";


const initialState = {
    timeStamp: null,
    entities: {
        menu: null,
        menuTipo: null
    }
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case INTERPRETAR:
            if (action.mensaje.subComando == "/data/menu.json") {
                newState.entities.menu = action.mensaje.data
            }
            if (action.mensaje.subComando == "/data/menuTipo.json") {
                newState.entities.menuTipo = action.mensaje.data
            }
            if (newState.entities.menu && newState.entities.menuTipo) {
                newState.timeStamp = (new Date()).getTime()
            }
            break;
    }
    return newState;
};