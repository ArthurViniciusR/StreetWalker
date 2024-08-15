import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function LoginScreen() {
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
       />
       <TextInput
         style={styles.input}
         placeholder="Senha"
         placeholderTextColor="#999"
         secureTextEntry
       />
     </View>
     <TouchableOpacity>
       <Text style={styles.signupText}>não tem login? cadastre-se</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
       <Link href={"/"}>
        <Text style={styles.buttonText}>Entrar</Text>
       </Link>
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
 },
 buttonText: {
   color: '#fff',
   fontSize: 16,
   fontWeight: 'bold',
 },
});
