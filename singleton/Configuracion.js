class Configuracion {
    // Campo estatico para almacenar la unica instancia
    static #instancia = null;

    // constructor privado
    constructor() {
        if (Configuracion.#instancia) {
            throw new Error("No puedes crear otra instancia. Usa Configuracion.obtenerInstancia()");
        }
        this.configuraciones = {};
        console.log("Configuracion inicializada.");
    }

    // metodo estatico para obtener la instancia unica
    static obtenerInstancia() {
        if (!Configuracion.#instancia) {
            Configuracion.#instancia = new Configuracion();
        }
        return Configuracion.#instancia;
    }

    // metodo para establecer una configuracion
    establecerConfiguracion(clave, valor) {
        this.configuraciones[clave] = valor;
        console.log(`Configuracion establecida: ${clave} = ${valor}`);
    }

    // metodo para obtener una configuración
    obtenerConfiguracion(clave) {
        return this.configuraciones[clave] || null;
    }

    // metodo para listar todas las configuraciones
    listarConfiguraciones() {
        return { ...this.configuraciones };
    }
}

module.exports = Configuracion;
