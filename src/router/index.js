import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import ViewPDF from '../pages/ViewPDF';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewPDF" component={ViewPDF} />
    </Stack.Navigator>
  );
};

export default Router;
