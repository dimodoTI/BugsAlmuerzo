import {
    html,
    LitElement,
    css,
    svg
} from "lit-element";
import {
    unsafeHTML
} from 'lit-html/directives/unsafe-html.js';
import {
    store
} from "../../redux/store";
import {
    connect
} from "/Nano/nano-helpers/src/nano-connect";
import {
    changeView
} from "../../redux/actions/ui"
import {
    boton
} from "../css/boton"
import {
    LOGIN,
    TELEFONO,
    CANCELAR
} from "../../../assets/icons/icons"
import {
    NanoInput
} from "/Nano/nano-input/src/nano-input"
import {
    addTapListener
} from "/Nano/nano-helpers/src/nano-functions"

const USUARIO = "usuario.entities"
export class listaServicios extends connect(store, USUARIO)(LitElement) {
    constructor() {
        super();
        this.items = []

    }
    firstUpdated(changedProperties) {
        addTapListener(this.shadowRoot.querySelectorAll(".boton"), this)
    }

    static get styles() {
        return css`
        ${boton}
        
        .letraClara{
            color: var(--letra-clara);
            stroke: var(--letra-clara);
            fill: var(--letra-clara);
        }
        .centrado{
            justify-items:center;
            align-items:center
        }
        :host{
            display: grid;                 
            grid-template-rows:repeat( auto-fill, minmax(auto, 1fr) );
            background-color:transparent;
            grid-gap:1rem;
        }
        :host([hidden]) {
            display:none;
        }

        .tarjeta{
            display:grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: auto 1fr;
            grid-gap:1rem;
            padding:1rem;
            color: var(--letra-clara);
            stroke: var(--letra-clara);
            fill: var(--letra-clara);
            border-radius:5px;
            
        }
        .tarjetaPrestador{
            grid-template-areas: "cuit prestador"
                                 "servicios servicios";

        }
        .tarjetaServicio{
            grid-template-areas: "icono servicio"
                                 "descripcion descripcion";
        }
        .cuit{
            grid-area:cuit
        }
        .prestador{
            grid-area:prestador;
            color:var(--color-activo-claro)
        }
        .servicios{
            grid-area:servicios;
            display:grid;
            grid-template-columns: repeat(auto-fill, minmax(5rem, 20rem));
            grid-template-rows:repeat( auto-fill, minmax(auto, 1fr) );
            grid-gap:1rem;
            justify-items:start;
        }
        .icono{
            grid-area:icono;
        }
        .servicio{
            grid-area:servicio;
            color:var(--color-activo-oscuro)
        }
        .descripcion{
            grid-area:descripcion;
            display:grid;
            grid-template-columns: repeat(auto-fill, minmax(5rem, 20rem));
            grid-template-rows:repeat( auto-fill, minmax(auto, 1fr) );
            grid-gap:1rem;
            justify-items:start;
        }
        
        `
    }
    render() {
        return html`
        ${this.items.map(
            item => {
                return html`
                <div class="tarjeta tarjetaPrestador">
                    
                    <div class="cuit">${this.formatCUIT(item.CUIT)}</div>
                    <div class="prestador">${item.RazonSocial}</div>
                    
                    <div class="servicios">
                        ${item.UsuarioPrestadorServicio.map(
                    subItem => {
                        return html`
                                <div class="tarjeta tarjetaServicio boton" @click="${this.runService}" .item=${subItem} tabinde=0>
                                    <div class="icono">${this.getSVG(subItem.Servicio.Icono)}</div>
                                    <div class="servicio">${subItem.Servicio.Nombre}</div>
                                    <ul class="descripcion">
                                      ${subItem.Servicio.Descripcion.split(".").map(desc => {
                            return html`<li>${desc}</li>`
                        })}
                                    </ul>
                                </div>
                                `
                    }
                )}
                    </div>
                </div>    
                `
            })
            }    
        `
    }

    runService(e) {
        location.href = e.currentTarget.item.Servicio.url
    }

    formatCUIT(cuit) {
        if (cuit) {
            return cuit.toString().substr(0, 2) + "-" + cuit.toString().substr(2, 8) + "-" + cuit.toString().substr(10, 1)
        }
    }
    getSVG(icono) {
        return unsafeHTML(icono)
    }
    stateChanged(state, i, name) {
        if (name == USUARIO) {
            if (state.usuario.entities) {
                this.items = state.usuario.entities.UsuarioPrestador
                this.hidden = false
                this.update()
            } else {
                this.items = []
                this.hidden = true
                this.update()
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
}
window.customElements.define("lista-servicios", listaServicios);