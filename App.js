import React from 'react'
import SignIn from './src/components/signIn';
import SignUp from './src/components/signUp';
import MainUI from './src/components/mainUI';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Main UI" component={MainUI} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}






export default App;