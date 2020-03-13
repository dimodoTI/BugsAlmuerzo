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
import { menues } from "../../../redux/datos/vianda/datos/menues"
import { idiomas } from "../../../redux/datos/vianda/idioma/idiomas"
import { tiempos } from "../../../redux/datos/vianda/datos/tiempoEspera"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaViandaMenuAceptacion extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.itemMenuTipo = {}
        this.item = {}
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
        .buttonAceptar {
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
            z-index: 10;
            display: grid;
            grid-template-rows: 8% 10% 10% 15% 19% 11% 10%  auto;
            grid-template-columns: 16fr 40fr 2fr 26fr 16fr;
            justify-items:center;
            align-items: center;  
            height: 100vh;              
            width: 100%;        
        }
        #MenuDescripcion{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 6;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            height:100%;
            justify-items: left;
            align-items: center; 
            text-align: left;
            padding-left:1rem;
        }
        #fecha{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 6;
            width: 100%;
            height: 100%;
            justify-items: left;
            align-items: center; 
            text-align: left;
            padding-left: 1rem;
            background-color:transparent;
            font-size: 1.5rem;
            color:var(--titulo-texto);
        }
        #titulo{
            display: grid;
            grid-column-start: 3;
            grid-column-end: 5;
            background-color:var(--fondo-etiqueta);
            justify-items: left;
            align-items: center; 
            text-align: left;
            height: 100%;
            width: 90%;
            padding-left: 5%;
            padding-right: 5%;
            font-size:1.2rem;
            font-weight:bold;
            color:black;
            border-top-right-radius: 1rem;
        }
        #botonVolver{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 3;
            justify-items: center;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
        }
        #botonConfirmar{
            display: grid;
            grid-column-start: 3;
            grid-column-end: 6;
            justify-items: left;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
        }
        #fondoImgMenu{
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 4;
            grid-row-end: 7;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            height: 100%;
            width: 100%;
            border-top-left-radius: 2rem;
            border-bottom-left-radius: 2rem;
        }
        #imgMenu{
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
            /* background-image:url("C:/Desarrollo/bugsVianda/recusrsos/imagenes/menu/tarta-jq-01.png"); */
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }
        #descripcion{
            grid-column-start: 3;
            grid-column-end: 5;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            color:#4b4a4a;
            height: 90%;
            width: 90%;
            padding: 5%;
        }
        #fondoPrecio{
            grid-column-start: 3;
            grid-column-end: 5;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            height: 100%;
            width: 100%;
            border-bottom-right-radius: 1rem;
        }
        #precio{
            display: grid;
            justify-items: center;
            align-items: center;  
            background-color:transparent;
            height: 100%;
            width: auto;
            font-size:2rem;
            font-weight:bold;
            color:var(--color-precio);
        }
        #separacion{
            grid-column-start: 1;
            grid-column-end: 6;
            height: 100%;
            width: 100%;
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
            <div id="fecha">
                ${idiomas[this.idioma].paginas.menuAceptacioin.dia}
                ${this.paraDia}
            </div>
            <div id="separacion">
            </div>
            <div id="fondoImgMenu">
                <div id="imgMenu" style="background-image:url('${this.item.url}')">
                </div>
            </div>
            <div id="titulo">
                ${this.itemMenuTipo.nombre}
                <br/>
                ${this.item.titulo}
            </div>
            <div id="descripcion">
                ${this.item.descripcion} 
            </div>
            <div id="fondoPrecio">
                <div id=precio>$${this.item.precio}.-</div>
            </div>
            <div>                
            </div>
            <div id="separacion">
            </div>
            <div id="botonVolver">
                <input type="button" class="buttonAtras" value= ${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
            <div id="botonConfirmar">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.menuAceptacioin.confirmarCobrar} @click="${this.proximaPantalla}">
            </div>

        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "viandamenuaceptacion") {
            store.dispatch(dispararTimer(tiempos.viandamenuaceptacion.segundos, "mensajeespera", "viandamenuaceptacion"))
            this.itemMenuTipo = state.vianda.tipoMenu
            this.item = state.vianda.menu
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
        store.dispatch(modoPantalla("viandaseleccionmenu"))
    }

    proximaPantalla(e) {
        //store.dispatch(guardarImporteRecarga(parseInt(e.currentTarget.getAttribute("importe"), 10)))
        store.dispatch(modoPantalla("viandamenuexito"))
    }
}
window.customElements.define("pantalla-viandamenuaceptacion", pantallaViandaMenuAceptacion);