import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes';
import GlobalStyle from './styles/global'
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import { AuthProvider } from './hooks/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
