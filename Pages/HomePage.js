import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ScrollView,Image} from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { SafeAreaView } from 'react-navigation';
 
 
const { height } = Dimensions.get('window');
 
 
 
 
class HomePage extends Component {
    state = {
        // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
        screenHeight: 0,
      };
 
      onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
      };
 
    render() {
 
        const scrollEnabled = this.state.screenHeight > height;
 
 
        return (
           
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#468189" />
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.scrollview}
              scrollEnabled={scrollEnabled}
              onContentSizeChange={this.onContentSizeChange}
            >
 
            <View style={styles.container}>
            <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Image style={styles.logo} source={require('./../assets/logo.png')}/>}
                    rightComponent={<Image style={styles.user} source={require('./../assets/users.png')}/>}
                    containerStyle={{
                        backgroundColor: '#A0123D',
                        height:100,
                        justifyContent: 'space-around',
                      }}
                    
 
 
                />
                
                                <View
                    style={{
                        flexDirection: "row",
                        height: 50,
                        width: window.width,
                        backgroundColor: "#C58B9A"
                    }}
 
 
                >
                    <Text>informations</Text>
                </View>
               
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img001.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img002.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img003.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img004.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img004.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img002.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img002.jpg')}
    />
 
 
</View>
<View>
 
<Image
    style={styles.img}
    source={require('./../assets/img002.jpg')}
    />
 
 
</View>
 
               
            </View>
            </ScrollView>
            </SafeAreaView>
           
        );
    }
}
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 20,
    },
    logo: {
        width: 66,
        height: 58,
        margin: 30,
    },
    img: {
        width: window.width ,
        height: 200,
    },
    user: {
        width: 50,
        height: 50,
        margin: 30,
    },
    menu: {
        width: 50,
        height: 50,
        margin: 30,
    },

});
export default HomePage;