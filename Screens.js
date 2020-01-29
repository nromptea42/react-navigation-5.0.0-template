import * as React from 'react';
import { View, Text, Button, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyStatusBar from './MyStatusBar';
import { defaultHeader } from './configureHeader';

export class Screen1 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 1 did mount');
      // console.log(this.props);
    }

    componentWillUnmount() {
      console.log('Component 1 will unmount');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <MyStatusBar navigation={this.props.navigation} statusBarStyle={'light-content'} statusBarBackgroundColor={'black'} />
          <Text>Screen 1</Text>
          <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        </View>
      );
    }
}

export class Screen2 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 2 did mount');
    }

    componentWillUnmount() {
      console.log('Component 2 will unmount');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <MyStatusBar navigation={this.props.navigation} statusBarStyle={'light-content'} statusBarBackgroundColor={'black'} />
          <Text>Screen 2</Text>
          <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        </View>
      );
    }
}

export class Screen3 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 3 did mount');
    }

    componentWillUnmount() {
      console.log('Component 3 will unmount');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
          <MyStatusBar navigation={this.props.navigation} statusBarStyle={'dark-content'} statusBarBackgroundColor={'white'} />
          <Text>Screen 3</Text>
          <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        </View>
      );
    }
}

export class Screen4 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 4 did mount');
    }

    componentWillUnmount() {
      console.log('Component 4 will unmount');
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
          <Text>Screen 4</Text>
          <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        </View>
      );
    }
}

export class Screen5 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 5 did mount');
    }

    componentWillUnmount() {
      console.log('Component 5 will unmount');
    }

    render() {
        return (
          <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
            <Text>Screen 5</Text>
            <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
            <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
            <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
            <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
            <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
            <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
          </SafeAreaView>
        );
    }
}

export class Screen6 extends React.PureComponent {

    componentDidMount() {
      console.log('Component 6 did mount');
    }

    componentWillUnmount() {
      console.log('Component 6 will unmount');
    }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>Screen 6</Text>
        <Button title="Navigate to Screen 1" onPress={() => this.props.navigation.navigate('Screen 1')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        <Button title="Navigate to Screen 2" onPress={() => this.props.navigation.navigate('Screen 2')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        <Button title="Navigate to Screen 3" onPress={() => this.props.navigation.navigate('Screen 3')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        <Button title="Navigate to Screen 4" onPress={() => this.props.navigation.navigate('Screen 4')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        <Button title="Navigate to Screen 5" onPress={() => this.props.navigation.navigate('Screen 5')} color={Platform.OS === 'ios' ? 'white' : undefined} />
        <Button title="Navigate to Screen 6" onPress={() => this.props.navigation.navigate('Screen 6')} color={Platform.OS === 'ios' ? 'white' : undefined} />
      </View>
    );
  }
}