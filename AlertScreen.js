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
import EmergencyScreen from '../screens/EmergencyScreen';

export default class AlertScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {alert: true, emergency: false}
  }

  toEmergency = () => {
    this.setState({alert: false, emergency: true})
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.alert){
      return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          onPress={this.toEmergency}
          color = 'white'
          title = 'Emergency'
        />
        </View>
      </View>
    );}

    else if(this.state.emergency){
      return(
        <EmergencyScreen previous = {this.state}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
    height : 100,
    width : 180,
    marginVertical: 185,

  },

  topNav: {
    marginTop: 30,
    height: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

});
