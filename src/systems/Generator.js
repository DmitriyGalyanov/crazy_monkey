import {ENTITY_LIST, ENTITY_DETAILS} from '../constants/index'
import {Entity} from '../renderers/index'
import {addEntity} from '../helpers/index'

const Generator = (entities) => {
  const engine = entities.physics.engine

  ENTITY_LIST.forEach((entityType) => {
    addEntity(
      engine,
      entities,
      entityType,
      Entity,
      ENTITY_DETAILS[entityType].probability,
    )
  })

  return entities
}

export default Generator
