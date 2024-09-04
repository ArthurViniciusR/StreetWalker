import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Historico() {
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.headerText}>Histórico de Treinos</Text>
      </View>

      <View style={styles.workoutContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.workoutImage}
        />
        <View style={styles.workoutDetails}>
          <Text style={styles.workoutText}>20/08/2024  |  00:54:26 {"\n"}
          5 km  |  400 kcal</Text>
        </View>
      </View>
      <View style={styles.workoutContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.workoutImage}
        />
        <View style={styles.workoutDetails}>
          <Text style={styles.workoutText}>20/08/2024  |  00:54:26 {"\n"}
          5 km  |  400 kcal</Text>
        </View>
      </View>
      <View style={styles.workoutContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.workoutImage}
        />
        <View style={styles.workoutDetails}>
          <Text style={styles.workoutText}>20/08/2024  |  00:54:26 {"\n"}
          5 km  |  400 kcal</Text>
        </View>
      </View>
      <View style={styles.workoutContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.workoutImage}
        />
        <View style={styles.workoutDetails}>
          <Text style={styles.workoutText}>20/08/2024  |  00:54:26 {"\n"}
          5 km  |  400 kcal</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Você já correu {"\n"} 10km essa semana!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041A29',
  },
  header: {
    backgroundColor: '#03121D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 60,
    width: '100%',  
  },
  headerText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  workoutContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#03121D",
    alignItems: 'center',
    justifyContent: 'center', 
  },
  workoutImage: {
    width: 100,
    height: 75,
    marginRight: 15,
    borderRadius: 10,
  },
  workoutDetails: {
    flex: 1,
    alignItems: 'center',
  },
  workoutText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#03121D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  footerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
