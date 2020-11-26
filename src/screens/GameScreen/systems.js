import {monkeyDims, windowWidth, horizontalOffset} from '../../../constants';

const GameLoop = (entities, { touches }) => {

	touches.filter(touch => touch.type === "move").forEach(touch => {

		let monkey = entities[0];

		if (monkey && monkey.positionX) {
			let newMonkeyPositionX = monkey.positionX + touch.delta.pageX;
			if (newMonkeyPositionX >= windowWidth - monkeyDims.width - horizontalOffset) {
				newMonkeyPositionX = windowWidth - monkeyDims.width - horizontalOffset;
			}
			if (newMonkeyPositionX <= 0 + horizontalOffset) {
				newMonkeyPositionX = 1 + horizontalOffset;
			}
			monkey.positionX = newMonkeyPositionX;
		}
	});

	return entities;
};

export default GameLoop;