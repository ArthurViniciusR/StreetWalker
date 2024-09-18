import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Historico() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      if (storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      console.log('Erro ao carregar treinos', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Histórico de Treinos</Text>
      </View>

      {workouts.length > 0 ? (
        workouts.map((workout, index) => (
          <View key={index} style={styles.workoutContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.workoutImage}
            />
            <View style={styles.workoutDetails}>
              <Text style={styles.workoutText}>
                {workout.date}  |  {workout.time} {"\n"}
                {workout.distance} km  |  {workout.calories} kcal
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noWorkoutsText}>Nenhum treino salvo ainda.</Text>
      )}

      
    </ScrollView>
  );
}

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
  noWorkoutsText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
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
