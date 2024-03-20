import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, ScrollView, Modal, ImageBackground } from "react-native";
import styles from '../css/homeStyle.js'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// import img 
import territorioA from '../assets/img/territorios/territorio-a-mini.png'
import territorioC from '../assets/img/territorios/territorio-c-mini.png'
import territorioF from '../assets/img/territorios/territorio-f-mini.png'
import territorioG from '../assets/img/territorios/territorio-g-mini.png'
import territorioO from '../assets/img/territorios/territorio-o-mini.png'
import territorioX from '../assets/img/territorios/territorio-x-mini.png'
import imgModal from '../assets/img/icone/zoo.png'
import fundoModal from '../assets/img/fundo/fundo-2-mini.png'
const home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalShow, setModalShown] = useState(false);

    useEffect(() => {
        if (!modalShow) {
            setModalVisible(true);
            setModalShown(true);
        }
    }, [modalShow]);
    const fecharModal = () => {
        setModalVisible(false);
    }
    return (
        <SafeAreaView style={styles.conteiner}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.conteinerScrollView}>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioA} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioC} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioF} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioG} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioO} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.areaTerritorio}>
                        {/* View para o territorio */}
                        <View style={styles.territorio}>
                            {/* botao, futuramente troca de pagina */}
                            <Pressable>
                                <Image source={territorioX} style={styles.imgTerritorio} />
                                {/* area para o nome do territorio */}
                                <View style={styles.areaText}>
                                    <Text style={styles.nomeTerritorio}>Territorio</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
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
            <StatusBar style="auto" />
        </SafeAreaView>


    );
}
export default home;
