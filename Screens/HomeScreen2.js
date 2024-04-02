import { View, Text, SafeAreaView, ScrollView, StatusBar, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/homeStyle2";
import config from "../assets/img/icone/config.png";
import icon from "../assets/img/icone/icon.png";
import animal_1 from "../assets/img/icone/1-icon.jpg";
import animal_2 from "../assets/img/icone/2-icon.jpg";
import animal_3 from "../assets/img/icone/3-icon.jpg";
import animal_4 from "../assets/img/icone/4-icon.jpg";
import animal_5 from "../assets/img/icone/5-icon.jpg";
import animal_6 from "../assets/img/icone/6-icon.jpg";
import animal_7 from "../assets/img/icone/7-icon.jpg";


const HomeScreen = () => {
    const navigation = useNavigation();
    const navigateAzul = () => {
        navigation.navigate('TerritorioAzul')
    }
    const navigateVermelho = () => {
        navigation.navigate('Home')
    }
    const navigateVerde = () => {
        navigation.navigate('Home')
    }
    const navigateRoxo = () => {
        navigation.navigate('Home')
    }
    const navigateMarrom = () => {
        navigation.navigate('Home')
    }
    const navigateRosa = () => {
        navigation.navigate('Home')
    }
    const navigateDinoKids = () => {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <View style={styles.topNav}>
                        <View style={styles.logoNav}>
                            <Image source={icon} style={styles.iconImg} />
                            <Text style={styles.nameUser}>Flavin do Grau</Text>
                        </View>
                        <View style={styles.confNav}>
                            <Pressable>
                                <Image source={config} style={styles.configImg} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.bottomNav}>
                    </View>
                </View>

                <View style={styles.territorios}>
      
                    <Pressable style={styles.presable} onPress={navigateAzul}>
                        <View style={styles.territorioAzul}>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_1} style={styles.iconAnimalImg} />
                            </View>
                            <View style={styles.titleTeritorio}>
                                <Text style={styles.nameTerritorio}>Azul</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateVermelho}>
                        <View style={styles.territorioVermelho}>
                            <View style={styles.titleTeritorioR}>
                                <Text style={styles.nameTerritorio}>Vermelho</Text>
                            </View>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_2} style={styles.iconAnimalImg} />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateVerde}>
                        <View style={styles.territorioVerde}>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_3} style={styles.iconAnimalImg} />
                            </View>
                            <View style={styles.titleTeritorio}>
                                <Text style={styles.nameTerritorio}>Verde</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateRoxo}>
                        <View style={styles.territorioRoxo}>
                            <View style={styles.titleTeritorioR}>
                                <Text style={styles.nameTerritorio}>Roxo</Text>
                            </View>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_4} style={styles.iconAnimalImg} />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateMarrom}>
                        <View style={styles.territorioMarrom}>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_5} style={styles.iconAnimalImg} />

                            </View>
                            <View style={styles.titleTeritorio}>
                                <Text style={styles.nameTerritorio}>Marrom</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateRosa}>
                        <View style={styles.territorioRosa}>
                            <View style={styles.titleTeritorioR}>
                                <Text style={styles.nameTerritorio}>rosa</Text>
                            </View>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_6} style={styles.iconAnimalImg} />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.presable} onPress={navigateDinoKids}>
                        <View style={styles.areaDino}>
                            <View style={styles.iconTerritorio}>
                                <Image source={animal_7} style={styles.iconAnimalImg} />

                            </View>
                            <View style={styles.titleTeritorio}>
                                <Text style={styles.nameTerritorio}>DinoKids</Text>
                            </View>
                        </View>
                    </Pressable>

                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>


    );
}
export default HomeScreen;