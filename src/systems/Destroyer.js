import {Dimensions} from 'react-native'
import {removeEntity} from '../helpers/index'

const {width, height} = Dimensions.get('screen')

const Destroyer = (entities) => {
  Object.keys(entities).forEach((key) => {
    const entity = entities[key]
    if (entity.body) {
      const position = entity.body.position

      // Remove entities that fall out of bounds
      if (position.x < 0 || position.x > width || position.y > height) {
        removeEntity(entity.body, entities)
      }
    }
  })

  return entities
}

export default Destroyer
