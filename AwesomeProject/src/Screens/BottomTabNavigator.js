import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constant/Colors';
import AddTask from './AddTask';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
// import Teamlist from './Homescreen';
import TaskList from './TaskList';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == 'AddTask') {
            iconName = focused ? 'plus-circle' : 'plus-circle-outline';
          } else if (route.name == 'About') {
            iconName = focused ? 'account-plus' : 'account-plus-outline';
          } else if (route.name == 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }
          return (
            <Icon
              name={iconName}
              size={20}
              color={color}
              style={styles.iconStyle}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      {/* <Tab.Screen name="About" component={TaskList} /> */}
      {/* <Tab.Screen name="Teams" component={Team_scr1} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Teamlist"
        component={Teamlist}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Teamlist"
        component={Teamlist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: -5, // adjust this value to align the icon with the text label
  },
});

export default BottomTabNavigator;