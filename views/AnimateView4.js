import React ,{useRef, useEffect}from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Button } from 'react-native';

export default function AnimateView4() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 150,
          duration: 3500,
          useNativeDriver:false
        }).start();
      };
  return (
    <View>
        <Animated.View
            style={[
            {
                opacity: fadeAnim,
                alignContent:'center'
            }
            ]}
        >

            <Image source={require('../assets/plane.jpg')} style={{width:120, height:100}}></Image>
        </Animated.View>

        <Animated.View
            style={[
            {
                opacity: fadeAnim,
                marginLeft:fadeAnim
            }
            ]}
        >
            <Text>Xuat hien ne</Text>
        </Animated.View>
        <Button title="Xuat hien" onPress={fadeIn} />

    </View>
  )
}
