import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import { CardRow } from '../components/styledComponents'
import Title from '../components/Title'
import { AssetContext } from '../contexts/assetContext'

const Games = () => {
  const assets = useContext(AssetContext)
  const { games } = assets

  return (
    <div>
      <Title title="Games" />
      <CardRow>
        {games.map((game) => {
          return (
            <div style={{ margin: 25 }} key={game.name}>
              <CustomCard cardData={game} />
            </div>
          )
        })}
      </CardRow>
    </div>
  )
}

export default Games
