import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import Inverter, { MegaSena } from './componente/Multi';
import Contador from './componente/Contador.js'
import Plataformas from './componente/Plataformas';
import ValidarProps from './componente/ValidarProps'
import Evento from './componente/Evento';
import { Avo } from './componente/ComunicacaoDireta';
import TextoSincronizado from './componente/ComunicacaoIndireta';
import ListaFlex from './componente/ListaFlex';
import Flex from './componente/Flex'

const drawer = createDrawerNavigator({
    Flex: {
       screen: Flex
    },
    ListaFelx: {
        screen: ListaFlex,
        navigationOptions: {title: 'Lista Flex'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='Antonio' sobrenome='Silva' />,
        navigationOptions: { title: 'Comunicação Direta'}
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Ano: " ano={21} />,
        navigationOptions: {title: 'Validar Props'}
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={34} />,
        navigationOptions: { title: 'Par & Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto="flexível!" />
    }
    }, { drawerWidth: 300 });

const container = createAppContainer(drawer)

export default container;
