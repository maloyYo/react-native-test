
import React, {useState} from 'react';
import { Button, StyleSheet, Switch, Text, View, FlatList } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/navbar';
import { Todo } from './components/Todo';

export default function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (title) =>{
    setTodos(prev=>[
      ...prev,
        {
          id: Date.now().toString(), //Динамический id
          title: title
        }
    ])
  }

  const removeTodo = id =>{
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <View >
      <Navbar title='Todo app'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
        keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item})=>(
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingTop:20,
  },
});
