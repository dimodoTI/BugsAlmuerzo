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
    cancelarTimer,
    errorTitulo,
    errorMensaje
} from "../../../redux/actions/ui";
import {
    idiomas
} from "../../../redux/datos/inicio/idioma/idiomas";
import {
    comandoTest,
    comandoVenta,
    comandoCierre
} from "../../../redux/actions/posNet";

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaInicio extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = false
        this.idioma = "ES"
    }

    static get styles() {
        return css `
        :host{
            position:relative;
            height: 100vh;
            width: 100vw;   
            background-image: var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;  
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
            font-size: 3rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
            /* animation-duration: 20s;
        	animation-timing-function: ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: infinite;          
            animation-name: aniBoton; */
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo01);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondoimagen02{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;   
            animation-duration: 15s;
            animation-iteration-count: infinite;          
            animation-delay: 2s;
            animation-name: imagen02;
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0.3;
            height: 100vh;
            width: 100vw;  
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100vw;
            grid-template-rows: 30% 25% 25% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #titulo{
            background-color:transparent;
            font-size:5rem;
            color:var(--titulo-texto);;
        }
        @keyframes imagen02 {
            50%{opacity: 0;}
        }
        @keyframes aniBoton {
            0% , 14% { font-size: 3rem;}
            14%, 28% { font-size: 3.4rem;}
            28%, 42% {  font-size: 2.4rem;}        
            42%, 56% { font-size: 3.6rem;}
            56%, 70% { font-size: 2.4rem;}
            70%, 84% { font-size: 3.4rem;}
            84%, 100% { font-size: 3rem;}
        }
        `
    }
    render() {
        return html `
        <div id="fondoimagen01">
        </div>
        <div id="fondoimagen02">
        </div>  
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="titulo" @click="${this.error}">
                ${idiomas[this.idioma].paginas.inicio.bienvenido}
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="viandatarjetachiplectura" value=${idiomas[this.idioma].paginas.inicio.heceTuPedido} @click="${this.proximaPantalla}">
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="tarjetachiplectura" value=${idiomas[this.idioma].paginas.inicio.cargaCredito} @click="${this.proximaPantalla}">
            </div>
            <div style="background-color:var(--pantalla-fondo);">
            <input type="button" class="button" value="test"  @click="${this.test}">
            <input type="button" class="button" value="venta" @click="${this.venta}">
            <input type="button" class="button" value="cierre" @click="${this.cierre}">
            </div>        
        </div>
        `
    }

    test() {
        store.dispatch(comandoTest())
    }
    venta() {
        store.dispatch(comandoVenta({
            monto: 1,
            numeroFactura: 10000008901,
            cuotas: 1,
            codigoTarjeta: "VI",
            codigoPlan: "0",
            montoPropina: 0,
            codigoComercio: "03659307",
            nombreComercio: "PRISMA MP",
            cuitComercio: "30-59891004-5",
            modo: 1
        }))
    }
    cierre() {
        store.dispatch(comandoCierre())
    }

    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "inicio") {
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

    proximaPantalla(e) {
        store.dispatch(modoPantalla(e.currentTarget.getAttribute("opcion")))
    }

    error(e) {
        store.dispatch(modoPantalla("fueralinea"))
    }
}
window.customElements.define("pantalla-inicio", pantallaInicio);