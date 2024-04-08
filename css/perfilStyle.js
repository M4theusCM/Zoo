import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
    },
    voltarArea:{
        width: '100%',
        height: 100,
        paddingLeft: 30,
        display: 'flex',
        justifyContent: 'center',
    },
    iconRetornar:{
        width: 30,
        height: 30,
    },
    imgUser:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    iconUser:{
        width: 250,
        height: 250,
    },
    areaInput:{
        width: '100%',
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    inputArea:{
        width: '80%'
    },
    input:{
        width: '100%',
        height: 40,
        fontSize: 22,
        padding: 5,
    },
    label:{
        fontSize: 27,
        color: 'black'
    },
    

})
export default styles;