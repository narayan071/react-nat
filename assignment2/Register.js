import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleRegister = () => {
    const { name, email, password, confirmPassword } = this.state;

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert(`Registering user: ${name} - ${email}`);
  };

  handleNavigateToLogin = () => {
    this.props.navigation.navigate('Login');
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
              <Text style={styles.title}>Register</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={(text) => this.setState({ confirmPassword: text })}
                value={this.state.confirmPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleNavigateToLogin}>
                <Text style={styles.registerText}>Member already? login here</Text>
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
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Register;
