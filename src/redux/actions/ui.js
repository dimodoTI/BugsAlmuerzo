export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";
export const SHOW_ERROR = "[ui] show error";
export const HIDE_ERROR = "[ui] hide error";
export const MEDIA_SIZE_CHANGE = "[ui] media size change";
export const MEDIA_ORIENTATION_CHANGE = "[ui] media orientation change";
export const LOGGED = "[ui] LOGGED"
export const MODO_PANTALLA = "[ui] MODO_PANTALLA"
export const ERROR_TITULO = "[ui] ERROR_TITULO"
export const ERROR_MENSAJE = "[ui] ERROR_MENSAJE"
export const DISPARAR_TIMER = "[ui] DISPARAR_TIMER"
export const CANCELAR_TIMER = "[ui] CANCELAR_TIMER"
export const SET_TIMER = "[ui] SET_TIMER"
export const SET_CONTADOR = "[ui] SET_CONTADOR"
export const MOSTRAR_ERROR = "[ui] MOSTRAR_ERROR"


export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
export const showError = (message) => ({
  type: SHOW_ERROR,
  message: message
});
export const hideError = () => ({
  type: HIDE_ERROR
});

export const mediaChangeToSmall = () => ({
  type: MEDIA_SIZE_CHANGE,
  media: "small"
});
export const mediaChangeToMedium = () => ({
  type: MEDIA_SIZE_CHANGE,
  media: "medium"
});
export const mediaChangeToLarge = () => ({
  type: MEDIA_SIZE_CHANGE,
  media: "large"
});
export const mediaChangeToPortrait = () => ({
  type: MEDIA_ORIENTATION_CHANGE,
  media: "portrait"
});
export const mediaChangeToLandscape = () => ({
  type: MEDIA_ORIENTATION_CHANGE,
  media: "landscape"
});
export const logged = (inOut) => ({
  type: LOGGED,
  inOut: inOut
});
export const modoPantalla = (quePantalla) => ({
  type: MODO_PANTALLA,
  quePantalla: quePantalla
});
export const errorTitulo = (errorTitulo) => ({
  type: ERROR_TITULO,
  errorTitulo: errorTitulo
});
export const errorMensaje = (errorMensaje) => ({
  type: ERROR_MENSAJE,
  errorMensaje: errorMensaje
});
export const dispararTimer = (tiempo, target, pantallaQueLLamo) => ({
  type: DISPARAR_TIMER,
  tiempo: tiempo,
  target: target,
  pantallaQueLLamo: pantallaQueLLamo
});
export const setTimer = (timer, intervalo, tiempo, pantallaQueLLamo) => ({
  type: SET_TIMER,
  timer: timer,
  intervalo: intervalo,
  tiempo: tiempo,
  pantallaQueLLamo: pantallaQueLLamo
});
export const cancelarTimer = () => ({
  type: CANCELAR_TIMER
});
export const setContador = (tiempo) => ({
  type: SET_CONTADOR,
  tiempo: tiempo
});
export const mostrarError = (titulo, mensaje, target, pantallaQueLLamo) => ({
  type: MOSTRAR_ERROR,
  titulo: titulo,
  mensaje: mensaje,
  target: target,
  pantallaQueLLamo: pantallaQueLLamo
});
