import { SUMA, RESTA, MULTIPLICACION, DIVISION, RESULTADO } from "../actions/basicas";

const initialState = {
    resultado: null, 
    ultimaAccion: null,
    timeStamp: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case SUMA || RESTA || MULTIPLICACION || DIVISION:
            newState.ultimaAccion = action.type
            break;
        case RESULTADO:
            newState.resultado = action.resultado
            newState.timeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};