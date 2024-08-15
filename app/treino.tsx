import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function App() {
 return (
   <View style={styles.container}>
     <Image
       source={{ uri: 'https://via.placeholder.com/150' }} 
       style={styles.image}
     />
     <View style={styles.separator} />


     <Text style={styles.timeText}>TEMPO{'\n'}00:00:00</Text>
     <View style={styles.separator} />


     <View style={styles.row}>
       <Text style={styles.statText}>Velocidade{'\n'}2.5km/h</Text>
       <View style={styles.verticalLine} />
       <Text style={styles.statText}>70 kcal {'\n'} perdidas</Text>
     </View>
     <View style={styles.separator} />


     <Text style={styles.percorreuText}>percorreu:{'\n'}5km</Text>


     <TouchableOpacity style={styles.button} onPress={() => {}}>
       <Text style={styles.buttonText}>Iniciar</Text>
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
 image: {
   height: 320,
   width: '90%',
   borderRadius: 10,
   borderColor: '#03121D',
   borderWidth: 12,


   marginTop: 64,
   marginBottom: 10,
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
   alignItems: 'center', // Centraliza os itens na linha
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
 button: {
   backgroundColor: '#1E90FF',
   paddingVertical: 10,
   width: '30%',
   paddingHorizontal: 20,
   borderRadius: 20,
   alignItems: 'center',
   marginBottom: 20,
   margin: 'auto',
   marginTop: 0,
 },
 buttonText: {
   color: '#fff',
   fontSize: 18,
   fontWeight: 'bold',
 },
});
