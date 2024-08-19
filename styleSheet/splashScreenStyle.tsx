import { StyleSheet } from "react-native";
const splashStyle = StyleSheet.create({
    
    upperBackView:{
        height:250,
        backgroundColor:'purple'
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
        fontSize:25
    },
    subText:{
        textAlign:'center',
        marginTop:12,
        color:'gray'
    },
    button:{
        marginTop:50,
        borderRadius:15,
        padding:18,
        backgroundColor:'purple'
    },
    buttonText:{
        textAlign:'center',
        color:'white',
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
        color:'gray',
        fontSize:12
    },
    highlightPolicyText:{
        color:'blue',
        fontSize:12
    },
})

export default splashStyle