import * as React from 'react';
import { View, Text, Button, Platform, StatusBar } from 'react-native';

export const defaultHeader = {
    headerStyle: { backgroundColor: 'black' },

    // headerLeft: () => <Text>Header left</Text>,
    // headerLeftContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' },

    headerTitleAlign: 'center',
    headerTitle: (a, b, c) => <Text numberOfLines={1}>Header title plutot long oui vraiment haha encore plus long alors hehe</Text>,
    headerTitleContainerStyle: { width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },

    // headerRight: () => <Text>Header right</Text>,
    // headerRightContainerStyle: { width: '24%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
};

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