const { StyleSheet } = require("react-native");
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    nav:{
        width: '100%',
        height: 180,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navColor:{
        width:'85%',
        height: 25,
        borderRadius: 20,
        backgroundColor:'#007099',
    },
    titleNav:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007099',
    },
    areaAnimais:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardAnimais:{
        width: '85%',
        height: 150,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#007099',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    efeitoEsquerda:{
        width: '15%',
        height: '100%',
    },
    imgAnimalArea:{
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgAnimal :{
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    descAnimal:{
        width: '45%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nomeAnimal:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    descAnimalText:{
        fontFamily: '24',
        textAlign: 'center',
    }
})
export default styles;