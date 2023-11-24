import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import dataSlice from './store/dataSlice'
import loadingSlice from './store/loadingSlice'
import UiSlice from './pages/sma/store/UiSlice'

import App from './App'
import AppS from './pages/amashop/App'
import AppSma from './pages/sma/App'
// const App = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./App")), 0);
//   })
// })
// const AppSma = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./pages/sma/App")), 0);
//   })
// })
// const AppS = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./pages/amashop/App")), 0);
//   })
// })

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    loading: loadingSlice.reducer,
    ui: UiSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {window.location.href.includes('shop') && <AppS /> }
      {window.location.href.includes('sma') && <AppSma /> }
      {!window.location.href.includes('sma') && !window.location.href.includes('shop') && <App /> }
    </Provider>
  </React.StrictMode>,
)
