import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {styles} from './style';
import userProfileData from '../../bd/Bd.json';

export default function Perfil() {
  const {name, lastName, email, phone, registrationNumber} = userProfileData;

  return (
    <View style={styles.container}>
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
    </View>
  );
}
