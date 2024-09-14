import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Recupera os dados do usuário armazenados no AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        
        // Verifica se o login e senha correspondem aos dados armazenados
        if (login === userData.login && senha === userData.senha) {
          // Redireciona para a página home se as credenciais forem válidas
          navigation.navigate('home');
        } else {
          alert('Login ou senha incorretos');
        }
      } else {
        alert('Nenhum usuário encontrado. Por favor, cadastre-se primeiro.');
      }
    } catch (error) {
      console.log('Erro ao recuperar dados', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>StreetWalker</Text>
      </View>
      <Text style={styles.title}>Comece sua corrida entrando no nosso app</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          placeholderTextColor="#999"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.signupText} onPress={() => navigation.navigate('cadastro')}>
          não tem login? cadastre-se
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
 signupText: {
   color: '#1DA1F2',
   textAlign: 'center',
   marginBottom: 20,
 },
 button: {
   backgroundColor: '#1DA1F2',
   paddingVertical: 15,
   borderRadius: 8,
   alignItems: 'center',
   marginTop: 20
 },
 buttonText: {
   color: '#fff',
   fontSize: 16,
   fontWeight: 'bold',
 },
});
