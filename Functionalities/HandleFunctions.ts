import { Linking,Alert } from "react-native";
export function handleURL(courseURI: string) {
    Linking.canOpenURL(courseURI).then((supported) => {
      if (supported) {
        Linking.openURL(courseURI);
      } else {
        Alert.alert("No link");
      }
    });
  }