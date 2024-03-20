import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7392FF',
    },
    scrollView:{
        flex: 1,
        width: '100%',
    },
    conteinerScrollView:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
        height: '100%',
    },
    areaTerritorio:{
        flex: 1,
        height: 202, //1,15 x 176 da view
        alignItems: 'center',
        justifyContent: 'center',
    },
    territorio:{
        backgroundColor: '#000',
        width: 371,
        height: 176,
        borderRadius: 15,
    },
    imgTerritorio:{
        width: 371,
        height: 176,
        borderRadius: 15,
        position: 'absolute',
    },
    areaText:{
        width: 371,
        height: 176,
        borderRadius: 15,
        paddingLeft: 20,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    nomeTerritorio:{
        color: '#fff',
        fontSize: 20,
    },

    conteinerModal:{
        flex: 1,
        width: '100%',
        backgroundColor:'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalComponente:{
        width: 325,
        height: 603,
        backgroundColor:"#009900",
        borderRadius: 15,
    },
    topoModal:{
        flex: 0.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaTextApresentacao:{
        flex: 1.75,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: "7%",
        paddingRight: "7%"
    },
    fecharModalZoo:{
        flex: 0.75,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    h1:{
        color: '#fff',
        fontSize: 33,
    },
    txtApresentacao:{
        color: '#fff',
        fontSize: 23,
        textAlign:"center",
    },
    imgMOdal:{
        width:127 ,
        height:127 ,
    },
    fundoModal:{
        width: 325,
        height: 603,
        borderRadius: 15,
        position:  'absolute',
    },
    mascaraModal:{
        width: 325,
        height: 603,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
});
export default styles;