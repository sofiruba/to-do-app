import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Form from './components/form';
import List from './components/list';

export default function App() {
  const [todo, setTodo] = useState([])
  const [done, setDone] = useState([])

  const complete_task = (task) => {
    let new_tasks = todo.filter(t => t !== task)
    setTodo(new_tasks)
    setDone(d => [...d, task])
  }
  const uncomplete_task = (task) => {
    let new_done_tasks = done.filter(t => t !== task)
    setDone(new_done_tasks)
    setTodo(t => [...t, task])
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} >
        
        <Form props={{ setTodo, todo }}></Form>
        <List props={{ todo, done, complete_task, uncomplete_task }}></List>
        </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89b2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    height: '40%',
    width: '80%',
    marginVertical: '70%',
    flexWrap: "wrap" ,
    backgroundColor: '#f2f1ed',
    borderRadius: 30,
  },
});
