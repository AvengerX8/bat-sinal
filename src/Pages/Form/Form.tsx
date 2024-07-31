import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import BatIcon from '../../../assets/Logo Batman png.png'
import { Main } from '../Main/Main';

import { styles } from './FormStyle';
import { mainStyles } from '../Main/MainStyle';

export function Form() {
    const [name, setName]           = useState('');
    const [phone, setPhone]         = useState('');
    const [location, setLocation]   = useState('');
    const [report, setReport]       = useState('');
    const [buttonPressed, setButtonPressed] = useState(true)

    function ocurrencyObject(){
        let data = []

        data.push(name, phone, location, report);

        console.log(data);
        setName('');
        setPhone('');
        setLocation('');
        setReport('');
        setButtonPressed(false);
    };

  return (
    <View>
        {buttonPressed ? (
        <View style={styles.formContainer}>
            <Image 
                source={BatIcon}
                style={styles.img}
            />
            <Text style={styles.label}>Nome</Text>
            <TextInput 
                style={styles.inputs}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Telefone</Text>
            <TextInput 
                style={styles.inputs}
                keyboardType='phone-pad'
                value={phone}
                onChangeText={setPhone}
            />
            <Text style={styles.label}>Localização</Text>
            <TextInput 
                style={styles.inputs}
                value={location}
                onChangeText={setLocation}
            />
            <Text style={styles.label}>Relato</Text>
            <TextInput 
                style={[styles.inputs, {height: 200}]}
                multiline = {true}
                textAlignVertical='top'
                value={report}
                onChangeText={setReport}
            />
            <TouchableOpacity onPress={ocurrencyObject}>
                <Text style={styles.formBtn}>Enviar</Text>
            </TouchableOpacity>
        </View>
        ):(
            <View style={mainStyles.mainContainer}>
                <Main></Main>    
            </View>
        )}
    </View>
  );
}