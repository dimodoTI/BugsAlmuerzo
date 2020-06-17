import {
    PRENDIDA,
    APAGADA,
    ONLINE,
    OFFLINE,
    online
} from "../actions/impresora";


const initialState = {
    prendidaTimeStamp: null,
    apagadaTimeStamp: null,
    onlineTimeStamp: null,
    offlineTimeStamp: null,
    on: false,
    online: false

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case PRENDIDA:
            newState.prendidaTimeStamp = (new Date()).getTime()
            newState.on = true;
            break;
        case APAGADA:
            newState.apagadaTimeStamp = (new Date()).getTime()
            newState.on = false
            break;
        case ONLINE:
            newState.onlineTimeStamp = (new Date()).getTime()
            newState.online = true;
            break;
        case OFFLINE:
            newState.offlineTimeStamp = (new Date()).getTime()
            newState.online = false
            break;
    }
    return newState;
};