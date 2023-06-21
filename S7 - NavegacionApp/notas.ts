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
//* 3.BottomTab navigation
//* 4.MaterialTop navigation
