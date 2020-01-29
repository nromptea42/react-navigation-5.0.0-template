import * as React from 'react';
import { View, Text, Button, Platform, StatusBar } from 'react-native';


function getHeaderTitle(route) {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
      ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
      : // If state doesn't exist, we need to default to the initial screen
        // In our case, it's "Screen 1" as that's the first screen inside the navigator
        'Screen 1';
    return routeName;
  }

export const defaultHeader = ({ route }) =>  ({
    headerStyle: { backgroundColor: 'black' },

    // headerLeft: () => <Text>Header left</Text>,
    // headerLeftContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' },

    headerTitleAlign: 'center',
    headerTitle: () => <Text numberOfLines={1}>{getHeaderTitle(route)}</Text>,
    headerTitleContainerStyle: { width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },

    // headerRight: () => <Text>Header right</Text>,
    // headerRightContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
});

export const frenchHeader = {
    headerStyle: { backgroundColor: 'white' },

    headerLeft: () => <Text>Header left</Text>,
    headerLeftContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' },

    headerTitleAlign: 'center',
    headerTitle: () => <Text numberOfLines={1}>Header title plutot long oui vraiment haha encore plus long alors hehe</Text>,
    headerTitleContainerStyle: { width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },

    headerRight: () => <Text>Header right</Text>,
    headerRightContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
};