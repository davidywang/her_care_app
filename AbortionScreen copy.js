import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View, Button } from 'react-native';

import HealthInfo from '../screens/HealthInfo';

export default class BoldAndBeautiful extends Component {


  constructor(props) {
    super(props);
    this.state = {health: false, menstrual: false, pregnancy: false, birthControl: false, abortion: true}
  }

  goBack = () => {
    this.setState({health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false})
  }

  render() {

    if (this.state.abortion){
      return (
        <View style = {styles.container}>
          <View style = {styles.topNav}>
            <Button
              onPress = {this.goBack}
              color = 'black'
              title = 'back'
            />
            <Text style = {{marginTop: 13, marginHorizontal: 100}}> HER CARE </Text>
          </View>

        <Text style={{fontWeight: 'bold'}}>
          abortions

            Many Available Options
            - in-clinic
            - abortion pill
            Data

            - 4 out of 10 women decide to get an abortion due to unplanned pregnancy
            - 3 out of 10 will have an abortion by the age of 45
            - 6 out of 10 women have children when choosing an abortion


            Reasons

            - Not ready
            - Want to be the best they can be
            - Have other goals in life (school, work)
            - Not in a supportive relationship
            - Sexual assault or abuse
            - Health causes

            Next steps

            - Discussing with counseling services
            - Considering all options and receiving support
            - Make a decision when ready
            <Image
              style = {{width: 100, height:100}}
              source={{url:'http://www.soc.ucsb.edu/sexinfo/sites/default/files/files/styles/large/public/field/image/tumblr_louqj5ibcC1qk48q1o1_500.png'}}
            />
        </Text>
        </View>
      );

    }
    else{
      return <HealthInfo/>;
    }
  }
}

const styles = StyleSheet.create({

  topNav: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

});
