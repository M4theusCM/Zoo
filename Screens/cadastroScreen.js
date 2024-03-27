import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import styles from '../css/loginStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-2.png';
import logoImg from '../assets/img/icone/ZooKids.png';
import loginImg from '../assets/img/icone/login.png';
// import savamento
import axios, { Axios } from 'axios';
const CadastroScreen = ({navigation}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function alterarScreen(){
        navigation.navigate('Loading', {cadastro: 'alterar-Screen'});
    }
    const cadastrar = async() =>{
        const dadosUser={
            'nome': nome,
            'email': email,
            'senha': senha,
        };
        const axiosConfig = {
            headers: {
                /* 'Accept': 'application/json',
                */'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        try {
            const response = await axios.post('http://localhost/apiZoo/userInsert', dadosUser, axiosConfig );
            console.log(response.data);
            navigation.navigate('Loading', {cadastro: 'cadastro-completo'}); navigation.navigate('Loading', {cadastro: 'alterar-Screen'});
        } catch (error) {
            console.error('Erro ao criar jogador1', error );
            return false;
        }
    }
    return(
        <ImageBackground source={fundoImg} style={styles.fundo}>
            <View style={styles.conteiner}>
                <View style={styles.logo}>
                    <Image source={logoImg} style={styles.logoImg}/>
                </View>
                <View style={styles.apresentacao}>
                    <Text style={styles.h1}>Cadastre-se</Text>
                    <Text style={styles.txt}>Está pronto para explorar o próximo território?</Text>
                </View>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Seu Nome</Text>
                    <TextInput style={styles.input} placeholder="Exemplo Nome" placeholderTextColor='#fff' onChangeText={setNome}/>
                    <Text style={styles.label}>Seu E-mail</Text>
                    <TextInput style={styles.input} placeholder="exemplo@gmail.com" placeholderTextColor='#fff' onChangeText={setEmail}/>
                    <Text style={styles.label}>Sua Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor='#fff' secureTextEntry={true} onChangeText={setSenha}/>
                </View>
                <View style={styles.areaLogin}>
                    <Pressable onPress={cadastrar}>
                        <Image source={loginImg} style={loginImg}/>
                    </Pressable>
                    <Pressable onPress={alterarScreen}>
                        <Text style={styles.alterar}>Já tenho Conta</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}
export default CadastroScreen;

