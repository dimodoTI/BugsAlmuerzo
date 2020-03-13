import {
  ODataFetchFactory,
  ODataEntity
} from "@brunomon/odata-fetch-factory";

let app = "ServiciosPrestador"
let dominio = "http://localhost/" + app
if (process.env.NODE_ENV == 'production') {
  dominio = window.location.protocol + "//" + window.location.hostname + "/" + app
}

const ServiciosPrestador = ODataFetchFactory({
  fetch: fetch,
  domain: dominio
});

export const usuario = ODataEntity(ServiciosPrestador, "Usuario")