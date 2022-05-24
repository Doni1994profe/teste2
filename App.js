
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/paginas/Home';
import Categoria from './src/paginas/Categorias';
import DetalheJogos from './src/paginas/DetalhesJogos'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen name ="Home" component={Home} options = {{headerShown:false}}  />
        <Stack.Screen name = "Categoria" component={Categoria} />
        <Stack.Screen name = "DetalheJogos" component={DetalheJogos} />
      </Stack.Navigator>


    </NavigationContainer>
  
  );
}
