import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    armarNumero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='C' color='#9B9B9B' accion={limpiar} />
        <BotonCalc texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
        <BotonCalc texto='del' color='#9B9B9B' accion={btnDelete} />
        <BotonCalc texto='/' color='#FF9427' accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='7' accion={armarNumero} />
        <BotonCalc texto='8' accion={armarNumero} />
        <BotonCalc texto='9' accion={armarNumero} />
        <BotonCalc texto='x' color='#FF9427' accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='4' accion={armarNumero} />
        <BotonCalc texto='5' accion={armarNumero} />
        <BotonCalc texto='6' accion={armarNumero} />
        <BotonCalc texto='-' color='#FF9427' accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='1' accion={armarNumero} />
        <BotonCalc texto='2' accion={armarNumero} />
        <BotonCalc texto='3' accion={armarNumero} />
        <BotonCalc texto='+' color='#FF9427' accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='0' ancho accion={armarNumero} />
        <BotonCalc texto='.' accion={armarNumero} />
        <BotonCalc texto='=' color='#FF9427' accion={calcular} />
      </View>
    </View>
  );
};

//*NOTAS:
//Cuando tenemos una propiedad que es un booleano no es necesario que enviemos por props lo siguiente ancho={true} sino que simplemente con colocar ancho ya se interpreta como true. Si no se envía nada es false.

//Necesito un espacio en memoria para almacenar las diferentes operaciones y no necesito que se vuelva a renderizar porque no va a haber un cambio en el aspecto visual por ello conviene usar el useRef y no el useEffect.
//Es decir el cambio de esa variable o constante no require que se vuelva a renderizar el componente.
