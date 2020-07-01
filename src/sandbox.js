import {} from "../css/main.css";
import {} from "../css/nunito.css";
import {} from "../css/fontSizes.css";
import {} from "../css/colors.css";
import {} from "../css/shadows.css";


import {
  conectar,
  enviar
} from "./redux/actions/servidorBugs";
import {
  modoPantalla
} from "./redux/actions/ui";
import {
  store
} from "../src/redux/store";

import {
  viewManager
} from "./views/manager";
import {
  recibirMensaje,
  enviarMensaje
} from "./redux/actions/operadora";
import {
  pedirArchivo
} from "./redux/actions/aplicacion"

export let connection = null;

const ipAddress = "localhost";

const url = "ws://" + ipAddress + ":9000/";

connection = new WebSocket(url);

connection.onopen = () => {
  store.dispatch(enviarMensaje({
    periferico: "aplicacion",
    comando: "info",
    data: "websocket conectado!!"
  }))

  store.dispatch(pedirArchivo({
    periferico: "aplicacion",
    comando: "getJsonFile",
    subComando: "/data/menu.json"
  }))
  store.dispatch(pedirArchivo({
    periferico: "aplicacion",
    comando: "getJsonFile",
    subComando: "/data/menuTipo.json"
  }))
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (e) => {
  store.dispatch(recibirMensaje(e));
};