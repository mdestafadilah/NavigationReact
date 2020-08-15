import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Load Komponen
import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';
import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';
import Detail from './src/detail';
import Feed from './src/feed';

// create object function
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const createTopTabs = () => {
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        component={Tab1}
        options={{title: 'Hello'}}
      />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  );
};

const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialBottomTabs.Navigator>
  );
};

// Object Navigation
const createHomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="feed" component={Feed} options={{title: 'My Feed', headerStyle:{ backgroundColor: 'black', headerTintColor: 'yellow'}}} />
    <Stack.Screen name="detail" component={Detail} options={{title: 'Detail Screen', headerStyle:{ backgroundColor: 'blue', headerTintColor: 'yellow'}}} />
    <Stack.Screen name="toptabs" children={createTopTabs} />
    <Stack.Screen name="bottomtabs" children={createBottomTabs} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" children={createHomeStack} />
        <Drawer.Screen name="Contact" component={Screen1} />
        <Drawer.Screen name="Favorite" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
