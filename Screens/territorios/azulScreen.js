import { SafeAreaView, ScrollView, View, Text, Image, FlatList, Pressable } from "react-native";
import styles from "../../css/territoriosStyles/azulStyle";
import onca_pintada from "../../assets/img/animais/azul/onca-pintada.jpg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import retomar from '../../assets/img/icone/retornar.png'
const Azul = () =>{
    const navigation = useNavigation();
    function voltar(){
        navigation.navigate('Home')
    }
    const amimais = [
        {
            id: '1',
            title: 'Onça-pintada',
            desc: 'Uma onça-pintada mesmo, pode confiar, não estou te enganado',
            image: onca_pintada,
        },
        {
            id: '2',
            title: 'Onça-com-bolinhas',
            desc: 'Uma onça-com-bolinhas mesmo, confia, não estou te enganado',
            image: onca_pintada,
        },
        {
            id: '3',
            title: 'Onça-manchada',
            desc: 'Uma onça-manchada mesmo, pode confiar, não estou te enganado',
            image: onca_pintada,
        },
    ]
    // const navigateAnimal = (id) => {
    //     AsyncStorage.setItem('idAminal', id)
    //     navigation.navigate(Home);
    // };
    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.item} onPress={() => navigateAnimal(item.id)}>
                <View style={styles.cardAnimais}>
                    <View style={styles.efeitoEsquerda}>
                    </View>
                    <View style={styles.imgAnimalArea}>
                        <Image style={styles.imgAnimal} source={item.image} resizeMode="cover" />
                    </View>
                    <View style={styles.descAnimal}>
                        <Text style={styles.nomeAnimal}>{item.title}</Text>
                        <Text style={styles.descAnimalText}>{item.desc}</Text>
                    </View>
                    <View style={styles.efeitoDireita}></View>
                </View>
            </Pressable>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <View style={styles.top}>
                        <Pressable onPress={voltar}>
                          <Image source={retomar} style={styles.voltar}/>

                        </Pressable>
                    </View>
                    <Text style={styles.titleNav}>Territorio Azul</Text>
                    <View style={styles.navColor}>
                    </View>
                </View>
                <View style={styles.areaAnimais}>
                    <FlatList
                        data={amimais}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.flatList}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Azul;