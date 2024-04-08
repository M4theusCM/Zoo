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
  import styles from "../../css/territoriosStyles/roxoStyle";
  import { useNavigation } from "@react-navigation/native";
  import retomar from "../../assets/img/icone/retornar.png";
  import { useState } from "react";
  
  const animais = [
    {
      id: "1",
      nome: "Rinoceronte",
      image: require("../../assets/img/animais/roxo/rinoceronte.jpg"),
      nomeCientifico: "Rhinocerotidae",
      peso: "1.5 toneladas - 3.5 toneladas",
      altura: "1.4 m - 1.8 m",
      expectativaDeVida: "35 - 50 anos",
      especie: "Mamíferos",
      descricao: "O rinoceronte é um dos maiores mamíferos terrestres e é reconhecido por seu grande chifre nasal. Encontrado principalmente na África e na Ásia, é um animal icônico e uma espécie ameaçada devido à caça furtiva e à perda de habitat.",
    },
    {
      id: "2",
      nome: "Girafa",
      image: require("../../assets/img/animais/roxo/girafa.webp"),
      nomeCientifico: "Giraffa camelopardalis",
      peso: "800 kg - 1.2 toneladas",
      altura: "4.6 m - 5.5 m",
      expectativaDeVida: "20 - 25 anos",
      especie: "Mamíferos",
      descricao: "A girafa é o animal terrestre mais alto e é reconhecida por seu longo pescoço e pernas. Encontrada em savanas africanas, a girafa se alimenta principalmente de folhas de acácia. É uma das espécies mais icônicas da África.",
    },
    {
      id: "3",
      nome: "Leão",
      image: require("../../assets/img/animais/roxo/leao.jpg"),
      nomeCientifico: "Panthera leo",
      peso: "150 kg - 250 kg",
      altura: "1.2 m - 1.4 m",
      expectativaDeVida: "10 - 14 anos",
      especie: "Mamíferos",
      descricao: "O leão é um dos maiores felinos do mundo e é conhecido por sua juba nos machos. Encontrado em diversas áreas da África, o leão vive em grupos sociais chamados de 'orgulhos'. É o símbolo da majestade e da força na savana africana.",
    },
    {
      id: "4",
      nome: "Hipopótamo",
      image: require("../../assets/img/animais/roxo/hipopotamo.jpeg"),
      nomeCientifico: "Hippopotamus amphibius",
      peso: "1.5 toneladas - 3.2 toneladas",
      altura: "1.5 m - 1.65 m",
      expectativaDeVida: "40 - 50 anos",
      especie: "Mamíferos",
      descricao: "O hipopótamo é um mamífero semiaquático encontrado em rios e lagos da África subsaariana. Apesar de sua aparência dócil, o hipopótamo é considerado um dos animais mais perigosos da África devido à sua agressividade territorial.",
    },
    {
      id: "5",
      nome: "Tigre-de-bengala-branco",
      image: require("../../assets/img/animais/roxo/tigre-de-bengala-branco.webp"),
      nomeCientifico: "Panthera tigris",
      peso: "180 kg - 258 kg",
      altura: "0.9 m - 1.1 m",
      expectativaDeVida: "8 - 10 anos",
      especie: "Mamíferos",
      descricao: "O tigre-de-bengala-branco é uma variante do tigre-de-bengala comum, conhecida por sua pelagem branca. Encontrado principalmente na Índia, é uma das criaturas mais magníficas e ameaçadas do mundo.",
    },
    {
      id: "6",
      nome: "Zebra",
      image: require("../../assets/img/animais/roxo/zebra.webp"),
      nomeCientifico: "Equus zebra",
      peso: "200 kg - 450 kg",
      altura: "1.2 m - 1.5 m",
      expectativaDeVida: "20 - 30 anos",
      especie: "Mamíferos",
      descricao: "A zebra é conhecida por suas listras únicas e é encontrada em diversas regiões da África. Essas listras são uma adaptação ao ambiente que serve para camuflagem e para repelir insetos. As zebras vivem em grupos chamados de 'manadas'.",
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
  
  const Roxo = () => {
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
            <Text style={styles.titleNav}>Territorio Roxo</Text>
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
  export default Roxo;
  