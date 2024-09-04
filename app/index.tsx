import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";
import * as Progress from 'react-native-progress';
import { useProgress } from '../context/ProgressContext';
import { useEffect, useState } from "react";

export default function Index() {

  const { totalConsumo } = useProgress();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Função que incrementa o progresso a cada segundo
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Incrementa o progresso em 0.05 a cada segundo
        const nextProgress = prev + 0.05;
        // Reinicia a barra quando atingir 1
        return nextProgress >= 1 ? 0 : nextProgress;
      });
    }, 1000); // 1000ms = 1 segundo

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.infokm}>
      <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logoKM}
          />
        <Text style={styles.textKM}>Você ja correu</Text>
        <Text style={styles.textKM}>10km essa semana</Text>
      </View>
      <View style={styles.navigator}>
  
          <View style={styles.label}>
            <Link href={"/treino"}>
            <TouchableOpacity style={styles.navBtn}>
                <Image
                  source={require("@/assets/images/treino.png")}
                  style={styles.btnIcon}
                />
            </TouchableOpacity>
            </Link>
          <Text style={styles.labeltxt}>Treino</Text>
          </View>
        

        <View  style={styles.label}>
          <Link href={"/agua"}>
            <TouchableOpacity style={styles.navBtn}>
              <Image
                source={require("@/assets/images/agua.png")}
                style={styles.btnIcon}
              />
            </TouchableOpacity>
          </Link>
        <Text style={styles.labeltxt}>Agua</Text>
        </View>

        <View  style={styles.label}>
          <Link href={"/historico"}>
            <TouchableOpacity style={styles.navBtn}>
              <Image
                source={require("@/assets/images/historico.png")}
                style={styles.btnIcon}
              />
          </TouchableOpacity>
          </Link>
        <Text style={styles.labeltxt}>Historico</Text>
        </View>

      </View>

      <Image
            source={require("@/assets/images/template.png")}
            style={styles.imgHome}
          />

      <View style={styles.progressInfo}>
        <Text style={styles.labelTopProgress}>Meta Diaria</Text>
        <Progress.Bar progress={progress} width={250} height={15}/>
        <Text style={styles.labelBotProgress}>você deve beber {totalConsumo}ml de água</Text>
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
    justifyContent: "center"
  },

  textKM:{
    color: "white",
    fontSize: 20
  },

  logoKM:{
    width: "80%",
    resizeMode: 'center',
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
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  btnIcon:{
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  imgHome:{
    width: "100%",
    resizeMode: 'center',
    marginTop: -90
  },

  progressInfo:{
    alignItems: "center",
    width: "100%",
    marginTop: -50,
    gap: 5
  },

  labelTopProgress:{
    color: "white",
    justifyContent: "flex-start"
  },

  labelBotProgress:{
    color: "white"
  }

  
})
