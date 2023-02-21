import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'
import { Input } from '../components/Input'
import { theme } from '../styles/theme'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* eslint-disable jsx-a11y/alt-text */}
        <Image style={styles.logo} accessibilityLabel="Todo" source={logoImg} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input />
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Feather name="plus-circle" size={16} color="white" />
          </TouchableOpacity>
        </View>
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
    height: 174,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#191919',
    flex: 1,
  },

  logo: {
    marginBottom: 70,
    marginTop: 24,
  },

  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -27,
    paddingHorizontal: 24,
  },

  button: {
    backgroundColor: theme.colors.blueDark,
    padding: 18,
    borderRadius: 6,
    marginLeft: 4,
  },
})
