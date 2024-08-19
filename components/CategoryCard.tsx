import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import cateCardStyle from "@/styleSheet/CategoryCardStyle";
import React from "react";
import { router } from "expo-router";

export default function CategoryCard() {
  return (
    <View style={cateCardStyle.Container}>
      <Card mode="elevated" style={cateCardStyle.Card} onPress={()=>router.push('/SplashScreen1')}>
        <Card.Cover
          source={require('@/assests/images/cate1.png')}
          style={cateCardStyle.image}
        />
        <Card.Content>
          <Text variant="titleLarge" style={cateCardStyle.titleText}>
            Computer Science
          </Text>
          <Text variant="bodyMedium" style={cateCardStyle.subTitleText}>20 courses</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
