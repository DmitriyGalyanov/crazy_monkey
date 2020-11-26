import React from 'react';

import {Image, View} from 'react-native';

import monkeyImg from 'images/monkey.png';

import {monkeyDims, bottomPadding} from '../../../constants'; //mda


export default function Monkey({positionX}) {

	// const X = positionX - height / 2;
	return (
			<Image
				source={monkeyImg}
				style={{
					width: monkeyDims.width,
					height: monkeyDims.height,
					position: 'absolute',
					left: positionX,
					bottom: bottomPadding,
				}}
			/>
	)
}