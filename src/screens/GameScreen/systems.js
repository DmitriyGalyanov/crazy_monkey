import {monkeyDims, windowWidth, horizontalOffset} from '../../../constants';

// const Physics = (entities, {time, dispatch}) => {
// 	const engine = entities.physics.engine;
// 	const timeInterval = time.delta;

// 	Matter.Engine.update(engine, timeInterval)

// 	// dispatch()
	
// 	return entities;
// };

// const Generator = (entities) => {
// 	const engine = entities.physics.engine;

// 	ENTITY_LIST.forEach((entityType) => {
// 		addEntity(
// 			engine,
// 			entities,
// 			entityType,
// 			Entity,
// 			ENTITY_DETAILS[entityType].probability,
// 		)
// 	})

// 	return entities;
// }

// const Destroyer = (entities) => {
// 	Object.keys(entities).forEach((key) => {
// 		const entite = entities[key];
// 		if (entity.body) {
// 			const itemPositionX = entity.body.itemPositionX;

// 			if (itemPositionX < monkeyDims.height * 0.75) {
// 				removeEntity(entity.body, entities);
// 			}
// 			// if (itemPositionX < monkeyDims.height
// 			// 		&& itemPositionY > ) //if meets monkey Y position
// 			// then remove object and dispatch appropriate event
// 		}
// 	})
// }

const GameLoop = (entities, { touches }) => {

	let item = entities.item;


	//monkey movement
	touches.filter(touch => touch.type === "move").forEach(touch => {
		let monkey = entities.monkey;

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