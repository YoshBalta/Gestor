import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { Inputs } from "@/components/Inputs";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

export default function RegistrarSalida() {
    const [idSalida, setIdSalida] = useState('');

    const handleSalida = () => {
        console.log("Registrando salida para ID:", idSalida);
        // Aquí va tu lógica de axios
    };

    return (
        <BackgroundGradient titulo="Registrar salida">
            <Image 
                style={styles.Image} 
                source={require('@/assets/images/Screenshot_2026-03-24_221409-removebg-preview.png')}
            />

            <Inputs
                texto="Ingresar ID"
                value={idSalida}
                onChangeText={setIdSalida}
            />

            <BotonMain 
                texto="Registrar Salida"
                onPress={handleSalida}
            />
        </BackgroundGradient>
    );
}

const styles = StyleSheet.create({
    Image: {
        width: 90,
        height: 90,
        marginBottom: 20
    }
});