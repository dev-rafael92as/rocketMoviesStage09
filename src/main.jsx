import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './pages/SignIn'
import GlobalStyle from './styles/global'
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <SignIn />
    </ThemeProvider>
  </React.StrictMode>
)
