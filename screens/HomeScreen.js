// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Spacer = ({ height }) => <View style={{ height }} />;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secert Password</Text>
      <Text style={styles.textwel}>Welcome</Text>
      <Text style={styles.text}>No matter what your password is,</Text>
      <Text style={styles.text}>Our application will make your password</Text>
      <Text style={styles.text}>the best and most secure in the world</Text>
      
      <Spacer height={20} />

      <Image source={require('../assets/IMG/image-bg.png')} style={styles.image} />
      
      <TouchableOpacity style={styles.buttonreg}onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Spacer height={10} />

      <TouchableOpacity style={styles.buttonlog}onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text> 
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  textwel: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonreg: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonlog: {
    backgroundColor: '#42f4c2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
