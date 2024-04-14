import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { EditDish } from './pages/EditDish'

import { ThemeProvider } from "styled-components"

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditDish />
    </ThemeProvider>
  </React.StrictMode>,
)
