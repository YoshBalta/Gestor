import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputsProps{
    texto:string;
    valor?:boolean;
    icono?: keyof typeof MaterialIcons.glyphMap;
    value: string;
    onChangeText: (text: string) => void;

}

export const InputsLogueo=({texto, valor,icono, value, onChangeText }:InputsProps)=>{

    const [onfocus,setFocus]=useState(false);
   

    return(
        
        <View style={styles.alinear}>
        <View style={styles.rectangulo}>
            <MaterialIcons name={icono} size={24} color="#E8D9FF" />
        </View>
        <TextInput style={[
            styles.textInput,
             { 
                borderColor:onfocus ? "#7C52C9" : "#7c52c9c6",
                borderWidth:onfocus ? 4 : 3 }]}
                onFocus={()=>setFocus(true) }
                onBlur={()=> setFocus(false)}
                placeholder={texto}
                placeholderTextColor='#D1D5DB' 
                secureTextEntry={valor}
                maxLength={50}
                value={value}
                onChangeText={onChangeText} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    rectangulo:{
    width:60,
    height:55,
    backgroundColor:'#7C52C9',
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    borderWidth:3,
    borderColor: '#7C52C9',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15
},

    textInput:{
        flex:1,
        height:55,
        borderWidth:3,
        borderColor:'#7C52C9',
        borderBottomRightRadius:12,
        borderTopRightRadius:12,
        backgroundColor:'#F9FAFB',
        color:'#000000',
        marginBottom:15, 
    },
    alinear:{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        
    },

})