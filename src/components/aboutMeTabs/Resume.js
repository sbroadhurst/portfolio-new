import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ResumeImage from '../../assets/resumeImage.jpg'

const Resume = () => {
  return (
    <div id="resume">
      <Accordion style={{ border: '1px solid #01579b' }}>
        <AccordionSummary
          style={{ backgroundColor: '#01579b', justifyContent: 'center', alignItems: 'center' }}
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
            View Resume or{' '}
            <a
              style={{ textDecoration: 'none' }}
              href="https://drive.google.com/file/d/1_SFZvQuSzEWr9gFm1XLTCbkYiwXDAK45/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
              Click Here{' '}
            </a>{' '}
            to View and Download
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ justifyContent: 'center', display: 'flex' }}>
          <img src={ResumeImage} alt="resume" />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Resume
