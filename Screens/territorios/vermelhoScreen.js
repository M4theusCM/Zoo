import { SafeAreaView, ScrollView, View , Text, Image} from "react-native";
import styles from "../../css/territoriosStyles/vermelhoStyle";
import onca_pintada from "../../assets/img/animais/azul/onca-pintada.jpg"
const Vermelho = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <Text style={styles.titleNav}>Territorio Vermelho</Text>
                    <View style={styles.navColor}>
                    </View>
                </View>
                <View style={styles.areaAnimais}>
                    <View style={styles.cardAnimais}>
                        <View style={styles.efeitoEsquerda}>
                        </View>
                        <View style={styles.imgAnimalArea}>
                            <Image source={onca_pintada} style={styles.imgAnimal}/>
                        </View>
                        <View style={styles.descAnimal}>
                            <Text style={styles.nomeAnimal}>Onça-pintada</Text>
                            <Text style={styles.descAnimalText}>O Jorgin é uma Onça-pintada de 20 anos</Text>
                        </View>
                        <View style={styles.efeitoDireita}></View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Vermelho;