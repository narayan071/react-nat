import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 

export default function Landing() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground 
          source={require('../assets/pet-bg.jpg')} 
          style={styles.background}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>pawMart</Text>
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
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
  },
  buttonWrapper: {
    backgroundColor: '#A0522D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    width: 200,
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
});
