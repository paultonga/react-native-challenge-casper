import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import List from '../screens/List/list.screen';
import Detail from '../screens/Detail/detail.screen';
import {Patient} from '../types/Patient';

export type AppStackProps = {
  List: undefined;
  Detail: {item: Patient};
};
const AppStack = createNativeStackNavigator<AppStackProps>();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName="List"
    screenOptions={{headerShown: false}}>
    <AppStack.Screen name="List" component={List} />
    <AppStack.Screen name="Detail" component={Detail} />
  </AppStack.Navigator>
);
