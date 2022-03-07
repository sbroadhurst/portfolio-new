import React from 'react'
import {
  AccessTime,
  Construction,
  Details,
  Engineering,
  Google,
  Groups,
  OnlinePrediction,
  School,
  TagFaces,
} from '@mui/icons-material'
import { CardContent, TextField, Typography } from '@mui/material'
import { CardRow, DeviIcon, SpecialAbilitiesCard } from '../styledComponents'

const SpecialAbilitiesTab = () => {
  return (
    <div>
      <CardRow>
        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <School sx={{ fontSize: 60 }} /> <Typography>&ensp;Let Me Learn About That</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Let Me Learn About That"
              multiline
              maxRows={4}
              value="If there is something that I have little to no experience with then I will research and learn more about it."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <Google sx={{ fontSize: 60 }} /> <Typography>&ensp;Let Me Google That</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Let Me Google That"
              multiline
              maxRows={4}
              value="If there is something that I don't remember or need clarification for I can research how to do it correctly."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <Construction sx={{ fontSize: 60 }} /> <Typography>&ensp;How Can I Make This Better?</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="How Can I Make This Better?"
              multiline
              maxRows={4}
              value="There may be things that look like they could be improved visually or better optimized and I will actively think about how to improve it."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <TagFaces sx={{ fontSize: 60 }} /> <Typography>&ensp;Easy to Get Along With</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Easy to Get Along With"
              multiline
              maxRows={4}
              value="I am easy to get along with and speak with. I listen to what people have to say and have a sense of humor."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <AccessTime sx={{ fontSize: 60 }} /> <Typography>&ensp;On Time & Punctual</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="On Time & Punctual"
              multiline
              maxRows={4}
              value="I try to keep my scheduled commitments and arrive on time."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <OnlinePrediction sx={{ fontSize: 60 }} /> <Typography>&ensp;I Have Ideas Too</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="I Have Ideas Too"
              multiline
              maxRows={4}
              value="I can contribute to a conversation and come up with my own ideas and solutions."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <Engineering sx={{ fontSize: 60 }} /> <Typography>&ensp;Hard-working</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Hard-working"
              multiline
              maxRows={4}
              value="I work hard to try and delivery the best possible product I can. Any improvements I can find a long the way or any suggestions or fixes will be implemented as soon as possible."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <Groups sx={{ fontSize: 60 }} /> <Typography>&ensp;Teamwork Makes the Dream Work</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Teamwork Makes the Dream Work"
              multiline
              maxRows={4}
              value="Works well in the group and knows that the best way to achieve a bigger goal is through a team that has good communication and cooperation."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>

        <SpecialAbilitiesCard sx={{ boxShadow: 10 }}>
          <DeviIcon>
            <Details sx={{ fontSize: 60 }} /> <Typography>&ensp;Attention to Details</Typography>
          </DeviIcon>
          <CardContent>
            <TextField
              id="outlined-multiline-flexible"
              label="Attention to Details"
              multiline
              maxRows={4}
              value="If there is something that looks like it could be improved upon or adjusted like slightly misaligned text, I will go back and fix it."
              InputProps={{
                readOnly: true,
              }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </SpecialAbilitiesCard>
      </CardRow>
    </div>
  )

  // let me learn about that
  // let me google that
  // make an improve better
  // sense of humor
  // on time and punctiual
  // i have ideas too
  // hardworking
  // teamwork makes the dream work
  // attention to details
}

export default SpecialAbilitiesTab
