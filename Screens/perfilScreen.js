
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, TextInput, Modal } from "react-native";
import styles from "../css/perfilStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from 'axios';
const Perfil = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    
    useEffect(() => {
        const load =  async() =>{
            try{
                idUser  = await AsyncStorage.getItem('idUser');
            if(idUser !== null){
                const resposta = await Axios.get(`http://localhost/apiZoo/userShow?id=${idUser}`);
                console.log(resposta.data['nome']);
                setData(resposta.data);
                setId(resposta.data['id'] || '');
                setNome(resposta.data['nome'] || '');
                setEmail(resposta.data['email'] || '');
                setSenha(resposta.data['senha'] || '');
            }
            else{
                console.warn('erro na verificação')
            }
            }
            catch{
                console.error('muitos erro meu parceiro, desite')
            }

        }
        load();
    }, []);
    const editar = async () =>{
        const dadosUser = {
            'id': id,
            'nome': nome,
            'email': email,
            'senha': senha,
        };
        console.log(dadosUser)
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        try {
            const response = await Axios.post(`http://localhost/apiZoo/userUpdate`, dadosUser, axiosConfig );
            // console.log(response.data);
            console.log('Boa salvou')
            AsyncStorage.setItem('nomeUser', nome)
            AsyncStorage.setItem('emailUser', nome)
            AsyncStorage.setItem('senhaUser', senha)
            .then(() => {
                console.log('salvo')
            })
            .catch(error => {
                console.error('deu ruim')
            })
            setModalVisible(true)
        } catch (error) {
            console.error('Erro ao upar os dados', error );
            return false;
        }
    }
    
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
                    <TextInput style={styles.input} placeholder="Exemplo Nome" placeholderTextColor='#000' value={nome} onChangeText={setNome} />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Seu E-mail</Text>
                    <TextInput style={styles.input} placeholder="exemplo@gmail.com" placeholderTextColor='#000' onChangeText={setEmail} value={email} />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Sua Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor='#000' secureTextEntry={true} onChangeText={setSenha}/>
                </View>
            </View>
            <View style={styles.salvarArea}>
                <Pressable onPress={editar}>
                    <Image source={require("../assets/img/icone/zoo.png")} style={styles.savar} />
                </Pressable>
            </View>
            <Modal visible={modalVisible} animationType="fade" transparent >
                <View style={styles.modal}>
                    <View style={styles.cardModal}>
                        <View style={styles.topModal}>
                            <Pressable onPress={() => setModalVisible(false)}>
                        <Image source={require("../assets/img/icone/retornar.png")} style={styles.iconRetornar} />
                            </Pressable>
                        </View>
                        <View style={styles.textModal}>
                            <Text style={styles.modalTXT}>Alteração concluida com Sucesso</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}
export default Perfil;
