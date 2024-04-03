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
import styles from "../../css/territoriosStyles/vermelhoStyle";
import onca_pintada from "../../assets/img/animais/azul/onca-pintada.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import retomar from "../../assets/img/icone/retornar.png";
import { useState } from "react";

const animais = [
  {
    id: "1",
    nome: "Arara-Azul",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    text: "Animal tal sla oque isso ai mesmo...",
  },
  {
    id: "2",
    nome: "Tucano",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    text: "Animal tal sla oque isso ai mesmo...",
  },
  {
    id: "3",
    nome: "Calau Rinoceronte",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    text: "Animal tal sla oque isso ai mesmo...",
  },
  {
    id: "4",
    nome: "Pinguim-Imperador",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    text: "Animal tal sla oque isso ai mesmo...",
  },
  {
    id: "5",
    nome: "Gavião-Real",
    image: require("../../assets/img/animais/azul/onca-pintada.jpg"),
    text: "Animal tal sla oque isso ai mesmo...",
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
        <View style={styles.modalArea}>
          <View style={styles.topModal}>
            <View style={styles.controlerTop}>
              <View style={styles.idModal}>
              <Text>{item.id}</Text>
              </View>
              <View style={styles.voltarModal}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Image source={retomar} style={styles.voltar} />
                </Pressable>
              </View>
            </View>
          </View>
          {/* <Text>{item.id}</Text>
          <Image source={item.image}></Image>
          <Text>{item.nome}</Text> */}
        </View>
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
