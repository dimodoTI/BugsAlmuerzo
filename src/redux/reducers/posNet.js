import { COMANDO, INTERPRETAR } from "../actions/posNet";
const ETX = String.fromCharCode(3)
const initialState = {
    respuesta: "",
    control: "",
    fin: false,
    correcto: false,
    respuestaTimeStamp: null,
    ultimoComando: null,
    reintentos: 0
};
const LRC = texto => {
    let a = 0
    for (let i = 0; i < texto.length; i++) {
        console.log(texto.substr(i, 1).charCodeAt(0).toString(16))
        a = a ^ (texto.substr(i, 1).charCodeAt(0))

    }
    console.log(String.fromCharCode(a & 255))
    return String.fromCharCode(a & 255)
}
export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case COMANDO:
            newState.respuestaTimeStamp = (new Date()).getTime()
            newState.ultimoComando = action.comando
            newState.reintentos = 0
            newState.respuesta = ""
            newState.control = ""
            newState.fin = false
            newState.correcto = false
            break;
        case INTERPRETAR:
            console.log(action.mensaje.split(""))
            action.mensaje.split("").forEach(m => {

                if (newState.fin) {
                    newState.control = m

                    newState.correcto = LRC(newState.respuesta + ETX) == m
                    newState.respuestaTimeStamp = (new Date()).getTime()

                } else if (m == ETX) {
                    newState.fin = true
                } else {
                    newState.respuesta += m
                }
            })
            break;
        case INTERPRETAR:
            newState.reintentos += 1
            break;
    }
    return newState;
};