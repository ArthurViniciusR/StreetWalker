import { Image, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.infokm}>
        <Text style={styles.textKM}>Você ja correu</Text>
        <Text style={styles.textKM}>10km essa semana</Text>
      </View>
      <View style={styles.navigator}>

        <View style={styles.label}>
          <TouchableOpacity style={styles.navBtn}>
        
        </TouchableOpacity>
        <Text style={styles.labeltxt}>Treino</Text>
        </View>

        <View  style={styles.label}>
          <TouchableOpacity style={styles.navBtn}>
        
        </TouchableOpacity>
        <Text style={styles.labeltxt}>Agua</Text>
        </View>

        <View  style={styles.label}>
          <TouchableOpacity style={styles.navBtn}>
        
        </TouchableOpacity>
        <Text style={styles.labeltxt}>Historico</Text>
        </View>

      </View>

      <View style={styles.progressInfo}>
        <Text style={styles.labelTopProgress}>Meta Diaria</Text>
        <View style={styles.progress}></View>
        <Text style={styles.labelBotProgress}>você já deve ter bebido 2000ml de água</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#041A29"
  },

  infokm:{
    backgroundColor: "#03121D",
    height: 200,
    width: "80%",
    marginTop: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end"
  },

  textKM:{
    color: "white",
    fontSize: 30
  },

  navigator:{
    marginTop: 40,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
    borderBottomWidth: 1,
    
    
  },

  label:{
    alignItems: "center",
    gap: 3
  },

  labeltxt:{
    color: "white"
  },

  navBtn:{
    backgroundColor: "#0284C7",
    width: 50,
    height: 50,
    borderRadius: 100
  },

  progressInfo:{
    alignItems: "center",
    width: "100%",
    marginTop: 200
  },

  progress:{
    alignItems: "center",
    width: "80%",
    height: 30,
    borderRadius: 30,
    backgroundColor: "#0284C7",
  },

  labelTopProgress:{
    color: "white",
    justifyContent: "flex-start"
  },

  labelBotProgress:{
    color: "white"
  }

  
})
