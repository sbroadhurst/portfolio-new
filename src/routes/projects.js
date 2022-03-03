import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import { AssetContext } from '../contexts/assetContext'

const Projects = () => {
  const assets = useContext(AssetContext)
  const { projects } = assets

  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
      {projects.map((project) => {
        return (
          <div style={{ margin: 25 }} key={project.name}>
            <CustomCard cardData={project} />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
