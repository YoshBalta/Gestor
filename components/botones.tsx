import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotonMainProps{
    texto: string;
    onPress:()=> void;
    color?:string;
}

export const BotonMain =({texto, onPress, color}:BotonMainProps)=>{
    return(
        <TouchableOpacity style={[styles.boton, {backgroundColor: color='#6F42C1'}]} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )

}

const styles  = StyleSheet.create({
    boton:{
        height: 55,
        width: 300,
        borderRadius:22,
        borderColor: '#7C52C9',
        borderWidth: 3, 
        margin:30,
        justifyContent:'center'
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color:'#FFFFFF',
        

    }
})