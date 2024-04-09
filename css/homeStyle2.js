import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    nav: {
        width: '100%',
        height: 160,
        borderBottomColor: '#007099',
        borderBottomWidth: 2,
    },
    topNav:{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    logoNav:{
        height: '100%',
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems: 'center',
        paddingLeft: '8%'
    },
    iconImg:{
        width: 75,
        height: 75,
    },
    logoImg:{
        width: 132,
        height: 40,
    },
    confNav:{
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameUser:{
        fontSize: 25,
        marginLeft: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    territorios: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
    },
    territoriosArea:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    imageCard:{
        width: 180,
        height: 180,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 20,
    },
    flatlistContainer:{
        width: 400,
        height: 'auto',
        paddingBottom: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
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
    },

    configModal:{
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    
    },
    cardModalConfig:{
        width: 315,
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    bottomConfigModal:{
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    titleConfig:{
        color: '#006499',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20
    },
    exitText:{
        color: '#991020',
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold'
    },
    textConfig:{
        color: '#000',
        fontSize: 25,
        textAlign: 'center'
    },
    areaMapa:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    nomeMapa:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom: 30,
        color: '#000'
    },
    mapa:{
        width: 400,
        height: 264,
    },
    mapaModal:{
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)'
    
    },
});

export default styles;
