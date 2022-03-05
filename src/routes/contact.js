import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material'
import { Avatar, Card, CardHeader, IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CardRow } from '../components/styledComponents'
import Title from '../components/Title'
import MyAvatar from '../assets/myAvatar.jpg'

const Contact = () => {
  return (
    <div>
      <Title title="Contact" />
      <CardRow>
        <Card style={{ padding: 25, width: 'fit-content', maxWidth: '95%' }}>
          <CardHeader
            avatar={<Avatar aria-label="avatar" src={MyAvatar}></Avatar>}
            title="Stephen Broadhurst"
            subheader={`Javascript Developer - React & Angular`}></CardHeader>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton href="https://github.com/sbroadhurst" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </IconButton>
            <TextField
              sx={{ width: '25ch' }}
              id="github"
              label="GitHub"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={'https://github.com/sbroadhurst'}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton
              href="https://www.linkedin.com/in/stephen-broadhurst-349145166/"
              target="_blank"
              rel="noopener noreferrer">
              <LinkedIn />
            </IconButton>
            <TextField
              sx={{ width: '49ch' }}
              id="linkedIn"
              label="LinkedIn"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={'https://www.linkedin.com/in/stephen-broadhurst-349145166/'}
            />
            &emsp;*
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton href="mailto:stepbro31@gmail.com">
              <Email />
            </IconButton>
            <TextField
              sx={{ width: '19ch' }}
              id="email"
              label="Email"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={'stepbro31@gmail.com'}
            />
            &emsp;*
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton href="tel:4074163579">
              <Phone />
            </IconButton>
            <TextField
              sx={{ width: '14ch' }}
              id="phone"
              label="Phone"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={'(407) 416 - 3579'}
            />
          </Box>
          &emsp; <sub style={{ fontSize: 10, marginTop: 65 }}>* Prefered Contact Methods</sub>
        </Card>
      </CardRow>
    </div>
  )
}

export default Contact
