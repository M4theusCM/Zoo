import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    fundo:{
        width: '100%',
        height: '100%',
    },
    logo:{
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    logoImg:{
        width: 274,
        height: 75,
    },
    apresentacao:{
        flex: 0.5,
        width: '100%',
        alignItems: 'center',
    },
    h1:{
        color:"#fff",
        fontSize: 30,
    },
    txt:{
        marginLeft:'6%',
        marginRight: '6%',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    areaInput:{
        flex: 1,
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
   },
   label:{
    color: '#fff',
    fontSize: 20,
    marginTop:'5%',
   },
   input:{
    color: '#fff',
    width: '100%',
    height: '15%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingLeft: 5,
   },
   areaLogin:{
    flex: 1,
    width:'100%',
    alignItems: 'center',
   },
   loginImg:{
    width: 134,
    height: 123,
   },
   alterar:{
    color: '#fff',
    fontSize: 18,
    marginTop: '2%',
   }

});
export default styles;