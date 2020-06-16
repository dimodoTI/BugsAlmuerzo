import {
    PRENDIDA,
    APAGADA,
    ONLINE,
    OFFLINE
} from "../actions/impresora";


const initialState = {
    prendidaTimeStamp: null,
    apagadaTimeStamp: null,
    onlineTimeStamp: null,
    offlineTimeStamp: null

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case PRENDIDA:
            newState.prendidaTimeStamp = (new Date()).getTime()
            break;
        case APAGADA:
            newState.apagadaTimeStamp = (new Date()).getTime()
            break;
        case ONLINE:
            newState.onlineTimeStamp = (new Date()).getTime()
            break;
        case OFFLINE:
            newState.offlineTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};