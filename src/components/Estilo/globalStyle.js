import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  texto: {
    fontSize: 16,
    color: '#827F7F',
  },
  campTex: {
    width: '95%',
    paddingTop: 10,
  },
  barraProgress: {
    alignItems: 'flex-start',
    paddingStart: 30,
    backgroundColor: '#fff',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  progressBarContainer: {
    backgroundColor: '#e0e0e0', // Cor base da barra de progresso
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#37A433', // Cor da barra de progresso
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    // paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    marginTop: 40,
    marginBottom: 30,
    color: '#121212',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 40,
    color: '#827F7F',
  },
  label: {
    // fontFamily: 'Inter',
    marginBottom: 5,
    fontSize: 20,
    color: '#626262',
  },
  input: {
    width: 320,
    borderWidth: 0.1,
    borderColor: '#827F7F',
    borderStyle: 'solid',
    borderRadius: 1,
    backgroundColor: 'white',
    shadowColor: '#827F7F',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
    fontSize: 18,
    color: '#827F7F',
    paddingLeft: 10,
    // paddingHorizontal: 20,
  },
  button: {
    alignSelf: 'center',
    width: '50%',
    height: 50,
    backgroundColor: '#37A433',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: -90,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  },
  input2: {
    width: 320,
    borderWidth: 0.2,
    borderRadius: 2,
    borderColor: '#827F7F',
    borderStyle: 'solid',
    backgroundColor: 'white',
    shadowColor: '#837F7F',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
    fontSize: 18,
  },
  botao: {
    marginTop: 10,
  },
});
