import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import { SIZES, COLORS } from '../constants';

const Experiences = (props) => {

  const {data} = props;

  return (
    <>
      <View style={styles.container}>
        <Image source={data.img} style={styles.img} />
        <View style={{flex:1, marginLeft: 10}}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    elevation: 10,flexDirection: 'row', backgroundColor: COLORS.primary, height: 200, marginHorizontal: SIZES.padding,
    padding: SIZES.padding2 * 1.2, borderRadius: SIZES.radius2, marginTop: SIZES.padding2 * 1.2
  },
  img: {
    borderRadius: SIZES.radius2,
    width: 120,
    height: 170
  },
  title: {
    fontSize: SIZES.h4,
    color: COLORS.white,
  },
  description: {
    color: COLORS.white,
    fontWeight: '300',
    fontSize: SIZES.base * 1.6,
    marginTop: SIZES.padding
  }
})

export default Experiences;