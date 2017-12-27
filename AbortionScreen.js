import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View, ScrollView, Linking, Button } from 'react-native';
import HealthInfo from '../screens/HealthInfo';

export default class Abortion extends Component {
  constructor(props) {
    super(props);
    this.state = {health: false, menstrual: false, pregnancy: false, birthControl: false, abortion: true}
  }

  goBack = () => {
    this.setState({health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false})
  }


  render() {
    if(this.state.abortion){
      return (
        <Image
          style={styles.bgImage}
          source={{ uri:'http://www.zingerbug.com/Backgrounds/background_images/lavender_mini_flowers.gif' }}
        >
        <ScrollView style={styles.overallView}>
        <View style={styles.topNav}>
        <Button style ={{marginTop: 20,}}
          onPress = {this.goBack}
          color = 'black'
          title = 'Back to Homescreen'
        />
        </View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            Abortion{'\n'}
          </Text>
          <Text>
            No need to panic! There are many options available. Planned Parenthood has detailed information, available{'\ '}
            <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.plannedparenthood.org/learn/abortion')}>
            here. {"\n"}{"\n"}
            </Text>
            <Text style={styles.subTitleText}>
              Statistics {"\n"}
            </Text>
              - 4 out of 10 women decide to get an abortion due to unplanned pregnancy.{"\n"}
              - 3 out of 10 will have an abortion by the age of 45. {"\n"}
              - 6 out of 10 women have children when choosing an abortion. {"\n"}{"\n"}
            <Text style={styles.subTitleText}>
              U.S. Legislation {"\n"}
            </Text>
              Currently, abortion is legal throughout the entire United States, thanks to the landmark Roe vs. Wade decision. Logisitically though, abortion legislation varies wildly from state to state, though every state is federally mandated to have at least 1 abortion clinic. If you have decided on an abortion, it may be in your best interest to look up the abortion laws in your state and neighboring states to see what your options are. {"\n"}
                <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Abortion_in_the_United_States_by_state')}>
                Information regarding some of the most restrictive states. {"\n"}{"\n"}
                </Text>
            <Text style={styles.subTitleText}>
              Factors to Consider {"\n"}
            </Text>
            - Are you ready to be a parent? {"\n"}
            - Are you still working toward other goals in life? {"\n"}
            - Are you in a supportive relationship? {"\n"}
            - Was the pregnancy a result of sexual violence or abuse? {"\n"}
            - Is your health in order? {"\n"}
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.plannedparenthood.org/learn/abortion/considering-abortion')}>
              Further reading on PlannedParenthood.com {"\n"}{"\n"}
              </Text>
            <Text style={styles.subTitleText}>
              Next Steps {"\n"}
            </Text>
            Now that you have some information to begin making an informed decision, remember to consider speakingn with trusted friends, family, and/or counseling services. Make a decision when you're ready, don't feel rushed! We at HerCare wish you the best of luck!
          </Text>
        </Text>
        </ScrollView>
        </Image>
      );
    }
    else{
      return <HealthInfo/>;
    }

  }
}

const styles = StyleSheet.create({
  baseText: {
    marginHorizontal: 30,
    fontFamily: 'Helvetica',
    color:'#2d0f63',
    backgroundColor: 'rgba(0,0,0,0)'
    /* put this at the very top text tag */
  },
  subTitleText: {
    fontSize:20,
    fontWeight: 'bold',
  },
  /*for subheadings*/
  titleText: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  /*biggest title*/
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  /*the purple flower background image, goes int he image tag*/
  hyperlink: {
    textDecorationLine: 'underline',
  },
  /*for hyperlinked text*/
  overallView: {
    backgroundColor:
    'rgba(255,255,255,0.4)',
    marginVertical: 30,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  /*for the big view container holding all the text, also makes the background translucent*/
  topNav: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: "transparent",
  },
});
