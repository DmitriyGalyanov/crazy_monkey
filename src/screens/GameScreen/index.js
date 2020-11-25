import React from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import Test from 'components/Test';


export default function GameScreen() {

	return (
		<View style={styles.wrap}>
			<Test />
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {

	},
});