import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { SIZES, COLORS, separator } from '../constants';

const Calculate = (props) => {

  const { offerValue, onchage, calculatedValue, onClickCalculate } = props;

  return (
    <View style={{
      marginVertical: SIZES.padding2 * 3,
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: SIZES.h1,
        color: COLORS.white,
        fontWeight: 'bold'
      }}>Calcula tu ahorro{'\n'}con la membresia</Text>
      <Text style={{
        color: COLORS.white,
        fontSize: SIZES.font * 1.2,
      }}>¿Cuánto gastas al mes en tu peludo?</Text>

      <TextInput 
        style={styles.input}
        keyboardType='numeric'
        placeholder='$'
        placeholderTextColor='white'
        onChangeText={(text) => onchage(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => onClickCalculate()}
      >
        <Text style={{
          color: 'black',
          fontSize: SIZES.h4
        }}>Calcular</Text>
      </TouchableOpacity>

      <View style={{
        alignItems: 'center',
        marginTop: SIZES.padding * 1.5
      }}>
        <Text style={{color: COLORS.white, fontSize: SIZES.h3}}>Te ahorras</Text>
        <Text style={{color: COLORS.sunshine_gold, fontSize: SIZES.h2}}>${separator(offerValue)}</Text>
        <Text style={{color: COLORS.white, fontSize: SIZES.h3}}>al año</Text>
      </View>
    
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.secondary,
    width: '80%',
    borderRadius: SIZES.radius2,
    marginTop: SIZES.padding2 * 1.5,
    textAlign: 'center',
    height: 60,
    fontSize: SIZES.h3,
    color: COLORS.white
  },
  btn: {
    backgroundColor: COLORS.sunshine_gold,
    padding: SIZES.padding2,
    borderRadius: SIZES.radius2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: SIZES.padding2
  }
})

export default Calculate;