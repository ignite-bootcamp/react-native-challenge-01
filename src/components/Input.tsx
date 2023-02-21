import { useState } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { theme } from '../styles/theme'

export function Input(props: TextInputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const focusStyle = isInputFocused ? styles.inputFocus : styles.inputBlur
  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={theme.colors.gray['300']}
      style={{ ...styles.input, ...focusStyle }}
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      cursorColor="#fff"
      {...props}
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
    flex: 1,
    fontSize: 16,
  },

  inputBlur: {
    borderColor: theme.colors.gray['700'],
  },

  inputFocus: {
    borderColor: theme.colors.purple,
  },
})
