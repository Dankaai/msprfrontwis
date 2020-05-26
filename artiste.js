import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
  margin: 5,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Artiste() {
    return (
      <View>
       <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20,
              margin: 20
            }}
          >


                         	<Button style={{
                         	margin: 20
                         	}}
                                            		title="btnmenu"
                                             		color="#f194ff"
                                             		onPress={() => Alert.alert('Button with adjusted color pressed')}
                                           	/>
                                           	<Image
                                                      style={styles.tinyLogo}
                                                      source={{
                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                      }}
                                                    />

                                                         	                   	<Button style= {{
                                                         	                   	margin: 20}}
                                                                                                		title="btnmenu"
                                                                                                 		color="#f194ff"
                                                                                                 		onPress={() => Alert.alert('Button with adjusted color pressed')}
                                                                                               	/>

          </View>
           <View
                style={{
                  flexDirection: "row",
                  height: 100,
                  padding: 20
                }}
              >

                <Button style= {{
                                                                         	                   	margin: 20}}
                                                                                                                		title="btnmenu"
                                                                                                                 		color="#f194ff"
                                                                                                                 		onPress={() => Alert.alert('Button with adjusted color pressed')}
                                                                                                               	/>

                <Image
                                                                      style={styles.tinyLogo}
                                                                      source={{
                                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                                      }}
                                                                    />

                <Text style={{
                                             	margin: 20
                                             	}}>artiste text 1
                                       </Text>

                                       <Text style={{
                                                                                    	margin: 20
                                                                                    	}}>artiste text 2
                                                                              </Text>

                                                                              <Text style={{
                                                                                                                           	margin: 20
                                                                                                                           	}}>artiste text 3
                                                                                                                     </Text>


      </View>
      <View
                      style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20
                      }}
                    >
                    <Text style={{
                       	margin: 20
                        }}>
                        player
                                                      </Text>
                    </View>
      </View>

          );
}


