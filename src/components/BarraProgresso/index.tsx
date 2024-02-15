import * as Progress from 'react-native-progress';
import React from 'react';
import Style from './style';
import {View} from 'react-native';

export default function BarraProgresso(props) {
  return (
    <View style={Style.barraProgress}>
      <Progress.Bar
        progress={props.progresso}
        width={150}
        color="#37A433"
        unfilledColor="f0faf1"
      />
    </View>
  );
}
