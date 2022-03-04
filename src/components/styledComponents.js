import { BottomNavigationAction } from '@mui/material'
import { styled } from '@mui/system'

export const BottomNavAction = styled(BottomNavigationAction)(({ linkAddress }) => ({
  margin: ' 0 10px',
  background: 'linear-gradient(to right, transparent, transparent), linear-gradient(to right, red, pink, blue)',
  backgroundSize: '100% 3px, 0 3px',
  backgroundPosition: '100% 100%, 0 100%',
  backgroundRepeat: 'no-repeat',
  transition: 'background-size 400ms',
  '&:hover': {
    backgroundSize: '0 3px, 100% 3px',
  },
}))
