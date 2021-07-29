import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default props =>
    <View style={Padrao.ex}>
        <Text>{props.texto}</Text>
        <Text>ihull!</Text>
    </View>;
