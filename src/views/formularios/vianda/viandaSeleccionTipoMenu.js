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
import {
    modoPantalla,
    dispararTimer
} from "../../../redux/actions/ui";
import {
    guardarUsuario,
    guardarImporteSaldo,
    guardarImporteRecarga
} from "../../../redux/actions/tarjetachipRecarga";

import {
    guardarTipoMenu
} from "../../../redux/actions/vianda"
import {
    idiomas
} from "../../../redux/datos/vianda/idioma/idiomas"
import {
    tiempos
} from "../../../redux/datos/vianda/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
const TARJETA_CHIP = "tarjetaChip.respuestaTimeStamp"
const APLICACION = "aplicacion.timeStamp"
export class pantallaViandaSeleccionTipoMenu extends connect(store, MODO_PANTALLA, TARJETA_CHIP, APLICACION)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.tipoMenu = [{}, {}, {}, {}]
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        var f = new Date();
        f.setDate(f.getDate() + 1);
        this.paraDia = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
    }

    static get styles() {
        return css `
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
            grid-template-rows: 10% 6% 12% 12% 40% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #fecha{
            display: grid;
            background-color:transparent;
            font-size:2rem;
            color:var(--titulo-texto);;
        }
        #botonera{
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 85%;  
        }        
        #pie{
            display: grid;
            justify-items: center; 
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
        }
        `
    }
    render() {
        return html `
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
                ${store.getState().tarjetachipRecarga.usuario ? store.getState().tarjetachipRecarga.usuario.nombre : ""}
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
            <div id="botonera">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[0]}" value="${this.tipoMenu[0].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[1]}" value="${this.tipoMenu[1].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[2]}" value="${this.tipoMenu[2].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[3]}" value="${this.tipoMenu[3].nombre}" @click="${this.proximaPantalla}">
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
        if (name == TARJETA_CHIP && state.ui.quePantalla == "viandaselecciontipomenu") {
            if (!state.tarjetaChip.colocada) {
                store.dispatch(modoPantalla("inicio"))
            }
        }
        if (name == APLICACION) {
            this.tipoMenu = state.aplicacion.entities.menuTipo
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