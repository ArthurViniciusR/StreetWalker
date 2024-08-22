import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function cadastroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logoImage} 
          resizeMode="contain" 
        />
        <Text style={styles.logoText}>StreetWalker</Text>
      </View>
      <Text style={styles.title}>Crie sua conta para começar sua corrida</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome" 
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#999" 
          keyboardType="email-address" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Altura" 
          placeholderTextColor="#999" 
          keyboardType="numeric" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Login" 
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#999" 
          secureTextEntry 
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1E2E',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: '100%',     
    height: undefined,   
    aspectRatio: 1,      
    maxWidth: 150,        
    maxHeight: 150,       
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#162A40',
    color: '#fff',
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
