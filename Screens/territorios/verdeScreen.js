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
  import styles from "../../css/territoriosStyles/verdeStyle";
  import { useNavigation } from "@react-navigation/native";
  import retomar from "../../assets/img/icone/retornar.png";
  import { useState } from "react";
  
  const animais = [
    {
      id: "1",
      nome: "Urso-de-óculos",
      image: require("../../assets/img/animais/verde/urso-de-oculos.jpg"),
      nomeCientifico: "Tremarctos ornatus",
      peso: "60 kg - 180 kg",
      altura: "1,2 m - 1,5 m",
      expectativaDeVida: "20 - 30 anos",
      especie: "Mamíferos",
      descricao: "O urso-de-óculos é um urso sul-americano encontrado em florestas andinas. Seu distintivo 'óculos' brancos ao redor dos olhos o tornam facilmente reconhecível. É uma espécie vulnerável devido à perda de habitat e à caça ilegal.",
    },
    {
      id: "2",
      nome: "Tamanduá-bandeira",
      image: require("../../assets/img/animais/verde/tamandua-bandeira.webp"),
      nomeCientifico: "Myrmecophaga tridactyla",
      peso: "22 kg - 40 kg",
      altura: "1,8 m - 2,2 m",
      expectativaDeVida: "10 - 15 anos",
      especie: "Mamíferos",
      descricao: "O tamanduá-bandeira é o maior tamanduá e um dos maiores animais terrestres das Américas. Sua língua longa e pegajosa é ideal para capturar formigas e cupins. São encontrados em habitats variados, desde florestas até cerrados.",
    },
    {
      id: "3",
      nome: "Veado-catingueiro",
      image: require("../../assets/img/animais/verde/veado-catingueiro.jpg"),
      nomeCientifico: "Mazama gouazoubira",
      peso: "20 kg - 40 kg",
      altura: "60 cm - 80 cm",
      expectativaDeVida: "10 - 15 anos",
      especie: "Mamíferos",
      descricao: "O veado-catingueiro é uma espécie de cervídeo encontrada em diversas regiões da América do Sul. Seu tamanho médio e suas galhadas curtas o distinguem de outras espécies de veados. Habitam áreas de cerrado e caatinga.",
    },
    {
      id: "4",
      nome: "Raposinha-do-campo",
      image: require("../../assets/img/animais/verde/raposinha-do-campo.jpeg"),
      nomeCientifico: "Lycalopex vetulus",
      peso: "1,5 kg - 3,5 kg",
      altura: "20 cm - 30 cm",
      expectativaDeVida: "5 - 7 anos",
      especie: "Mamíferos",
      descricao: "A raposinha-do-campo, também conhecida como graxaim-do-campo, é um pequeno canídeo encontrado em campos e cerrados do Brasil central. Sua pelagem acinzentada e suas orelhas grandes a tornam facilmente identificável.",
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
  
  const Verde = () => {
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
            <Text style={styles.titleNav}>Territorio Verde</Text>
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
  export default Verde;
  