import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import CourseCard from "@/components/CourseCard";

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Appbar style={styles.AppbarHeader}>
          <Appbar.Content title="Course" titleStyle={styles.Title} />
          <Appbar.Action icon="magnify" size={20} />
        </Appbar>
        <ScrollView>
          <CourseCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  AppbarHeader: {
    backgroundColor: "gray",
  },
  Title: {
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
  },
});

export default HomeScreen;
