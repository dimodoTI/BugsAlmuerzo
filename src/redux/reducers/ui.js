import {
    SHOW_SPINNER,
    HIDE_SPINNER,
    SHOW_ERROR,
    HIDE_ERROR,
    MEDIA_SIZE_CHANGE,
    MEDIA_ORIENTATION_CHANGE,
    LOGGED,
    MODO_PANTALLA,
    ERROR_TITULO,
    ERROR_MENSAJE,
    CANCELAR_TIMER,
    SET_TIMER,
    SET_CONTADOR,
    MOSTRAR_ERROR
} from "../actions/ui";

const initialState = {
    loading: 0,
    errorVisible: false,
    errorMessages: null,
    mediaSize: null,
    mediaOrientation: null,
    logged: "out",
    timeStampPantalla: null,
    errorTitulo: "",
    errorMensaje: "",
    errorTimeStamp: null,
    errorConBotonVolver: true,
    quePantalla: "inicio",
    timer: null,
    intervalo: null,
    tiempo: null,
    pantallaQueLLamo: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case SHOW_SPINNER:
            newState.loading += 1;
            break;
        case HIDE_SPINNER:
            newState.loading -= 1;
            break;
        case SHOW_ERROR:
            newState.errorVisible = true
            newState.errorMessages = action.message
            break;
        case HIDE_ERROR:
            newState.errorVisible = false
            newState.errorMessages = ""
            break;
        case MEDIA_SIZE_CHANGE:
            newState.mediaSize = action.media
            break;
        case MEDIA_ORIENTATION_CHANGE:
            newState.mediaOrientation = action.media
            break;
        case LOGGED:
            newState.logged = action.inOut
            break;
        case MODO_PANTALLA:
            newState.timeStampPantalla = (new Date()).getTime()
            newState.quePantalla = action.quePantalla
            break;
        case ERROR_TITULO:
            newState.errorTitulo = action.errorTitulo
            break;
        case ERROR_MENSAJE:
            newState.errorMensaje = action.errorMensaje
            break;
        case SET_TIMER:
            if (newState.timer) clearTimeout(newState.timer)
            if (newState.intervalo) clearInterval(newState.intervalo)
            newState.timer = action.timer
            newState.intervalo = action.intervalo
            newState.tiempo = action.tiempo
            newState.pantallaQueLLamo = action.pantallaQueLLamo
            break;
        case CANCELAR_TIMER:
            if (newState.timer) clearTimeout(newState.timer)
            if (newState.intervalo) clearInterval(newState.intervalo)
            break;
        case SET_CONTADOR:
            if (newState.tiempo > 0) newState.tiempo -= 1
            break;
        case MOSTRAR_ERROR:
            newState.errorTitulo = action.titulo
            newState.errorMensaje = action.mensaje
            newState.errorConBotonVolver = action.conBotonVolver
            newState.errorTimeStamp = (new Date()).getTime()
            break;
    }
    return newState;
};