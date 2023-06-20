import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    alignSelf: 'flex-start',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

//Ejercicio 1:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     flex: 1,
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 2:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//     alignItems: 'stretch', //Esta propiedad esta por defecto
//   },
// });

//Ejercicio 3:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//     alignSelf: 'center',
//   },
// });

//Ejercicio 4:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     // alignSelf: 'center',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//     alignSelf: 'flex-start',
//     marginBottom: 30,
//   },
// });

//Ejercicio 5:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'stretch', //Por defecto es stretch
//   },
//   cajaMorada: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 6:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//   },
//   cajaMorada: {
//     flex: 1,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     flex: 1,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     flex: 2,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 7:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 8:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     position: 'relative',
//     left: 100,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 9:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     position: 'relative',
//     top: 100,
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     position: 'relative',
//     left: 100,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

//Ejercicio 10:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     position: 'relative',
//     top: 50,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });
