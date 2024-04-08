
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, TextInput } from "react-native";
import styles from "../css/perfilStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'; // Importar o axios
const Perfil = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    const navigation = useNavigation();
    useEffect(() => {
        AsyncStorage.getItem('idUser').then((value) => setId(value));
        AsyncStorage.getItem('idNome').then((value) => setNome(value));
        AsyncStorage.getItem('idEmail').then((value) => setEmail(value));
        AsyncStorage.getItem('idSenha').then((value) => setSenha(value));
    }, []);
    
    function voltar() {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.conteiner}>
            <View style={styles.voltarArea}>
                <Pressable onPress={voltar}>
                    <Image source={require("../assets/img/icone/retornar.png")} style={styles.iconRetornar} />
                </Pressable>
            </View>
            <View style={styles.imgUser}>
                <Image source={require("../assets/img/icone/user.png")} style={styles.iconUser} />
            </View>
            <View style={styles.areaInput}>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Seu Nome</Text>
                    <TextInput style={styles.input} placeholder="Exemplo Nome" placeholderTextColor='#000' onChangeText={setNome} value={nome}/>
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Seu E-mail</Text>
                    <TextInput style={styles.input} placeholder="exemplo@gmail.com" placeholderTextColor='#000' onChangeText={setEmail} />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Sua Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor='#000' secureTextEntry={true} onChangeText={setSenha} />
                </View>
            </View>
            <View style={styles.salvarArea}>
                <Pressable>
                    <Image source={require("../assets/img/icone/zoo.png")} style={styles.savar} />
                </Pressable>
            </View>
        </View>
    )
}
export default Perfil;
