import {
    POST
} from "../datos/inicio/datos/dispositivos"
import {
    ACK,
    NACK,
    ENQ,
    ETX,
    STX,
    LRC,
    TEST,
    VENTA,
    CIERRE

} from "../datos/posNet/constantes"

export const PING = "[posNet] PING"
export const INTERPRETAR = "[posNet] INTERPRETAR"
export const RECIBIR = "[posNet] RECIBIR"
export const ENVIAR = "[posNet] ENVIAR"
export const COMANDO = "[posNet] COMANDO"
export const REINTENTO = "[posNet] REINTENTO"
export const COMANDO_TEST = "[posNet] COMANDO_TEST"
export const COMANDO_VENTA = "[posNet] COMANDO_VENTA"
export const COMANDO_CIERRE = "[posNet] COMANDO_CIERRE"


export const ping = () => ({
    type: PING
})

export const interpretar = (mensaje) => ({
    type: INTERPRETAR,
    mensaje: mensaje
})

export const recibir = (codigo, saldo) => ({
    type: RECIBIR,
    codigo: codigo,
    saldo: saldo
})

export const enviar = (comando, timeOut) => ({
    type: ENVIAR,
    comando: comando,
    timeOut: timeOut
})

export const ejecutarComando = (comando, timeOut, operadorTimeOut) => ({
    type: COMANDO,
    comando: comando,
    timeOut: timeOut,
    operadorTimeOut: operadorTimeOut
})

export const reintentoComando = (comando, timeOut) => ({
    type: REINTENTO,
    comando: comando,
    timeOut: timeOut
})

export const comandoTest = () => ({
    type: COMANDO_TEST,
    comandos: [{
            comando: encodeURIComponent(ENQ),
            fin: ACK,
            verificado: false
        },
        {
            comando: encodeURIComponent(STX + TEST + ETX + LRC(TEST + ETX)),
            fin: ETX,
            verificado: true
        },
        {
            comando: encodeURIComponent(ACK),
            fin: null,
            verificado: false
        }
    ]

})

export const comandoVenta = ({
    monto = 0,
    numeroFactura = 0,
    cuotas = 0,
    codigoTarjeta = "",
    codigoPlan = "",
    montoPropina = 0,
    codigoComercio = "",
    nombreComercio = "",
    cuitComercio = "",
    modo = 1
} = {}) => {
    let DATOS_VENTA = (monto * 100).toString().padStart(12, "0")
    DATOS_VENTA += numeroFactura.toString().padEnd(12, "0")
    DATOS_VENTA += cuotas.toString().padStart(2, "0")
    DATOS_VENTA += codigoTarjeta.padStart(3, "0")
    DATOS_VENTA += codigoPlan.padStart(1, " ")
    DATOS_VENTA += (montoPropina * 100).toString().padStart(12, "0")
    DATOS_VENTA += codigoComercio.padEnd(15, " ")
    DATOS_VENTA += nombreComercio.padEnd(23, " ")
    DATOS_VENTA += cuitComercio.padEnd(23, " ")
    DATOS_VENTA += String.fromCharCode(modo)

    return {
        type: COMANDO_VENTA,
        comandos: [{
                comando: encodeURIComponent(ENQ),
                fin: ACK,
                verificado: false
            },
            {
                comando: encodeURIComponent(STX + VENTA + DATOS_VENTA + ETX + LRC(VENTA + DATOS_VENTA + ETX)),
                fin: ETX,
                verificado: true,
                timeOut: 300000
            },
            {
                comando: encodeURIComponent(ACK),
                fin: null,
                verificado: false

            }
        ]

    }

}
export const comandoCierre = () => ({
    type: COMANDO_CIERRE,
    comandos: [{
            comando: encodeURIComponent(ENQ),
            fin: ACK,
            verificado: false
        },
        {
            comando: encodeURIComponent(STX + CIERRE + ETX + LRC(CIERRE + ETX)),
            fin: ETX,
            verificado: true,
            timeOut: 60000
        },
        {
            comando: encodeURIComponent(ACK),
            fin: null,
            verificado: false
        }
    ]

})