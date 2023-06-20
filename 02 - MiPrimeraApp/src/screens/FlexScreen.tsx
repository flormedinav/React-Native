import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

//Ejercicio wrap
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 300,
    backgroundColor: '#28C4D9',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  caja1: {
    // width: 100,
    // height: 100,
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    // width: 100,
    // height: 100,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    // width: 100,
    // height: 100,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});

//Ejercicio flex
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28C4D9',
//   },
//   caja1: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja2: {
//     flex: 2,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja3: {
//     flex: 3,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
// });

//Ejercicio flexDirection
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28C4D9',
//     flexDirection: 'row',
//   },
//   caja1: {
//     // width: 100,
//     // height: 100,
//     // flex: 1,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja2: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja3: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
// });

//Ejercicio justifyContent:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // height: 300,
//     backgroundColor: '#28C4D9',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   caja1: {
//     // width: 100,
//     // height: 100,
//     // flex: 1,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja2: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja3: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
// });

//Ejercicio alignItems:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // height: 300,
//     backgroundColor: '#28C4D9',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//   },
//   caja1: {
//     // width: 100,
//     // height: 100,
//     // flex: 1,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja2: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
//   caja3: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//   },
// });

//Ejercicio alignSelf:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // height: 300,
//     backgroundColor: '#28C4D9',
//     alignItems: 'flex-start',
//   },
//   caja1: {
//     // width: 100,
//     // height: 100,
//     // flex: 1,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//     alignSelf: 'flex-start',
//   },
//   caja2: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//     alignSelf: 'center',
//   },
//   caja3: {
//     // width: 100,
//     // height: 100,
//     borderWidth: 2,
//     borderColor: 'white',
//     fontSize: 30,
//     alignSelf: 'flex-end',
//   },
// });
