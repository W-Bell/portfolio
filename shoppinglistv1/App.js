// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Clipboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const copyToClipboard = () => {
    const itemsText = items.join('\n');
    Clipboard.setString(itemsText);
    alert('Shopping list copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            <TouchableOpacity
              onPress={() => deleteItem(index)}
              style={styles.removeButton}>
              <Ionicons name="remove-circle" size={24} color="#FF5733" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.addShareBar}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Add an item..."
            value={newItem}
            onChangeText={(text) => setNewItem(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={addItem} style={styles.iconButton}>
            <Ionicons name="add-circle" size={40} color="lightgreen" />
          </TouchableOpacity>
          <TouchableOpacity onPress={copyToClipboard} style={styles.iconButton}>
            <Ionicons name="share" size={40} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#003049',    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    color: '#fdf0d5',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdf0d5',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  listItemText: {
    color: '#003049',
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 'auto',
  },
  addShareBar: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#669bbc',
    marginTop: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderRadius: 10,
  },
  textInputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#fdf0d5',
    borderRadius: 5,
    padding: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconButton: {
    alignItems: 'center',
  },
});

export default App;
