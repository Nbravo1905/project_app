import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { SIZES, COLORS, icons, separator } from '../constants';


const CardPlan = (props) => {

  const { membership, show } = props;

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: SIZES.padding2}}>

        <Text style={{fontSize: SIZES.font, color: COLORS.white}}>{membership.title}</Text>

        {/* benefits */}
        <View style={styles.containerBenefits}>
          <Image source={icons.yellow_bone} resizeMode='contain' style={{width: 25, height: 25, marginRight: SIZES.padding}} />
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: SIZES.font * 1.2}}> 
            <Text style={{color: COLORS.sunshine_gold, fontWeight: 'bold'}}>15% </Text> 
            de descuento en todos los productos</Text>
        </View>
        <View style={styles.containerBenefits}>
          <Image source={icons.yellow_bone} resizeMode='contain' style={{width: 25, height: 25, marginRight: SIZES.padding}} />
          <Text style={{
            fontWeight: 'bold', fontSize: SIZES.font * 1.2,
            color: COLORS.white
          }}>Domicilio <Text style={{color: COLORS.sunshine_gold}}>gratis</Text> <Text style={{fontWeight: 'normal',fontSize: SIZES.base * 1.3}}>*a partir de $120.000</Text></Text>
        </View>

        {/* other benefits */}
        <View>
          {
            membership.benefits.length > 0 ?
              (
                <>
                  {
                    membership.showBenefits ?
                    (
                      <TouchableOpacity style={{flexDirection: 'row'}}
                        onPress={() => show(false)}
                      >
                        <Text style={{fontSize: SIZES.font, color: COLORS.white}}>Ver otros beneficios </Text>
                        <Image source={icons.arrow_up} style={{width: 25, height: 25}} />
                      </TouchableOpacity>
                    )
                    :
                    (
                      <>
                        <TouchableOpacity style={{flexDirection: 'row'}}
                          onPress={() => show(true)}
                        >
                          <Text style={{fontSize: SIZES.font, color: COLORS.white}}>Ver otros beneficios </Text>
                          <Image source={icons.arrow_down} style={{width: 25, height: 25}} />
                        </TouchableOpacity>
                        {
                          membership.benefits.map((item, key) => (
                            <View style={styles.containerBenefits} key={key}>
                              <Image source={item.icon} resizeMode='contain' style={{width: 25, height: 25, marginRight: SIZES.padding}} />
                              <Text style={{fontSize: SIZES.font,
                                color: COLORS.white
                              }}>{item.text}</Text>
                            </View>
                          ))
                        }
                      </>
                    )
                  }
                </>
              )
            :
            <View />
          }
        </View>
        
        <View style={{borderWidth: 1, borderColor: COLORS.sunshine_gold, 
          borderStyle: 'dashed',marginVertical: SIZES.padding}} />

        <View style={{
          marginVertical: SIZES.padding,
        }}>
          <Text style={{fontSize: SIZES.font, color: COLORS.white}}>Paga únicamente</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.textValue}>${separator(membership.value)}
              <Text style={{fontSize: SIZES.font, fontWeight: '200'}}>/año</Text>
            </Text>
            <View style={styles.checkValue}>
              <Text style={{textAlign: 'center', color: COLORS.white,paddingVertical: 3,
                fontSize: SIZES.base * 1.8}}>Lo que equivale{'\n'}a ${separator(membership.equals)} el mes
              </Text>
            </View>
          </View>
        </View>

        {/* buttom */}

        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Adquirir membresia</Text>
        </TouchableOpacity>

        <Text style={styles.termsAndConditions}>Aplican términos y condiciones</Text>

      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 3,
    borderWidth: 1,
    borderColor: COLORS.sunshine_gold,
    marginHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding2
  },
  containerBenefits: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.padding
  },
  btn: {
    backgroundColor: COLORS.sunshine_gold,
    padding: SIZES.padding2,
    borderRadius: SIZES.radius2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding
  },
  textBtn: {
    color: 'black',
    fontWeight: '600',
    fontSize: SIZES.h4
  },
  termsAndConditions: {
    fontSize: SIZES.base * 1.1,
    textAlign: 'center',
    color: COLORS.sunshine_gold,
    marginBottom: SIZES.padding2 * 1.5,
    fontWeight: 'bold'
  },
  textValue: {
    fontSize: SIZES.h2,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  checkValue: {
    backgroundColor: COLORS.terciario, 
    paddingHorizontal: SIZES.padding2 * 1.2,
    borderRadius: SIZES.radius2
  }
});

export default CardPlan;