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
import { tarjetaViandaMenu } from "../componentes/tarjetaViandaMenu"
import { menues } from "../../../redux/datos/vianda/datos/menues"
import { guardarMenu } from "../../../redux/actions/vianda";
import { idiomas } from "../../../redux/datos/vianda/idioma/idiomas"
import { tiempos } from "../../../redux/datos/vianda/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaViandaSeleccionMenu extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.items = []
        this.nombreMenu = ""
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
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: 1.5rem 1rem;
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
            background-image:var(--imagen-pantalla-fondo-vianda);
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
            opacity: 0.7;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 5% 5% 10% 65% auto;
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
            font-size:1rem;
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
            font-size:3rem;
            color:var(--titulo-texto);;
        }
        #etiqueta{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 95%;
            width: 80%;
            background-color:var(--fondo-etiqueta);
            border-radius: .5rem;
            grid-template-rows: 5% 8% 50% 8% auto;
            grid-template-columns: 100%;
        }
        #pie{
            display: grid;
            justify-items: center;
            grid-column-start: 1;
            grid-column-end: 4;  
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
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
                ${store.getState().tarjetachipRecarga.usuario.nombre}
                ${idiomas[this.idioma].paginas.seleccionMenu.quienEs}
                ${store.getState().tarjetachipRecarga.saldo}
           </div>
            <div id="titulo">
                ${this.nombreMenu}
            </div>
            <tarjeta-vianda-nmenu .item="${this.items[0]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            <tarjeta-vianda-nmenu .item="${this.items[1]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            <tarjeta-vianda-nmenu .item="${this.items[2]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "viandaseleccionmenu") {
            store.dispatch(dispararTimer(tiempos.viandaseleccionmenu.segundos, "mensajeespera", "viandaseleccionmenu"))
            this.items = menues.filter(i => { return i.idTipo == state.vianda.tipoMenu.id })
            this.nombreMenu = state.vianda.tipoMenu.nombre
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
        store.dispatch(modoPantalla("viandaselecciontipomenu"))
    }

    proximaPantalla(e) {
        store.dispatch(guardarMenu(e.currentTarget.item))
        store.dispatch(modoPantalla("viandamenuaceptacion"))
    }
}
window.customElements.define("pantalla-viandaseleccionmenu", pantallaViandaSeleccionMenu);