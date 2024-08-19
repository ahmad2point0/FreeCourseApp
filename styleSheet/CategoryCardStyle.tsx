import { StyleSheet } from "react-native";
const cateCardStyle = StyleSheet.create({
    Card:{
        width:185,
        marginBottom:20,
        backgroundColor:'white'
    },
    image:{
        height:150,
        width:185,
        backgroundColor:'white',
    },
    titleText:{
        fontSize:15,
        color:'black',
        fontWeight:'bold'
    },
    subTitleText:{
        color:'gray',
    },
    Container:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
})
export default cateCardStyle