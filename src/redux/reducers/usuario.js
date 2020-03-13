import {
    FETCH_SUCCESS,
    CLEAN
} from "../actions/usuario";

const initialState = {
    entities: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case FETCH_SUCCESS:
            if (action.payload.receive.length != 0) {
                newState.entities = action.payload.receive[0]
            } else {
                newState.entities = {
                    Nombre: "Usuario sin permisos",
                    UsuarioPrestador: []
                }
            }

            break;
        case CLEAN:
            newState.entities = null
            break;
    }
    return newState;
};