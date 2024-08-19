import { StyleSheet } from "react-native";
import colors from "@/ui/colors";
const HomeStyle = StyleSheet.create({
  upperBackView: {
    height: 250,
    backgroundColor: colors.secondary,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
  },
  upperTextContainer: {
    marginTop: 40,
    marginLeft: 20,
    
  },
  Title: {
    fontWeight: "500",
    color: colors.TextWhite,
    fontSize: 30,
  },
  SubTitle: {
    color: colors.TextWhite,
    fontSize: 20,
  },
  InputTextContainer: {
    marginTop: 50,
    marginHorizontal:20,
  },
  InsideContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  InsideText:{
    fontSize:23,
    fontWeight:'600'
  },
  InsideSubText:{
    fontSize:13,
    color:colors.secondary
  },
  MainContainer:{
    padding:12,
  }
});
export default HomeStyle;
