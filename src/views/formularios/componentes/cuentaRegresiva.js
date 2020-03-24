import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    store
} from "../../../redux/store";
import {
    connect
} from "@brunomon/helpers";

const MODO_PANTALLA = "ui.timeStampPantalla"
const TIEMPO = "ui.tiempo"

export class cuentaRegresiva extends connect(store, MODO_PANTALLA, TIEMPO)(LitElement) {
    constructor() {
        super();
        this.tiempo = 0;
        this.hidden = true;
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: .8rem;
            right: 1rem;  
            height: 2rem;
            width: 2rem;
            background-color:var(--pantalla-fondo-oscuro);
            color: var(--letra-clara);
            z-index:1000; 
            font-size: 1rem;
            border-radius: 50%;
        }
        :host([hidden]){
            display: none;
        }
        `
    }
    render() {
        return html`
            ${this.tiempo}
        `
    }
    stateChanged(state, name) {
        if (name == TIEMPO) {
            this.tiempo = state.ui.tiempo
            this.update()
        }
        if (name == MODO_PANTALLA) {
            if (state.ui.quePantalla == "inicio" || state.ui.quePantalla == "fueralinea") {
                this.hidden = true
            } else {
                this.hidden = false
            }
            this.update()
        }
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true
            }
        }
    }

}
window.customElements.define("cuenta-regresiva", cuentaRegresiva);