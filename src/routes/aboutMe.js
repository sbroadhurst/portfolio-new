import { Card, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutMeTab from '../components/aboutMeTabs/AboutMeTab'
import InterestsTab from '../components/aboutMeTabs/InterestsTab'
import Resume from '../components/aboutMeTabs/Resume'
import SkillsTab from '../components/aboutMeTabs/SkillsTab'
import SpecialAbilitiesTab from '../components/aboutMeTabs/SpecialAbilitiesTab'
import { ContentCenter } from '../components/styledComponents'
import TabPanel from '../components/TabPanel'
import Title from '../components/Title'

const AboutMe = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Title title="About Me" />
      <ContentCenter>
        <Card sx={{ boxShadow: 10, width: '95%', maxWidth: 1440 }}>
          <Box sx={{ maxWidth: { xs: 590, sm: '100%' }, display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example">
              <Tab label="About Me" />
              <Tab label="Résumé" />
              <Tab label="Skills" />
              <Tab label="Interests" />
              <Tab label="Special Abilities" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AboutMeTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Resume />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SkillsTab />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <InterestsTab />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <SpecialAbilitiesTab />
          </TabPanel>
        </Card>
      </ContentCenter>
    </div>
  )
}

export default AboutMe
