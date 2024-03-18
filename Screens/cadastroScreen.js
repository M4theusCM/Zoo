import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import styles from '../css/loginStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-2.png';
import logoImg from '../assets/img/icone/ZooKids.png';
import loginImg from '../assets/img/icone/login.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const cadastroScreen = ({navigation}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function alterarScreen(){
        navigation.navigate('loading', {cadastro: 'alterar-Screen'});
        // navigation.navigate('loading', { login: 'cadastro-concluido' });
    }
    function cadastrar(){
        // navigation.navigate('loading', {cadastro: 'alterar-Screen'});
        navigation.navigate('loading', { login: 'cadastro-concluido' });
    }
    // const cadastrar = async () =>{
    //     if(nome!==null && email!==null && senha!== null){
    //         const dataUser = {nome, email, senha};
    //         try {
    //             await AsyncStorage.setItem('dataUser', JSON.stringify(dataUser));
    //             console.log('Dados do usuário salvos com sucesso!');
    //         } 
    //         catch (error) {
    //             console.error('Erro ao salvar os dados do usuário:', error);
    //         }
    //     };
    // }
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
export default cadastroScreen;