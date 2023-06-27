import { HolaMundoScreen } from '../02 - MiPrimeraApp/src/screens/HolaMundoScreen';
//? NAVEGACIÓN CON REACT NAVIGATE

//Hay cuatro tipos:
//* 1.Stack navigation
//Es como que se van superponiendo los screens. Donde siempre se tiene activo el screen anterior atrás.

//Se navega mediante el -> navigation.navigate.
//Para deshacernos las tarjetas:
//    -> navigation.pop: elimina el screen que esta viendo el usuario.
//    -> popToTop: va a la primera carta que se tiene y destruye todo el stack.
//    -> goBack: va a la carta anterior.

//TODO -> se puede crear varios stack. Para ello conviene tener una carpeta que se llame navigator.

//Para configurar el stack navigation se debe seguir la documentación e instalar las dependencias necesarias y luego crear una instancia de stack.

//TODO -> Configuración del navigation
// useEffect(() => {
//   navigation.setOptions({
//     title: 'Hola mundo',
//     headerBackTitle: 'Atrás',
//   });
// }, []);

//TODO -> configuración del aspecto del stack.
//Para ello usamos el screenOptions en el Stack.Navigator que recibe un objeto y tiene varias propiedades para cambiar lo que queramos.

//Para editar el título del header usamos el options={{title: 'Página 2'}} en el Stack.Screen.

//Ver archivo de StackNavigator.tsx

//TODO -> Mandar props a través de las Screen
// <TouchableOpacity
// onPress={() =>
//   navigation.navigate('PersonaScreen', {
//     id: 1,
//     nombre: 'Pedro',
//   })
// }>
//    <Text> Pedro</Text>
// </TouchableOpacity>

//Para ello como segundo parámetro del onPress le enviamos un objeto con la información que queremos enviar.
//Esta información llega en un objeto de la siguiente forma:

// {
//   "navigation": {},
//   "route": {
//      "key": "PersonaScreen-NsokI_pqSZW_1SWTeuh47",
//      "name": "PersonaScreen",
//      "params": {
//         "id": 1,
//         "nombre": "Pedro"
//      }
//   }
// }

//TODO -> MANERAS DE INDICAR EL TIPO DE LAS DATOS QUE LLEGAN POR PROPS.
//? OPCIÓN 1
//* Manera rápida de indicarle un tipo, pero no recomendada
// export const PersonaScreen = ({navigation, route}: Props) => {

//   const params = route.params as RouterParams;

//   useEffect(() => {
//     navigation.setOptions({
//* Ya no es necesario aquí usar el ! en params!.nombre
//       title: params.nombre,
//     });
//   }, []);

//   return (
//     <View style={styles.globalMargin}>
//       <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
//     </View>
//   );
// };

//? OPCIÓN 2:
//*Esta opción no es recomendada porque no estamos definiendo tipos.

// export const PersonaScreen = ({navigation, route}: Props) => {

//   const params = route.params;

//   useEffect(() => {
//     navigation.setOptions({
//       title: params!.nombre,
//     });
//   }, []);

//   return (
//     <View style={styles.globalMargin}>
//       <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
//     </View>
//   );
// };

//? OPCIÓN 3:
//En el archivo del stack indicamos una interface:
export type RootStackParams = {
  Pagina1Screen: undefined; //Cuando no se recibe nada colocamos undefined
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {
    id: number;
    nombre: string;
  };
};

//Luego le indicamos que Stack que creamos es del tipo genérico de RootStackParams
// const Stack = createStackNavigator<RootStackParams>();

//Ahora en el archivo donde recibimos las props en este caso en PersonaScreen le indicamos a la interface de Props que el tipo genérico es la interface que creamos arriba y en segundo lugar se le manda el nombre de la propiedad de la interface que corresponde:
// interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

//Listo, el params ya es del tipo del objeto de la propiedad de PersonaScreen de la interface RootStackParams:

// export const PersonaScreen = ({navigation, route}: Props) => {
//   const params = route.params;

//   useEffect(() => {
//     navigation.setOptions({
//       title: params.nombre,
//     });
//   }, []);

//   return (
//     <View style={styles.globalMargin}>
//       <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
//     </View>
//   );
// };

//* 2.Drawer navigation
//El drawer navigation es el menú lateral que aparece en el lado izq o der que sirve para mostrar información del perfil o mostrar los screen a los cuales se puede acceder.
//Entonces de ante mano hay que definir los screen a los cuales el usuario puede acceder desde el drawer.

//?Configurar de que lado queremos que se abra el menú:
//Con el drawer position podemos configurar de que lado queremos que se abra el menú.
// drawerPosition='right' o 'left'

// <Drawer.Navigator
// drawerPosition='right'
// >
//   <Drawer.Screen
//     name="StackNavigator"
//     options={{title: 'Home'}}
//     component={StackNavigator}
//   />
//   <Drawer.Screen
//     name="SettingsScreen"
//     options={{title: 'Settings'}}
//     component={SettingsScreen}
//   />
// </Drawer.Navigator>

//?Configurar el título que se muestra en nombre que se muestra en el menú lateral:
//Para ello usamos las options y le pasamos en title el nombre que queremos.

//?Configuración para mostrar el menú a través de un botón personalizado:

//En la página configuramos con un useEffect el navigation.setOption y accedemos a la propiedad de headerLeft:

// useEffect(() => {
//   navigation.setOptions({
//     headerLeft: () => (
//       <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
//     ),
//   });
// }, []);

//Pero para poder acceder al toggleDrawer del navigation debemos cambiar la interface de las props por DrawerScreenProps, que la única diferencia que tiene con el StackScreenProps es que tiene la opción del toggleDrawer.

// interface Props extends DrawerScreenProps<any, any> {}

//?Configurar que cuando la pantalla sea más grande el menú lateral se muestre siempre abierto
//Para ellos debemos usar el screenOptions y pasarle la propiedad drawerType donde usaremos un condicional para ir cambiando el tipo.
//!Recordar:
//Que podemos acceder al ancho o alto de una pantalla mediante el hooks useWindowDimension

// export const MenuLateralBasico = () => {
//   const {width} = useWindowDimensions();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerType: width >= 768 ? 'permanent' : 'front',
//       }}>
//       <Drawer.Screen
//         name="StackNavigator"
//         options={{title: 'Home'}}
//         component={StackNavigator}
//       />
//       <Drawer.Screen
//         name="SettingsScreen"
//         options={{title: 'Settings'}}
//         component={SettingsScreen}
//       />
//     </Drawer.Navigator>
//   );
// };

//TODO -> Drawer personalizado:
//Solamente dentro de Drawer.navigation puede haber pantallas es decir Drawer.Screen.

//Para ello debemos pasarle la propiedad drawerContent que recibe una función que retorna una JSX y recibe por parámetro las props.

//A parte debemos crear el funcional componente que le vamos a pasar a drawerContent.
//Debemos usar el DrawerContentScrollView, dentro del mismo podemos usar view, text, image de react-native.

//Para las opciones de menú podemos usar una TouchableOpacity y dentro pasarle la función onPress con el navigation.navigate('').

//Lo que colocamos dentro del paréntesis va a ser igual al name que definimos en el Drawer.Screen.

//Por lo tanto no podemos agregar más navegación que la que está en el Drawer.Navigator.

//El navigation lo desestructuramos de las props.

// const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
//   return (
//     <DrawerContentScrollView>
//       {/* Parte del avatar */}
//       <View style={styles.avatarContainer}>
//         <Image
//           source={{
//             uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
//           }}
//           style={styles.avatar}
//         />
//       </View>

//       {/* Opciones de menú */}

//       <View style={styles.menuContainer}>
//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => {
//             navigation.navigate('StackNavigator');
//           }}>
//           <Text style={styles.menuText}>Navegación</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => {
//             navigation.navigate('SettingsScreen');
//           }}>
//           <Text>Settings</Text>
//         </TouchableOpacity>
//       </View>
//     </DrawerContentScrollView>
//   );
// };

//? useSafeAreaInsets
//Te permite configurar de manera más personalizada el SafeArea.
//En el ejemplo de abajo le estamos indicando que solamente tenga en cuanta el espacio superior.
//Además podemos sumarle otro valor de margin.
//El inserts tiene las propiedades: top, bottom, left, right

// export const SettingsScreen = () => {
//   const insets = useSafeAreaInsets();

//   return (
//     <View
//       style={{
//         ...styles.globalMargin,
//         marginTop: insets.top + 20,
//       }}>
//       <Text style={styles.title}>SettingsScreen</Text>
//     </View>
//   );
// };

//* 3.BottomTab navigation
//Cada uno de los tabs se mantienen activos.
//Cuando se carga el TabsScreen no quiere decir que inmediatamente estos tabs se van a cargar de manera simultanea, sino que son cargados bajo demando.
//Cuando son cargados por primera vez, se mantienen activos.
//Esto significaría por ejemplo que la opción por defecto es el tba 1 y cuando se abre este se va a dispara un useEffect y si este useEffect no tiene ninguna dependencia aunque ons vayamos al tab 2 o tab 3 y volvamos al tab 1 no se va a volver a disparar.
//Cuando entremos a las opciones de tab 2 y tab 3 recién se van a disparar los useEffect que estos contienen. Pero si no se vuelve a disparar si no tienen arrays de dependencias.
//Dentro de los tabs son screen, hasta inclusive podríamos configurar otra navegación dentro como stacks, tabs, topTabs.

//En ejemplo como tenemos un Drawer no vamos a colocar los tabs a nivel de App porque o sino no tendríamos el Drawer.
//Por ello lo colocamos como otro opción del menú lateral (Drawer)

// export const MenuLateral = () => {
//   const {width} = useWindowDimensions();

//   return (
//     <Drawer.Navigator
//       drawerContent={props => <MenuInterno {...props} />}
//       screenOptions={{
//         drawerType: width >= 768 ? 'permanent' : 'front',
//       }}>
//       <Drawer.Screen name="Tabs" component={Tabs} />
//       <Drawer.Screen name="StackNavigator" component={StackNavigator} />
//       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//       {/* <Drawer.Screen name="SettingsScreen" component={SettingStackScreen} /> */}
//     </Drawer.Navigator>
//   );
// };

//?Configuración para colocar íconos:

//?Opción 1:
//Haciendo la configuración en el elemento de Tab.Screen (esta es una versión más larga).

// <Tab.Screen
// name="Tabs1Screen"
// options={{
//   title: 'Tab1',
//   tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
// }}
// component={Tabs1Screen}
// />

//Para ello usamos el tabBarIcon que recibe una función y devuelve un elemento de React.
//Esta función además recibe props de la cual podemos acceder al color que es el que lo hereda del padre.

//Pero no es muy conveniente usarla porque queda código largo dentro de la misma.

//?Opción 2:
//Es realizar la configuración de manera global mediante el screenOptions.
//Para ello le pasamos una función que retorne un objeto con las configuraciones según la ruta en la que se encuentra.
//Hacemos el uso de un switch case para que evalúe según el name del Tab.Screen coloque un text diferente como ícono.

// export const Tabs = () => {
//   return (
//     <Tab.Navigator
//       sceneContainerStyle={{
//         backgroundColor: 'white',
//       }}
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: colores.primary,
//         tabBarStyle: {
//           borderTopColor: colores.primary,
//           // borderTopWidth: 0,
//           elevation: 0,
//         },
//         tabBarLabelStyle: {
//           fontSize: 15,
//         },
//         tabBarIcon: ({color, size, focused}) => {
//           let iconName: string = '';

//           switch (route.name) {
//             case 'Tabs1Screen':
//               iconName = 'T1';
//               break;

//             case 'Tabs2Screen':
//               iconName = 'T2';
//               break;

//             case 'StackNavigator':
//               iconName = 'T3';
//               break;
//           }

//           return <Text style={{color}}>{iconName}</Text>;
//         },
//       })}>
//     </Tab.Navigator>
//   );
// };

//?Configuración en Material Bottom Tab

//* 4.MaterialTop navigation
//Seguir el ejemplo realizado en el curso junto con las indicaciones de la documentación oficial.

//TODO -> COLOCAR ÍCONOS:
//Para agregar íconos podemos instalar un paquete de:
//https://github.com/oblador/react-native-vector-icons

//Para instalar hacemos:
//npm install --save react-native-vector-icons

//Luego para configurar en android debemos editar el build.gradle de la siguiente ruta android/app/build.gradle

//Debajo de la primera importación colocamos:
//*En el caso que queramos todos los íconos:
//apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

//*En el caso que solamente queramos algunos:
// project.ext.vectoricons = [
//   iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
// ]

//Dentro del array le pasamos el nombre del paquete de íconos que queremos usar. Podemos ver la lista al comienzo del README del github.
