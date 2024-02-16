import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  ImageBackground,
} from 'react-native';
import Style from './style';
import {useNavigation} from '@react-navigation/native';

export default function MenuCarteira(props) {
  const isVisivel = props;
  const navigation = useNavigation();

  if (!isVisivel) {
    return null;
  }

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View>
      <TouchableOpacity style={Style.menuButton} onPress={toggleMenu}>
        <ImageBackground
          source={require('../../assets/img/p.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(false);
        }}>
        <View style={Style.modalContainer}>
          <View style={Style.modalContent}>
            <TouchableOpacity
              style={Style.menuButton}
              onPress={() => {
                toggleMenu();
                navigation.navigate('UploadCarteira');
              }}>
              <View style={Style.menuItemContainer}>
                <ImageBackground
                  source={require('../../assets/uploadarqu.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={Style.menuItem}>Nova Carteira</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.menuButton}
              onPress={() => {
                toggleMenu();
                navigation.navigate('UploadCarteira');
              }}>
              <View style={Style.menuItemContainer}>
                <ImageBackground
                  source={require('../../assets/img/excluir.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={{color: 'red', fontSize: 18}}>
                  Deletar Carteira
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMenu}>
              <Text style={Style.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
