import { View, Text, StyleSheet } from "react-native";
import React from "react";
import course from "@/Data/courses.json";
import {
  Card,
  Text as CardText,
  Button as CardButton,
} from "react-native-paper";
import { handleURL } from "@/Functionalities/HandleFunctions";
import CardStyles from "@/styleSheet/CourseCardStyle";
export default function CourseCard() {
  return (
    <View style={CardStyles.MainContainer}>
      {course.map((item) => (
        <View key={item.id}>
          <Card style={CardStyles.Card}>
            <Card.Cover
              source={{
                uri: item.image,
              }}
            />
            <Card.Title
              title={item.title}
              subtitleNumberOfLines={1}
              titleStyle={CardStyles.CardTitle}
            />
            <Card.Content>
              <CardText variant="bodyMedium" numberOfLines={3}>
                {item.description}
              </CardText>
            </Card.Content>
            <Card.Actions>
              <CardButton
                onPress={() => handleURL(item.link)}
                style={CardStyles.CardButton}
                theme={{ roundness: 3 }}
              >
                View
              </CardButton>
            </Card.Actions>
          </Card>
        </View>
      ))}
      <View style={CardStyles.footer} />
    </View>
  );
}