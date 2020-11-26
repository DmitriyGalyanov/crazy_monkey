import React, {PureComponent} from 'react'
import {TouchableOpacity, Image} from 'react-native'

export default class CircleButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.borderStyle}
        onPress={this.props.onPress}>
        <Image source={this.props.image} style={this.props.iconStyle} />
      </TouchableOpacity>
    )
  }
}
