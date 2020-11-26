import React from 'react';

import {Image} from 'react-native';

import images from 'images/images';

import {itemDims} from '../../../constants';

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};


export default function Item({itemImageNumber, position}) {
	

	return (
		<Image
			source={images[itemImageNumber]}
			style={{
				height: itemDims.height,
				width: itemDims.width,
			}}
		/>
	);
}