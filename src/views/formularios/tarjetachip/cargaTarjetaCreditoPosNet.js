import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    store
} from "\../../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import {
    modoPantalla,
    dispararTimer,
    mostrarError
} from "../../../redux/actions/ui";
import {} from "../../../redux/reducers/tarjetaChipRecarga";
import {
    idiomas
} from "../../../redux/datos/tarjetachip/idioma/idiomas"
import {
    tiempos
} from "../../../redux/datos/tarjetachip/datos/tiempoEspera"
import {
    grabar
} from "../../../redux/actions/tarjetaChip";

const RESPUESTA_POSNET = "posNet.respuestaTimeStamp"
const MODO_PANTALLA = "ui.timeStampPantalla"
const TARJETA_CHIP = "tarjetaChip.respuestaTimeStamp"
export class pantallacargaTarjetaCreditoPosNet extends connect(store, MODO_PANTALLA, RESPUESTA_POSNET, TARJETA_CHIP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.tarjeta = ""
        this.idioma = "ES"
    }

    static get styles() {
        return css `
        :host{
            display: grid;
            grid-template-rows: 10% 8% 20% 20% 25% auto;
            grid-template-columns: 100%;
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
            grid-template-rows: 10% 8% 20% 20% 25% auto;
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
            font-size:3rem;
            color:var(--titulo-texto);;
        }
        #tarjeta{
            display: grid;
            height: 6rem;
            width: 12rem;            
            background-repeat: no-repeat;
            background-position: center;
            background-size: 11rem 7.5rem;
            box-shadow:var(--shadow-elevation-8-box);
            background-color:#2478bc;
            border-radius: 8%;        
        }
        #tarjeta[imagen="visaCredito"]{
            background-image:var(--tarjeta-visa-credito);
        }
        #tarjeta[imagen="masterCredito"]{
            background-image:var(--tarjeta-master-credito);
        }
        #tarjeta[imagen="amexCredito"]{
            background-image:var(--tarjeta-amex-credito);
        }
        #descripcion{
            display: grid;
            justify-items: center;
            align-items: center;    
            text-align: center;
            background-color:transparent;
            font-size:2.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center;
            background-color:transparent;
        }
        .contenedor{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 100%;
            width: 100%;            
            background-color:transparent;
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
                ${idiomas[this.idioma].paginas.cargaPosNet.quienEs01}
                ${store.getState().tarjetachipRecarga.saldo}
                ${idiomas[this.idioma].paginas.cargaPosNet.quienEs02}
                ${store.getState().tarjetachipRecarga.recarga}    
            </div>
            <div id="titulo">
                ${idiomas[this.idioma].paginas.cargaPosNet.titulo}
            </div>
            <div class="contenedor">
                <div id="tarjeta" style="background-image:url('${this.tarjeta.url}')">
                </div>
            </div>
            <div id="descripcion">
                ${idiomas[this.idioma].paginas.cargaPosNet.leyenda}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `

    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "cargatarjetacreditoposnet") {
            store.dispatch(dispararTimer(tiempos.cargatarjetacreditoposnet.segundos, "mensajeespera", "cargatarjetacreditoposnet"))
            this.tarjeta = state.tarjetachipRecarga.tarjeta
            this.update()
        }
        if (name == RESPUESTA_POSNET && state.ui.quePantalla == "cargatarjetacreditoposnet") {
            if (state.posNet.respuestaCodigo == "TERMINADO" && state.posNet.respuestaMensaje == "OK") {
                store.dispatch(grabar(state.tarjetaChip.credito + state.tarjetachipRecarga.recarga))
                store.dispatch(modoPantalla("tarjetachiprecargaexito"))
            } else {
                //store.dispatch(mostrarError("Operacion fallida", "No se pudo terminar la operacion."))
                //store.dispatch(modoPantalla("inicio"))
                store.dispatch(grabar(state.tarjetaChip.credito + state.tarjetachipRecarga.recarga))
                store.dispatch(modoPantalla("tarjetachiprecargaexito"))
            }

        }
        if (name == TARJETA_CHIP && state.ui.quePantalla == "cargatarjetacreditoposnet") {
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
        store.dispatch(modoPantalla("tarjetachipselecciontarjetacredito"))
    }


}
window.customElements.define("pantalla-cargatarjetacreditoposnet", pantallacargaTarjetaCreditoPosNet);