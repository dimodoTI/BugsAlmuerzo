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
import { modoPantalla, dispararTimer, errorTitulo, errorMensaje, ERROR_MENSAJE, ERROR_TITULO } from "../../../redux/actions/ui";
import { idiomas } from "../../../redux/datos/tarjetachip/idioma/idiomas"
import { tiempos } from "../../../redux/datos/inicio/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaMensajeError extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100vh;
            width: 100vw;
            background-color:transparent;
            z-index:500; 
        }
        :host([hidden]){
            display: none; 
        }
        .button {
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
        #cuerpo{
            display: grid;
            position: absolute;
            top: 25vh;
            left: 30vw;  
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 50vh;
            width: 40vw;   
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100%;
            width: 100%;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;
            border-radius: 2rem;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--color-error);           
            opacity: 0.5;
            height: 100%;
            width: 100%;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
            border-radius: 2rem;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 30% 45% auto;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 100%;             
            border-radius: 2rem;
        }
        #titulo{
            background-color:transparent;
            padding-left:2rem;
            padding-right:1rem;
            font-size:2.5rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #mensaje{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:2rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #tarjetaChip{
            width: 100%;   
            height: 100%;
            display:grid;
            justify-items: start;
            align-items: center;
        }
        @keyframes lector {
            0% {top:16.8rem;}
            50% {top:14.2rem;opacity:1;}             
            100% {top:14.2rem;opacity:0;}  
        }
        @keyframes imacolor {
            from{opacity: 0.4;} to {opacity: 0.8;}
        }
        `
    }
    render() {
        return html`
        <div id="opacidad">
        </div>
        <div id="cuerpo">
            <div id="fondoimagen01">
            </div>
            <div id="fondocolor">
            </div>
            <div id="fondocuerpo">
                <div id="titulo">
                    ${store.getState().ui.errorTitulo.mensaje}
                </div>
                <div id="mensaje">
                    ${store.getState().ui.errorMensaje.mensaje}
                </div>
                <div >
                    <input type="button" class="button" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
                </div>
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "error") {
            //            store.dispatch(dispararTimer(tiempos.error.segundos, "viandatarjetachiplectura", "mensajeerror"))
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

    volver() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo))
    }

    proximaPantalla() {
        store.dispatch(guardarImporteSaldo(120))
        store.dispatch(guardarUsuario({ id: 1, nombre: "Sergio Ferro" }))
        store.dispatch(modoPantalla("tarjetachipseleccionimporte"))
    }
}
window.customElements.define("pantalla-mensajeerror", pantallaMensajeError);