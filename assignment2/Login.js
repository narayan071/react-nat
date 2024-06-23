import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export class Login extends Component {
  handleNavigateToRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ImageBackground 
            source={require('../assets/pet-bg.jpg')} 
            style={styles.background}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Login</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />
              <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleNavigateToRegister}>
                <Text style={styles.registerText}>New user? Register here</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contentContainer: {
    alignItems: 'center',
    marginEnd: 20,
    width: '60%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  button: {
    backgroundColor: '#A0522D',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontWeight: '800',
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
