import {Stack} from "expo-router";


export default function RootLayout() {
  
  return (
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="cadastro"/>
          <Stack.Screen name="home"/>
          <Stack.Screen name="treino"/>
          <Stack.Screen name="agua"/>
          <Stack.Screen name="historico"/>
        </Stack>
  );
}
