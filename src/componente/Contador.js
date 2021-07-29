import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    acrescentar = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

    reiniciar = () => {
        this.setState({ numero: this.props.numeroInicial });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.acrescentar}
                    onLongPress={this.reiniciar}>
                    <Text>Clique aqui para incrementar/zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
