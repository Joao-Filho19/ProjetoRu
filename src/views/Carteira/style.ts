import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerTitulo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#afefa2',
    width: '80%',
    borderRadius: 3,
    height: 80,
    padding: 10,
  },
  containerTex: {
    alignItems: 'center',
  },
  textAlert: {
    color: 'red',
    fontSize: 16,
  },
  textoNormal: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  bordaUpload: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '70%',
    borderWidth: 0.1,
    borderColor: '#827F7F',
    borderStyle: 'solid',
    elevation: 1,
  },
  imgIcon: {
    marginBottom: 10,
  },
  imgLogo: {
    height: 41,
    width: 45,
    resizeMode: 'contain',
  },
});
