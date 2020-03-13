import {
    css
} from "lit-element"

export const boton = css `
.boton{
    display:grid;
    justify-content:center;
    align-items:center;
    grid-template-columns: auto auto;
    grid-gap: .5rem;
    cursor: pointer;
    padding:1rem;
    transition: all 0.5s;
    position: relative;

}
.boton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
}
.boton:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
}
.boton::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.5);
    transform: scale(1.2,1.2);
}
.boton:hover::after {
    opacity: 1;
    transform: scale(1,1);
}
.boton:focus::after {
    opacity: 1;
    transform: scale(1,1);
}
`