import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'

import { ThemeProvider } from "styled-components"

import theme from './styles/theme'
import { CartProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
