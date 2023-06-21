import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  // const navigator = useNavigation();

  //Para configurar las opciones de navigation usamos el setOptions.
  //Podemos determinar el título que se muestra en el header y tiene más peso que el que determinamos en el stack con options. 
  //Podemos en el caso de android cambiar el nombre que acompaña al botón de atrás. 
  //Si al headerBackTitle le pasamos un string vacío '' tomará el idioma del celular y colocará la palabra atrás en el idioma del celular. 
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atrás',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
