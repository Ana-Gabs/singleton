## Proyecto de Dieta con Abstract Factory en Node.js
Este proyecto implementa el **patrón de diseño Singleton** para hacer una configuraci´on global en el sistema

## Estructura del Proyecto
│   index.js             # Punto de entrada de la aplicación
│   package.json         # Archivo de dependencias
│   README.md            # Documentación del proyecto
│
└───singleton            # Carpeta para la clase Singleton
        Configuracion.js # Clase que implementa el patrón Singleton

## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flijo de ejecución
Configuracion inicializada.
Configuracion establecida: apiURL = https://anagabs.com
Configuracion establecida: puerto = 8080
apiURL: https://anagabs.com
puerto: 8080
config1 y config2 son la misma instancia

=== Configuraciones actuales ===
{ apiURL: 'https://anagabs.com', puerto: 8080 }


## Clases principales y metodos
1. Clase Configuracion (singleton/Configuracion.js) --> Gestionar configuraciones globales de la aplicación.
**Métodos principales**
1. static obtenerInstancia(): Devuelve la instancia única de la configuracion.
2. establecerConfiguracion(clave, valor): Establece una clave y su valor correspondiente.
3. obtenerConfiguracion(clave): Obtiene el valor asociado a una clave.
4. listarConfiguraciones(): Devuelve un objeto con todas las configuraciones actuales.
**index.js**
Punto de entrada que demuestra como utilizar el Singleton para gestionar configuraciones globales. Crea configuraciones clave-valor mediante establecerConfiguracion. Recupera configuraciones especificas con obtenerConfiguracion. Para lista todas las configuraciones utilizando listarConfiguraciones.


## Implentación de Singleton
Utiliza un campo estatico privado para almacenar la instancia única. Mientras que el constructor privado impide la cracion directa de objetos mediante new. El acceso global controlado asegura que lod usuarios obtengan la misma instancia
La implemetación del patron Singletón en este proyecto hace que solo exista una instancia de la clase confingufuguración para gestionar las configuraciones de manera global del sistema. Empleando un campo estatico privado para almacenar objetos, se asegura que todas la partes del programa a accedan a la misma instancia. De esta forma se facilita el control centralizado de cconfiguraciones.