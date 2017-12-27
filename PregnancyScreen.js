import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View, ScrollView, Linking, Button } from 'react-native';
import HealthInfo from '../screens/HealthInfo';

export default class Pregnancy extends Component {
  constructor(props) {
    super(props);
    this.state = {health: false, menstrual: false, pregnancy: true, birthControl: false, abortion: false}
  }

  goBack = () => {
    this.setState({health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false})
  }


  render() {
    if(this.state.pregnancy){
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
            {'\n'}Pregnancy{'\n'}
          </Text>
          Pregnancy can be both an exciting and scary time in a woman's life! We've compiled a list of helpful resources for you to consult below: {"\n"}{"\n"}
          <Text style={styles.subTitleText}>
            Helpful Outside Sources {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.medicinenet.com/pregnancy/article.htm')}>
            Medicinenet.com: Pregnancy Week by Week {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.babycenter.com/pregnancy')}>
            Babycenter: A popular source for everything relating to pregancy. {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.webmd.com/baby/default.htm')}>
            WebMD: A short overview. {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Pregnancy')}>
            Wikipedia: A more clinical and informative angle. {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.pregnancy.com/')}>
            Pregnancy.com: Week-by-week visualizations. {"\n"}
          </Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('http://www.parents.com/pregnancy/')}>
            Parents.com: Another popular source with all kinds of information. {"\n"}
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
    lineHeight: 25,
  },
  /*for hyperlinked text*/
  overallView: {
    backgroundColor:
    'rgba(252, 201, 231, 0.4)',
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
