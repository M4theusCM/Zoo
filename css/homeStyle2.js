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
        height: '75%',
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
    bottomNav:{
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    nameUser:{
        fontSize: 25,
    },
    territorios: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    

});

export default styles;
