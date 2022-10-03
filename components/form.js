import { View, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"
export default function Form({props}){
    const [task, setTask] = useState("")
    const validate_task = (task) => {
        return props.todo.filter(t => t === task)
      }
    const create_task = () =>{
        if(validate_task(task).length === 0){
            props.setTodo(t => [...t,task])
        }
    }
    
    return(
        <View style={styles.content}>
            <TextInput style={styles.input} placeholder='Enter Task' onChangeText={(text)=> setTask(text)} />
            <Button title="Create" style={styles.button} onPress={()=> create_task()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginTop: '10%',
        marginHorizontal: '5%',

    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: '2%',
        width: 100
    },
    button:{
        overflow: 'hidden',
    },

})