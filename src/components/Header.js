import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'
import { Api, ContactPage, Face, Home, VideogameAsset, Menu } from '@mui/icons-material'
import { BottomNavigation, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import { useEffect, useState } from 'react'
import { BottomNavAction } from './styledComponents'

// const checkActiveRoute = (linkAddress) => {
//   const href = window.location.href
//   console.log(href.includes(linkAddress))

//   return href.includes(linkAddress)
// }

export const HeaderComponent = () => {
  const [mobileView, setMobileView] = useState(false)
  const [drawerOpen, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!drawerOpen)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false)
    }

    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {mobileView ? (
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <Menu />
            </IconButton>
            <Drawer
              {...{
                anchor: 'top',
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}>
              <List>
                <ListItemButton component={Link} to={''} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Home />
                  </IconButton>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} to={'projects'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Api />
                  </IconButton>
                  <ListItemText primary="Projects" />
                </ListItemButton>

                <ListItemButton component={Link} to={'games'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <VideogameAsset />
                  </IconButton>
                  <ListItemText primary="Games" />
                </ListItemButton>

                <ListItemButton component={Link} to={'about'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Face />
                  </IconButton>
                  <ListItemText primary="About Me" />
                </ListItemButton>

                <ListItemButton component={Link} to={'contact'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <ContactPage />
                  </IconButton>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </List>
            </Drawer>
          </Toolbar>
        ) : (
          displayDesktop()
        )}
      </AppBar>
    </Box>
  )
}

const displayDesktop = () => {
  return (
    <Toolbar style={{ justifyContent: 'space-around' }}>
      <BottomNavigation showLabels style={{ background: 'transparent' }}>
        <BottomNavAction component={Link} to={'/'} label="Home" icon={<Home />} />
        <BottomNavAction component={Link} to={'projects'} label="Projects" icon={<Api />} />
        <BottomNavAction component={Link} to={'games'} label="Games" icon={<VideogameAsset />} />
        <BottomNavAction component={Link} to={'about'} label="About Me" icon={<Face />} />
        <BottomNavAction component={Link} to={'contact'} label="Contact" icon={<ContactPage />} />
      </BottomNavigation>
    </Toolbar>
  )
}

export default HeaderComponent
