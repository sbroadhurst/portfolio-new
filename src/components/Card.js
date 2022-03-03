import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { GitHub, OpenInBrowser } from '@mui/icons-material'
import './card.css'

const CustomCard = (props) => {
  const { cardData } = props
  console.log(cardData)
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 10 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={cardData.image}></Avatar>}
        title={cardData.name}
        subheader={cardData.subtitle}
      />
      <a href={cardData.websiteUrl} target="_blank" rel="noopener noreferrer">
        <CardMedia component="img" height="194" image={cardData.image} alt={cardData.name} />
      </a>
      <CardContent>
        <Typography className="description">{cardData.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className="flex-end">
        <IconButton
          component="a"
          href={cardData.gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit on GitHub">
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
          href={cardData.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open In New Tab">
          <OpenInBrowser />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CustomCard
