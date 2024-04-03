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
    top:{
        width: '100%',
        heigth: 40,
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 30,
    },
    voltar:{
        width: 30,
        height:30,
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
        paddingLeft: 40,
        paddingRight: 40,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardAnimais:{
        width: '100%',
        height: 150,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#007099',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    imgAnimalArea:{
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgAnimal :{
        width: 120,
        height: 119,
        borderRadius: 60,
    },
    descAnimal:{
        width: '60%',
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
    modalContainer:{
        backgroundColor: '#007099',
        flex: 1,
        width: '100%'
    }
})
export default styles;