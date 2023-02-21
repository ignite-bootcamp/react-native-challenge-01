import { View, Text, Image, StyleSheet } from 'react-native'

import clipboard from '../../assets/clipboard.png'
import { theme } from '../styles/theme'

export function ListEmptyComponent() {
  return (
    <View style={styles.container}>
      {/* eslint-disable jsx-a11y/alt-text */}
      <Image source={clipboard} style={{ marginBottom: 16, marginTop: 48 }} />
      <Text style={{ ...styles.text, ...{ fontWeight: '700' } }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray['400'],
  },

  text: {
    color: theme.colors.gray['300'],
    fontSize: 14,
  },
})
