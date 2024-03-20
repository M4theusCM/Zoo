import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import styles from '../css/loginStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-2.png';
import logoImg from '../assets/img/icone/ZooKids.png';
import loginImg from '../assets/img/icone/login.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const loginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dadosUsuario, setDadosUsuario] = useState(null); 
    // useEffect(() => {
    //     const carregarDadosUsuario = async () => {
    //       try {
    //         const dadosSalvos = await AsyncStorage.getItem('dataUser');
    //         if (dadosSalvos !== null) {
    //           setDadosUsuario(JSON.parse(dadosSalvos));
    //         }
    //       } catch (error) {
    //         console.error('Erro ao carregar os dados do usuário:', error);
    //       }
    //     };
    //     carregarDadosUsuario();
    //   }, []);
      
    console.log(dadosUsuario)
    function alterarScreen() {
        navigation.navigate('loading', { login: 'alterar-Screen' });    
    }
    function login(){
        navigation.navigate('loading', { login: 'login-correto' });
    }

    return(
        <ImageBackground source={fundoImg} style={styles.fundo}>
            <View style={styles.conteiner}>
                <View style={styles.logo}>
                    <Image source={logoImg} style={styles.logoImg}/>
                </View>
                <View style={styles.apresentacao}>
                    <Text style={styles.h1}>Login</Text>
                    <Text style={styles.txt}>Prepare-se para um aventura selvagem pelo zoológico</Text>
                </View>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Seu E-mail</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} placeholder="exemplo@gmail.com" placeholderTextColor='#fff'/>
                    <Text style={styles.label}>Sua Senha</Text>
                    <TextInput style={styles.input} onChangeText={setSenha} placeholder="Senha" placeholderTextColor='#fff' secureTextEntry={true}/>
                </View>
                <View style={styles.areaLogin}>
                    <Pressable onPress={login}>
                        <Image source={loginImg} style={loginImg}/>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.alterar} onPress={alterarScreen}>Não tenho Conta{dadosUsuario}</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}
export default loginScreen;