import React ,{useRef, useEffect}from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Button } from 'react-native';

export default function AnimateView5() {
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
        <View style={{width:100, height:100, backgroundColor:'red'}}></View>
        <View style={{width:100, height:100, backgroundColor:'green', absolute:1, left:300}}></View>
        <View style={{width:100, height:100, backgroundColor:'yellow', marginTop:200}}></View>


    </View>
  )
}
