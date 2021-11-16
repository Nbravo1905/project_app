import React, {useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,  
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, SIZES } from '../constants';
import CardMember from '../components/CardMember';
import CardPlan from '../components/CardPlan';
import Calculate from '../components/Calculate';
import Experiences from '../components/Experiences';

import * as actions from '../redux/actions/Membership';

const Home = () => {

  const experiences = useSelector(state => state.membership.experiences);
  const calculatedValue = useSelector(state => state.membership.calculatedValue);
  const offerValue = useSelector(state => state.membership.offerValue);
  const membership = useSelector(state => state.membership.membership);

  const dispatch = useDispatch();

  function renderTitle () {
    return (
      <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding * 3}}>
        <View 
          style={{
            flexDirection: 'row',
            paddingTop: SIZES.padding * 5
          }}
        >
          <Text style={styles.titleText}>LAIKA</Text>
          <Text style={[styles.titleText, {color: COLORS.sunshine_gold}]}> Member</Text>
        </View>
        <Text style={styles.subTitle}>Conviértete en miembro, recibe beneficiós exclusivos y dale lo mejor a tu mascota.</Text>
      </View>
    )
  }

  function onchangeText (text) {

    if (text != '') {
      dispatch(actions.onchageCalculated(text));
    }
  }

  function onClickCalculate () {

    if (calculatedValue != 0) {
      let offerValue = (calculatedValue / 100) * 15;
      dispatch(actions.setOfferValue(offerValue));
    }else{
      Alert.alert(
        'Ups.. Laika',
        'Digite un valor a calcular'
      )
    }

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary, COLORS.primary]}
        style={{ flex: 1 }}
      >
        <ScrollView>

          {renderTitle()}
          
          <CardMember />

          <CardPlan membership={membership} show={(option) => dispatch(actions.setShowBenefits(option))} />

          <Calculate offerValue={offerValue} 
            calculatedValue={calculatedValue} 
            onchage={(text) => onchangeText(text)}
            onClickCalculate={() => onClickCalculate()} />
          
          {
            experiences.length > 0 ?
              (
                <>
                  <Text style={styles.experienceTitle}>Experiencias de{'\n'}LAIKA
                    <Text style={{color: COLORS.sunshine_gold}}> Members</Text>
                  </Text>
                  {
                    experiences.map((item, key) => (
                      <Experiences data={item} key={key} />
                    ))
                  }
                </>
              )
            :
            (<View />)
          }


          <View style={{marginVertical: SIZES.padding2 * 2}} />

        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    color: COLORS.white,
    fontSize: SIZES.h1 * 1.5,
    fontWeight: 'bold'
  },
  subTitle: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.font * 1.2
  },
  experienceTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    textAlign: 'center'
  }
});

export default Home;