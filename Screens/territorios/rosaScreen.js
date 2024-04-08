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
  import styles from "../../css/territoriosStyles/rosaStyle";
  import { useNavigation } from "@react-navigation/native";
  import retomar from "../../assets/img/icone/retornar.png";
  import { useState } from "react";
  
  const animais = [
    {
      id: "1",
      nome: "Pelicano-rosa",
      image: require("../../assets/img/animais/rosa/pelicano-rosa.jpg"),
      nomeCientifico: "Pelecanus onocrotalus",
      peso: "9 kg - 12 kg",
      altura: "1.6 m - 1.8 m",
      expectativaDeVida: "25 - 30 anos",
      especie: "Aves",
      descricao: "O pelicano-rosa é uma espécie de pelicano encontrado em áreas úmidas da África, Europa e Ásia. Reconhecido por sua plumagem rosada e sua bolsa gular, é um nadador habilidoso e um mergulhador competente em busca de peixes.",
    },
    {
      id: "2",
      nome: "Cisne-negro",
      image: require("../../assets/img/animais/rosa/cisne-negro.jpg"),
      nomeCientifico: "Cygnus atratus",
      peso: "5 kg - 9 kg",
      altura: "1.1 m - 1.4 m",
      expectativaDeVida: "10 - 20 anos",
      especie: "Aves",
      descricao: "O cisne-negro é uma espécie de cisne encontrada na Austrália e Nova Zelândia. Reconhecido por sua plumagem preta e seu pescoço longo, é símbolo de elegância e beleza na avifauna.",
    },
    {
      id: "3",
      nome: "Ganso-do-egito",
      image: require("../../assets/img/animais/rosa/ganso-do-egito.webp"),
      nomeCientifico: "Alopochen aegyptiaca",
      peso: "2.5 kg - 4.5 kg",
      altura: "0.7 m - 1 m",
      expectativaDeVida: "15 - 20 anos",
      especie: "Aves",
      descricao: "O ganso-do-egito é uma espécie de ganso originária do Vale do Nilo, no Egito. Introduzido em outras partes do mundo, é conhecido por sua plumagem marrom-clara e por sua vocalização alta.",
    },
    {
      id: "4",
      nome: "Macaco-preto-de-testa-branca",
      image: require("../../assets/img/animais/rosa/macaco-preto-de-testa-branca.jpg"),
      nomeCientifico: "Sapajus nigritus",
      peso: "2.5 kg - 5 kg",
      altura: "40 cm - 50 cm",
      expectativaDeVida: "20 - 25 anos",
      especie: "Mamíferos",
      descricao: "O macaco-preto-de-testa-branca é uma espécie de macaco encontrado em regiões de mata atlântica do Brasil. Reconhecido por sua pelagem escura e pela faixa branca na testa, é ágil e adaptável a diferentes ambientes.",
    },
    {
      id: "5",
      nome: "Macaco-prego-galego",
      image: require("../../assets/img/animais/rosa/macaco-prego-galego.webp"),
      nomeCientifico: "Cebus flavius",
      peso: "1.5 kg - 2.5 kg",
      altura: "35 cm - 45 cm",
      expectativaDeVida: "15 - 20 anos",
      especie: "Mamíferos",
      descricao: "O macaco-prego-galego é uma espécie de macaco-prego endêmica do Nordeste do Brasil. Reconhecido por sua pelagem marrom-avermelhada e pelo tufo de pelos na cabeça, é ágil e social.",
    },
    {
      id: "6",
      nome: "Lontra",
      image: require("../../assets/img/animais/rosa/lontra.webp"),
      nomeCientifico: "Lontra longicaudis",
      peso: "5 kg - 15 kg",
      altura: "60 cm - 90 cm",
      expectativaDeVida: "10 - 15 anos",
      especie: "Mamíferos",
      descricao: "A lontra é um mamífero semiaquático encontrado em rios e lagos da América do Sul. Reconhecida por sua agilidade na água e sua pelagem densa e impermeável, é um predador eficaz de peixes e crustáceos.",
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
  
  const Rosa = () => {
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
            <Text style={styles.titleNav}>Territorio Rosa</Text>
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
  export default Rosa;
  