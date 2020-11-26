import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const bottomPadding = 24;

export const itemDims = {
	width: 113,
	height: 100,
};

// World settings
export const INITIAL_GRAVITY = 0.15;
export const DAY_INTERVAL = 10000;
export const startingScore = 0;
export const THEME_COLOR = 'black';
export const DEFAULT_ACCELERATOR_INTERVAL = 20;

// falling items settings
export const itemsLimit = 7;
export const itemWidth = 113;
export const itemHeight = 100;
export const ENTITY_LIST = [
	'gem',
	'bigGem',
	'goldCoin',
	'threeBigGems',
	'threeGoldCoins',
	'spike',
];
export const ENTITY_DETAILS = {
	gem: {
		height: itemHeight,
		width: itemWidth,
		name: 'gem',
		score: 4,
		probability: 0.015,
	},
	bigGem: {
		height: itemHeight,
		width: itemWidth,
		name: 'bigGem',
		score: 6,
		probability: 0.01,
	},
	goldCoin: {
		height: itemHeight,
		width: itemWidth,
		name: 'goldCoin',
		score: 1,
		probability: 0.02,
	},
	threeBigGems: {
		height: itemHeight,
		width: itemWidth,
		name: 'threeBigGems',
		score: 18,
		probability: 0.002,
	},
	threeGoldCoins: {
		height: itemHeight,
		width: itemWidth,
		name: 'threeGoldCoins',
		score: 3,
		probability: 0.015,
	},
	spike: {
		height: itemHeight,
		width: itemWidth,
		name: 'spike',
		score: 0,
		probability: 0.018,
	},
}

// Player entity settings
export const playerPhysicalWidth = 100;
export const playerPhysicalHeight = 100;
export const playerImgWidth = 168;
export const playerImgHeight = 280;

export const PLAYER_X_START = windowWidth / 2;
export const PLAYER_Y_FIXED = windowHeight - playerImgHeight - bottomPadding - 24;

export const PLAYER_WIDTH_OFFSET = Math.ceil(playerImgWidth / 2); //
