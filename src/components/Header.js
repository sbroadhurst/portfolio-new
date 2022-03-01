import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import { Api, ContactPage, Face, Home, VideogameAsset, Menu } from '@mui/icons-material'
import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useEffect, useState } from 'react'

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
                <ListItemButton component="a" href="/" onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Home />
                  </IconButton>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component="a" href="/projects" onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Api />
                  </IconButton>
                  <ListItemText primary="Projects" />
                </ListItemButton>

                <ListItemButton component="a" href="/games" onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <VideogameAsset />
                  </IconButton>
                  <ListItemText primary="Games" />
                </ListItemButton>

                <ListItemButton component="a" href="/about" onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Face />
                  </IconButton>
                  <ListItemText primary="About Me" />
                </ListItemButton>

                <ListItemButton component="a" href="/contact" onClick={toggleDrawer}>
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
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Projects" icon={<Api />} style={{ margin: '0 10px' }} />
        <BottomNavigationAction label="Games" icon={<VideogameAsset />} style={{ margin: '0 10px' }} />
        <BottomNavigationAction label="About Me" icon={<Face />} style={{ margin: '0 10px' }} />
        <BottomNavigationAction label="Contact" icon={<ContactPage />} />
      </BottomNavigation>
    </Toolbar>
  )
}

export default HeaderComponent
