import { View, Text, Image, StyleSheet } from 'react-native'

import clipboard from '../../assets/clipboard.png'

export function ListEmptyComponent() {
  return (
    <View style={styles.container}>
      {/* eslint-disable jsx-a11y/alt-text */}
      <Image source={clipboard} style={{ marginBottom: 16 }} />
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
    marginVertical: 48,
    flex: 1,
  },

  text: {
    color: '#808080',
    fontSize: 14,
  },
})
