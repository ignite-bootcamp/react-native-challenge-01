import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { Home } from './src/screens/Home'
import { theme } from './src/styles/theme'

export default function App() {
  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.gray['700'], flex: 1 }}
    >
      <StatusBar style="light" translucent />
      <Home />
    </SafeAreaView>
  )
}
