//?FLEX, POSITION, BOX OBJECT MODEL

// Los 3 bloques principales para el diseño de aplicaciones en React Native:

// 1. Box Object Model
// 2. Position
// 3. Flex Layout

//?FUNDAMENTOS
//* 1. Box Object Model
//Se refiere al alto, ancho, margen, padding, borde.

//* 2. Position
//Se refiere a la posición absoluta, relativa, top, left, right, left.

//* 3. Flex Layout
//Se refiere a la dirección, ubicación, alineamiento, estirar, encoger, proporciones.

//?BOX OBJECT MODEL
//Se utiliza de la misma manera que en el css de las páginas web.

//TODO -> Propiedad Margin:
//margin -> aplica margen a los 4 lados.
//marginLeft -> margen a la izq.
//marginRight -> margen a la der.
//marginBottom -> margen abajo.
//marginTop -> margen arriba.
//marginVertical -> aplica mismo margen arriba y abajo.
//marginHorizontal -> aplica mismo margen izq y der.

//TODO -> Propiedad Padding:
//padding -> aplica padding a los 4 lados.
//paddingLeft -> padding a la izq.
//paddingRight -> padding a la der.
//paddingBottom -> padding abajo.
//paddingTop -> padding arriba.
//paddingVertical -> aplica mismo padding arriba y abajo.
//paddingHorizontal -> aplica mismo padding izq y der.

//TODO -> Propiedad Border:
//borderWidth -> aplica borde a los 4 lados.
//borderLeftWidth -> borde a la izq.
//borderRightWidth -> borde a la der.
//borderBottomWidth -> borde abajo.
//borderTopWith -> borde arriba.
//borderColor -> aplica color al borde (por defecto es negro).

//!Importante -> SafeAreaView
//Permite especialmente en las pantallas de IOS que tienen una decoración rara, o los parlantes, etc. No se muestre mal.

//No siempre va a App porque a veces uno quiere que llegue hasta arriba una imagen.

//* DIMENSIONS:
//Nos permite acceder al valor del window o del screen:
// -> window (ventana): Tamaño de la ventana de la aplicación visible.
// -> screen (pantalla):	ScaledSize	Tamaño de la pantalla del dispositivo.

//const {height, width} = Dimensions.get('window');

//Lo malo que tiene de usar dimensions es que no nos da los valores reales de la pantalla cuando cambia el tamaño (por ejemplo cuando ponemos horizontal el celular).

//*useWindowDimensions:
//Nos permite acceder al valor del window o del screen.
//La ventaja que tiene es que nos muestra en tiempo real el tamaño de la pantalla cuando cambia.

//  const {width, height} = useWindowDimensions();

//TODO -> las dimensiones la podemos utilizar para:
//Que en lugar de ocupar por ejemplo el 20% del contenedor padre ocupe el 20% de la medida de la pantalla:

// <View
// style={{
//   ...styles.cajaMorada,
//   width: width * 0.2,
// }}
// />

//Esto es útil para ir realizando diseños que se adapten o ocupen dimensiones mayor a la pantalla para usar el scroll.

//?POSITION
//Cuando se crea cualquier componente la posición por defecto es relativa y el valor absoluto es algo que se puede cambiar.

//*Relativa:
//Siempre arranca en el margen superior izquierdo.
//Los valores positivos y negativos van a depender del top, left, right y bottom.
//Si tengo dos elementos:
//    -> Se posicionan en forma de columna por defecto
//    -> Si al de abajo le aumento el top (por lo que sube) no empuja al de arriba.

//*Absoluta:
//Es absoluto en relación al padre.
//Dependiendo de que valores le ponga (top, left, bottom, right) se va a posicionar.
//bottom: 0 -> margen inferior izq (porque por defecto es left: 0).
//right: 0 -> margen superior der.
//Si tengo dos elementos:
//    -> Y uno de ellos tiene posición absoluta (o los dos) por defecto se posicionan uno superpuesto al otro. Por lo que es útil cuando se quieran realizar diseño.

//TODO -> Cómo hacer para que ocupe toda la pantalla con posición absoluta?:

// position: 'absolute',
// bottom: 0,
// left: 0,
// top: 0,
// right: 0,

//? Pero en react-native podemos hacerlo de una manera más simple mediante el:

//...StyleSheet.absoluteFillObject

//! LAS POSICIONES SON RELATIVAS O ABSOLUTAS AL PADRE!!!

//?FLEX BOX
//Nos ayuda a mantener uan estructura consistente entre pantallas.
//Indica como el elemento y sus hijos deben de ubicarse en el espacio disponible que se es asignado.

//TODO -> Prop flex:
//Primero se asigna el espacio a los elementos que no son flex y luego al flex.

//*flex: 1
//Cuando es un único elemento -> le estamos indicando que ocupe todo el espacio posible.
//Cuando hay más componentes (uno de ellos tiene flex:1) -> le estamos indicando que ocupe todo el espacio posible y el resto ocupará el espacio predeterminado o que se le indico con medidas específicas.

//*flex con valores diferentes
//Cuando hay más componentes (todos tienen propiedad flex) -> al que se le aplique un número más alto es el que ocupará más espacio (tipo fracciones). Ejemplo:
// caja1: {
//   flex: 1,
// },
// caja2: {
//   flex: 2,
// },
// caja3: {
//   flex: 3,
// },

//El total es 6 es decir: 1 + 2 + 3
//A la caja1 le corresponde 1/6, a la caja2 2/6 y a la caja3 3/6.

//TODO -> Prop flexDirection
//Por defecto el flexDirection es column

//TODO -> Prop justifyContent
//Por defecto es flex-start

//TODO -> Prop alignItems
//Por defecto es stretch

//TODO -> Prop alignSelf
//Sirve para sobrescribir algún comportamiento que el padre le está indicando.
//Por ejemplo si quiero que una caja tenga el mínimo necesario para mostrar su contenido entonces a esa caja le ponemos alignSelf. Y cualquier opción que permita porque eso solamente va a hacer variar la posición.

//TODO -> Prop flex wrap
//Permite indicar cómo se van a comportar los hijos cuando con más grandes que el padre.
