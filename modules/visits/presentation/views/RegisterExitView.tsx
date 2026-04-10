import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { Inputs } from "@/components/Inputs";
import React from "react";
import { Image, StyleSheet } from "react-native";

//para agregar el nip de registrar la salida
export default function RegistrarSalida (){
    return (
         <BackgroundGradient 
         titulo="Registrar salida">
            
                <Image style={styles.Image} source={require('@/assets/images/Screenshot_2026-03-24_221409-removebg-preview.png')}
                />
            
            

            <Inputs
            texto="Ingresar ID"></Inputs>

            <BotonMain 
            texto="Registrar Salida"
            onPress={()=>''}></BotonMain>



         </BackgroundGradient>
    );
}

const styles = StyleSheet.create({
    Image:{
        width:90,
        height:90
    }



})