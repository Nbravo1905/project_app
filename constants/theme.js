import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {

  primary: '#654090',
  secondary: '#A47DD0',
  terciario: '#8A5DBA',

  green: '#4FE8BA',
  sunshine_gold: '#FFD600',
  blue_sky: '#6670E8',
  orange: '#FF6B00',
  white: '#FFFFFF'

}

export const SIZES = {


  base: 8,
  font: 14,
  radius: 30,
  radius2: 15,
  padding: 10,
  padding2: 12,

  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,


  width,
  height

}

const theme = { COLORS, SIZES};

export default theme;