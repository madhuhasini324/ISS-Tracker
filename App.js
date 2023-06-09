import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatStoryScreen from "./screens/CreateStory";
import FeedScreen from "./screens/Feed";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        route:""
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create Story"
        component={CreatStoryScreen}
        options={{
         headerShown:false
        }}
      />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;