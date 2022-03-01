import { createTheme } from '@mui/system'
import { useState } from 'react'

export const getTheme = (state, props) => ({
  value: state,
})

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })
}

export default Theme
