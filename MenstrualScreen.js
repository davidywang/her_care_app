import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View, ScrollView, Linking, Button } from 'react-native';
import HealthInfo from '../screens/HealthInfo';

export default class Menstrual extends Component {
  constructor(props) {
    super(props);
    this.state = {health: false, menstrual: true, pregnancy: false, birthControl: false, abortion: false}
  }

  goBack = () => {
    this.setState({health: true, menstrual: false, pregnancy: false, birthControl: false, abortion: false})
  }


  render() {
    if(this.state.menstrual){
      return (
        <Image
          style={styles.bgImage}
          source={{ uri:'http://www.zingerbug.com/Backgrounds/background_images/lavender_mini_flowers.gif' }}
        >
        <ScrollView style={styles.overallView}>
        <View style = {styles.topNav}>
        <Button style ={{marginTop: 20,}}
          onPress = {this.goBack}
          color = 'black'
          title = 'Back to Homescreen'
        />
        </View>
        <Text style={styles.baseText}>
              <Text style={styles.titleText}>
                Menstrual Health{'\n'}
              </Text>
            There are many different types of menstrual products available to women! Think about what is most convenient and comfortable for you, both physically and financially. There are two main types of menstrual products, internal and external. Both forms are safe and well-regulated. Many women use a variety of different products, depending on many different factors. {"\n"} {"\n"}
              <Text style={styles.subTitleText}>
                External Forms{"\n"}
              </Text>
              External forms of menstrual products are the safest and easiest to use for girls and younger women. Some forms include: {"\n"}
              - Pads {"\n"}
              - Panty-liners {"\n"}
              - Period-friendly undergarments, designed specifically to absorb menstrual flow and be easy to launder. {"\n"} {"\n"}
              <Text style={styles.subTitleText}>
                Internal Forms {"\n"}
              </Text>
              Many women find internal forms of menstrual products to be more discreet and more comfortable to use. Internal forms of menstrual products are often most viable for athletes and active women, especially swimmers. However, these forms of menstrual products also carry more risk. Tampons specifically are known to cause Toxic Shock Syndrome if used incorrectly.
                <Text style={styles.hyperlink} onPress={() => Linking.openURL('http://www.mayoclinic.org/diseases-conditions/toxic-shock-syndrome/symptoms-causes/syc-20355384')}>
                  Read more on Toxic Shock Syndrome here. {"\n"}
                </Text>
              Some forms of internal menstrual products: {"\n"}
              - Tampons {"\n"}
              - Menstrual cups (Diva Cup) {"\n"}{"\n"}
              <Text style={styles.subTitleText}>
                What should I Use? {"\n"}
              </Text>
              Whichever form of menstrual product you use is completely up to you! In addition to comfort and cost, you may also choose to consider environmental impact, and use a form of reusable mesntrual product like the Diva Cup or washable pads and panty-liners. New forms of menstrual products are always being developed, like period-friendly underwear and even sea sponge tampons, both designed to be long lasting and washable.{"\n"}
              These environmentally-friendly options may also have health benefits, as they are less irritating to the skin. Smaller brands also make organic disposable menstrual products, should you find big-box consumer products to be skin-irritatnts, though these products tend to have higher price ranges. {"\n"}{"\n"}
              <Text style={styles.subTitleText}>
                Fun Facts! {"\n"}
              </Text>
              - Your mother and other female figures can provide lots of advice and support! {"\n"}
              - Cramps are the major source of pain for most girls due to the hormones in the uterus contracting. {"\n"}
              - Menstrual flow does have a natural odor that some find off-putting, but changing products frequently can solve this issue. {"\n"}
              - About a fourth cup of fluid is passed over the entire menstual cycle. {"\n"}
              - Menopause typically begins in the late 40s to early 50s in most women. {"\n"}
        </Text>
        </ScrollView>
        </Image>
      );
    }
    else{
      return <HealthInfo />;
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
