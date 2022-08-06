import { View, StyleSheet, Text } from 'react-native'
import CheckBox from 'expo-checkbox';

export default function List({ props }) {
    let count = 0
    return (
        <View style={styles.content}>
            {props.todo.map(task =>
            (
                <View key={count++} style={styles.row}>
                    <CheckBox
                        disabled={false}
                        value={false}
                        onValueChange={()=> 
                            props.complete_task(task) }
                        style={styles.checkbox}
                    />
                    <Text style={styles.task}>{task}</Text>
                </View>
            )
            )}
            {props.done.map(task =>
                (
                    <View key={count++} style={styles.row}>
                    <CheckBox
                        disabled={true}
                        value={true}
                        style={styles.checkbox}

                        onValueChange={()=> props.uncomplete_task(task)}
                    />
                    <Text style={styles.done}>{task}</Text>
                </View>   
                ))}
        </View>
    )
}
const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',

       
    },
    done:{
        textDecorationLine: 'line-through',
        marginHorizontal: '5%',

    },
    task:{
        marginHorizontal: '5%',
    },
    content:{
        flexWrap: "wrap" ,
    },
})