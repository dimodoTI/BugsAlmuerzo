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
    dispararTimer,
    cancelarTimer,
    errorTitulo,
    errorMensaje,
    mostrarError,
    showError
} from "../../../redux/actions/ui";
import {
    guardarUsuario,
    guardarImporteSaldo,
    guardarImporteRecarga
} from "../../../redux/actions/tarjetachipRecarga";
import {
    idiomas
} from "../../../redux/datos/vianda/idioma/idiomas"
import {
    idiomas as idiomaInicio
} from "../../../redux/datos/inicio/idioma/idiomas"
import {
    tiempos
} from "../../../redux/datos/vianda/datos/tiempoEspera"
import {
    servicio as servicioTC
} from "../../../redux/actions/tarjetaChip";


const MODO_PANTALLA = "ui.timeStampPantalla"
const TARJETA_CHIP = "tarjetaChip.respuestaTimeStamp"
const TARJETA_CHIP_ERROR = "tarjetaChip.errorEnTarjeta"
const USUARIOS = "aplicacion.usuariosTimeStamp"
export class pantallaViandaTarjetaChipLectura extends connect(store, MODO_PANTALLA, TARJETA_CHIP, TARJETA_CHIP_ERROR, USUARIOS)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.usuarios = []
        this.estadoErroneo = false
    }

    static get styles() {
        return css `
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 100vh;
            width: 100vw;   
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
            grid-template-columns: 100vw;
            grid-template-rows: 10% 35% 35% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #titulo{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:3rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #MenuDescripcion{
            width: 100vw;   
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #tarjetaChip{
            width: 100vw;   
            height: 100%;
            display:grid;
            justify-items: start;
            align-items: center; 
        }
        #barra{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:14.5rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:300;
        }
        #mano{
            height: 12rem;
            width:12rem;
            background-color:transparent;
            background-image:var(--lectortarjetachip-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 8rem 11rem;
            animation-delay: 1;
            animation-name: example;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            position: absolute;
            top:16.5rem;
            z-index: 200;
        }
        #barra-baja{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:16.4rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-baja-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:100;
        }
        @keyframes example {
            0% {top:16.8rem;}
            50% {top:14.2rem;opacity:1;}             
            100% {top:14.2rem;opacity:0;}  
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
            <div id="titulo">
                ${idiomas[this.idioma].paginas.tarjetaChipLectura.insertarTarjeta}
            </div>
            <div id="tarjetaChip" @click="${this.proximaPantalla}">
                <div id="barra">
                </div>
                <div id="mano">
                </div>
                <div id="barra-baja">
                </div>
            </div>
            <div >
                <input type="button" class="button" value=${idiomas[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `

    }

    stateChanged(state, name) {
        if (name == USUARIOS) {
            this.usuarios = state.aplicacion.usuarios
        }
        if (name == MODO_PANTALLA && state.ui.quePantalla == "viandatarjetachiplectura") {
            this.estadoErroneo = false
            store.dispatch(dispararTimer(tiempos.viandatarjetachiplectura.segundos, "mensajeespera", "viandatarjetachiplectura"))
            store.dispatch(servicioTC(true))
            this.update()
        }
        if (name == TARJETA_CHIP_ERROR && state.ui.quePantalla == "viandatarjetachiplectura" && !this.estadoErroneo) {
            this.estadoErroneo = true
            store.dispatch(mostrarError("Error de lectura", "Su tarjeta chip no se pudo leer. Podria estar dañada o colocada incorrectamente. Retire su tarjeta.", false))
            store.dispatch(cancelarTimer())
            this.update()
        }
        if (name == TARJETA_CHIP && state.ui.quePantalla == "viandatarjetachiplectura") {
            if (state.tarjetaChip.colocada) {
                const usuario = this.usuarios.find(u => {
                    return u.id == state.tarjetaChip.usuario
                })
                if (!usuario) {
                    if (!this.estadoErroneo) {
                        this.estadoErroneo = true
                        store.dispatch(mostrarError("Tarjeta no registrada", "Consulte con el proveedor de su tarjeta para que se habilte esta operación.Retire su tarjeta", false))
                        store.dispatch(cancelarTimer())
                    }
                } else {
                    store.dispatch(guardarImporteSaldo(state.tarjetaChip.credito))
                    store.dispatch(guardarUsuario({
                        id: state.tarjetaChip.usuario,
                        nombre: usuario.nombre
                    }))
                    store.dispatch(modoPantalla("viandaselecciontipomenu"))
                }
            } else {
                store.dispatch(modoPantalla("inicio"))
            }
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


}
window.customElements.define("pantalla-viandatarjetachiplectura", pantallaViandaTarjetaChipLectura);