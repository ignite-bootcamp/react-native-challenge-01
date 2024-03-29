import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '../styles/theme'

type CheckboxProps = {
  done?: boolean
} & TouchableOpacityProps

export function Checkbox({ done, ...rest }: CheckboxProps) {
  const checkboxStyles = done ? styles.done : styles.todo
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...checkboxStyles }}
      {...rest}
    >
      {!!done && (
        <Feather name="check" size={12} color={theme.colors.gray['100']} />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    width: 18,
    height: 18,
  },

  todo: {
    borderWidth: 2,
    borderColor: theme.colors.blue,
  },

  done: {
    backgroundColor: theme.colors.purpleDark,
    borderWidth: 0,
  },
})
