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
import { } from "../../../redux/reducers/tarjetaChipRecarga";
import { idiomas } from "../../../redux/datos/tarjetachip/idioma/idiomas"
import { tiempos } from "../../../redux/datos/tarjetachip/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaTarjetaChipRecargaExito extends connect(store, MODO_PANTALLA)(LitElement) {
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
            background-color:var(--pantalla-fondo);
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
            background-color: black;           
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
            grid-template-rows: 10% 10% 20% 20% 20% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:2.2rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: center;
            padding-left:1rem;
        }
        #ok{
            display: grid; 
            height: 100%;
            width: 100%; 
            background-image:var(--ok-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 6rem 6rem;
        }
        #titulo{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #descripcion{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center; 
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
                ${store.getState().tarjetachipRecarga.usuario ? store.getState().tarjetachipRecarga.usuario.nombre : ""}
            </div>
            <div id="ok">    
            </div>
            <div id="titulo">
                ${idiomas[this.idioma].paginas.recargaExito.titulo}
            </div>
            <div id="descripcion">
                ${idiomas[this.idioma].paginas.recargaExito.leyenda}
                ${store.getState().tarjetachipRecarga.saldo + store.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.recargaExito.finalizar} @click="${this.volver}">
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "tarjetachiprecargaexito") {
            store.dispatch(dispararTimer(tiempos.tarjetachiprecargaexito.segundos, "inicio", "tarjetachiprecargaexito"))
            //this.shadowRoot.querySelector("#quienEs").innerHTML = state.tarjetachipRecarga.usuario.nombre
            //this.shadowRoot.querySelector("#descripcion").innerHTML = idiomas["ES"].paginas.recargaExito.leyenda + (state.tarjetachipRecarga.saldo + state.tarjetachipRecarga.recarga)
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

    volver() {
        store.dispatch(modoPantalla("inicio"))
    }

    proximaPantalla() {
        store.dispatch(modoPantalla("cargatarjetacreditoposnet"))
    }

}
window.customElements.define("pantalla-tarjetachiprecargaexito", pantallaTarjetaChipRecargaExito);