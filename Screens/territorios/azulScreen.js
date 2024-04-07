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
import styles from "../../css/territoriosStyles/azulStyle";
import { useNavigation } from "@react-navigation/native";
import retomar from "../../assets/img/icone/retornar.png";
import { useState } from "react";

const animais = [
  {
    id: "1",
    nome: "Arara-Azul",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Anodorhynchus hyacinthinus",
    peso: "2.5 kg - 3 kg",
    altura: "90c cm - 1 m",
    expectativaDeVida: "50 anos",
    especie: "Aves",
    descricao: "A arara-azul é uma das aves mais icônicas e raras da América do Sul. Conhecida por sua plumagem azul intensa e seu tamanho imponente, é um símbolo da biodiversidade da floresta amazônica.",
  },
  {
    id: "2",
    nome: "Mico-leão-dourado",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Leontopithecus rosalia",
    peso: "600 g - 700 g",
    altura: "20 cm - 35 cm",
    expectativaDeVida: "15 anos",
    especie: "Mamíferos",
    descricao: "O mico-leão-dourado é uma espécie de primata endêmica da Mata Atlântica brasileira. Sua pelagem dourada e sua pequena estatura o tornam uma espécie única e bastante ameaçada de extinção.",
  },
  {
    id: "3",
    nome: "Arara-militar",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Ara militaris",
    peso: "1 kg - 1.5 kg",
    altura: "70 cm - 80 cm",
    expectativaDeVida: "50 anos",
    especie: "Aves",
    descricao: "A arara-militar é uma espécie de arara encontrada em partes da América Central e do Sul. Suas plumagens vibrantes e sua vocalização alta a tornam uma presença marcante nas florestas tropicais.",
  },
  {
    id: "4",
    nome: "Tucano toco",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Ramphastos toco",
    peso: "500 g - 600 g",
    altura: "55 cm - 65 cm",
    expectativaDeVida: "20 anos",
    especie: "Aves",
    descricao: "O tucano toco é conhecido por seu grande bico laranja e sua plumagem preta e branca. É encontrado em várias partes da América do Sul e é símbolo de muitas campanhas de conservação.",
  },
  {
    id: "5",
    nome: "Flamingo chileno",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Phoenicopterus chilensis",
    peso: "2 kg - 3 kg",
    altura: "90 cm - 120 cm",
    expectativaDeVida: "40 anos",
    especie: "Aves",
    descricao: "O flamingo chileno é uma espécie de flamingo encontrado na América do Sul. Suas plumagens rosadas distintivas e seus hábitos de alimentação em grupo o tornam uma visão impressionante nas salinas e lagunas.",
  },
  {
    id: "6",
    nome: "Lagarto teiú",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Tupinambis teguixin",
    peso: "2 kg - 4 kg",
    altura: "80 cm - 1 m",
    expectativaDeVida: "20 anos",
    especie: "Répteis",
    descricao: "O lagarto teiú é uma espécie de lagarto encontrado em várias partes da América do Sul. É conhecido por sua língua bifurcada e seu comportamento omnívoro, alimentando-se de frutas, insetos e pequenos vertebrados.",
  },
  {
    id: "7",
    nome: "Jabuti",
    image: require("../../assets/img/animais/vermelho/arara-azul.jpg"),
    imageIcone: require("../../assets/img/animais/vermelho/arara-azul-icone.jpg"),
    nomeCientifico: "Chelonoidis carbonaria",
    peso: "5 kg - 10 kg",
    altura: "25 cm - 30 cm",
    expectativaDeVida: "80 anos",
    especie: "Répteis",
    descricao: "O jabuti é uma espécie de tartaruga terrestre encontrada em diversas regiões da América do Sul. Sua carapaça convexa e seu casco robusto o protegem de predadores naturais, e sua longevidade é impressionante.",
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
            <Image source={item.imageIcone} style={styles.imagem} />
          </View>
          <View style={styles.box}>
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        </View>
      </Pressable>
    </View>



  );
};

const Azul = () => {
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
          <Text style={styles.titleNav}>Territorio Azul</Text>
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
export default Azul;
