import React, {useState} from 'react';
import {
  Modal,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import userProfileData from '../../bd/Bd.json';

export default function Perfil() {
  const {name, lastName, email, phone, registrationNumber} = userProfileData;

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {}}>
          <ImageBackground
            source={require('../../assets/img/R.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Meu Perfil</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <ImageBackground
            source={require('../../assets/img/p.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}>
          <ImageBackground
            source={require('../../assets/img/p2.jpg')}
            style={{width: 170, height: 170, borderRadius: 90}}
          />
        </View>
        <Text style={styles.name}>
          {name} {lastName}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.input}>{name}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sobrenome</Text>
          <Text style={styles.input}>{lastName}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.input}>{email}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.input}>{phone}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Matrícula</Text>
          <Text style={styles.input}>{registrationNumber}</Text>
        </View>
      </View>

      {/* Modal do Menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <View style={styles.menuItemContainer}>
                {/* <ImageBackground
                  source={require('../../assets/img/edit.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                /> */}
                <ImageBackground
                  source={require('../../assets/img/edit.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={styles.menuItem}>Editar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <View style={styles.menuItemContainer}>
                <ImageBackground
                  source={require('../../assets/img/key.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={styles.menuItem}>Alterar Senha</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <View style={styles.menuItemContainer}>
                <ImageBackground
                  source={require('../../assets/img/excluir.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={{color: 'red', fontSize: 18}}>Deletar Conta</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
