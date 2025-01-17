export default class Cl_mCliente {
    constructor(cedula, denominacion, cantidad) {
        this.cedula = cedula;
        this.denominacion = denominacion;
        this.cantidad = cantidad; 
    }

    set cedula(c) {
        this._cedula = +c; 
    }

    get cedula() {
        return this._cedula;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }

    get cantidad() {
        return this._cantidad;
    }

    set denominacion(d) {
        this._denominacion = +d;
    }

    get denominacion() {
        return this._denominacion;
    }

    montoTotal() {
        return this.cantidad * this.denominacion;
    }
}