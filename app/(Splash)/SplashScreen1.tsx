import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import splashStyle from "@/styleSheet/splashScreenStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import splashImage from "@/assests/images/splashimage.png";
export default function SplashScreen1() {
  return (
    <View>
      <View style={splashStyle.upperBackView}></View>
      <SafeAreaView>
        <Image source={splashImage} style={splashStyle.image} />
        <View style={splashStyle.container}>
          <Text style={splashStyle.HeaderText}>
            Get Free Course in all fields
          </Text>
          <Text style={splashStyle.subText}>
            You Can learn any type of course and enhance your skills
          </Text>
          <View style={splashStyle.button}>
            <TouchableOpacity onPress={()=>router.push("/HomeScreen")}>
              <Text style={splashStyle.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={splashStyle.policyContainer}>
            <Text style={splashStyle.policyText}>By get started , you have to agree our</Text>
            <Text style={splashStyle.highlightPolicyText}> Privacy policy </Text>
            <Text style={splashStyle.policyText}>and </Text>
            <Text style={splashStyle.highlightPolicyText}>Term of use.</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
