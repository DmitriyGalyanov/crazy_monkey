import React from "react";
import { StyleSheet, View } from "react-native";

const RADIUS = 20;

export function Finger({positionX}) {
	const x = positionX - RADIUS / 2;
	// const y = position[1] - RADIUS / 2;
	return (
		<View style={[styles.finger, { left: x, top: 100 }]} />
	);
};

const styles = StyleSheet.create({
	finger: {
		borderColor: "#CCC",
		borderWidth: 4,
		borderRadius: RADIUS * 2,
		width: RADIUS * 2,
		height: RADIUS * 2,
		backgroundColor: "pink",
		position: "absolute"
	}
});
