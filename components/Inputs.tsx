import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputsProps{
    texto:string;
    valor?:boolean;
    onChangeText:(text: string) => void;
    value:string;

}
//maxLenght permite restringir el numero de caracteres

export const Inputs=({texto, valor, value, onChangeText}:InputsProps)=>{

    const [onfocus,setFocus]=useState(false);
   

    return(
        
        <View style={styles.alinear}>
            
        <TextInput style={[styles.textInput,
          { borderColor:onfocus ? "#7C52C9" : "#7c52c9c6",
           borderWidth:onfocus ? 4 : 3 }]} onFocus={()=>setFocus(true) }
            onBlur={()=> setFocus(false)}  
            placeholder={texto}
            placeholderTextColor='#D1D5DB' 
            secureTextEntry={valor} 
            maxLength={50}
            value={value}
            onChangeText={onChangeText}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    textInput:{
        flex:1,
        height:55,
        borderWidth:3,
        borderRadius:12,
        backgroundColor:'#F9FAFB',
        color:'#000000',
        marginTop:15,
        marginBottom:15,
        paddingLeft:20, //recorre el texto del placeholder,
        
    },  
    alinear:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative'
        
    }
    


})