import { useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'
import { Input } from '../components/Input'
import { theme } from '../styles/theme'
import { ListHeaderComponent } from '../components/ListHeaderComponent'
import { ListEmptyComponent } from '../components/ListEmptyComponent'
import { Todo, TodoProps } from '../components/Todo'

export function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [inputText, setInputText] = useState('')

  const completedTodos = todos.filter((todo) => todo.completed)

  function handleCreateTodo() {
    if (!inputText) {
      return Alert.alert('Todo', 'Não foi possível criar o todo')
    }

    const newTodo = {
      title: inputText,
      completed: false,
      id: Date.now(),
    }

    setTodos((prevState) => [...prevState, newTodo])
    setInputText('')
  }

  function handleCompleteTodo(todoId: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      }),
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* eslint-disable jsx-a11y/alt-text */}
        <Image style={styles.logo} accessibilityLabel="Todo" source={logoImg} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input onChangeText={setInputText} value={inputText} />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleCreateTodo}
          >
            <Feather name="plus-circle" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Todo {...item} onComplete={() => handleCompleteTodo(item.id)} />
          )}
          ListHeaderComponent={() => (
            <ListHeaderComponent
              createdCount={todos.length}
              doneCount={completedTodos.length}
            />
          )}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 8 }}></View>
          )}
          style={styles.list}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 134,
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

  list: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
})
