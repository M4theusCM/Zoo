import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from '../css/loadingStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-1.png'
import logo from '../assets/img/icone/ZooKids.png'
import gif from '../assets/gif/carregamento-1-unscreen.gif'
import { useRoute } from '@react-navigation/native'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoadingScreen = ({navigation}) =>{
    const route =useRoute();
    // tempo tela de carregamento/splash
    const timeLoading = 7000 ;
    // tempo tela de troca de pagina
    const time = 1500;
    // valores para troca de tela
    const valorLogin = route.params?.login;
    const valorCadastro = route.params?.cadastro;
    useEffect(() => {
        const verificarUsuario = async () => {
            try {
                const value = await AsyncStorage.getItem('id');
                if (value !== null) {
                    console.log("Valor recuperado com sucesso", value);
                    setTimeout(() => navigation.replace('Home'), 3000);
                } else {
                    console.log("Nenhum valor encontrado para essa chave");
                    redirecionarTela();
                }
            } catch (error) {
                console.error("Erro na recuperação dos dados: ", error);
                redirecionarTela();
            }
        }

        const redirecionarTela = () => {
            if (valorLogin === 'alterar-Screen') {
                setTimeout(() => navigation.replace('Cadastro'), 1500);
            } else if (valorLogin === 'login') {
                setTimeout(() => navigation.replace('Home'), 1500);
            } else if (valorCadastro === 'alterar-Screen' || valorCadastro === 'cadastro-concluido') {
                setTimeout(() => navigation.replace('Login'), 1500);
            } else {
                setTimeout(() => navigation.replace("Login"), 7000);
            }
        }

        verificarUsuario();
    }, [navigation, valorLogin, valorCadastro]);

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
 export default LoadingScreen;

