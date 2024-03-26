import react from "react"
import { View, Text, ImageBackground, Image, Pressable } from "react-native"
import styles from "../css/welcomeStyle"
import imgModal from '../assets/img/icone/zoo.png'
import fundo from '../assets/img/fundo/fundo-2-mini.png'
const WelcomeScreen = () =>{
    return(
        <View style={styles.conteiner}>
            <View style={styles.areaWelcome}>
                <Image style={styles.fundoCard} source={fundo}/>
                <View style={styles.mascCard}>
                    <View style={styles.topoCard}>
                        <Text style={styles.titulo}>Bem-vindo</Text>
                    </View>
                    <View style={styles.conteudoCard}>
                        <Text style={styles.txtApresentacao}>Este é o ZooKids, um app voltado a informações dos animais do Zoológico de São Paulo, Para isso, dividimos os animais em territorios</Text>
                        <Text style={styles.txtApresentacao}> Mas antes de explorar, tenho uma pergunta: Você está pronto para essa aventura?</Text>
                    </View>
                    <View style={styles.contCard}>
                        <Pressable>
                            <Image source={imgModal} style={styles.imgModal}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default WelcomeScreen;