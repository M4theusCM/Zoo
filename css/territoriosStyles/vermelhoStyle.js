const { StyleSheet } = require("react-native");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  nav: {
    width: "100%",
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    width: "100%",
    heigth: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 30,
  },
  voltar: {
    width: 30,
    height: 30,
  },
  navColor: {
    width: "85%",
    height: 25,
    borderRadius: 20,
    backgroundColor: "rgba(232, 2, 5, 1)",
  },
  titleNav: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgba(232, 2, 5, 1)",
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "80%",
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgba(232, 2, 5, 1)",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    shadowColor: 'rgba(232, 2, 5, .5)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 7,
  },
  animal: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
  },
  imagem: {
    width: 120,
    height: 119,
    borderRadius: 30,
    
  },
  box: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },


  modalArea:{
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(232, 2, 5, 1)'
  },
  topModal:{
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fff'
  },
  controlerTop:{
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
  },
  idModal:{
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingLeft: 30
  },
  voltarModal:{
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 30,
  }

});
export default styles;
