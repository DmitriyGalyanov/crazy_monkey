import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export default function CircleButton({borderStyle, onPress, image, iconStyle}) {

	return (
		<TouchableOpacity
			style={borderStyle}
			onPress={onPress}>
			<Image source={image} style={iconStyle} />
		</TouchableOpacity>
	)
}
