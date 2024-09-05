import {Stack, Tabs} from "expo-router";
import { ProgressProvider } from '../context/ProgressContext';


export default function RootLayout() {
  return (
    <ProgressProvider>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="login"/>
          <Stack.Screen name="index"/>
          <Stack.Screen name="treino"/>
          <Stack.Screen name="agua"/>
        </Stack>
    </ProgressProvider>
  );
}
