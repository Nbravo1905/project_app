import React from 'react';

import {
  Image,
  StyleSheet
} from 'react-native';

import { SIZES, images } from '../constants';

const CardMember = (props) => {

  return (
    <Image  
      source={images.card_member}
      resizeMode='contain'
      style={styles.image}
    />
  )

}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    alignSelf: 'center',
    height: 180,
    marginTop: SIZES.padding * 3
  }
})

export default CardMember;