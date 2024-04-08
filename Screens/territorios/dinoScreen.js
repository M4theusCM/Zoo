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
  import styles from "../../css/territoriosStyles/dinoStyle";
  import { useNavigation } from "@react-navigation/native";
  import retomar from "../../assets/img/icone/retornar.png";
  import { useState } from "react";
  
  const animais = [
    {
      id: "1",
      nome: "Tiranossauro Rex",
      image: require("../../assets/img/animais/dino/tiranossauro_rex.avif"),
      nomeCientifico: "Tyrannosaurus rex",
      peso: "8 toneladas - 14 toneladas",
      altura: "4 m - 6 m",
      periodo: "Cretáceo",
      especie: "Saurischia",
      descricao: "O Tiranossauro Rex é um dos dinossauros mais famosos e temidos do período Cretáceo. Reconhecido por seus grandes dentes serrilhados, era um predador ágil e poderoso que dominava sua cadeia alimentar.",
    },
    {
      id: "2",
      nome: "Triceratops",
      image: require("../../assets/img/animais/dino/triceratops.webp"),
      nomeCientifico: "Triceratops horridus",
      peso: "6 toneladas - 12 toneladas",
      altura: "3 m - 3.5 m",
      periodo: "Cretáceo",
      especie: "Ornithischia",
      descricao: "O Triceratops é um dinossauro herbívoro com três chifres distintivos em seu crânio. Viveu durante o final do período Cretáceo e é conhecido por sua defesa contra predadores, como o Tiranossauro Rex.",
    },
    {
      id: "3",
      nome: "Velociraptor",
      image: require("../../assets/img/animais/dino/velociraptor.jpg"),
      nomeCientifico: "Velociraptor mongoliensis",
      peso: "15 kg - 25 kg",
      altura: "0.5 m - 0.6 m",
      periodo: "Cretáceo",
      especie: "Saurischia",
      descricao: "O Velociraptor é um dinossauro terópode conhecido por sua agilidade e inteligência. Viveu durante o período Cretáceo e era um predador ágil que caçava em grupos, usando suas garras afiadas para atacar suas presas.",
    },
    {
      id: "4",
      nome: "Estegossauro",
      image: require("../../assets/img/animais/dino/estegossauro.jpg"),
      nomeCientifico: "Stegosaurus stenops",
      peso: "2 toneladas - 5 toneladas",
      altura: "2 m - 2.5 m",
      periodo: "Jurássico",
      especie: "Ornithischia",
      descricao: "O Estegossauro é um dinossauro herbívoro reconhecido por suas placas ósseas e espinhos distintivos ao longo de seu dorso. Viveu durante o período Jurássico e possuía um pequeno cérebro em relação ao seu tamanho corporal.",
    },
    {
      id: "5",
      nome: "Diplodoco",
      image: require("../../assets/img/animais/dino/diplodoco.jpg"),
      nomeCientifico: "Diplodocus carnegii",
      peso: "10 toneladas - 16 toneladas",
      altura: "4 m - 5 m (ao nível dos ombros)",
      periodo: "Jurássico Superior",
      especie: "Saurischia",
      descricao: "O Diplodoco é um dos maiores dinossauros herbívoros conhecidos, com um pescoço longo e uma cauda igualmente longa. Viveu durante o período Jurássico Superior e se alimentava principalmente de plantas.",
    },
    {
      id: "6",
      nome: "Pterossauro",
      image: require("../../assets/img/animais/dino/pterossauro.webp"),
      nomeCientifico: "Pterosauria",
      peso: "1 kg - 250 kg",
      altura: "0.3 m - 2.5 m",
      periodo: "Mesozoico",
      especie: "Pterosauria",
      descricao: "Os Pterossauros são répteis voadores que viveram durante o período Mesozoico. Eles não eram dinossauros, mas sim um grupo distinto de répteis voadores. Tinham asas membranosas que lhes permitiam voar e planar pelos céus pré-históricos.",
    }
    
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
                  <Text style={styles.tituloInfo}>Periodo em que Viveu</Text>
                  <Text style={styles.descInfo}>{item.periodo}</Text>
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
  
  const Dino = () => {
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
            <Text style={styles.titleNav}>DinoKids</Text>
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
  export default Dino;
  