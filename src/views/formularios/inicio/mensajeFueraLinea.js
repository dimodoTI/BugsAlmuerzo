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
import { modoPantalla, dispararTimer, errorTitulo, errorMensaje, ERROR_MENSAJE, ERROR_TITULO, cancelarTimer } from "../../../redux/actions/ui";
import { idiomas } from "../../../redux/datos/tarjetachip/idioma/idiomas"
import { idiomas as idiomaInicio } from "../../../redux/datos/inicio/idioma/idiomas"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaMensajeFueraLinea extends connect(store, MODO_PANTALLA)(LitElement) {
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
            left: 20vw;  
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 40vh;
            width: 60vw;   
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100%;
            width: 100%;   
            background-image:var(--imagen-fuera-servicio);
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
            grid-template-rows: 45% auto;
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
            font-size:3rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        @keyframes imacolor {
            from{opacity: 0.6;} to {opacity: 0.8;}
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
                <div id="titulo"  @click="${this.volver}">
                    ${idiomaInicio[this.idioma].paginas.eTituloFueraDeLinea.mensaje}
                </div>
                <div id="mensaje">
                    ${idiomaInicio[this.idioma].paginas.eMensajeFueraDeLinea.mensaje}
                </div>
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "error") {
            store.dispatch(cancelarTimer())
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
        store.dispatch(modoPantalla("inicio"))
    }

}
window.customElements.define("pantalla-mensajefueralinea", pantallaMensajeFueraLinea);