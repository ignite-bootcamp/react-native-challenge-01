import { useState } from 'react'
import {
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
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      title: 'Batata',
      completed: true,
      id: Date.now(),
    },
  ])

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

        <FlatList
          data={todos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Todo {...item} />}
          ListHeaderComponent={() => (
            <ListHeaderComponent createdCount={8} doneCount={10} />
          )}
          ListEmptyComponent={ListEmptyComponent}
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
