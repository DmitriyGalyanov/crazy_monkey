import React from "react";
import {
	StyleSheet,
	StatusBar,
	ImageBackground,
} from "react-native";
import {
	GameEngine,
	dispatch,
} from "react-native-game-engine";

import background from 'images/background.jpg';

import Monkey from 'components/Monkey';
import Item from 'components/Item';

import GameLoop from './systems';


export default function GameScreen() {

	return (
		<ImageBackground
			source={background}
			style={styles.container}
		>
			<GameEngine
				style={styles.container}
				systems={[ GameLoop ]}
				entities={{
					monkey: { positionX: 40, renderer: <Monkey />},
					1: { itemImageNumber: 1, renderer: <Item />},
				}}
				
			>
				<StatusBar hidden={true} />
			</GameEngine>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
		},
});