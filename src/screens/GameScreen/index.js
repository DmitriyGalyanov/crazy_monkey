import React, { Component, PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, SafeAreaView, View, Alert, Button, TouchableOpacity } from "react-native";
import { GameEngine, dispatch } from "react-native-game-engine";

import { Finger } from './renderers';
import GameLoop from './systems';

export default class GameScreen extends Component {
		constructor(props) {
				super(props);
				// this.engine = null;
				this.state = {
						running: true
				}
		}

		render() {
				return (
						<View style={styles.container}>
								<GameEngine
										// ref={(ref) => { this.engine = ref; }}
										style={styles.container}
										systems={[ GameLoop ]}
										entities={{
											1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
											2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
											3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
											4: { position: [220, 200], renderer: <Finger />},
											5: { position: [280, 200], renderer: <Finger />}
										}}
										running={this.state.running}
										onEvent={this.onEvent}>

										<StatusBar hidden={true} />

								</GameEngine>
						</View>
				);
		}
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#000000',
		},
});