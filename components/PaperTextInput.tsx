import { TextInput as PaperTextInput } from "react-native-paper";
import colors from "@/ui/colors";
import { StyleSheet } from "react-native";
export default function PInputText(){
    
return(
    <PaperTextInput
      placeholder="Search Item"
      mode="outlined"
      outlineColor={colors.primary}
      style={styles.TextInput}
      textColor={colors.TextBlack}
      activeOutlineColor={colors.secondary}
      outlineStyle={{borderRadius:50}}
      left={<PaperTextInput.Icon icon={"magnify"} size={28}/>}
    />)
}

const styles =StyleSheet.create({
    TextInput:{
        margin:8,
        backgroundColor:colors.TextWhite,
        color:colors.TextBlack
      },
})
