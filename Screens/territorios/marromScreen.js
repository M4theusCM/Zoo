import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    Pressable,
    Modal,
  } from "react-native";
  import styles from "../../css/territoriosStyles/marromStyle";
  import { useNavigation } from "@react-navigation/native";
  import retomar from "../../assets/img/icone/retornar.png";
  import { useState } from "react";
  
  const animais = [
    {
      id: "1",
      nome: "Condor-dos-andes",
      image: require("../../assets/img/animais/marrom/condor-dos-andes.jpg"),
      nomeCientifico: "Vultur gryphus",
      peso: "11 kg - 15 kg",
      altura: "1.2 m - 1.4 m",
      expectativaDeVida: "50 - 70 anos",
      especie: "Aves",
      descricao: "O condor-dos-andes é uma das maiores aves de rapina do mundo e é nativo das cordilheiras da América do Sul. Conhecido por sua envergadura impressionante, é símbolo de liberdade e força nas culturas andinas.",
    },
    {
      id: "2",
      nome: "Gavião-pega-macaco",
      image: require("../../assets/img/animais/marrom/gaviao-pega-macaco.jpg"),
      nomeCientifico: "Spizaetus tyrannus",
      peso: "1.2 kg - 1.6 kg",
      altura: "55 cm - 65 cm",
      expectativaDeVida: "25 - 30 anos",
      especie: "Aves",
      descricao: "O gavião-pega-macaco é uma espécie de gavião encontrada em florestas tropicais da América do Sul. Seu nome deriva de sua habilidade de caçar macacos, sendo uma das aves de rapina mais temidas da região.",
    },
    {
      id: "3",
      nome: "Coruja suindara",
      image: require("../../assets/img/animais/marrom/coruja-suindara.jpg"),
      nomeCientifico: "Tyto furcata",
      peso: "350 g - 450 g",
      altura: "35 cm - 45 cm",
      expectativaDeVida: "15 - 20 anos",
      especie: "Aves",
      descricao: "A coruja suindara é uma das corujas mais comuns e amplamente distribuídas das Américas. Reconhecida por sua face em formato de coração e por sua vocalização característica durante a noite.",
    },
    {
      id: "4",
      nome: "Gavião-de-penacho",
      image: require("../../assets/img/animais/marrom/gaviao-de-penacho.jpg"),
      nomeCientifico: "Spizaetus ornatus",
      peso: "1.3 kg - 1.8 kg",
      altura: "50 cm - 60 cm",
      expectativaDeVida: "20 - 25 anos",
      especie: "Aves",
      descricao: "O gavião-de-penacho é uma espécie de gavião encontrada em florestas tropicais da América do Sul. Seu nome deriva de sua crista distintiva na cabeça. É um predador ágil e importante para o equilíbrio dos ecossistemas.",
    },
  ];
  const ListaItem = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
  
  
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClone={() => {
            Alert.Alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView style={styles.scrollView}>
            <View style={styles.modalArea}>
              <View style={styles.topModal}>
                <View style={styles.controlerTop}>
                  <View style={styles.idModal}>
                    <View style={styles.idModalDestaque}><Text style={styles.id}>{item.id}</Text></View>
                  </View>
                  <View style={styles.voltarModal}>
                    <Pressable onPress={() => setModalVisible(false)}>
                      <Image source={retomar} style={styles.voltar} />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.imgAnimal}>
                  <Image source={item.image} style={styles.imgCard} />
                </View>
              </View>
              <View style={styles.areaInfo}>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Nome Popular: </Text>
                  <Text style={styles.descInfo}>{item.nome}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Nome Cientifico:</Text>
                  <Text style={styles.descInfo}>{item.nomeCientifico}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Altura: </Text>
                  <Text style={styles.descInfo}>{item.altura}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Peso: </Text>
                  <Text style={styles.descInfo}>{item.peso}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Especie</Text>
                  <Text style={styles.descInfo}>{item.especie}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Expectativa de Vida</Text>
                  <Text style={styles.descInfo}>{item.expectativaDeVida}</Text>
                </View>
                <View style={styles.areaInfoInicio}>
                  <Text style={styles.tituloInfo}>Descrição</Text>
                  <Text style={styles.descInfo}>{item.descricao}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.card}>
            <View style={styles.animal}>
              <Image source={item.image} style={styles.imagem} />
            </View>
            <View style={styles.box}>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
          </View>
        </Pressable>
      </View>
  
  
  
    );
  };
  
  const Marrom = () => {
    const navigation = useNavigation();
    function voltar() {
      navigation.navigate("Home");
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.nav}>
            <View style={styles.top}>
              <Pressable onPress={voltar}>
                <Image source={retomar} style={styles.voltar} />
              </Pressable>
            </View>
            <Text style={styles.titleNav}>Territorio Marrom</Text>
            <View style={styles.navColor}></View>
          </View>
          <View style={styles.areaAnimais}>
            <FlatList
              data={animais}
              renderItem={({ item }) => <ListaItem item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default Marrom;
  