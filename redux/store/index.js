import { configureStore } from '@reduxjs/toolkit'

import MembershipReducer from '../reducers/Membership';

export default configureStore({
  reducer: {
    membership: MembershipReducer,
  },
})