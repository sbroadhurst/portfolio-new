import { Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import { Break, CardRow, DeviIcon } from '../styledComponents'

const SkillsTab = () => {
  return (
    <div>
      <CardRow>
        <Divider style={{ width: '100%', margin: 15, alignItems: 'flex-start' }}>
          <Chip label="Duration Last Updated 2022" />
        </Divider>
        <DeviIcon className="devicon-html5-plain">
          <Typography>&ensp;HTML : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-javascript-plain">
          <Typography>&ensp;JavaScript : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-react-original">
          <Typography>&ensp;React : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-redux-original">
          <Typography>&ensp;Redux : 3 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-css3-plain">
          <Typography>&ensp;CSS : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-materialui-plain">
          <Typography>&ensp;Material UI : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-npm-original-wordmark">
          <Typography>&ensp;NPM : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-angularjs-plain">
          <Typography>&ensp;Angular : 1 Year</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-typescript-plain">
          <Typography>&ensp;TypeScript: 4 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-nodejs-plain">
          <Typography>&ensp;Node : 4 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-mocha-plain">
          <Typography>&ensp;Mocha / Chai : 2 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-git-plain">
          <Typography>&ensp;Git : 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-mongodb-plain">
          <Typography>&ensp;MongoDB : 3 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-slack-plain">
          <Typography>&ensp;Slack: 1 Year</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-vscode-plain">
          <Typography>&ensp;VS Code: 5 Years</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-intellij-plain">
          <Typography>&ensp;intelliJ: 1 Year</Typography>
        </DeviIcon>

        {/* minor expierence section starts */}
        <Break />
        <Divider style={{ width: '100%', margin: 15, alignItems: 'flex-start' }}>
          <Chip label="Minor Experience" />
        </Divider>
        <Break />

        <DeviIcon className="devicon-java-plain">
          <Typography>&ensp;Java</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-cplusplus-plain">
          <Typography>&ensp;C++</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-graphql-plain">
          <Typography>&ensp;GraphQL</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-bootstrap-plain">
          <Typography>&ensp;Bootstrap</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-firebase-plain">
          <Typography>&ensp;Firebase</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-google-plain">
          <Typography>&ensp;Google API</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-flutter-plain">
          <Typography>&ensp;Flutter</Typography>
        </DeviIcon>
        <DeviIcon className="devicon-storybook-plain">
          <Typography>&ensp;Storybook</Typography>
        </DeviIcon>
      </CardRow>
    </div>
  )
}

export default SkillsTab
