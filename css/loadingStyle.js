    import { StyleSheet } from 'react-native';
    const styles =  StyleSheet.create({
        conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        imgFundo:{
            flex: 1,
            width: '100%',
            height: '100%'
        },
        top:{
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        bottom:{
            flex: 1,
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        marginTop: '20%',
    },
    txtCarregamento:{
        fontSize: 25 ,
        color: '#fff'
    },
    gifCarregamento:{
        width: '30%',
        height: '30%',
    },


})
export default styles;