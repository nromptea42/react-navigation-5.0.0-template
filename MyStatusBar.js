import * as React from 'react';
import { View, Text, Button, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

export default class MyStatusBar extends React.PureComponent {

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle(this.props.statusBarStyle);
            if (Platform.OS === 'android')
                StatusBar.setBackgroundColor(this.props.statusBarBackgroundColor);
        });
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('focus');
    }

    render() {
      return null;
    }
}