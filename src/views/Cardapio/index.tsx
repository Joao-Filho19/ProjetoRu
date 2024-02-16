import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Modal,
  Pressable,
  Alert,
  Linking,
} from 'react-native';
import {styles} from './style';
import userProfileData from '../../bd/Bd.json';
import {Drawer} from 'react-native-drawer-layout';
import BotaoDoIcon from '../../components/BotaoIcon';
import {useNavigation} from '@react-navigation/native';

export default function Cardapio() {
  const handlePress = async () => {
    const email = 'mailto:skdp.ecp19@uea.edu.br';

    try {
      await Linking.openURL(email);
    } catch (error) {
      console.log('Erro ao abrir o aplicativo de e-mail:', error);
    }
  };

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Matriz de descrições
  const descriptions = [
    [
      'Café da manhã - Segunda: Pão e café.',
      'Café da manhã - Terça: Frutas e iogurte.',
      'Café da manhã - Quarta: Omelete e suco.',
      'Café da manhã - Quinta: Torradas e leite.',
      'Café da manhã - Sexta: Vitamina de frutas.',
      'Café da manhã - Sábado: Panquecas e mel.',
    ],
    [
      'Lanche - Segunda: Sanduíche natural.',
      'Lanche - Terça: Salgadinho e suco.',
      'Lanche - Quarta: Frutas e barra de cereal.',
      'Lanche - Quinta: Biscoitos e café.',
      'Lanche - Sexta: Smoothie de frutas.',
      'Lanche - Sábado: Gelatina e cookies.',
    ],
    [
      'Almoço - Segunda: Arroz, feijão e frango.',
      'Almoço - Terça: Macarrão e carne moída.',
      'Almoço - Quarta: Peixe grelhado e salada.',
      'Almoço - Quinta: Feijoada.',
      'Almoço - Sexta: Risoto de legumes.',
      'Almoço - Sábado: Churrasco.',
    ],
    [
      'Jantar - Segunda: Sopa de legumes.',
      'Jantar - Terça: Pizza.',
      'Jantar - Quarta: Sanduíche quente.',
      'Jantar - Quinta: Massa ao molho branco.',
      'Jantar - Sexta: Sushi.',
      'Jantar - Sábado: Prato vegetariano.',
    ],
  ];

  const openModal = (squareIndex: number, dayIndex: number) => {
    setSelectedSquare(squareIndex);
    setSelectedDay(dayIndex);
    setIsModalVisible(true);

    // Remova a chamada para showDescription daqui
  };

  const closeModal = () => {
    setSelectedSquare(null);
    setSelectedDay(null);
    setIsModalVisible(false);
  };

  const showDescription = () => {
    // Exibir a descrição com base no quadrado e no dia selecionados
    if (selectedSquare !== null && selectedDay !== null) {
      const description = descriptions[selectedSquare][selectedDay];
      if (description) {
        Alert.alert(description);
      }
    }
  };

  const renderOptions = () => {
    if (selectedSquare !== null) {
      const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      return days.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => {
            openModal(selectedSquare!, index);
            showDescription(); // Mantenha a chamada para showDescription aqui
          }}>
          <Text>{day}</Text>
        </TouchableOpacity>
      ));
    }
    return null;
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const {name, lastName, email} = userProfileData;

  return (
    <Drawer
      open={isDrawerOpen}
      onOpen={openDrawer}
      onClose={closeDrawer}
      renderDrawerContent={() => (
        <View style={styles.drawerContent}>
          {/* Adicionando a foto do perfil */}
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/img/p2.jpg')}
              style={{width: 40, height: 40, borderRadius: 90}}
            />

            <Text style={styles.profileName}>
              {name} {lastName}
            </Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>

          {/* Adicionando o menu organizado */}
          <View style={styles.drawerMenu}>
            <TouchableOpacity style={styles.drawerMenuItem} onPress={() => {}}>
              <ImageBackground
                source={require('../../assets/img/cardapioBlack.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={(styles.drawerMenuItemText, styles.botaoSelect)}>
                Cardápio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerMenuItem}
              onPress={() => {
                navigation.navigate('Carteira');
              }}>
              <ImageBackground
                source={require('../../assets/img/carteiraBlack.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={styles.drawerMenuItemText}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerMenuItem}
              onPress={handlePress}>
              <ImageBackground
                source={require('../../assets/img/envelope.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={styles.drawerMenuItemText}>Fale Conosco</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerMenuItem}
              onPress={() => {
                navigation.navigate('Perfil');
              }}>
              <ImageBackground
                source={require('../../assets/img/iconPerfil.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={styles.drawerMenuItemText}>Perfil</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.drawerMenuItem} onPress={() => {}}>
              <ImageBackground
                source={require('../../assets/img/config.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={styles.drawerMenuItemText}>Config</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.drawerMenuItem}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <ImageBackground
                source={require('../../assets/img/sair.png')}
                style={{width: 25, height: 25, marginRight: 10}}
              />
              <Text style={styles.drawerMenuItemText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
            <ImageBackground
              source={require('../../assets/img/menu.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cardápio RU</Text>
          </View>

          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <ImageBackground
                source={require('../../assets/img/p2.jpg')}
                style={{width: 30, height: 30, borderRadius: 90}}
              />
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Digite um item a ser pesquisado"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <TouchableOpacity style={styles.lupaButton} onPress={() => {}}>
            <ImageBackground
              source={require('../../assets/img/lupa.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.squareContainer}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => openModal(0, 0)}>
            <View style={styles.greenCircle}>
              <Image
                source={require('../../assets/img/cafe.png')}
                style={styles.circleIcon}
              />
            </View>
            <Text style={styles.circleText}>Cafe da manhã</Text>
            <View style={styles.smallCircle}>
              <Image
                source={require('../../assets/img/seta.png')}
                style={styles.circleIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => openModal(1, 0)}>
            <View style={styles.greenCircle}>
              <Image
                source={require('../../assets/img/hamburguer.png')}
                style={styles.circleIcon}
              />
            </View>
            <Text style={styles.circleText}>Lanche</Text>
            <View style={styles.smallCircle}>
              <Image
                source={require('../../assets/img/seta.png')}
                style={styles.circleIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => openModal(2, 0)}>
            <View style={styles.greenCircle}>
              <Image
                source={require('../../assets/img/almoço.png')}
                style={styles.circleIcon}
              />
            </View>
            <Text style={styles.circleText}>Almoço</Text>
            <View style={styles.smallCircle}>
              <Image
                source={require('../../assets/img/seta.png')}
                style={styles.circleIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => openModal(3, 0)}>
            <View style={styles.greenCircle}>
              <Image
                source={require('../../assets/img/jantar.png')}
                style={styles.circleIcon}
              />
            </View>
            <Text style={styles.circleText}>Jantar</Text>
            <View style={styles.smallCircle}>
              <Image
                source={require('../../assets/img/seta.png')}
                style={styles.circleIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {renderOptions()}

              <Pressable onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.bottomIconsContainer}>
          <View style={styles.bottombarSelect}>
            <BotaoDoIcon
              texto="Cardapio"
              page="Cardapio"
              imgIcon={require('../../assets/img/cardapio.png')}
            />
          </View>

          <View style={styles.bottomIconContainer}>
            <BotaoDoIcon
              texto="Carteira"
              page="UploadCarteira"
              imgIcon={require('../../assets/img/id.png')}
            />
          </View>

          <View style={styles.bottomIconContainer}>
            <BotaoDoIcon
              texto="Perfil"
              page="Perfil"
              imgIcon={require('../../assets/img/iconPerfil.png')}
            />
          </View>
        </View>
      </View>
    </Drawer>
  );
}
