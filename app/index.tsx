import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import {
  Appbar,
  Card,
  Text as CardText,
  Button as CardButton,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import course from "../app/Data/courses.json";

export default function Index() {
  function handleURL(courseURI: string) {
    Linking.canOpenURL(courseURI).then(supported => {
      if (supported) {
        Linking.openURL(courseURI);
      } else {
        Alert.alert("No link")
      }
    });
  }
  return (
    <View>
        <SafeAreaView>
          <Appbar style={styles.AppbarHeader} >
            <Appbar.Content title="Course" titleStyle={styles.Title} />
            <Appbar.Action icon="magnify" size={20} />
          </Appbar>
          <ScrollView >
          <View style={styles.MainContainer}>
            {course.map((item) => (
              <View key={item.id}>
                <Card style={styles.Card}>
                  <Card.Cover
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Card.Title
                    title={item.title}
                    subtitleNumberOfLines={1}
                    titleStyle={styles.CardTitle}
                  />
                  <Card.Content>
                    <CardText variant="bodyMedium" numberOfLines={3}>{item.description}</CardText>
                  </Card.Content>
                  <Card.Actions>
                    <CardButton
                      onPress={() => handleURL(item.link)}
                      style={styles.CardButton}
                      theme={{ roundness: 3 }}
                    >
                      View
                    </CardButton>
                  </Card.Actions>
                </Card>
              </View>
            ))}
            <View style={styles.footer}/>
          </View>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    padding: 8,
  },
  AppbarHeader: {
    backgroundColor: "gray",
  },
  Title: {
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
  },
  CardTitle: {
    fontWeight: "900",
  },
  CardButton: {
    flex: 1,
    alignSelf: "center",
    color: "white",
  },
  Card:{
    marginBottom:7,
  },
  footer:{
    height:120
  }
});
