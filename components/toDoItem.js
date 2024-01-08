import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function ToDoItems( { item, pressHandler } ) {
    return (
        <TouchableOpacity onPress={ ()=> pressHandler(item.id) }>
            <Text style={styles.items}>{ item.itemName }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    items: {
        padding: 16,
        marginTop: 16,
        bordeColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
});

export default ToDoItems;