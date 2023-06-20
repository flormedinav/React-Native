//*Notas:
//- El nombre que le pones a la carpeta cuando creamos un proyecto con react native no es el nombre de la aplicación al final, sino que es el nombre del proyecto.

//- Podemos desactivar el prettier que viene por defecto en el proyecto de react-native agregando en el archivo .eslintrc lo siguiente:

// rules: {
//   'prettier/prettier': 0
// }

//?APLICANDO ESTILOS:
//*Opción 1:
//? Pasando a la props styles los estilos directamente.

//Una forma es pasarle al componente por props la propiedad style. Por ejemplo:

// style={{
//   flex: 1,
//   backgroundColor: 'red',
//   justifyContent: 'center',
// }}

//Donde las primeras llaves indican qeu estamos por usar código de js. Y a la propiedad style le pasamos un objeto literal con las propiedades de css.

//*Opción 2:
//?StyleSheet.

//Es una abstracción similar al CSS.
//Se importa de react native
//Creamos una constante y con la propiedad create le pasamos un objeto.
//Donde el nombre de la propiedad es como la 'class'
//Esa propiedad va a ser un objeto donde le pasamos las propiedades para estilar.

//TODO -> Ejemplo creación del StyleSheet:
// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center'},
//   title: {
//     textAlign: 'center',
//     fontSize: 40,
//     top: -15,
//   },
//   botonIncrementar: {
//     backgroundColor: 'red',
//     borderRadius: 100,
//   },
// });

//TODO -> como se aplicaría el StyleSheet
// <Text style={styles.title}>Contador: {contador}</Text>

//?Observaciones de los estilos:
//- Para que ocupe toda la pantalla debemos colocar el flex: 1.

//- Los view toman el tamaño que tienen los padres, esto hay que tener en cuenta cuando tenemos un View dentro de otro View.

//- Todos los componente por defecto tienen una posición relativa en react-native.
//Por lo que si quisiera subir un poco un componente uso la propiedad top: -15, valores negativos para que suba y positivos para que baje.

//TODO -> IMPORTANTE: pasar un array a la propiedad style
//Al método style se le puede pasar un arreglo con los estilos a aplicar y como podemos ver en una posición de un elemento podemos usar el ternario.

// style={[
//   styles.fabLocation,
//   position === 'bl' ? styles.left : styles.right,
// ]}

//TODO -> Página para realizar sombras:
//https://ethercreative.github.io/react-native-shadow-generator/

//TODO -> Resolver el efecto 'hover' del touchable de incrementar
//TouchableNativeFeedback -> sólo en android
//https://reactnative.dev/docs/touchablenativefeedback#useforeground

//?NOMBRE DE LAS CARPETAS
//Vamos a crear a la altura de las carpetas que viene cuando se crea el proyecto la carpeta: //*src.

//Dentro de la carpeta src vamos a crear por el momento dos carpetas más:
//*componentes
//*screens (pantallas)

//Las screens en contraparte con react sería las pantallas.

//TODO -> cuando tenemos un componente que ocupan toda la pantalla entonces:
//El nombre terminará en Screen, por ejemplo: HolaMundoScreen.

//TODO -> cuando tenemos un componente como en el caso de un botón
//No lleva la terminación de screen e irá a la carpeta components.

//?COMPONENTE DE REACT NATIVE:
//https://reactnative.dev/docs/components-and-apis

//*Button:
//Tiene dos props obligatoria que es el text y el onPress.
//El onPress sería como el onClick.

//TODO -> no se recomienda utilizar el botón sino:
//*TouchableHighlight
//*TouchableOpacity
//*TouchableWithoutFeedback

//Esa recomendación es porque nos permite realizar botones personalizados mediante View, ya que le botón tiene un estilo predeterminado pero no admiten la propiedad style.

//*Text
//Para escribir textos. Sería como el p del html
//Todos los texto que queramos mostrar deben estar envueltos en un componente Text porque o sino marca error.

//?EVENTOS:
//*onPress:
//Es el evento que se dispara cuando alguien tab en el touchable

//!NOTAS IMPORTANTES
//- Se recomienda que las propiedades de css estén ordenadas alfabéticamente. Es buena práctica.
//- Se trabajan en unidades (que son los números que le pasamos a las propiedades de los estilos).
//- Para centrar un texto en un View -> tendríamos que aplicar al padre un justifyContent: 'center' y al text en vez de un textAlign: 'center' un alignSelf: 'center'.

//- Al momento de definir una interface es recomendable que las propiedades se definan arriba y los métodos abajo.
//- Lo mismo que arriba cuando se pasan propiedades por props, es decir se recomienda que se pasen primero las propiedades con valores y luego los métodos o funciones.