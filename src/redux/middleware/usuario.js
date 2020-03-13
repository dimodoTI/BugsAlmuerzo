import {
    usuario
} from "../fetchs.js";
import {
    GET,
    FETCH_SUCCESS,
    FETCH_ERROR,
} from "../actions/usuario";
import {
    showSpinner,
    hideSpinner,
    showError
} from "../actions/ui";
import {
    apiRequest,
} from "../actions/api";

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        dispatch(apiRequest(usuario, action.options, FETCH_SUCCESS, FETCH_ERROR));
        dispatch(showSpinner());
    }
};
export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === FETCH_SUCCESS) {
        dispatch(hideSpinner());
    }
};
export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === FETCH_ERROR) {
        dispatch(hideSpinner());
        dispatch(showError(action.payload.message));
    }
};

export const middleware = [get, processGet, processError];