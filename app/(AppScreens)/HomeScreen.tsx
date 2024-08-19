import { StyleSheet, View, ScrollView, Text } from "react-native";
import { TextInput as RNTextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput as PaperTextInput } from "react-native-paper";
import CourseCard from "@/components/CourseCard";
import homeStyle from "@/styleSheet/HomeStyle";
import PInputText from "@/components/PaperTextInput";
import CategoryCard from "@/components/CategoryCard";
import { useEffect, useState } from "react";
import handleGreeting from "@/Functionalities/handleGreetings";
const HomeScreen = () => {
  const[greeting,setGreeting] =useState("")
useEffect(
  ()=>{
    setGreeting(handleGreeting());
    console.log('hello',greeting)
  }
)
  return (
    <View>
      <View style={homeStyle.upperBackView}>
        <View style={homeStyle.upperTextContainer}>
          <Text style={homeStyle.Title}>Hello,</Text>
          <Text style={homeStyle.SubTitle}>{greeting}</Text>
        </View>
        <View style={homeStyle.InputTextContainer}>
          <PInputText />
        </View>
      </View>

      <ScrollView>
        <View style={homeStyle.MainContainer}>
          <View style={homeStyle.InsideContainer}>
            <Text style={homeStyle.InsideText}>Explore categories</Text>
            <Text style={homeStyle.InsideSubText}>See all</Text>
          </View>
          <CategoryCard/>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
