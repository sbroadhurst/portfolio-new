import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Me from '../../assets/me.jpg'
//  class ='img' display: flex, justify-content: 'center'; width:100%, max-width: 250px}}

const AboutMeTab = () => {
  return (
    <div>
      <img
        src={Me}
        style={{ float: 'left', margin: '0px 15px 15px 0px', width: '40%', maxWidth: 300 }}
        alt="Stephen Broadhurst"
      />
      <Typography>
        I am a continual learner who has built up some experience working as a JavaScript and Web Application developer.
        I am constantly looking to improve myself and better understand the work experience. I work hard for the chance
        to prove myself in many different working environments and I am always willing to learn new languages or tools
        to further myself and become a more valuable asset. <br />
        <br /> I have been working almost every day since the age of 15 and continue to work on myself. I enjoy learning
        new things and I have an educated background. I graduated college from Concordia University of Austin in
        December of 2017 with a Bachelor of Science in Computer Science. I have been working on my skills and have put
        together a few websites that demonstrate what I have learned. I am constantly working on new things in my spare
        time, to better understand and have fun with the work that I like to do. <br />
        <br />
        Outside of work, I have a few different interests. I like to: play videogames, play card or board games, watch
        Netflix/Hulu, watch anime, and learn new things. I am easy-going and have a great sense of humor. I am very
        reliable and responsible, you can rest easy and count on me! If you would like to contact me regarding a job
        opportunity or anything at all, my contact information is on the{' '}
        <Link to="/contact" style={{ textDecoration: 'none', color: 'blue' }}>
          contact page
        </Link>
        , or you can click on the links to my LinkedIn, GitHub, phone, and email accounts on the footer. Thanks for
        reading!
      </Typography>
    </div>
  )
}

export default AboutMeTab
