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
    const [valueRol, setValueRol] = useState(null);
    const [dataRol, setDataRol] = useState([{label: '', value: ''}]);
    
    // Estados para los inputs
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const RegistrarUsuarioAction = () => {
        // Aquí podrías enviar nombre, apellidos, etc., a tu API
        router.push("/vistas/menu");
    };

    const getRol = async () =>{
        try {
            const response = await axios.get("http://localhost/govisit/obtenerRoles.php");
            if(response.data.status == 'success'){
                const data = response.data.data;
                const rolesMap = data.map((element: any) => ({
                    label: element.nombre, 
                    value: element.id
                }));
                setDataRol(rolesMap);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRol();
    }, []);
      
    return (
        <BackgroundGradient titulo="REGISTRAR">
            <Dropdown
                style={styles.textInput}
                data={dataRol}
                search 
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholderTextColor="#D1D5DB"
                placeholder="Seleccionar Rol"
                searchPlaceholder="Buscar"
                value={valueRol}
                onChange={(item:any) => {
                    setValueRol(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign name="user" size={20} />
                )}
            />

            <InputsLogueo 
                texto="Nombre(s)"
                icono="person"
                value={nombre}
                onChangeText={setNombre}
            />

            <InputsLogueo 
                texto="Apellido(s)"
                value={apellidos}
                onChangeText={setApellidos}
            />

            <InputsLogueo 
                texto="Usuario"
                icono="person"
                value={usuario}
                onChangeText={setUsuario}
            />

            <InputsLogueo
                texto="Contraseña"
                valor={true}
                icono="password"
                value={password}
                onChangeText={setPassword}
            />

            <BotonMain
                texto="Registrar Usuario"
                onPress={RegistrarUsuarioAction}
            />
        </BackgroundGradient>
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
        color: '#000'
    }
});