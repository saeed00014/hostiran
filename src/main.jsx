import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './App'
import AppS from './pages/amashop/App'

import dataSlice from './store/dataSlice'
import loadingSlice from './store/loadingSlice'

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    loading: loadingSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {window.location.href.includes('shop') ? <AppS /> : <App /> }
    </Provider>
  </React.StrictMode>,
)
