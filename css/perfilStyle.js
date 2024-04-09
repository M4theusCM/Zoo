import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
    },
    voltarArea: {
        width: '100%',
        height: 100,
        paddingLeft: 30,
        display: 'flex',
        justifyContent: 'center',
    },
    iconRetornar: {
        width: 30,
        height: 30,
    },
    imgUser: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    iconUser: {
        width: 250,
        height: 250,
    },
    areaInput: {
        width: '100%',
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    inputArea: {
        width: '80%'
    },
    input: {
        width: '100%',
        height: 40,
        fontSize: 22,
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black'
    },
    label: {
        fontSize: 27,
        color: 'black'
    },
    modal: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    cardModal: {
        width: '70%',
        height: '20%',
        borderRadius: 20,
        backgroundColor: '#109910',
        shadowColor: 'rgba(10, 259, 10, 1)',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
        elevation: 7,
    },
    topModal: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    textModal: {
        width: '100%',
        height: '60%',
        padding: 10,
    },
    modalTXT: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }


})
export default styles;