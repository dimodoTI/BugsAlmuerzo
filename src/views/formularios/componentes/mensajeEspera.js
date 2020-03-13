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
import { modoPantalla, dispararTimer } from "../../../redux/actions/ui";
import { idiomas } from "../../../redux/datos/inicio/idioma/idiomas"
import { tiempos } from "../../../redux/datos/inicio/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
const TIEMPO = "ui.tiempo"
export class mensajeEspera extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.pantallaQueLLamo = "";
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:transparent;
            z-index:500; 
        }
        :host([hidden]){
            display: none;
        }
        .button {
            width: 9rem;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1.5rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #opacidad{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--pantalla-fondo-oscuro);
            opacity:0.6;           
        }
        #ventana{
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 60% auto;
            position: absolute;
            justify-items: center;
            align-items: center;
            bottom: .8rem;
            right: 1rem;  
            height: 12rem;
            width: 24rem;
            background-color:var(--pantalla-fondo-claro);
            color: var(--letra-clara);
            font-size: .8rem;
            border-radius: 2rem;
            border-style: solid;
            border-color:var(--color-precio);
            opacity: 1;
        }
        #titulo{
            display: grid;  
            justify-items: center;
            align-items: center;
            text-align: center;
            background-color:transparent;
            color: var(--letra-oscura);
            font-size: 2rem;
        }
        #botones{
            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: center;
            align-items: center;  
            background-color:transparent;
        }
        `
    }
    render() {
        return html`
        <div id="opacidad">
        </div>
        <div id="ventana">
            <div id="titulo">
                ${idiomas["ES"].paginas.mensajeEspera.mensaje
            }
            </div>
    <div id="botones">
        <input type="button" class="button" value=${idiomas["ES"].paginas.mensajeEspera.no} @click="${this.volver}">
                <input type="button" class="button" value=${idiomas["ES"].paginas.mensajeEspera.si} @click="${this.apagar}">
            </div>
        </div >
    `
    }
    volver() {
        store.dispatch(modoPantalla("inicio"))
    }
    apagar() {
        store.dispatch(modoPantalla(this.pantallaQueLLamo));
        this.hidden = true;
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "mensajeespera") {
            store.dispatch(dispararTimer(tiempos.mensajeespera.segundos, "inicio"))
            this.pantallaQueLLamo = state.ui.pantallaQueLLamo;
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
window.customElements.define("mensaje-espera", mensajeEspera);