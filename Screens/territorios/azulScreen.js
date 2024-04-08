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
    nome: "Onça-pintada",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    nomeCientifico: "Panthera onca",
    peso: "50 kg - 100 kg",
    altura: "60 cm - 75 cm",
    expectativaDeVida: "12 - 15 anos",
    especie: "Mamíferos",
    descricao: "A onça-pintada é o maior felino das Américas e uma das espécies mais emblemáticas da fauna brasileira. Sua pelagem amarela com manchas pretas a torna uma predadora eficiente na selva.",
  },
  {
    id: "2",
    nome: "Jacaré-de-papo-amarelo",
    image: require("../../assets/img/animais/azul/jacare-de-papo-amarelo.jpg"),
    nomeCientifico: "Caiman latirostris",
    peso: "100 kg - 150 kg",
    altura: "1,5 m - 2,5 m",
    expectativaDeVida: "50 anos",
    especie: "Répteis",
    descricao: "O jacaré-de-papo-amarelo é um réptil encontrado em regiões da América do Sul, principalmente no Brasil. Sua mandíbula forte e sua pele escamosa o tornam um predador temido nos rios e pântanos.",
  },
  {
    id: "3",
    nome: "Onça-parda",
    image: require("../../assets/img/animais/azul/onca-parda.png"),
    nomeCientifico: "Puma concolor",
    peso: "30 kg - 80 kg",
    altura: "60 cm - 70 cm",
    expectativaDeVida: "8 - 13 anos",
    especie: "Mamíferos",
    descricao: "A onça-parda, também conhecida como suçuarana, é um felino nativo das Américas. Sua habilidade de caça e sua agilidade a tornam uma predadora eficiente em diferentes habitats.",
  },
  {
    id: "4",
    nome: "Anta",
    image: require("../../assets/img/animais/azul/anta.jpg"),
    nomeCientifico: "Tapirus terrestris",
    peso: "150 kg - 300 kg",
    altura: "1,0 m - 1,2 m",
    expectativaDeVida: "30 anos",
    especie: "Mamíferos",
    descricao: "A anta é o maior mamífero terrestre da América do Sul. Sua tromba flexível e sua natureza pacífica a tornam um animal único nas florestas tropicais e alagadiças.",
  },
  {
    id: "5",
    nome: "Elefante",
    image: require("../../assets/img/animais/azul/elefante.webp"),
    nomeCientifico: "Loxodonta africana",
    peso: "4.000 kg - 7.000 kg",
    altura: "2,5 m - 3,5 m",
    expectativaDeVida: "60 - 70 anos",
    especie: "Mamíferos",
    descricao: "O elefante é o maior mamífero terrestre do mundo. Sua tromba, orelhas grandes e presas de marfim são características marcantes. São animais sociais e inteligentes, encontrados em diferentes habitats da África e Ásia.",
  },
  {
    id: "6",
    nome: "Tamanduá-mirim",
    image: require("../../assets/img/animais/azul/tamandua-mirim.jpg"),
    nomeCientifico: "Tamandua tetradactyla",
    peso: "3 kg - 6 kg",
    altura: "30 cm - 40 cm",
    expectativaDeVida: "9 - 12 anos",
    especie: "Mamíferos",
    descricao: "O tamanduá-mirim é uma espécie de tamanduá encontrada em várias regiões da América do Sul. Se alimenta principalmente de formigas e cupins, utilizando sua língua longa e pegajosa para capturá-los.",
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
