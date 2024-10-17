export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("mainFrom");
        this.tabla = document.getElementById("main_Tabla");
        this.btAgregarcliente = document.getElementById("main_Agregarcliente");
        this.montoTotal = document.getElementById("montoTotal");
        this.billete10 = document.getElementById("billete10");
        this.billete20 = document.getElementById("billete20");
        this.billete50 = document.getElementById("billete50");
        this.montoTotal = document.getElementById("montoTotal");
        this.seccionInicializacion = document.getElementById("inicializacion"); 
        
        this.btAgregarcliente.onclick = () => controlador.mostrarVistasCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    ocultarInicializacion() {
     this.seccionInicializacion.hidden = true; 
 }
 
 
    reportarCliente({ cedula, denominacion, cantidad, montoTotal, billete10, billete20, billete50, montoTotal }) {
     this.tabla.innerHTML += `
         <tr>
             <td>${cedula}</td>
             <td>${denominacion}</td>
             <td>${cantidad}</td>
             <td>${montoTotal.toFixed(2)}$</td>
         </tr>`;
     
     this.billete10.innerHTML = billete10.toFixed(2);
     this.billete20.innerHTML = billete20.toFixed(2);
     this.billete50.innerHTML = billete50.toFixed(2);
     this.montoTotal.innerHTML = montoTotal.toFixed(2);  
     
    }
 
    mostrarBilletesIniciales(inicial10, inicial20, inicial50) {
     console.log(`Billetes de $10 iniciales: ${inicial10}`);
     console.log(`Billetes de $20 iniciales: ${inicial20}`);
     console.log(`Billetes de $50 iniciales: ${inicial50}`);
 
 }}