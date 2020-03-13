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
import { modoPantalla } from "../../../redux/actions/ui";
import { guardarUsuario, guardarImporteSaldo, guardarImporteRecarga } from "../../../redux/actions/tarjetachipRecarga";

export class tarjetaViandaMenu extends LitElement {
    constructor() {
        super();
        this.item = {};
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 95%;
            width: 80%;
            background-color:var(--fondo-etiqueta);
            border-radius: .5rem;
            grid-template-rows: 50% 10% 7% auto;
            grid-template-columns: 100%;  
        }
        #etiquetaImagen{
            display: grid;
            justify-items: center;
            align-items: flex-start;  
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            /* -moz-box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1);
            -webkit-box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1);
            box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1); */
            border-top-left-radius : .5rem;
            border-top-right-radius : .5rem;
        }
        #etiquetaTitulo{
            display: grid;
            justify-items: left;
            align-items: center;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1rem;
            color:black;
            font-weight:bold;
        }
        #etiquetaPrecio{
            display: grid;
            justify-items: left;
            align-items: flex-end;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1.2rem;
            color:var(--color-precio);
            font-weight:bold;
        }
        #etiquetaDescripcionTitulo{
            display: grid;
            justify-items: left;
            align-items: center;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1.2rem;
            color:black;
            font-weight:bold;
        }
        #etiquetaDescripcion{
            display: grid;
            justify-items: left;
            align-items: start;  
            height: 80%;
            width: 95%;
            /* background-color:#dbdada; */
            font-size:0.8rem;
            color:#4b4a4a;
            /* border-radius: .5rem; */
            padding: .3rem;
        }
        `
    }
    render() {
        return html`
        <div id="etiquetaImagen" style="background-image:url('${this.item.url}')"></div>
        <div id="etiquetaTitulo">${this.item.titulo}</div>
        <div id="etiquetaPrecio">$${this.item.precio}.-</div>
        <div id="etiquetaDescripcion">${this.item.descripcion}</div>
        `
    }
    stateChanged(state, name) {
    }

    static get properties() {
        return {
            item: {
                type: Object
            }
        }
    }

}
window.customElements.define("tarjeta-vianda-nmenu", tarjetaViandaMenu);