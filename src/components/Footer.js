import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material'
import { Paper } from '@mui/material'

const openGitHub = () => {
  window.open('https://github.com/sbroadhurst', '_blank')
}

const openLinkedIn = () => {
  window.open('https://linkedin.com/in/stephen-broadhurst-349145166', '_blank')
}

const openEmail = () => {
  window.open('mailto:stepbro31@gmail.com')
}

const openPhone = () => {
  window.open('tel:4074163579')
}

export const FooterComponent = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="GitHub" icon={<GitHub />} onClick={openGitHub} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} onClick={openLinkedIn} />
        <BottomNavigationAction label="Email" icon={<Email />} onClick={openEmail} />
        <BottomNavigationAction label="Call" icon={<Phone />} onClick={openPhone} />
      </BottomNavigation>
    </Paper>
  )
}

export default FooterComponent
