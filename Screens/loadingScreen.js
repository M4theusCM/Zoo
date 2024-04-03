import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from '../css/loadingStyle.js';
// import imgs
import fundoImg from '../assets/img/fundo/fundo-1.png'
import logo from '../assets/img/icone/ZooKids.png'
import gif from '../assets/gif/carregamento-1-unscreen.gif'
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'; // Importar o axios

const LoadingScreen = ({ navigation }) => {
    const route = useRoute();
    // valores para troca de tela
    const valorLogin = route.params?.login;
    const valorCadastro = route.params?.cadastro;
    useEffect(() => {

        // verificação se usuario ja realizou login algumas vez
        const verificarUsuario = async () => {
            try {
                const value = await AsyncStorage.getItem('idUser');
                // verificação se esta vazio
                if (value !== null && value !== undefined) {
                    // buscando informaçoes salvas localmente
                    const emailUser = await AsyncStorage.getItem('emailUser');
                    const senhaUser = await AsyncStorage.getItem('senhaUser');
                    // verificação altomatica de login, caso valores não tenham cido alterados
                    try {
                        // busca no banco
                        const response = await axios.get(`http://localhost/apiZoo/userCredentials?email=${emailUser}&senha=${senhaUser}`);
                        console.log('as info salvas altuamente: '+response.data);
                        // redirecionamento
                        console.log("Valor recuperado com sucesso", value);
                        setTimeout(() => navigation.replace('Home'), 3000);
                    } catch (error) {
                        // caso de erro
                        console.log('Erro ao tentar logar', error);
                        setTimeout(() => navigation.replace('Login'), 4000);
                    }
                } else {
                    // redirecionamento para outra função de troca de telas 
                    redirecionarTela();
                }
            } catch (error) {
                console.error("Nenhuma section encontrada: ", error);
                redirecionarTela();
            }
        }

        // função de troca de telas por parametro
        const redirecionarTela = () => {
            // varificações de parametro, e tempo de permanencia da tela de carregamento
            if (valorLogin === 'alterar-Screen') {
                setTimeout(() => navigation.replace('Cadastro'), 1500);
            } else if (valorLogin === 'login') {
                setTimeout(() => navigation.replace('Home'), 1500);
            } else if (valorCadastro === 'alterar-Screen' || valorCadastro === 'cadastro-concluido') {
                setTimeout(() => navigation.replace('Login'), 1500);
            } else {
                // caso não encontre um parametro, ir para a tela inicial de login
                setTimeout(() => navigation.replace("Login"), 1000);
            }
        }

        verificarUsuario();
    }, [navigation, valorLogin, valorCadastro]);

    return (
        <ImageBackground source={fundoImg} style={styles.imgFundo}>
            <View style={styles.conteiner}>
                <View style={styles.top}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtCarregamento}>Carregado...</Text>
                    <Image source={gif} style={styles.gifCarregamento} />
                </View>
            </View>
        </ImageBackground>
    );
};
export default LoadingScreen;

