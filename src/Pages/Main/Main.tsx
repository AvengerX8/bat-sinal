import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import BatSignal from '../../../assets/XOvg.gif'
import { Form } from '../Form/Form';

import { mainStyles } from './MainStyle';
import { styles } from '../Form/FormStyle';

export function Main() {
    const [buttonPressed, setButtonPressed] = useState(true)

  return (
    <View>
      {buttonPressed ? (
        <View style={mainStyles.mainContainer}>
          <Image 
            source={BatSignal}
            style={mainStyles.img}
          />
          <TouchableOpacity
            onPress={() => setButtonPressed(false)}
          >
            <Text style={mainStyles.mainBtn}>EMERGÊNCIA!!!</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.formContainer}>
            <Form></Form>
        </View>
      )}
    </View>
  );
}