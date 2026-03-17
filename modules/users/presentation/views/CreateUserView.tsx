/*Corresponde a tu pantalla:

“REGISTRAR usuario / contraseña”*/

import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { InputsLogueo } from "@/components/InputsLogueo";
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';


export default function RegistrarUsuario(){

    const [valueRol, setValueRol] = useState(null)
    const [dataRol, setDataRol] = useState([{label: '', value: ''}])
      const RegistrarUsuario= () => {
        router.push("/vistas/menu");
      };

    const getRol = async () =>{
        try {
            const response = await axios.get("http://localhost/govisit/obtenerRoles.php");
            if(response.data.status == 'success'){
                const data = response.data.data;
                data.forEach((element:any) => {
                    dataRol.push({label:element.nombre, value: element.id})
                });
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getRol()
    }, [])
     

      
    return(

        <BackgroundGradient
        titulo="REGISTRAR ">

            <Dropdown
            style={styles.textInput}
                data={dataRol}
                search 
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholderTextColor="#D1D5DB "
                placeholder="Seleccionar"
                searchPlaceholder="Buscar"
               
                value={valueRol}
                onChange={(item:any) => {
                    setValueRol(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                    size={20}
                    />
                )}
                />
            
        

            <InputsLogueo 
            texto="Nombre(s)"
            icono="person">
            </InputsLogueo>

             <InputsLogueo 
            texto="Apellido(s)"
            >
            </InputsLogueo>

            <InputsLogueo 
            texto="Usuario"
            icono="person">
            </InputsLogueo>
            
          
            
            

            <InputsLogueo
            texto="Contraseña"
            valor={true}
            icono="password">
            </InputsLogueo>

            <BotonMain
            texto="Registrar Usuario"
            onPress={()=>''}></BotonMain>

        </BackgroundGradient>

    );
}

const styles = StyleSheet.create({

    textInput: {
        width:300,
        height:55,
        borderWidth:3,
        borderColor:'#7C52C9',
        borderRadius:12,
        backgroundColor:'#F9FAFB',
        marginTop:30,
        paddingLeft:70, //recorre el texto del placeholder,
        color:'#D1D5DB'
        
        
    },
   texto:{
    fontSize:16
    
},


})