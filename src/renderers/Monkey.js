import React from 'react';

import {Image} from 'react-native';

import monkeyImg from 'images/monkey.png';

import {monkeyDims, bottomPadding} from '../../constants'; //mda


export default function Monkey({size, body}) {
	const width = size[0];
	const height = size[1];
	const x = body.position.x - width / 2;
	const y = body.position.y - height / 2;


	return (
			<Image
				source={monkeyImg}
				style={{
					width: monkeyDims.width,
					height: monkeyDims.height,
					position: 'absolute',
					left: x,
					top: y,
				}}
			/>
	)
}