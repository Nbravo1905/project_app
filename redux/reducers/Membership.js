import { icons, images } from '../../constants';

const INITIAL_STATE = {
  membership: {
    title: 'Beneficios los 365 dias del año',
    benefits: [
      {
        icon: icons.purple_bone,
        text: 'regalo de bienvenida',
      },
      {
        icon: icons.purple_bone,
        text: 'Bono Netflix para maratonear',
      },
      {
        icon: icons.purple_bone,
        text: 'Beneficios en restaurantes y tiendas',
      },
      {
        icon: icons.purple_bone,
        text: 'Por cada pedido que hagas, donaremos un porcentaje a una fundación',
      }
    ],
    value: 69900,
    equals: 5260,
    showBenefits: false
  },
  calculatedValue: 0,
  offerValue: 0,
  experiences: [
    {
      img: images.card_3,
      title: 'Me converti en LaikaMember y todo se volvio mas facil',
      description: 'Con los beneficios de LaikaMember '+
      'aseguro los mejores precios sumado de regalos que le encantan'+
      'a mi perro y la comodidad de que todo llega ala puerta de mi casa.'
    },
    {
      img: images.card_2,
      title: 'Soy LaikaMember y nunca habia logrado ahorrar tanto'+
      'en las compras para mi mascota',
      description: 'Con el descuento de la membresia me ahorro mas de 50 mil pesos'+
      'al mes y 600 mil pesos al año'
    },
    {
      img: images.card_1,
      title: 'Me encanta ser parte del club LaikaMember', 
      description: 'Logro consentir mucho a mi mascota y ademas se con'+
      'mis compras. ayudo a mascotas necesitadas.'
    }
  ]
}


export default function MembershipReducer(state = INITIAL_STATE, action)
{
  switch (action.type) {
    case 'ONCHANGE_CALCULATED_VALUE':
      return {
        ...state,
        calculatedValue: action.payload
      }
    case 'SET_OFFER_VALUE':
      return {
        ...state,
        offerValue: action.payload
      }
    case 'SET_SHOW_BENEFITS':
      return {
        ...state,
        membership: {
          ...state.membership,
          showBenefits: action.payload
        }
      }
    default:
      return state;
  }
}
