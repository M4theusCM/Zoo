import react from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar, Image, Pressable } from "react-native";
import styles from "../css/homeStyle2";
import config from "../assets/img/icone/config.png";
import logo from "../assets/img/icone/ZooKids.png";
import icon from "../assets/img/icone/icon.png";
const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <View style={styles.topNav}>
                        <View style={styles.logoNav}>
                            <Image source={icon} style={styles.iconImg} />
                            <Image source={logo} style={styles.logoImg} />
                        </View>
                        <View style={styles.confNav}>
                            <Pressable>
                                <Image source={config} style={styles.configImg} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.bottomNav}>
                        <Text style={styles.nameUser}>Flavin do Grau</Text>
                    </View>
                </View>

                <View style={styles.territorios}>

                    <View style={styles.territorioAzul}>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                    </View>

                    <View style={styles.territorioVermelho}>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                    </View>

                    <View style={styles.territorioVerde}>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                    </View>

                    <View style={styles.territorioRoxo}>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                    </View>

                    <View style={styles.territorioMarrom}>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                    </View>

                    <View style={styles.territorioRosa}>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                    </View>

                    <View style={styles.areaDino}>
                        <View style={styles.iconTerritorio}>
                            <Text>icon</Text>
                        </View>
                        <View style={styles.titleTeritorio}>
                            <Text style={styles.nameTerritorio}>aaa</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>


    );
}
export default HomeScreen;