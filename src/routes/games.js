import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import { AssetContext } from '../contexts/assetContext'

const Games = () => {
  const assets = useContext(AssetContext)
  const { games } = assets

  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
      {games.map((game) => {
        return (
          <div style={{ margin: 25 }} key={game.name}>
            <CustomCard cardData={game} />
          </div>
        )
      })}
    </div>
  )
}

export default Games
