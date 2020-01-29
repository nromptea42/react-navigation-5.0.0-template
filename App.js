import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationNativeContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


import { defaultHeader, frenchHeader } from './configureHeader';
import { Screen1, Screen2, Screen3, Screen4, Screen5, Screen6 } from './Screens';
import MyStackScreenComponent from './MyStackScreenComponent';

const MainStack = createStackNavigator();
const SecondaryStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
enableScreens();

function StackOne() {
  return (
    <SecondaryStack.Navigator>
      <SecondaryStack.Screen name="Tabbar" component={Tabbar} options={defaultHeader} />
      <SecondaryStack.Screen options={frenchHeader} name="Screen 3" component={Screen3} />
      <SecondaryStack.Screen name="Screen 4" component={({ navigation, route }) => MyStackScreenComponent({ navigation, statusBarStyle: 'dark-content', statusBarBackgroundColor: 'white', screen: <Screen4 navigation={navigation} route={route} /> })} />
    </SecondaryStack.Navigator>
  );
}

function Tabbar() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: true }}>
      <Tab.Screen name="Screen 1" component={Screen1} />
      <Tab.Screen name="Screen 2" component={Screen2} />
    </Tab.Navigator>
  );
}

function DrawerUI() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabbar" component={StackOne} />
      <Drawer.Screen name="Screen 5" component={Screen5} />
    </Drawer.Navigator>
  );
}

export default class App extends React.PureComponent {
  state = {
    loading: false,
    userToken: 'awduuawbeuyqbwewqd',
  };

  async componentDidMount() {
    // await this.checkToken();
  }

  checkToken = async () => {
    await AsyncStorage.removeItem('userToken');
    this.setState({ userToken: null })
    return setTimeout(async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      console.log(storedToken);
      if (storedToken !== null)
        this.setState({ loading: false, userToken: storedToken });
      else
      this.setState({ loading: false });
    }, 2500);
  };

  signIn = async () => {
    const userToken = 'awduuawbeuyqbwewqd';
    await AsyncStorage.setItem('userToken', userToken);
    this.setState({ userToken });
  };

  signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    this.setState({ userToken: null })
  }

  render() {
    const { loading, userToken } = this.state;
    return (
      <SafeAreaProvider>
        <StatusBar />
        <NavigationNativeContainer>
          <MainStack.Navigator headerMode={'none'}>
            {/* Public navigator */}
            {/* ... */}

            {/* Private navigator */}
            <MainStack.Screen name="Drawer" component={DrawerUI} />
          </MainStack.Navigator>
        </NavigationNativeContainer>
      </SafeAreaProvider>
    );
  }
}