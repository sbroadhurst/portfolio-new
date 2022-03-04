import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import { CardRow } from '../components/styledComponents'
import Title from '../components/Title'
import { AssetContext } from '../contexts/assetContext'

const Projects = () => {
  const assets = useContext(AssetContext)
  const { projects } = assets

  return (
    <div>
      <Title title="Projects" />
      <CardRow>
        {projects.map((project) => {
          return (
            <div style={{ margin: 25 }} key={project.name}>
              <CustomCard cardData={project} />
            </div>
          )
        })}
      </CardRow>
    </div>
  )
}

export default Projects
