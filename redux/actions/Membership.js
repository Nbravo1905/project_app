
export function onchageCalculated(payload){
  return{
    type:'ONCHANGE_CALCULATED_VALUE',
    payload
  }
}

export function setOfferValue(payload){
  return{
    type:'SET_OFFER_VALUE',
    payload
  }
}

export function setShowBenefits(payload){
  return{
    type:'SET_SHOW_BENEFITS',
    payload
  }
}