import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import styles from '../css/loginStyle.js';
import fundoImg from '../assets/img/fundo/fundo-2.png';
import logoImg from '../assets/img/icone/ZooKids.png';
import loginImg from '../assets/img/icone/login.png';
import axios from 'axios'; // Importar o axios
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function alterarScreen() {
        navigation.navigate('Loading', { login: 'alterar-Screen' });
    }
    const login = async () => {
        try {
            const response = await axios.get(`http://localhost/apiZoo/userCredentials?email=${email}&senha=${senha}`);
            console.log(response.data);
            // colocando os valores do banco, caso corretos, em uma constate
            const idUser = response.data['id'];
            const emailUser = response.data['email'];
            const senhaUser = response.data['senha'];
            const nomeUser = response.data['nome'];
            
            // salvando itens do user localmetente
            AsyncStorage.setItem('idUser', idUser)
            AsyncStorage.setItem('emailUser', emailUser)
            AsyncStorage.setItem('senhaUser', senhaUser)
            AsyncStorage.setItem('nomeUser', nomeUser)
            AsyncStorage.setItem('BemVindo', 0)

            .then(() => {
                console.log('salvo com sucesso');
            })
            .catch(() => {
                console.error("Erro no salvamento local", error);
            })
            navigation.navigate('Loading', { login: 'login' });
        } catch (error) {
            console.error('Erro ao tentar logar', error);
            return false;
        }
    }
    return (
        <ImageBackground source={fundoImg} style={styles.fundo}>
            <View style={styles.conteiner}>
                <View style={styles.logo}>
                    <Image source={logoImg} style={styles.logoImg} />
                </View>
                <View style={styles.apresentacao}>
                    <Text style={styles.h1}>Login</Text>
                    <Text style={styles.txt}>Prepare-se para um aventura selvagem pelo zoológico</Text>
                </View>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Seu E-mail</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} placeholder="exemplo@gmail.com" placeholderTextColor='#fff' />
                    <Text style={styles.label}>Sua Senha</Text>
                    <TextInput style={styles.input} onChangeText={setSenha} placeholder="Senha" placeholderTextColor='#fff' secureTextEntry={true} />
                </View>
                <View style={styles.areaLogin}>
                    <Pressable onPress={login}>
                        <Image source={loginImg} style={styles.loginImg} />
                    </Pressable>
                    <Pressable>
                        <Text style={styles.alterar} onPress={alterarScreen}>Não tenho Conta</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}
export default LoginScreen;