import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from '../css/loadingStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-1.png'
import logo from '../assets/img/icone/ZooKids.png'
import gif from '../assets/gif/carregamento-1-unscreen.gif'
import { useRoute } from '@react-navigation/native'; 

const loadingScreen = ({navigation}) =>{
    const route =useRoute();
    // tempo tela de carregamento/splash
    const timeLoading = 7000 ;
    // tempo tela de troca de pagina
    const time = 1500;
    // valores para troca de tela
    const valorLogin = route.params?.login;
    const valorCadastro = route.params?.cadastro;
    useEffect(() =>{
        // verificação e recarregamento ao trocar de tela
        if (valorLogin === 'alterar-Screen'){
            // troca para tela de cadastro
            const timeout = setTimeout(() =>{
                navigation.replace('cadastro');
            }, time);
            return () => clearTimeout(timeout);
        }
        if(valorLogin === 'login-correto'){
            const timeout = setTimeout(() =>{
                navigation.replace('home');
            }, time);
            return () => clearTimeout(timeout);
        }
        if (valorCadastro === 'alterar-Screen'){
            // troca para tela de cadastro
            const timeout = setTimeout(() =>{
                navigation.replace('login');
            }, time);
            return () => clearTimeout(timeout);
        }
        if(valorCadastro === 'cadastro-concluido'){
            // troca para tela de cadastro
            const timeout = setTimeout(() =>{
                navigation.replace('login');
            }, time);
            return () => clearTimeout(timeout);
        }

        // tela de loading => loginScreen
        const timeout = setTimeout(() =>{
            navigation.replace("login");
        }, timeLoading);
        return () => clearTimeout(timeout);
        // fim
    }, [navigation]);
    return (
        <ImageBackground source={fundoImg} style={styles.imgFundo}>
            <View style={styles.conteiner}>
                <View style={styles.top}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtCarregamento}>Carregado...</Text>
                    <Image source={gif} style={styles.gifCarregamento}/>
                </View>
            </View>
         </ImageBackground>
    );
};
 export default loadingScreen;

