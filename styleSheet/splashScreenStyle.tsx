import { StyleSheet } from "react-native";
import colors from "@/ui/colors";
const splashStyle = StyleSheet.create({
    
    upperBackView:{
        height:250,
        backgroundColor:colors.secondary
    },
    image:{
        alignSelf:'center',
        marginTop:-220,
        borderBottomLeftRadius:160,
        borderBottomRightRadius:160,
        borderRadius:20,
        height:400,
        width:370
    },
    container:{
        marginTop:70,
        paddingHorizontal:20
    },
    HeaderText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:colors.TextBlack
    },
    subText:{
        textAlign:'center',
        marginTop:12,
        color:colors.TextGray
    },
    button:{
        marginTop:50,
        borderRadius:15,
        padding:18,
        backgroundColor:colors.secondary
    },
    buttonText:{
        textAlign:'center',
        color:colors.TextWhite,
        fontSize:17
    },
    policyContainer:{
        marginTop:30,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingHorizontal:50,
        justifyContent:'center',
    },
    policyText:{
        color:colors.TextGray,
        fontSize:12
    },
    highlightPolicyText:{
        color:'blue',
        fontSize:12
    },
})

export default splashStyle