import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [watcher, setWatcher] = useState(null);
  const [tracking, setTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // Em segundos
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let initialLocation = await Location.getCurrentPositionAsync({});
      setLocation(initialLocation);
      setRouteCoordinates([
        {
          latitude: initialLocation.coords.latitude,
          longitude: initialLocation.coords.longitude,
        },
      ]);
    })();
  }, []);

  useEffect(() => {
    let interval = null;
    if (tracking) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else if (!tracking && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [tracking, elapsedTime]);

  const startTracking = async () => {
    if (tracking) return;

    // Resetar valores
    setElapsedTime(0);
    setCalories(0);
    setRouteCoordinates([]);

    setTracking(true);

    const subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 5,
      },
      (newLocation) => {
        setLocation(newLocation);
        setRouteCoordinates((prevCoordinates) => [
          ...prevCoordinates,
          {
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          },
        ]);
      }
    );
    setWatcher(subscription);
  };

  const stopTracking = () => {
    if (watcher) {
      watcher.remove();
      setWatcher(null);
    }
    setTracking(false);

    // Calcular calorias aproximadas
    const distanceKm = (routeCoordinates.length * 5) / 1000;
    const caloriesBurned = distanceKm * 60; // Aproximadamente 60 calorias por km caminhando
    setCalories(caloriesBurned);


    const treino = {
      date: new Date().toLocaleDateString(),
      time: formatTime(elapsedTime),
      distance: distanceKm.toFixed(2),
      calories: caloriesBurned.toFixed(1),
    };
    saveWorkout(treino);
  };

  const saveWorkout = async (treino) => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      let workouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
      workouts.push(treino);
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    } catch (error) {
      console.log('Erro ao salvar treino', error);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!location) {
    return <Text>Loading...</Text>;
  }

  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#FF0000"
          strokeWidth={4}
        />
      </MapView>

      <View style={styles.separator} />

      <Text style={styles.timeText}>TEMPO{'\n'}{formatTime(elapsedTime)}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={styles.statText}>Velocidade{'\n'}{(location.coords.speed || 0).toFixed(1)} km/h</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.statText}>{calories.toFixed(1)} kcal {'\n'}perdidas</Text>
      </View>
      <View style={styles.separator} />

      <Text style={styles.percorreuText}>
        percorreu:{'\n'}{((routeCoordinates.length * 5) / 1000).toFixed(2)} km
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={tracking ? stopTracking : startTracking}
      >
        <Text style={styles.buttonText}>{tracking ? 'Parar' : 'Iniciar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041A29',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    width: '100%',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 16,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  percorreuText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    margin: 16,
  },
  map: {
    width: '90%',
    height: 300,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    width: '30%',
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
