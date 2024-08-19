import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Agua() {
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
        />
        <TextInput
            style={styles.input}
            placeholder="Peso: 70kg"
            keyboardType="numeric"
            placeholderTextColor={"#444444"}
        />

        <TouchableOpacity
            style={styles.buttonCalc}
        >
            <Text style={styles.btnText}>Calcular litros por dia</Text>
        </TouchableOpacity>

        <View style={styles.resultContain}>
            <Text style={styles.meta}>sua meta diária</Text>
            <Text style={styles.resultMeta}>3000ml</Text>     
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
