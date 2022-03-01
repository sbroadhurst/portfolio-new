import React, { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { createTheme, IconButton, ThemeProvider } from '@mui/material'
import { Paper } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import Footer from './components/Footer'
import Header from './components/Header'

import Home from './routes/home'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Header />
        <IconButton
          sx={{
            m: 1,
            position: 'absolute',
            right: 0,
            top: 0,
            color: theme.palette.mode === 'light' ? 'black' : 'white',
          }}
          onClick={() => {
            setDarkMode(!darkMode)
          }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <ScrollToTop />
        <Paper style={{ height: '100vh' }}>
          <Routes>
            {/* <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} /> */}
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Paper>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
