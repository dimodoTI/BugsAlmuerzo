export const ACK = String.fromCharCode(6)
export const NACK = String.fromCharCode(21)
export const ENQ = String.fromCharCode(5)
export const STX = String.fromCharCode(2)
export const ETX = String.fromCharCode(3)
export const TEST = "TES" + String.fromCharCode(0) + String.fromCharCode(0)
export const VENTA = "VEN" + String.fromCharCode(104) + String.fromCharCode(0)
export const CIERRE = "CIE" + String.fromCharCode(0) + String.fromCharCode(0)
export const LRC = texto => {
    let a = 0
    for (let i = 0; i < texto.length; i++) {
        a = a ^ (texto.substr(i, 1).charCodeAt(0))
    }
    return String.fromCharCode(a & 255)
}