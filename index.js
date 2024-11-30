const Configuracion = require('./singleton/Configuracion');

try {
    // Obtener la instancia de configuración
    const config1 = Configuracion.obtenerInstancia();
    config1.establecerConfiguracion("apiURL", "https://anagabs.com");
    config1.establecerConfiguracion("puerto", 8080);

    // obtiene la instancia desde otro lugar
    const config2 = Configuracion.obtenerInstancia();
    console.log("apiURL:", config2.obtenerConfiguracion("apiURL"));
    console.log("puerto:", config2.obtenerConfiguracion("puerto"));

    // comprueba que ambas instancias son iguales
    console.log(config1 === config2 ? "config1 y config2 son la misma instancia" : "config1 y config2 son diferentes instancias");

    // listar todas las configuraciones
    console.log("\n=== Configuraciones actuales ===");
    console.log(config2.listarConfiguraciones());

} catch (error) {
    console.error(error.message);
}
