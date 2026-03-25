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
    <BackgroundGradient
      
      titulo="Registrar Entrada">

      <Dropdown
        style={styles.textInput }
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccionar"
        searchPlaceholder="Buscar"
        searchPlaceholderTextColor="#D1D5DB"
        value={rol}
        onChange={(item) => {
          setRol(item.value);
        }}
      />

      {rol === "visitante" && <AgregarVisitante />}
      {rol === "comunidad" && <Comunidad />}

    </BackgroundGradient>
  );
}


function AgregarVisitante() {
    return ( 

        <View style={styles.contenedor}>

            <Inputs
            texto="Nombre(s)">
            </Inputs>
            <Inputs
            texto="Apellidos">
            </Inputs>
            <Inputs
            texto="Proposito de la visita..."></Inputs>

            <BotonMain 
            texto="Registrar Visita"
            onPress={()=>""}></BotonMain>

        </View>
       
    );
}
 function Comunidad() {
    return (
        
         <View style={styles.contenedor}>

            <Inputs
            texto="ID">
            </Inputs>
           

            <BotonMain 
            texto="Registrar Visita"
            onPress={()=>""}></BotonMain>

        </View>
    );
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
    contenedor:{
        flex:1,
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center'
    }
})
