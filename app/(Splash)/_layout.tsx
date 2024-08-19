import { Stack } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen1"/>
    </Stack>
  )
}