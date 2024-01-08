import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import ToDoItems from './components/toDoItem';
import AddToDoItem from './components/addToDo';


export default function App() {
  /**
   * DEVELOP: TO DO APP
   */
    const [toDos, setToDos] = useState([
      { id: '1', itemName:'Create my first ever mobile application' },
      { id: '2', itemName:'Drink ice chocolate' },
      { id: '3', itemName:'Sleep' }
    ]);

    // Add new item
    const submitHandler = (itemName) => {
      setToDos((prevToDos)=>{
        return [
          { 
            id: Math.random().toString(),
            itemName: itemName 
          },
          ...prevToDos
        ]
      })
    }
  
    // Delete item on the list
    const pressHandler = (id) => {
      setToDos((prevToDos)=>{
        // console.log(prevToDos);
        return prevToDos.filter(toDo => toDo.id != id);
      })
    }

    return (
      <View style={styles.toDoAppContainer}>
        <Header />
        <View style={styles.toDoAppContent}>
          {/* Form */}
          <AddToDoItem submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList 
                data={toDos}
                // renderItem will render the item in the list
                renderItem={({ item }) => (
                  // <Text style={styles.toDoItems}>{item.itemName}</Text>
                  <ToDoItems item={item} pressHandler={pressHandler}/>
                )}
              />
          </View>
        </View>
      </View>
    );
    
  // /**
  //  * Lesson #1
  //  * How to use Text, Button and TextInput
  //  * How to use useState Hook
  //  */
  // const [name, setName]     = useState('John Wick');
  // const [person, setPerson] = useState({
  //   name: 'mario',
  //   age: 20
  // });
  // const [age, setAge] = useState('30');

  // const clickHandler = () => {
  //   setName('Samurai X');
  //   setPerson({ name: 'Luigi', age: 20})
  // }
  // return (
  //   <View style={styles.container}>
  //     <Text>My name is {name}</Text>
  //     <Text>His name is {person.name} and his age is {person.age}</Text>
  //     <View style={styles.buttonContainer}>
  //       <Button title="Update state" onPress={clickHandler}/>
  //     </View>

  //     <Text>Enter name:</Text>
  //     <TextInput style={styles.input} placeholder="e.g. John Doe" onChangeText={(val) => setName(val)} />
  //     <Text>Enter age:</Text>
  //     <TextInput style={styles.input} placeholder="e.g. 18" keyboardType="numeric" onChangeText={(val) => setAge(val)} />
  //     <Text>Name: {name}, age: {age}</Text>
  //   </View>
  // );

  // /**
  //  * Lesson #2
  //  * How use useState with array of data
  //  * How use map method
  //  * How to use ScrollView
  //  * How to use FlatList component
  //  * How to use Touchable component
  //  */
  // const [users, setUsers] = useState([
  //   { id: '1', name: 'Shaun' },
  //   { id: '2', name: 'Yoshi' },
  //   { id: '3', name: 'Mario' },
  //   { id: '4', name: 'Luigi' },
  //   { id: '5', name: 'Peach' },
  //   { id: '6', name: 'Toad' },
  //   { id: '7', name: 'Bowser' },
  // ]);

  // const pressHandler = (id) => {
  //   // console.log(id);

  //   // prevUsers is the current users state
  //   setUsers((prevUsers => {
  //       /**
  //        *  a.) what we are doing here is passing a function an array function to filter method 
  //        *      and when the function fires on each item in the array because thats what a filter method does it fires a function for each
  //        *      item in the array and then its going to return a boolean.
  //        */
  //       return prevUsers.filter(person => person.id != id);
  //     })
  //   );
  // }

  // return (
  //   <View style={ styles.container }>
  //     <FlatList
  //       data={users}
  //       renderItem={({item})=>( // distructure the item
  //         <TouchableOpacity onPress={() => pressHandler(item.id)}>
  //           <Text style={styles.item}>{item.name}</Text>
  //         </TouchableOpacity>
          
  //       )}
  //     />

  //     {/* <ScrollView>
  //       { 
  //         users.map(item => (
  //           <View key={item.key}>
  //             <Text style={styles.item}>{item.name}</Text>
    //           </View>
  //         ))
  //       }
  //     </ScrollView> */}

  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    },

    item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },

  toDoAppContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  toDoAppContent: {
    padding: 40,
  },

  toDoItems: {
    marginTop: 20,
  },
});