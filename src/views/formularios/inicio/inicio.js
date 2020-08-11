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
import {
    leer as leerTC,
    grabar as grabarTC,
    servicio as servicioTC
} from "../../../redux/actions/tarjetaChip";

import {
    enviarMensaje
} from "../../../redux/actions/operadora";


const MODO_PANTALLA = "ui.timeStampPantalla"
const TC_CONECTADO = "tarjetaChip.conectado"
const TC_RESPUESTA = "tarjetaChip.respuestaTimeStamp"
const IMPRESORA_PRENDIDA = "impresora.prendidaTimeStamp"
const IMPRESORA_APAGADA = "impresora.apagadaTimeStamp"
const IMPRESORA_ONLINE = "impresora.onlineTimeStamp"
const IMPRESORA_OFLINE = "impresora.offlineTimeStamp"

export class pantallaInicio extends connect(store, MODO_PANTALLA, TC_CONECTADO, IMPRESORA_PRENDIDA, IMPRESORA_APAGADA, IMPRESORA_ONLINE, IMPRESORA_OFLINE, TC_RESPUESTA)(LitElement) {
    constructor() {
        super();
        this.hidden = false
        this.idioma = "ES"
        this.testing = process.env.NODE_ENV == "none"
        this.tcConectado = false

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
        :host(:not([testing])) .botoneraTest{
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
            animation-duration: 20s;
        	animation-timing-function: ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: infinite;          
            /* animation-name: aniBoton; */
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

        :host(:not([testing])) .botoneraTest{
            display:none
        }

        .botoneraTest{
            display:grid;
            grid-auto-flow:row;
            align-content:flex-start;
            position:absolute;
            top:0;
            left:0;
            height:100vh;
            background-color:rgba(0,0,0,.5);
            overflow-y:auto
        }
        .botoneraTest .button{
            font-size:1rem;
            background-color:#f6f6f6;
            animation-name: none;
        }
        .botoneraTest #TC ,.botoneraTest #impOff ,.botoneraTest #impOffline {
            position:absolute;
            top:0;
            right:0;
            background:red;
            color:white;
            padding:.3rem;
            border-radius:25%;


        }
        :host([tc-conectado]) #TC{
            display:none;
        }
        :host([impresora-prendida]) #impOff {
            display:none;
        }
        :host([impresora-online]) #impOffline {
            display:none;
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
           
            <div class="botoneraTest">
                
                <input type="button" class="button" value="PosNet test"  @click="${this.test}">
                <input type="button" class="button" value="PosNet venta" @click="${this.venta}">
                <input type="button" class="button" value="PosNet cierre" @click="${this.cierre}">
                <div style="position:relative">
                    <input type="button" class="button" value="chip en servicio" @click="${this.servicioOn}">
                    <div id="TC">TC</div>
                </div>
                <input type="button" class="button" value="chip fuera de servicio" @click="${this.servicioOff}">
                <input type="button" class="button" value="chip Leer" @click="${this.chipLeer}">
                <input type="button" class="button" value="chip Grabar " @click="${this.chipGrabar}">
                <div style="position:relative">
                    <input type="button" class="button" value="Impresora test" @click="${this.imprimir}">
                    <div id="impOff">OFF</div>
                    <div id="impOffline">offline</div>
                </div>
                
            </div>
           
        </div>
        `
    }

    test() {
        store.dispatch(comandoTest())
    }
    venta() {
        store.dispatch(comandoVenta({
            monto: 12500,
            numeroFactura: 100000089012,
            cuotas: 1,
            codigoTarjeta: "VVI",
            codigoPlan: "1",
            montoPropina: 0,
            codigoComercio: "03659307",
            nombreComercio: "INGENICO S.A.",
            cuitComercio: "30-71513931-2",
            modo: 1
        }))
    }
    cierre() {
        store.dispatch(comandoCierre())
    }
    servicioOn() {
        store.dispatch(servicioTC(true))
    }
    servicioOff() {
        store.dispatch(servicioTC(false))
    }
    chipLeer() {
        store.dispatch(leerTC())
    }
    chipGrabar() {
        store.dispatch(grabarTC(2000))
    }
    imprimir() {
        store.dispatch(enviarMensaje({
            periferico: "impresora",
            comando: "print",
            subComando: {
                usuario: 241,
                nombre: "Sergio Ferro",
                fecha: "30-05-2020",
                descripcion: "Postre de queso $150",
                numero: 2
            }
        }))

    }



    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "inicio") {
            store.dispatch(cancelarTimer())
            store.dispatch(servicioTC(false))
        }
        if (name == TC_CONECTADO) {
            this.tcConectado = state.tarjetaChip.conectado
            this.update();
        }

        if (name == IMPRESORA_PRENDIDA) {
            this.impresoraPrendida = true
            this.update();
        }
        if (name == IMPRESORA_APAGADA) {
            this.impresoraPrendida = false
            this.update();
        }
        if (name == IMPRESORA_ONLINE) {
            this.impresoraOnline = true
            this.update();
        }
        if (name == IMPRESORA_OFLINE) {
            this.impresoraOnline = false
            this.update();
        }
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true
            },
            testing: {
                type: Boolean,
                reflect: true
            },
            tcConectado: {
                type: Boolean,
                reflect: true,
                attribute: "tc-conectado"
            },
            impresoraPrendida: {
                type: Boolean,
                reflect: true,
                attribute: "impresora-prendida"
            },
            impresoraOnline: {
                type: Boolean,
                reflect: true,
                attribute: "impresora-online"
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