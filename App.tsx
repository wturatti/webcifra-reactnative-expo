import 'react-native-gesture-handler'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import { AuthProvider } from './src/context'
import { Routes } from './src/navigation'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
