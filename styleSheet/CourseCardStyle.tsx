import { StyleSheet } from "react-native";
import colors from "@/ui/colors";
const CardStyles = StyleSheet.create({
      CardTitle: {
        fontWeight: "900",
      },
      CardButton: {
        flex: 1,
        alignSelf: "center",
        color: "white",
      },
      Card: {
        marginBottom: 7,
      },
      footer: {
        height: 120,
      },
})

export default CardStyles;