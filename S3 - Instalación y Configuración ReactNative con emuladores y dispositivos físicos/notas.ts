//? DIFERENCIA ENTRE EXPO CLI Y REACT CLI
//Ambas son interfaces de líneas de comandos

//*EXPO CLI
//Expo se encarga de controlar los builds para IOS y Android.
//Provee muchas funcionalidades nativas incluidas.
//Es excelente para alguien que empieza el desarrollo móvil.
//Permite correr y probar la aplicación en IOS aunque no dispongamos de una Mac.

//Expo Eject
//Permite acceder al código nativo pero mediante el Expo Eject.
//Usa el EJECT en caso de que un módulo nativo no sea soportado por EXPO SDK.

//!No hacer el eject si:
//lo deseas es distribuir en las App Stores.
//Si no estas conforme con el código nativo.
//Disfrutas de las actualizaciones que vienen con Expo.
//Usas Expo Push Notification services.
//Dependes de la comunidad de expo.

//TODO -> negativo:
//No puedes extender una funcionalidad nativa no soportada por expo (a menos que uses el EJECT)

//*REACT NATIVE CLI
//Genera un proyecto con lo mínimo necesario para correr.
//Generar los proyectos nativos para IOS y Android de forma independiente.
//Te permite escribir código nativo por plataforma (en caso de ser necesario).
//Permite acceder al código nativo y ejecutar código directamente para una plataforma.

//TODO -> negativo:
//Necesitar los ambientes de desarrollo por separado. Android Studio (las herramientas al menos) y Xcode.

//?Pros comunes en ambos:
//La mayoría de los paquetes son soportados en ambos ambientes con instalaciones independientes.
//Cambios en caliente (hot reload).
//Desarrollar y ver cambios en desarrollo en dispositivos físicos.
//Utilizar el conocimiento que tienes de React en React Native.
//Desplegar en las AppStores.

//?REACT NATIVE CLI
//Comprender a profundidad React Native.
//Trabajar con los proyectos de Xcode y Android nativo.
//No tengas ninguna limitantes en el futuro con módulos nativos.
//Comprendan como realizar las instalaciones y configuraciones de todo.

//?INSTALACIONES NECESARIAS:
//- Ingresar a: https://reactnative.dev/docs/environment-setup?guide=native
//- Seleccionar la pestaña de React Native CLI Quickstart
//- Seleccionar Windows y Android
//- Instalar desde la página oficial Chocolatey (es un gestor de paquetes como npm, yam, etc).
//      -> Vamos a instalar ahora
//      -> Abrimos una consola de powershell y la ejecutamos como administrador.
//      -> Escribimos el comando Get-ExecutionPolicy
//      -> Si dice Restricted, debemos escribir este comando:  Set-ExecutionPolicy AllSigned
//      -> Luego volvemos a escribir Get-ExecutionPolicy y debería aparecer AllSigned
//      -> luego copiamos para poder instalar:
//Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

//!SIEMPRE GUIARSE DE LA PÁGINA OFICIAL POR SI HAY CAMBIOS
//TODO -> Usar de guía el video de instalaciones necesarias.

//? CREAR DISPOSITIVO VIRTUAL
//- Abrir Android Studio
//- Ir a more actions
//- Ir a Virtual Device Manager
//- Hacer click en create device
//- Seleccionar el tipo de dispositivo y las medidas
//- Hacer click en next
//- Seleccionar como sistema de imagen R
//- Hacer click en next
//- Ir a Show Advanced Settings
//- En emulated performance -> colocar hardware (si tenemos tarjeta gráfica individual)
//- En Memory and Storage colocar 2GB o más dependiendo de la cantidad de RAM de la computadora
//- Finalmente hace click en Finish.

//?CREAR UN PROYECTO DE REACT
//*Comando para la creación de un proyecto de React Native con Ts

//npx react-native init AwesomeTSProject --template react-native-template-typescript

//*Para correr el proyecto debemos escribir en la terminal ubicada en la carpeta que se creó este comando:

//npx react-native run-android

//Metro es como el webpack para una aplicación de react.
//Siempre hay que tener abierto metro porque o sino se cierra la emulación.

//TODO -> Comando útil en Metro -> r
//Sirve para poder hacer un refresh y actualiza el estado de la aplicación.

//TODO -> Modificación del archivo.
//En el archivo de App.tsx borramos todo
//Creamos una View y dentro un Text (importados de React Native).
//Dentro del Text escribimos Hola Mundo.

//Archivo modificado!!
//Podemos hacer un refresh desde Metro con la r.

//?CORRER LA APLICACIÓN EN UN DISPOSITIVO FÍSICO

//* Conectar el celular a la computadora mediante el USB
//- Ir a ajustes
//- Acerca de teléfono
//- Información de software
//- Apretar varias veces sobre número de compilación
//- Va a pedir agregar el pin
//- Luego volver a ir a ajustes
//- Al final aparecerá Opciones de Desarrollador
//- En el swift se puede desactivar la opción de desarrollador.

//- En la powershell escribir el comando: adb device
//- Nos mostrará el emulador y un número y varias letras que es el celular físico.

//- Después desde la carpeta del proyecto abrimos la terminal y ejecutamos el comando para correr la aplicación: npx react-native run-android

//*Ya debería aparecer en ambos, tanto en el emulador y el celular físico.
