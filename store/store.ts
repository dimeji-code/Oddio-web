import cartReducer, { loadState } from '@/store/cartReducer'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

  const makeStore = () => configureStore({
    reducer:{
      cart: cartReducer,
    },
   preloadedState:loadState('cart')
  })

//   export const wrapper = createWrapper(makeStore)
export const store = makeStore(); // HERE!

//   export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<RootStore["getState"]>;