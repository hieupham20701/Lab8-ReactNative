import React ,{useRef, useEffect}from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Button } from 'react-native';
export default function AnimateView3() {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const bayQua = () => {
        Animated.timing(fadeAnim, {
          toValue: 350,
          duration: 3500,
          useNativeDriver:false
        }).start();
      };
      const dunglai = () =>{
        Animated.timing(fadeAnim
            
          ).stop();
      }
      const bayLai = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3500,
          useNativeDriver:false
        }).start();
      };
  return (
    <View>
        <Animated.View
            style={[
            {
                marginLeft: fadeAnim
            }
            ]}
        >

            <Image source={require('../assets/plane.jpg')} style={{width:100, height:100}}></Image>
        </Animated.View>
        <Button title="Bay qua" onPress={bayQua} />
        <Button title='Dung' onPress={dunglai}/>
        <Button title="Bay lai" onPress={bayLai} />

    </View>
  )
}
