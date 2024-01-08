import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function Header() {
    return(
        <View style={styles.toDoHeader}>
            <Text style={styles.toDoTitle}>My To Do List</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    toDoHeader: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },

    toDoTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Header;