import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Agua() {
  const [idade, setIdade] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [totalConsumo, setTotalConsumo] = useState(0);

  useEffect(() => {
    // Recupera o totalConsumo do AsyncStorage ao montar o componente
    const loadTotalConsumo = async () => {
      try {
        const storedTotalConsumo = await AsyncStorage.getItem('totalConsumo');
        if (storedTotalConsumo) {
          setTotalConsumo(parseFloat(storedTotalConsumo));
        }
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    };
    loadTotalConsumo();
  }, []);

  useEffect(() => {
    // Armazena o totalConsumo no AsyncStorage sempre que ele muda
    const saveTotalConsumo = async () => {
      try {
        await AsyncStorage.setItem('totalConsumo', totalConsumo.toString());
      } catch (error) {
        console.log("Erro ao salvar dados:", error);
      }
    };
    saveTotalConsumo();
  }, [totalConsumo]);

  const handleIdadeChange = (input: string) => {
    const numericValue = parseFloat(input);
    setIdade(numericValue);
  };

  const handlePesoChange = (input: string) => {
    const numericValue = parseFloat(input);
    setPeso(numericValue);
  };

  const CalcAgua = () => {
    if(idade <= 17){
      setTotalConsumo(40*peso)
    } else {
      setTotalConsumo(35*peso)
    }
  }
  
  return (
    <View style={styles.container}>

        <Text style={styles.aguaTitle}>
            Calcule quantos litros de aguá você precisa por dia
        </Text>

        <TextInput
            style={styles.input}
            placeholder="Idade: 18"
            keyboardType="numeric"
            placeholderTextColor={"#444444"}
            onChangeText={handleIdadeChange} 
        />
        <TextInput
            style={styles.input}
            placeholder="Peso: 70kg"
            keyboardType="numeric"
            placeholderTextColor={"#444444"}
            onChangeText={handlePesoChange}
        />

        <TouchableOpacity
          onPress={CalcAgua}
          style={styles.buttonCalc}
        >
            <Text style={styles.btnText}>Calcular litros por dia</Text>
        </TouchableOpacity>

        <View style={styles.resultContain}>
            <Text style={styles.meta}>sua meta diária</Text>
            <Text style={styles.resultMeta}>{totalConsumo}ml</Text>     
        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
    aguaTitle:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        padding: 30,
        width: 330
    },

    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#041A29"
      },

      input:{
        width: "90%",
        height: 70,
        borderBottomWidth: 2,
        borderBottomColor: "#03121D",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
      },

      buttonCalc:{
        width: "70%",
        backgroundColor: "#0284C7",
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      },

      btnText:{
        color: "white",
        fontSize: 20
      },

      resultContain:{
        marginTop: 50,
        gap: 20,
        alignItems: "center",
      },

      meta:{
        color: "white"
      },

      resultMeta:{
        color: "white",
        fontSize: 60,
        fontWeight: "bold"
      }


})
