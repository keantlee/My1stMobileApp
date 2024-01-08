import React , { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button,  } from 'react-native';

function AddToDoItem( { submitHandler } ) {
    const [text, setText] = useState('');

    const changeHanlder = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput style={styles.toDoInputField} placeholder="Input your To Do List here..." onChangeText={changeHanlder}/>
            {/* <Button onPress={() => console.log(text)} title='add to do' color='coral'/> */}
            <Button onPress={() => submitHandler(text)} title='add to do' color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    toDoInputField: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});

export default AddToDoItem;