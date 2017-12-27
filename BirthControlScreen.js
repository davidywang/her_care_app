import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View, ScrollView, Linking, Button } from 'react-native';
import HealthInfo from '../screens/HealthInfo';

export default class birthControl extends Component {
  constructor(props) {
    super(props);
    this.state = {health: false, menstrual: false, pregnancy: false, birthControl: true, abortion: false}
  }

  goBack = () => {
    this.setState({health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false})
  }


  render() {
    if(this.state.birthControl){
      return (
        <Image
          style={styles.bgImage}
          source={{ uri:'http://www.zingerbug.com/Backgrounds/background_images/lavender_mini_flowers.gif' }}
        >
        <ScrollView style={styles.overallView}>
        <View style={styles.topNav}>
        <Button
          onPress = {this.goBack}
          color = 'black'
          title = 'Back to Homescreen'
        />
        </View>
        <Text style={styles.baseText}>
              <Text style={styles.titleText}>
                Birth Control{'\n'}
              </Text>
            Birth control, also known as contraception, is any method or device used to prevent unwanted pregnancy. There are a wealth of options for birth control available in the United States. {"\n"} {"\n"}
              <Text style={styles.subTitleText}>
                Hormonal Methods {"\n"}
              </Text>
              Hormonal forms of contraception act on the endocrine system. They are often the easiest to use, although care needs to be taken to ensure safe and healthy use. Overall, hormonal contraception is highly effective, but may have side effects, and long-term use may even increase the risk of certain diseases. Some examples of hormonal contraception: {"\n"}
              -  Oral pills {"\n"}
              - Implants under the skin, injections, and patches {"\n"}
              - Inter-auterine devices (IUDs) {"\n"}
              - Vaginal rings (NuvaRing) {"\n"} {"\n"}
              <Text style={styles.subTitleText}>
                Intrauterine devices (IUDs) {"\n"}
              </Text>
              IUDs are some of the most popular forms of long-term birth control in the U.S. In addition to functioning as birth control, they may also alleviate extremely heavy menstrual flows. IUDs are some of the most effective borth control methods on the market, with a failure rate of only 0.2%. They may be used continuously for 3-5 years and their effects cease very quickly after removal. {"\n"}
              Information on
                <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.mirena-us.com')}>
                  Mirena
                </Text>
              , one of the most popular brands of IUDs.{"\n"}{"\n"}
              <Text style={styles.subTitleText}>
                Barrier Methods {"\n"}
              </Text>
              Barrier contraceptives are some of the lest invasive measures of birth control, and also the most temporary. They work by physically preventing sperm from entering the uterus. Some common forms of barrier contraceptives include: {"\n"}
              - Male and female condoms {"\n"}
              - Cervical caps {"\n"}
              - Diaphragms {"\n"}
              - Contraceptive sponges with spermicide {"\n"}{"\n"}
              <Text style={styles.subTitleText}>
                Sterilization {"\n"}
              </Text>
            If you are absolutely certain that you never want to have children, consider permanent surgical sterilization. Modern techniques are advanced enough that there are no long-term side effects. However, make sure you are absolutely certain, as this decision may cause regret in the future. {"\n"}{"\n"}
            <Text style={styles.subTitleText}>
              Further Details {"\n"}
            </Text>
            <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.birthcontrol.com/')}>
              20 currently available birth control methods.
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
    'rgba(216, 201, 252, 0.4)',
    marginVertical: 30,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topNav: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: "transparent",
  },
  /*for the big view container holding all the text, also makes the background translucent*/
});
