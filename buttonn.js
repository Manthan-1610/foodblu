import React from "react";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";
export default function Flatbuttonn({text,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
      borderRadius:8,
        paddingVertical: 8,
      paddingHorizontal: 8,
        backgroundColor: '#391593',
        marginTop: 30,
        marginLeft: 80,
        marginRight: 80,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 16,
        textAlign: 'center',
    }
})