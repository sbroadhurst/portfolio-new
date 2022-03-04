import { useContext } from 'react'
import CustomCard from '../components/Card'
import { CardRow } from '../components/styledComponents'
import Title from '../components/Title'
import { AssetContext } from '../contexts/assetContext'

const Home = () => {
  const assets = useContext(AssetContext)
  const { homePageCards } = assets

  return (
    <div>
      <Title title="Stephen Broadhurst" />
      <CardRow>
        {homePageCards.map((card) => {
          return (
            <div style={{ margin: 25 }} key={card.name}>
              <CustomCard cardData={card} />
            </div>
          )
        })}
      </CardRow>
    </div>
  )
}

export default Home
