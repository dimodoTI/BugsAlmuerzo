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
import { tipoMenu } from "../../../redux/datos/vianda/datos/menues"
import { guardarTipoMenu } from "../../../redux/actions/vianda"
import { idiomas } from "../../../redux/datos/vianda/idioma/idiomas"
import { tiempos } from "../../../redux/datos/vianda/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaViandaSeleccionTipoMenu extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"

        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        var f = new Date();
        f.setDate(f.getDate() + 1);
        this.paraDia = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
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
            width: 28vw;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: 1rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.2rem;
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
            grid-template-rows: 10% 8% 15% 12% 35% auto;
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
        #fecha{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background-color:transparent;
            font-size:2rem;
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
                ${idiomas[this.idioma].paginas.seleccionTipoMenu.quienEs01}
                ${store.getState().tarjetachipRecarga.usuario.nombre}
                ${idiomas[this.idioma].paginas.seleccionTipoMenu.quienEs02}
                ${store.getState().tarjetachipRecarga.saldo}
            </div>
            <div id="titulo">
                ${idiomas[this.idioma].paginas.seleccionTipoMenu.titulo} 
            </div>
            <div id="fecha">
                ${idiomas[this.idioma].paginas.seleccionTipoMenu.dia} 
                ${this.paraDia}
            </div>
            <div>
                <input type="button" class="buttonImporte" .item="${tipoMenu[0]}" value="${tipoMenu[0].nombre}" @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" class="buttonImporte" .item="${tipoMenu[1]}" value="${tipoMenu[1].nombre}" @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" class="buttonImporte" .item="${tipoMenu[2]}" value="${tipoMenu[2].nombre}" @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "viandaselecciontipomenu") {
            store.dispatch(dispararTimer(tiempos.viandaselecciontipomenu.segundos, "mensajeespera", "viandaselecciontipomenu"))
            //this.shadowRoot.querySelector("#quienEs").innerHTML = idiomas[this.idioma].paginas.seleccionTipoMenu.quienEs01 + state.tarjetachipRecarga.usuario.nombre + idiomas[this.idioma].paginas.seleccionTipoMenu.quienEs02 + state.tarjetachipRecarga.saldo
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
        store.dispatch(modoPantalla("viandatarjetachiplectura"))
    }

    proximaPantalla(e) {
        //store.dispatch(guardarImporteRecarga(parseInt(e.currentTarget.getAttribute("importe"), 10)))
        store.dispatch(guardarTipoMenu(e.currentTarget.item))
        store.dispatch(modoPantalla("viandaseleccionmenu"))
    }
}
window.customElements.define("pantalla-viandaselecciontipomenu", pantallaViandaSeleccionTipoMenu);