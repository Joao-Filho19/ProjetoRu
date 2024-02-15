import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  menuButton: {
    padding: 10,
  },
  lupaButton: {
    padding: 2,
  },
  profileImageContainer: {
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 8,
    marginTop: 10,
  },
  profileImage: {
    borderRadius: 90,
    overflow: 'hidden',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 15,
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    padding: 5,
    marginRight: 8,
    paddingLeft: 20,
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 25,
  },
  square: {
    width: '45%', // Ajuste conforme necessário
    height: 170, // Ajuste conforme necessário
    backgroundColor: '#ffffff', // Cor de fundo dos quadrados
    marginBottom: 20, // Espaço entre os quadrados
    borderRadius: 8, // Borda arredondada
    borderWidth: 1, // Largura da borda
    borderColor: 'black', // Cor da borda
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {width: 0, height: 2}, // Configuração do deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevação para sombra no Android
    overflow: 'hidden', // Adicione overflow hidden para que o círculo não ultrapasse os limites do quadrado
    position: 'relative', // Adicione position relative para que o position absolute no círculo funcione corretamente
  },
  greenCircle: {
    width: '65%', // Ajuste conforme necessário
    aspectRatio: 1, // Garante uma proporção 1:1 (circular)
    backgroundColor: 'rgba(0, 159, 16, 0.08)',
    borderRadius: 50, // Alterado para '50%'
    marginTop: 20, // Ajuste esse valor para mover o círculo para cima (pode ser positivo ou negativo)
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Adicione overflow hidden para que o ícone não ultrapasse os limites do círculo
  },

  circleText: {
    marginTop: 5, // Distância entre o círculo e o texto
    textAlign: 'center',
    color: '#000000', // Cor do texto
  },

  smallCircle: {
    width: 20, // Ajuste conforme necessário
    height: 20, // Ajuste conforme necessário
    backgroundColor: 'rgba(0, 159, 16, 0.08)', // Cor do círculo
    borderRadius: 50, // Deixa o círculo circular
    position: 'absolute', // Posicionamento absoluto em relação ao quadrado
    bottom: 5, // Distância da parte inferior do quadrado
    right: 5, // Distância da parte direita do quadrado
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Adicione overflow hidden para que o ícone não ultrapasse os limites do círculo
  },

  circleIcon: {
    width: '70%', // O ícone ocupará 100% da largura do círculo
    height: '70%', // O ícone ocupará 100% da altura do círculo
    resizeMode: 'contain', // Redimensionamento do ícone para caber dentro do círculo
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Mover para a parte inferior
    paddingHorizontal: 20, // Adicionar espaço nas laterais
    marginBottom: 5, // Adicionar margem inferior
  },
  bottomIcon: {
    width: 35, // Ajuste conforme necessário
    height: 35, // Ajuste conforme necessário
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
  //MODAL
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Ajuste conforme necessário para o tamanho desejado
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  option: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 18,
    padding: 8,
    margin: 5,
    width: '90%', // Largura fixa para todos os botões serem do mesmo tamanho
    backgroundColor: 'rgba(0, 159, 16, 0.08)',
    color: '#000000', // Cor do text
    fontSize: 16,
  },

  // Drawer

  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Cor de fundo do drawer
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  profileEmail: {
    fontSize: 14,
    color: '#555',
  },
  drawerMenu: {
    marginTop: 20,
  },
  drawerMenuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  drawerMenuItemText: {
    fontSize: 14,
    color: '#000',
  },
});
