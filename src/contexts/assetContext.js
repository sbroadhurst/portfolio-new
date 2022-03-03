import React, { createContext } from 'react'
import ArrowsGame from '../assets/arrowsGame.png'
import Breakout from '../assets/breakout.png'
import Snake from '../assets/snake-game.png'
import Pokemon from '../assets/proj-pokemon.png'
import Marvel from '../assets/proj-marvel.png'
import Movies from '../assets/proj-movie.png'

export const AssetContext = createContext({})

const AssetProvider = ({ children }) => {
  const state = {
    games: [
      {
        name: 'Musical Arrows Game',
        subtitle: 'Press the Arrows to the Music',
        image: ArrowsGame,
        websiteUrl: 'http://arrows.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/arrows',
        description:
          'Play a game that tests your reflexs. Select a diffuculty at the start menu then be prepared to press the corresponding arrow keys in time. There is music playing the background, with different songs for each diffculty. Select the all diffculty to run through all the songs. Upload and view highscores via the leaderboard.',
      },
      {
        name: 'Breakout',
        subtitle: 'Classic Breakout Game',
        image: Breakout,
        websiteUrl: 'http://breakout.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/breakout',
        description:
          'Play a simple game of Breakout. This game features a ball, paddle, and bricks. If you hit the bottom edge of the screen you lose the game. Everytime you destroy a brick your score increases by one. There are sound effects when the ball hits the paddle and when the ball hits a brick. When you destroy all the bricks you win. Made in pure Javascript. Will be able to upload scores to Firebase and view the leaderboard when the game ends.',
      },
      {
        name: 'Snake',
        subtitle: 'Classic Snake Game',
        image: Snake,
        websiteUrl: 'http://snake.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/snake',
        description:
          'Play a simple game of Snake. This game features a grid system where the goal is to get as long as possible without losing. If you touch your tail or hit the wall the game ends. Made in pure Javascript. Will be able to upload scores to Firebase and view the leaderboard when the game ends.',
      },
    ],
    projects: [
      {
        name: 'Movie Database Viewer',
        subtitle: 'View Upcoming Movies & TV',
        image: Movies,
        websiteUrl: 'http://movies.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/movies-apiv2',
        description:
          'See my website that displays information about movies and TV shows. You can also view the trailers, search by name, and find similar movies or shows. You can also find shows and movies with the same genres.',
      },
      {
        name: 'Marvel Comics Viewer',
        subtitle: 'View Marvel Comics Info',
        image: Marvel,
        websiteUrl: 'http://marvel.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/marvel',
        description:
          'See my website which displays a list of popular Marvel heros, villians, and heroines. Each one shows information on that character including a brief summary, a image, and a list of their recent comic book appearances (if available). You can also view a list of recent comics and check their information including the summary, release date, and pricing information.',
      },
      {
        name: 'Pokemon TCG Viewer',
        subtitle: 'View Pokemon Cards',
        image: Pokemon,
        websiteUrl: 'http://pokemon.sbroadhurst.net/',
        gitHubUrl: 'https://github.com/sbroadhurst/pokemon',
        description:
          'Search for pokemon cards and view the information on them including the attacks, name, HP and legality of the card. You can search fast by the pokemon name, or do an advanced search that will allow you to add specific fields, such as type and legality.',
      },
    ],
  }

  return <AssetContext.Provider value={state}>{children}</AssetContext.Provider>
}

export default AssetProvider
