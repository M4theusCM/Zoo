import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar, Image, Pressable, FlatList, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { Axios } from 'axios'; 
import styles from "../css/homeStyle2";
import config from "../assets/img/icone/config.png";
import icon from "../assets/img/icone/icon.png";
import animal_1 from "../assets/img/icone/1-icon.jpg";
import animal_2 from "../assets/img/icone/2-icon.jpg";
import animal_3 from "../assets/img/icone/3-icon.jpg";
import animal_4 from "../assets/img/icone/4-icon.jpg";
import animal_5 from "../assets/img/icone/5-icon.jpg";
import animal_6 from "../assets/img/icone/6-icon.jpg";
import animal_7 from "../assets/img/icone/7-icon.jpg";
import imgModal from '../assets/img/icone/zoo.png'
import fundoModal from '../assets/img/fundo/fundo-2-mini.png'

const HomeScreen = () => {
    const [modalWelcome, setModalWelcome] = useState(false)
    const [modalConfig, setModalConfig] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const bemVindo = await AsyncStorage.getItem('BemVindo');
            if (bemVindo == 0) {
                setModalWelcome(true);
            }
        };
        fetchData();
    }, []);

    function fecharModal() {
        setModalWelcome(false)
        AsyncStorage.setItem('BemVindo', 1)
    }
    function modalConfigTrue() {
        setModalConfig(true)
    }
    function retornar() {
        setModalConfig(false)
    }
    function sair() {
        //lógica para limpar os dados locais e fazer o logout
        setModalConfig(false);
        AsyncStorage.clear();
        console.log('Logout realizado');
        navigation.navigate('Login');
    }
    const territorio = [
        {
            id: '1',
            title: 'TerritorioAzul',
            image: animal_1,
        },
        {
            id: '2',
            title: 'TerritorioVermelho',
            image: animal_2,
        },
        {
            id: '3',
            title: 'TerritorioVerde',
            image: animal_3,
        },
        {
            id: '4',
            title: 'TerritorioRoxo',
            image: animal_4,
        },
        {
            id: '5',
            title: 'TerritorioMarrom',
            image: animal_5,
        },
        {
            id: '6',
            title: 'TerritorioRosa',
            image: animal_6,
        },
        {
            id: '7',
            title: 'TerritorioDino',
            image: animal_7,
        },
    ];
    const navigation = useNavigation();
    const navigateToTerritorio = (title) => {
        navigation.navigate(title);
    };
    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.item} onPress={() => navigateToTerritorio(item.title)}>
                <Image style={styles.imageCard} source={item.image} resizeMode="cover" />
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <View style={styles.topNav}>
                        <View style={styles.logoNav}>
                            <Image source={icon} style={styles.iconImg} />
                            <Text style={styles.nameUser}>Matheus Campos</Text>
                        </View>
                        <View style={styles.confNav}>
                            <Pressable onPress={modalConfigTrue}>
                                <Image source={config} style={styles.configImg} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.bottomNav}></View>
                </View>

                <View style={styles.territorios}>
                    <View style={styles.territoriosArea}>
                        <FlatList
                            data={territorio}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            contentContainerStyle={styles.flatlistContainer}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* modal de bem-vindo */}
            <Modal visible={modalWelcome} style={styles.conteinerModal}>
                <View style={styles.conteinerModal}>
                    <View style={styles.modalComponente}>
                        <Image style={styles.fundoModal} source={fundoModal} />
                        <View style={styles.mascaraModal}>
                            <View style={styles.topoModal}>
                                <Text style={styles.h1}>Bem-Vindo</Text>
                            </View>
                            <View style={styles.areaTextApresentacao}>
                                <Text style={styles.txtApresentacao}>Este é o ZooKids, um app voltado a informações dos animais do Zoológico de São Paulo, Para isso, dividimos os animais em territorios</Text>
                                <Text style={styles.txtApresentacao}> Mas antes de explorar, tenho uma pergunta: Você está pronto para essa aventura?</Text>
                            </View>
                            <View style={styles.fecharModalZoo}>
                                <Pressable onPress={fecharModal}>
                                    <Image source={imgModal} style={styles.imgModal} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* modal de config */}
            <Modal visible={modalConfig} animationType="fade" transparent >
                <View style={styles.configModal}>
                    <View style={styles.cardModalConfig}>
                        <Text style={styles.titleConfig}>Configurações</Text>
                        <View style={styles.bottomConfigModal}>
                            <Pressable>
                                <Text style={styles.textConfig}>Perfil</Text>
                            </Pressable>
                            <Pressable onPress={retornar}>
                                <Text style={styles.textConfig}>Retornar</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={styles.textConfig}>contato</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={styles.textConfig}>Devs</Text>
                            </Pressable>
                            <Pressable onPress={sair}>
                                <Text style={styles.exitText}>Sair</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </Modal>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default HomeScreen;
