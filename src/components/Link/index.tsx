import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export default function LinkButton(props) {
  const navigation = useNavigation();
  const {screenName, label} = props;

  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={style.link}>{label}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color: '#1400FF',
    fontSize: 16,
  },
});
