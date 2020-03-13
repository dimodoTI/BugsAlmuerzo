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
import { guardarUsuario, guardarImporteSaldo, guardarImporteRecarga } from "../../../redux/actions/tarjetachipRecarga";
import { idiomas } from "../../../redux/datos/tarjetachip/idioma/idiomas"
import { importes } from "../../../redux/datos/tarjetachip/datos/importePracarga"
import { tiempos } from "../../../redux/datos/tarjetachip/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaTarjetaChipSeleccionImporte extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:black;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        .buttonImporte {
            width: 26vw;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.6rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--pantalla-fondo-oscuro);           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 8% 20% 37% auto;
            grid-template-columns: 33% 33% auto;
            justify-items:center;
            align-items: center;   
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center;
            grid-column-start: 1;
            grid-column-end: 4;  
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `
    }
    render() {
        return html`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${idiomas[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">
                ${idiomas[this.idioma].paginas.seleccionImporte.quienEs01}
                ${store.getState().tarjetachipRecarga.usuario.nombre}
                ${idiomas[this.idioma].paginas.seleccionImporte.quienEs02}
                ${store.getState().tarjetachipRecarga.saldo}
            </div>
            <div id="titulo">
                ${idiomas[this.idioma].paginas.seleccionImporte.titulo}
            </div>
            <div>
                <input type="button" id="impMenor" class="buttonImporte" importe=${importes.precarga.menor.importe} value=${importes.precarga.menor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMedio" class="buttonImporte" importe=${importes.precarga.medio.importe} value=${importes.precarga.medio.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMayor" class="buttonImporte" importe=${importes.precarga.mayor.importe} value=${importes.precarga.mayor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas.ES.paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "tarjetachipseleccionimporte") {
            store.dispatch(dispararTimer(tiempos.tarjetachipseleccionimporte.segundos, "mensajeespera", "tarjetachipseleccionimporte"))
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
        store.dispatch(modoPantalla("tarjetachiplectura"))
    }

    proximaPantalla(e) {
        store.dispatch(guardarImporteRecarga(parseInt(e.currentTarget.getAttribute("importe"), 10)))
        store.dispatch(modoPantalla("tarjetachipselecciontarjetacredito"))
    }
}
window.customElements.define("pantalla-tarjetachipseleccionimporte", pantallaTarjetaChipSeleccionImporte);