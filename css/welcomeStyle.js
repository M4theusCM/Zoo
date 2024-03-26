import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7392FF',
    },
    areaWelcome:{
        width: 325,
        height: 603,
        backgroundColor:"#209950",
        borderRadius: 15,
    },
    fundoCard:{
        width: 325,
        height: 603,
        borderRadius: 15,
        position:'absolute',
        flex: 1,
    },
    topoCard:{
        width: '100%',
        flex: 0.6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titulo:{
        textAlign: 'center',
        fontSize: 32,
        // fontWeight: 600, 
        color: '#fff'
    },
    conteudoCard:{
        width: '100%',
        flex: 1.2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    txtApresentacao:{
        fontSize: 23,
        color: '#ffffff',
        textAlign: 'center'
    },
    contCard:{
        width: '100%',
        flex: 0.8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    imgFundo:{
        width: 127,
        height: 127,
    },
    mascCard:{
        width: 325,
        height: 603,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
});
export default styles;