import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

// World settings
export const INITIAL_GRAVITY = 0.15
export const DAY_INTERVAL = 10000
export const STARTING_CASH = 1000
export const THEME_COLOR = 'black'
export const DEFAULT_ACCELERATOR_INTERVAL = 20

// Entity settings
export const ENTITY_LIMIT = 20
export const ENTITY_SIZE = Math.trunc(Math.max(width, height) * 0.07)
export const ENTITY_LIST = ['red', 'green']
export const ENTITY_DETAILS = {
  red: {
    height: ENTITY_SIZE,
    width: ENTITY_SIZE * 1.25,
    color: 'red',
    cash: -100,
    probability: 0.05,
  },
  green: {
    height: ENTITY_SIZE,
    width: ENTITY_SIZE,
    color: 'green',
    cash: 100,
    probability: 0.01,
  },
}

// Player entity settings
export const PLAYER_X_START = width / 2
export const PLAYER_Y_FIXED = height * 0.6
export const PLAYER_ENTITY_WIDTH = ENTITY_SIZE
export const PLAYER_ENTITY_HEIGHT = ENTITY_SIZE
export const PLAYER_WIDTH_OFFSET = Math.ceil(PLAYER_ENTITY_WIDTH / 2)
