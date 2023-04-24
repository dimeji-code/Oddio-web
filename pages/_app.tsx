import Header from '@/components/Header'
import cartReducer, { loadState } from '@/store/cartReducer'
import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper' 
import {  store } from '@/store/store'



// const wrappedStore = createWrapper(store)

export default function  App  ({ Component, pageProps }: AppProps) {

  return(
    // <>
    // <Header/>
    // <Component {...pageProps} />
    // </> 
  
  <Provider store={store}>
  <Header/>
  <Component {...pageProps} />
  </Provider> 
  ) 
}
// export default wrapper.withRedux(App)

// export type RootState = ReturnType<typeof store.getState>
