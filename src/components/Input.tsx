import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { theme } from '../styles/theme'

export function Input() {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const focusStyle = isInputFocused ? styles.inputFocus : styles.inputBlur
  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      style={{ ...styles.input, ...focusStyle }}
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      cursorColor="#fff"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.gray['500'],
    borderRadius: 6,
    borderWidth: 1,
    color: theme.colors.gray['300'],
    height: 54,
    padding: 16,
    marginTop: -27,
    marginHorizontal: 24,
  },

  inputBlur: {
    borderColor: theme.colors.gray['700'],
  },

  inputFocus: {
    borderColor: theme.colors.purple,
  },
})
