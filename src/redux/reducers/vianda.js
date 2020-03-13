import { GUARDAR_TIPO_MENU, GUARDAR_MENU } from "../actions/vianda";

const initialState = {
    tipoMenu: null,
    tipoMenuTimeStamp: null,
    menu: null,
    menuTimeStamp: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GUARDAR_TIPO_MENU:
            newState.tipoMenu = action.tipoMenu
            newState.tipoMenuTimeStamp = (new Date()).getTime()
            break;
        case GUARDAR_MENU:
            newState.menu = action.menu
            newState.menuTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};