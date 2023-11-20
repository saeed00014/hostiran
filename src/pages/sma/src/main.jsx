import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import UiSlice from './store/UiSlice.jsx'

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
