import { View, Text, StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

type ListHeaderComponentProps = {
  createdCount: number
  doneCount: number
}

export function ListHeaderComponent({
  createdCount,
  doneCount,
}: ListHeaderComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ ...styles.titleText, ...{ color: theme.colors.blue } }}>
          Criadas
        </Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{createdCount}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text
          style={{ ...styles.titleText, ...{ color: theme.colors.purple } }}
        >
          Concluídas
        </Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{doneCount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  counter: {
    marginLeft: 8,
    color: 'white',
    backgroundColor: theme.colors.gray['400'],
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 9999,
  },

  counterText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },

  titleText: {
    fontWeight: '700',
    fontSize: 14,
  },
})
