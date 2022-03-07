import { AirplaneTicket, Fastfood, Movie, School, SportsEsports } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { AmazonIcon, AnimeIcon, BoardGameIcon, HuluIcon, NetflixIcon } from '../../assets/customSvgs'
import { CardRow, DeviIcon } from '../styledComponents'

const InterestsTab = () => {
  return (
    <div>
      <CardRow>
        <DeviIcon>
          <SportsEsports sx={{ fontSize: 60 }} /> <Typography>&ensp;Video Games</Typography>
        </DeviIcon>
        <DeviIcon>
          <Movie sx={{ fontSize: 60 }} /> <Typography>&ensp;Movies</Typography>
        </DeviIcon>
        <DeviIcon>
          <AirplaneTicket sx={{ fontSize: 60 }} /> <Typography>&ensp;Travel</Typography>
        </DeviIcon>
        <DeviIcon>
          <Fastfood sx={{ fontSize: 50 }} /> <Typography>&ensp;Food</Typography>
        </DeviIcon>
        <DeviIcon>
          <NetflixIcon sx={{ fontSize: 40 }} /> <Typography>&ensp;Netflix</Typography>
        </DeviIcon>
        <DeviIcon>
          <HuluIcon sx={{ fontSize: 60 }} /> <Typography>&ensp;Hulu</Typography>
        </DeviIcon>
        <DeviIcon>
          <AmazonIcon sx={{ fontSize: 50 }} viewBox="0 0 50 50" /> <Typography>&ensp;Amazon</Typography>
        </DeviIcon>
        <DeviIcon>
          <BoardGameIcon sx={{ fontSize: 40 }} /> <Typography>&ensp;Board Games & Card Games</Typography>
        </DeviIcon>
        <DeviIcon>
          <AnimeIcon sx={{ fontSize: 60 }} viewBox="0 0 32 32" /> <Typography>&ensp;Anime</Typography>
        </DeviIcon>
        <DeviIcon>
          <School sx={{ fontSize: 60 }} /> <Typography>&ensp;Learning</Typography>
        </DeviIcon>
      </CardRow>
    </div>
  )
}

export default InterestsTab
