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
    guardarTarjetaCreditoRecarga
} from "../../../redux/actions/tarjetachipRecarga";
import {
    idiomas
} from "../../../redux/datos/tarjetachip/idioma/idiomas"
import {
    tiempos
} from "../../../redux/datos/tarjetachip/datos/tiempoEspera"

import {
    comandoVenta
} from "../../../redux/actions/posNet"


const MODO_PANTALLA = "ui.timeStampPantalla"
const TARJETA_CHIP = "tarjetaChip.respuestaTimeStamp"
export class pantallaTarjetaChipSeleccionTarjetaCredito extends connect(store, MODO_PANTALLA, TARJETA_CHIP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.tarjetas = []
    }

    static get styles() {
        return css `
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:var(--pantalla-fondo-oscuro);
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
            grid-template-rows: 10vh 8vh 20vh 45vh auto;
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
        #pie{
            display: grid;
            justify-items: center;  
            background-color:transparent;
        }
        #tarjetasDIV{
            display: grid;
            grid-template-columns: auto auto auto auto auto;
            grid-gap: .2rem;
            justify-items: center;
            align-items: center;  
            height: 100%;
            width: 100%;             
        }
        .contenedor{ 
            display: grid;
            justify-items: center;
            align-items: center; 
        }
        .t-credito{
            height: calc(45vh/2.7);
            width: calc(45vh/2.7*1.6);
            background-repeat: no-repeat;
            background-position: center;
            background-size: calc(45vh/2.7*1.6) calc(45vh/2.7);
            box-shadow:var(--shadow-elevation-8-box);
            background-color:#2478bc;
            border-radius: 8%;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
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
                ${store.getState().tarjetachipRecarga.usuario ? store.getState().tarjetachipRecarga.usuario.nombre : ""}
                ${idiomas[this.idioma].paginas.seleccionTarjetaCredito.quienEs01}
                ${store.getState().tarjetachipRecarga.saldo}
                ${idiomas[this.idioma].paginas.seleccionTarjetaCredito.quienEs02}
                ${store.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="titulo">
                ${idiomas[this.idioma].paginas.seleccionTarjetaCredito.titulo}
            </div>
            <div id="tarjetasDIV">
                    ${this.tarjetas.map(tarjeta => {
                return html
                    `
                    <div class="contenedor">
                    <div class="t-credito" .tarjeta="${tarjeta}" style="background-image:url('${tarjeta.url}')" @click="${this.proximaPantalla}"></div>
                    </div>
                    `
            })}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div >
        `
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "tarjetachipselecciontarjetacredito") {
            store.dispatch(dispararTimer(tiempos.tarjetachipselecciontarjetacredito.segundos, "mensajeespera", "tarjetachipselecciontarjetacredito"))
            this.tarjetas = state.aplicacion.tarjetas
            this.update()
        }
        if (name == TARJETA_CHIP && state.ui.quePantalla == "tarjetachipselecciontarjetacredito") {
            if (!state.tarjetaChip.colocada) {
                store.dispatch(modoPantalla("inicio"))
            }
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
        store.dispatch(modoPantalla("tarjetachipseleccionimporte"))
    }

    proximaPantalla(e) {
        store.dispatch(guardarTarjetaCreditoRecarga(e.currentTarget.tarjeta))
        store.dispatch(modoPantalla("cargatarjetacreditoposnet"))

        store.dispatch(comandoVenta({
            monto: store.getState().tarjetachipRecarga.recarga,
            numeroFactura: 100000089012,
            cuotas: 1,
            codigoTarjeta: store.getState().tarjetachipRecarga.tarjeta.codigo,
            codigoPlan: "1",
            montoPropina: 0,
            codigoComercio: store.getState().tarjetachipRecarga.tarjeta.codigoComercio,
            nombreComercio: "PRISMA MP",
            cuitComercio: "30-59891004-5",
            modo: 1
        }))
    }
}
window.customElements.define("pantalla-tarjetachipselecciontarjetacredito", pantallaTarjetaChipSeleccionTarjetaCredito);