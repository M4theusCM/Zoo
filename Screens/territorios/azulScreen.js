// ListaPage.js
import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, Image, Modal, Pressable } from 'react-native';

const data = [
  { id: '1', nome: 'Arara-Azul', image: require('../../assets/img/animais/azul/onca-pintada.jpg'), text: 'Animal tal sla oque isso ai mesmo...' },
  { id: '2', nome: 'Tucano', image: require('../../assets/img/animais/azul/onca-pintada.jpg'), text: 'Animal tal sla oque isso ai mesmo...' },
  { id: '3', nome: 'Calau Rinoceronte', image: require('../../assets/img/animais/azul/onca-pintada.jpg'), text: 'Animal tal sla oque isso ai mesmo...' },
  { id: '4', nome: 'Pinguim-Imperador', image: require('../../assets/img/animais/azul/onca-pintada.jpg'), text: 'Animal tal sla oque isso ai mesmo...' },
  { id: '5', nome: 'Gavião-Real', image: require('../../assets/img/animais/azul/onca-pintada.jpg'), text: 'Animal tal sla oque isso ai mesmo...' },

  // Adicione mais itens conforme necessário
];

const ListItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.numberModal}>
               <Text style={styles.num}>{item.id}</Text> 
            </View>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textBtnF}>X</Text>
            </Pressable>  
          </View>
        </View>
      </Modal>
      

      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>

        <View style={styles.card}>
          <View style={styles.effeitos}>
            <View style={styles.bola1}></View>
            <View style={styles.bola2}></View>
            <View style={styles.bola3}></View>
            <View style={styles.bola4}></View>
            <View style={styles.bola5}></View>
          </View>
          <View style={styles.animal}>
            <Image source={item.image} style={styles.imagem}/>
          </View>
          <View style={styles.box}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>

      </Pressable>
        
      
     
    </View>
  );
};
const styles = StyleSheet.create({
  card:{
    width: 350,
    height: 180,
    margin: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 7,

  },
  animal:{
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 120,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 7,
  },
  imagem:{
    width: 120,
    height: 120,
  },
  box:{
    padding: 20,
    width: 180,
    height: 120,
    gap: 5,
  },
  nome:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 15,
  },
  effeitos:{
    width: 120,
    height: 100,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bola1:{
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 70,
    top: 5,
    right: 5,
    backgroundColor: '#C4EB8A',
  },
  bola2:{
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 45,
    top: 50,
    right: 5,
    backgroundColor: '#C4EB8A',
  },
  bola3:{
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 45,
    top: 5,
    right: 50,
    backgroundColor: '#C4EB8A',
  },
  bola4:{
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    top: 15,
    right: 15,
    backgroundColor: '#7DC983',
  },
  bola5:{
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 25,
    top: 60,
    right: 75,
    backgroundColor: '#C4EB8A',
  },


  // MODAL DESIGN!!!

  centeredView:{ 
    position: 'relative',
    height: '100%',
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  buttonClose:{ 
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    top: 30,          
  },

  numberModal:{
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderRadius: 80,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    top: 30, 
  },
  num:{
    fontSize: 25,
    fontWeight: 'bold', 
  },

});

const ListaVerde = () => {
  return (  
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id}
    />  
  );
};


export default ListaVerde;