import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 50,
    margin: 40,
    // width: 250,
    borderWidth: 3,
    // backgroundColor: 'red',
  },
});
