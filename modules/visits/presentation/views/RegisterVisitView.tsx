import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { Inputs } from "@/components/Inputs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

export default function DropdownScreen() {
  const [rol, setRol] = useState(null);

  const data = [
    { label: 'Visitante', value: 'visitante' },
    { label: 'Comunidad', value: 'comunidad' }
  ];

  return (
    <BackgroundGradient titulo="Registrar Entrada">
      <Dropdown
        style={styles.textInput}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccionar tipo"
        searchPlaceholder="Buscar"
        searchPlaceholderTextColor="#D1D5DB"
        value={rol}
        onChange={(item) => setRol(item.value)}
      />

      {rol === "visitante" && <AgregarVisitante />}
      {rol === "comunidad" && <Comunidad />}
    </BackgroundGradient>
  );
}

function AgregarVisitante() {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [proposito, setProposito] = useState('');

    return ( 
        <View style={styles.contenedor}>
            <Inputs
                texto="Nombre(s)"
                value={nombre}
                onChangeText={setNombre}
            />
            <Inputs
                texto="Apellidos"
                value={apellidos}
                onChangeText={setApellidos}
            />
            <Inputs
                texto="Proposito de la visita..."
                value={proposito}
                onChangeText={setProposito}
            />
            <BotonMain 
                texto="Registrar Visita"
                onPress={() => console.log(nombre, apellidos, proposito)}
            />
        </View>
    );
}

function Comunidad() {
    const [idComunidad, setIdComunidad] = useState('');

    return (
        <View style={styles.contenedor}>
            <Inputs
                texto="ID"
                value={idComunidad}
                onChangeText={setIdComunidad}
            />
            <BotonMain 
                texto="Registrar Visita"
                onPress={() => console.log("ID Comunidad:", idComunidad)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        height: 55,
        borderWidth: 3,
        borderColor: '#7C52C9',
        borderRadius: 12,
        backgroundColor: '#F9FAFB',
        marginTop: 30,
        paddingLeft: 20,
    },
    contenedor: {
        marginTop: 20,
        alignItems: 'center'
    }
});