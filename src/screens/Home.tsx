import { Image, StyleSheet, Text, View } from 'react-native'

import logoImg from '../../assets/logo.png'
import { Input } from '../components/Input'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* eslint-disable jsx-a11y/alt-text */}
        <Image style={styles.logo} accessibilityLabel="Todo" source={logoImg} />
      </View>

      <View style={styles.content}>
        <Input />
        <Text>Hello home</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 176,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#191919',
    flex: 1,
  },

  logo: {
    marginBottom: 70,
  },
})
