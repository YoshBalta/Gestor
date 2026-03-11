import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotonMainProps{
    texto: string;
    onPress:()=> void;
    color:boolean;
}

export const BotonMain =({texto, onPress, color=true}:BotonMainProps)=>{
    return(
        <TouchableOpacity style={[styles.boton, {backgroundColor: color ? '#6F42C1' : '#6F42C1CC' }]} onPress={onPress}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    )

}

const styles  = StyleSheet.create({
    boton:{
        height: 50,
        width: 300,
        borderRadius:22,
        borderColor: '#7C52C9',
        borderWidth: 3, 
        marginTop:50
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'

    }
})