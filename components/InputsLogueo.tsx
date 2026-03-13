import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";

interface InputsProps{
    texto:string;
    valor?:boolean;
    icono?: keyof typeof MaterialIcons.glyphMap;

}
//maxLenght permite restringir el numero de caracteres
export const InputsLogueo=({texto, valor,icono}:InputsProps)=>{
    return(
        
        <View style={styles.alinear}>
        <View style={styles.rectangulo}>
            <MaterialIcons name={icono} size={24} color="#E8D9FF" />
        </View>
        <TextInput style={styles.textInput} placeholder={texto} placeholderTextColor='#D1D5DB' secureTextEntry={valor} maxLength={50}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    textInput:{
        width:300,
        height:55,
        borderWidth:3,
        borderColor:'#7C52C9',
        borderRadius:12,
        backgroundColor:'#F9FAFB',
        color:'#000000',
        marginTop:30,
        paddingLeft:70, //recorre el texto del placeholder,
    },
    rectangulo:{
    width:60,
    height:55,
    backgroundColor:'#7C52C9',
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    position:'absolute',
    left:0,
    top:30,
    borderWidth:3,
    borderColor: '#7C52C9',

    justifyContent:'center',
    alignItems:'center'
},
    alinear:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative'
        
    },

})