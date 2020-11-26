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

import { Finger } from './renderers';
import Monkey from 'components/Monkey';

import GameLoop from './systems';


export default function GameScreen() {

	return (
		<ImageBackground
			source={background}
			style={styles.container}
		>
			<GameEngine
				// ref={(ref) => { this.engine = ref; }}
				style={styles.container}
				systems={[ GameLoop ]}
				entities={{
					0: { positionX: 40, renderer: <Monkey />},
					// 1: { positionX: 50, renderer: <Finger />},
				}}
				//Notice that each entity has a unique id (required) and a renderer property (optional). If no renderer is supplied with the entity - it won't get displayed.
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