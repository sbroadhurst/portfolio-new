import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, TextField } from '@mui/material'
import React from 'react'
import { CardRow, IconTextBox } from '../components/styledComponents'
import Title from '../components/Title'
import MyAvatar from '../assets/myAvatar.jpg'

const Contact = () => {
  return (
    <div>
      <Title title="Contact" />
      <CardRow>
        <Card style={{ maxWidth: '95%' }}>
          <CardHeader
            avatar={<Avatar aria-label="avatar" src={MyAvatar}></Avatar>}
            title="Stephen Broadhurst"
            subheader={`Javascript Developer - React & Angular`}></CardHeader>
          <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
            <IconTextBox>
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
            </IconTextBox>
            <IconTextBox>
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
            </IconTextBox>
            <IconTextBox>
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
            </IconTextBox>
            <IconTextBox>
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
            </IconTextBox>
            <sub style={{ fontSize: 10, marginTop: 40 }}>* Preferred Contact Methods</sub>
          </CardContent>
        </Card>
      </CardRow>
    </div>
  )
}

export default Contact
