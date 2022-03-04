import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import Title from '../components/Title'
import { AssetContext } from '../contexts/assetContext'

const Projects = () => {
  const assets = useContext(AssetContext)
  const { projects } = assets

  return (
    <div>
      <Title title="Projects" />
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project) => {
          return (
            <div style={{ margin: 25 }} key={project.name}>
              <CustomCard cardData={project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
