import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Mover para a parte inferior
    paddingHorizontal: 20, // Adicionar espaço nas laterais
    marginBottom: 5, // Adicionar margem inferior
  },
  bottomIcon: {
    width: 30, // Ajuste conforme necessário
    height: 30, // Ajuste conforme necessário
  },
  textIcons: {
    fontSize: 12,
    //fontWeight: 'bold',
    color: '#000000',
    justifyContent: 'space-between',
  },
  bottomIconContainer: {
    alignItems: 'center', // Centralizar itens horizontalmente
  },
});
