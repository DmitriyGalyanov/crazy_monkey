import React, {Component} from 'react'
import {Dimensions, StyleSheet, View, Text} from 'react-native'
import {CircleButton} from '../components/index'
import Images from '../../assets/index'
import {THEME_COLOR} from '../constants/index'

const {height} = Dimensions.get('screen')

export default class GameOverScreen extends Component {
  constructor(props) {
    super(props)

    const daysLasted = props.daysLasted
    const daysLastedToDisplay =
      daysLasted > 1 ? daysLasted + ' days' : daysLasted + ' day'

    this.state = {
      daysLasted: daysLastedToDisplay,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameOverContainer}>
          <Text style={styles.statsText}>
            You survived for {this.state.daysLasted}
          </Text>
        </View>
        <View style={styles.btnsContainer}>
          <CircleButton
            image={Images.restart}
            onPress={this.props.reset}
            borderStyle={styles.restartBtnBorder}
            iconStyle={styles.restartBtnIcon}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: THEME_COLOR,
  },
  gameOverContainer: {
    flex: 1,
    marginTop: height * 0.1,
    alignItems: 'center',
  },
  statsText: {
    color: 'white',
    fontSize: 24,
  },
  btnsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  restartBtnBorder: {
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'white',
    paddingLeft: 3,
    paddingTop: 3,
    width: 70,
    height: 70,
  },
  restartBtnIcon: {
    width: 55,
    height: 55,
    tintColor: 'white',
  },
  homeBtnBorder: {
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'white',
    paddingLeft: 10,
    paddingTop: 10,
    width: 70,
    height: 70,
  },
  homeBtnIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
})
