import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textSz: {
    marginTop: 5,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  containImg: {
    marginBottom: 55,
  },
  imgLogo: {
    height: 87,
    width: 90,
    resizeMode: 'contain',
  },
  botao: {
    backgroundColor: '#37A433',
    textAlign: 'center',
    borderRadius: 8,
    width: 245,
    alignSelf: 'center',
    marginBottom: 55,
    color: '#fff',
    padding: 10,
  },
  textBotao: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  input: {
    width: 320,
    borderWidth: 0.2,
    borderRadius: 5,
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
  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: '#37A433',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#37A433',
    borderWidth: 1,
    borderColor: 'green',
  },
  fontNormal: {
    fontSize: 16,
    color: '#827F7F',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#1400FF',
    fontSize: 16,
  },
  textSeparado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 55,
  },
  textJunto: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontMin: {
    fontSize: 16,
    color: '#626262',
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
    color: '#626262',
  },
});
