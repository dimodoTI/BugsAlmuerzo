import { } from "../css/main.css"
import { } from "../css/nunito.css"
import { } from "../css/fontSizes.css"
import { } from "../css/colors.css"
import { } from "../css/shadows.css"
import { conectar, enviar } from "./redux/actions/servidorBugs";
import { modoPantalla } from "./redux/actions/ui"
import {
    store
} from "../src/redux/store"

import {
    viewManager
} from "./views/manager"
import { recibirMensaje, enviarMensaje } from "./redux/actions/operadora"

const url = 'ws://10.1.6.47:9000/'
export const connection = new WebSocket(url)

connection.onopen = () => {
    connection.send('webSocket Activo')
    //store.dispatch(conectar())
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
    store.dispatch(recibirMensaje(e))

}

//store.dispatch(modoPantalla("inicio"))