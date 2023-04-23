import Header from '@/components/Header'
import cartReducer, { loadState } from '@/reducers/cartReducer'
import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:{
   cart: cartReducer
 },
 preloadedState:loadState('cart')
})

export default function App({ Component, pageProps }: AppProps) {




  return(
  <Provider store={store}>
    <Header/>
    <Component {...pageProps} />
  </Provider>  
  ) 
}
export type RootState = ReturnType<typeof store.getState>

