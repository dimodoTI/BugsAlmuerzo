import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    store
} from "../redux/store";
import {
    boton
} from "./css/boton"
import {
    LOGIN,
    LOGOUT
} from "../../assets/icons/icons"
import { conectar } from "../redux/actions/servidorBugs";
import { pantallaInicio } from "../views/formularios/inicio/inicio"
import { cuentaRegresiva } from "../views/formularios/componentes/cuentaRegresiva"
import { mensajeEspera } from "../views/formularios/componentes/mensajeEspera"
import { pantallaMensajeError } from "../views/formularios/inicio/mensajeError"
import { pantallaMensajeFueraLinea } from "../views/formularios/inicio/mensajeFueraLinea"

import { pantallaTarjetaChipLectura } from "../views/formularios/tarjetachip/tarjetaChipLectura"
import { pantallaTarjetaChipSeleccionImporte } from "../views/formularios/tarjetachip/tarjetaChipSeleccionImporte"
import { pantallaTarjetaChipSeleccionTarjetaCredito } from "../views/formularios/tarjetachip/tarjetachipSeleccionTarjetaCredito"
import { pantallacargaTarjetaCreditoPosNet } from "../views/formularios/tarjetachip/cargaTarjetaCreditoPosNet"
import { pantallaTarjetaChipRecargaExito } from "../views/formularios/tarjetachip/tarjetachipRecargaExito"

import { pantallaViandaTarjetaChipLectura } from "../views/formularios/vianda/viandaTarjetachipLectura"
import { pantallaViandaSeleccionTipoMenu } from "../views/formularios/vianda/viandaSeleccionTipoMenu"
import { pantallaViandaSeleccionMenu } from "../views/formularios/vianda/viandaSeleccionMenu"
import { pantallaViandaMenuAceptacion } from "../views/formularios/vianda/viandaMenuAceptacion"
import { pantallaViandaMenuExito } from "../views/formularios/vianda/viandaMenuExito"

import { connect } from "@brunomon/helpers/connect";

const QUEPANTALLA = "ui.timeStampPantalla"
export class viewManager extends connect(store, QUEPANTALLA)(LitElement) {
    constructor() {
        super();
        this.current = "Titulo";
    }

    static get styles() {
        return css`
            :host {
                height: 100%;
                width: 100%;
            }
            #inicio{
                align-self:top;
                height: 100%;
                width: 100%;
            }            
            #status{
                align-self:end;
            }
        `
    }
    render() {
        return html
            `<cuenta-regresiva></cuenta-regresiva>
        <mensaje-espera id="mensajeespera"></mensaje-espera>
        <pantalla-mensajeerror id="mensajeerror"></pantalla-mensajeerror>
        <pantalla-mensajefueralinea id="fueralinea"></pantalla-mensajefueralinea>

        <pantalla-inicio id="inicio"></pantalla-inicio>
        <pantalla-tarjetachiplectura id="tarjetachiplectura"></pantalla-tarjetachiplectura>
        <pantalla-tarjetachipseleccionimporte id="tarjetachipseleccionimporte"></pantalla-tarjetachipseleccionimporte>
        <pantalla-tarjetachipselecciontarjetacredito id="tarjetachipselecciontarjetacredito"></pantalla-tarjetachipselecciontarjetacredito>
        <pantalla-cargatarjetacreditoposnet id="cargatarjetacreditoposnet"></pantalla-cargatarjetacreditoposnet>
        <pantalla-tarjetachiprecargaexito id="tarjetachiprecargaexito"></pantalla-tarjetachiprecargaexito>

        <pantalla-viandatarjetachiplectura id="viandatarjetachiplectura"></pantalla-viandatarjetachiplectura>
        <pantalla-viandaselecciontipomenu id="viandaselecciontipomenu"></pantalla-viandaselecciontipomenu>
        <pantalla-viandaseleccionmenu id="viandaseleccionmenu"></pantalla-viandaseleccionmenu>
        <pantalla-viandamenuaceptacion id="viandamenuaceptacion"></pantalla-viandamenuaceptacion>
        <pantalla-viandamenuexito id="viandamenuexito"></pantalla-viandamenuexito>`
    }

    conectar() {
        store.dispatch(conectar())
    }

    currentTitulo() {
        return this.current;
    }
    stateChanged(state, name) {
        if (name == QUEPANTALLA) {
            if (state.ui.quePantalla != "mensajeespera" && state.ui.quePantalla != "error" && state.ui.quePantalla != "fueralinea") {
                this.shadowRoot.querySelector("#inicio").hidden = state.ui.quePantalla != "inicio"

                this.shadowRoot.querySelector("#tarjetachiplectura").hidden = state.ui.quePantalla != "tarjetachiplectura"
                this.shadowRoot.querySelector("#tarjetachipseleccionimporte").hidden = state.ui.quePantalla != "tarjetachipseleccionimporte"
                this.shadowRoot.querySelector("#tarjetachipselecciontarjetacredito").hidden = state.ui.quePantalla != "tarjetachipselecciontarjetacredito"
                this.shadowRoot.querySelector("#cargatarjetacreditoposnet").hidden = state.ui.quePantalla != "cargatarjetacreditoposnet"
                this.shadowRoot.querySelector("#tarjetachiprecargaexito").hidden = state.ui.quePantalla != "tarjetachiprecargaexito"

                this.shadowRoot.querySelector("#viandatarjetachiplectura").hidden = state.ui.quePantalla != "viandatarjetachiplectura"
                this.shadowRoot.querySelector("#viandaselecciontipomenu").hidden = state.ui.quePantalla != "viandaselecciontipomenu"
                this.shadowRoot.querySelector("#viandaseleccionmenu").hidden = state.ui.quePantalla != "viandaseleccionmenu"
                this.shadowRoot.querySelector("#viandamenuaceptacion").hidden = state.ui.quePantalla != "viandamenuaceptacion"
                this.shadowRoot.querySelector("#viandamenuexito").hidden = state.ui.quePantalla != "viandamenuexito"
            }
            this.shadowRoot.querySelector("#fueralinea").hidden = state.ui.quePantalla != "fueralinea"
            this.shadowRoot.querySelector("#mensajeespera").hidden = state.ui.quePantalla != "mensajeespera"
            this.shadowRoot.querySelector("#mensajeerror").hidden = state.ui.quePantalla != "error"

            this.update()
        }
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
            orientation: {
                type: String,
                reflect: true
            },
            logged: {
                type: String,
                reflect: true
            }
        }
    }
}
window.customElements.define("view-manager", viewManager);