import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '../styles/theme'
import { Checkbox } from './Checkbox'

export type TodoProps = {
  title: string
  completed: boolean
  id: number
}

export function Todo({ title, completed }: TodoProps) {
  const textStyles = completed ? styles.textCompleted : styles.textTodo
  return (
    <View style={styles.container}>
      <Checkbox done={completed} />
      <Text style={{ ...styles.text, ...textStyles }}>{title}</Text>
      <TouchableOpacity style={styles.deleteButton}>
        <Feather name="trash-2" size={16} color={theme.colors.gray['300']} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray['400'],
    backgroundColor: theme.colors.gray['500'],
    borderRadius: 8,
  },

  text: {
    fontSize: 14,
    marginHorizontal: 8,
    justifyContent: 'flex-start',
    flex: 1,
  },

  textTodo: {
    color: theme.colors.gray['100'],
  },

  textCompleted: {
    textDecorationLine: 'line-through',
    color: theme.colors.gray['300'],
  },

  deleteButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
