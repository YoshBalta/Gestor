import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotonMainProps{
    texto: string;
    onPress:()=> void;
    color?:string;
    bordeColor?:string;
    icono?: keyof typeof MaterialIcons.glyphMap;
}

export const BotonMain =({texto, onPress, color='#6F42C1', bordeColor= '#7C52C9', icono}:BotonMainProps)=>{
    return(
        <TouchableOpacity style={[styles.boton, {backgroundColor: color, borderColor: bordeColor }]} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
             <MaterialIcons name={icono} size={24} color="#E8D9FF" />
        </TouchableOpacity>
    )

}

const styles  = StyleSheet.create({
    boton:{
        height: 55,
        width: '100%',
        borderRadius:22,
        borderColor: '#7C52C9',
        borderWidth: 3, 
        marginBottom:16,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 16,
        color:'#FFFFFF',
        marginRight:12
        

    }
})