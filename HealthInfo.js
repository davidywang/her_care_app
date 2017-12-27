import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,

} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MenstrualScreen from '../screens/MenstrualScreen';
import PregnancyScreen from '../screens/PregnancyScreen';
import BirthControlScreen from '../screens/BirthControlScreen';
import AbortionScreen from '../screens/AbortionScreen';

export default class HealthInfo extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false}
  }

  toMenstrual = () => {
    this.setState({health: false, menstrual: true, pregnancy: false, birthControl: false, abortion: false})
  }

  toPregnancy = () => {
    this.setState({health: false, menstrual: false, pregnancy: true, birthControl: false, abortion: false})
  }

  toBirthControl = () =>{
    this.setState({health: false, menstrual: false, pregnancy: false, birthControl: true, abortion: false})
  }

  toAbortion = () =>{
    this.setState({health: false, menstrual: false, pregnancy: false, birthControl: false, abortion: true})
  }

  render() {
    if (this.state.health){
      return (
        <View style = {styles.container}>
        <View style = {styles.topNav}>
        <Text> HER CARE </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress = {this.toMenstrual}
            color = "white"
            title="Menstrual Cycle"
            accessibilityLabel="Learn more about the menstrual cycle"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress = {this.toPregnancy}
            color = "white"
            title="Pregnancy"
            accessibilityLabel="Learn more about pregnancy"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress = {this.toBirthControl}
            color = "white"
            title="Birth Control"
            accessibilityLabel="Learn more about birth control"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress = {this.toAbortion}
            color = "white"
            title="Abortion"
            accessibilityLabel="Learn more about abortion"
          />
        </View>


      </View>
    );}
    else if(this.state.menstrual){
      return(
        <MenstrualScreen/>
      );
    }
    else if(this.state.pregnancy){
      return(
        <PregnancyScreen/>
      );
    }
    else if(this.state.birthControl){
      return (
        <BirthControlScreen/>
      );
    }
    else{
      return(
        <AbortionScreen/>
      );
    }

  }



  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#841584',
    backgroundColor: '#841584',
    height : 30,
    width : 330,
    marginVertical : 30,
    marginHorizontal : 20,

  },

  topNav: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
