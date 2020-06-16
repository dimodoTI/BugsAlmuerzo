import {
    INTERPRETAR,
    apagada,
    prendida,
    online,
    offline
} from "../actions/impresora";
import {
    store
} from "../store";

export const interpretarProccess = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === INTERPRETAR) {
        switch (action.mensaje.data) {
            case "on":
                store.dispatch(prendida())
                break;
            case "off":
                store.dispatch(apagada())
                break;
            case "online":
                store.dispatch(online())
                break;
            case "offline":
                store.dispatch(offline())
                break;
        }
    }
};

export const middleware = [interpretarProccess];