import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import Style from './style';
import {useNavigation} from '@react-navigation/native';

export default function BotaoDoIcon(props) {
  const navigation = useNavigation();
  const {page, texto, imgIcon} = props;

  const handlePress = () => {
    navigation.navigate(page);
  };
  return (
    <View style={Style.bottomIconContainer}>
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}>
        <Image source={imgIcon} style={Style.bottomIcon} />
      </TouchableOpacity>
      <Text style={Style.textIcons}>{texto}</Text>
    </View>
  );
}
