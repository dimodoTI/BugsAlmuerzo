import {
    interpretar
} from "../actions/aplicacion";
import {
    INTERPRETAR
} from "../actions/aplicacion";


const initialState = {
    menuTimeStamp: null,
    menu: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case INTERPRETAR:
            newState.menu = action.mensaje.data
            newState.menuTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
}