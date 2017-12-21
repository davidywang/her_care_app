import Expo from 'expo';
import React, { Component } from 'react';
import { AppRegistry, Platform, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import Communications from 'react-native-communications';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class EmergencyScreen extends Component {
  static navigationOptions = {
    title: 'Emergency',
  };

  state = {
    location: { coords: {latitude: 0, longitude: 0}},
  };


  componentWillMount() {
  	/*time = 0;
  	while (time <= 10) {
      time++;
	    interval = setInterval(() => {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
      }, 1000);
      clearInterval(interval);
	  };*/
  	
  	setInterval(() => {
      Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
      }, 1000);
  };

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.0025,
    },
    this.setState({location, region})
  }

  round = 100000

  sendLocation = () => {
    Communications.text('19253201082', 'Hey I may be in trouble. Here are my current coordinates:\n' +
      JSON.stringify(Math.round(this.state.location.coords.latitude * this.round) / this.round) + '°,' +
      JSON.stringify(Math.round(this.state.location.coords.longitude * this.round) / this.round) + '°')
  }

  render(){
    return (
      <View style={styles.container}>
        <Expo.MapView
          style={{ flex: 0.80 }}
          showsUserLocation={true}
          region={this.state.region}
        />

      	<View style={styles.coordinateContainer}>
      	  <Text style={styles.titleText}>
            Current Location
          </Text>

          <Text style={styles.coordinateText}>
            Latitude: {JSON.stringify(Math.round(this.state.location.coords.latitude * this.round) / this.round)}
          </Text>

          <Text style={styles.coordinateText}>
            Longitude: {JSON.stringify(Math.round(this.state.location.coords.longitude * this.round) / this.round)}
          </Text>

          <Button
          	title="Alert"
          	onPress={this.sendLocation}
          	color='red'
          />
        </View>
      </View>    
    );
  }; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coordinateContainer: {
    marginTop: 30,
  },
  titleText: {
  	marginBottom: 20,
  	color:'rgba(0,0,0,1.0)',
  	fontSize: 24,
  	lineHeight: 28,
  	textAlign: 'center',
  },
  coordinateText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});
