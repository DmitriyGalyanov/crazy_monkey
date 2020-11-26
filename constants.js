import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const monkeyDims = {
	width: 168,
	height: 280,
};

export const itemDims = {
	width: 113,
	height: 100,
};

export const itemFallSpeed = 10;

export const bottomPadding = 20;
export const horizontalOffset = 10;

// export const monkeyTopOffset = windowHeight - monkeyDims.height - bottomPadding;

export {
	windowWidth,
	windowHeight,
}