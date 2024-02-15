import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 32,
    paddingTop: 25,
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingStart: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 15,
  },
  description: {
    fontSize: 15,
    color: '#808080',
    width: '95%',
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
    marginBottom: 50,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 23,
    borderWidth: 1,
    borderColor: 'black',
  },

  resendCode: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 70,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 30,
  },
  validateButton: {
    backgroundColor: '#37A433',
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 70,
  },
  validateButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
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
  inputCod: {
    // flex: 1,
    // justifyContent: 'center',
  },
});
