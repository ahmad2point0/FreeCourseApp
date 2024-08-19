import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function SplashScreen1() {
  return (
    <View style={styles.Container}>
      <Text>SplashScreen1</Text>
        <TouchableOpacity onPress={()=>router.push('/HomeScreen')}>
            <Text>heelo</Text>
        </TouchableOpacity>
     </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})